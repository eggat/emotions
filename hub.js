(() => {
  const stage = document.querySelector(".hub-stage");
  const orbit = stage.querySelector(".hub-orbit");
  const sphere = stage.querySelector(".hub-sphere");
  const canvas = stage.querySelector(".hub-canvas");
  const grip = stage.querySelector(".hub-grip");
  const portals = [...stage.querySelectorAll(".hub-portal")];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const step = Math.PI / 3;
  let yaw = 0;
  let pitch = 0;
  let targetYaw = 0;
  let targetPitch = 0;
  let drag = null;
  let ignoreClick = false;
  let frame = 0;
  let drawSphere = createSphereRenderer();

  function createSphereRenderer() {
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return null;

    const vertex = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertex, `
      attribute vec2 position;
      varying vec2 point;
      void main() {
        point = position;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `);
    const fragment = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragment, `
      precision mediump float;
      varying vec2 point;
      uniform vec2 rotation;

      void main() {
        vec2 p = point / 0.91;
        float r = length(p);
        if (r > 1.0) discard;
        vec3 n = vec3(p, sqrt(max(0.0, 1.0 - dot(p, p))));
        float cx = cos(rotation.y), sx = sin(rotation.y);
        float cy = cos(rotation.x), sy = sin(rotation.x);
        vec3 tilted = vec3(n.x, cx * n.y - sx * n.z, sx * n.y + cx * n.z);
        vec3 q = vec3(cy * tilted.x + sy * tilted.z, tilted.y, -sy * tilted.x + cy * tilted.z);

        float lon = atan(q.z, q.x);
        float wave = sin(3.0 * lon + 7.0 * q.y + 1.4 * sin(q.z * 4.0));
        float ribbon = sin(2.0 * lon - 6.0 * q.y + 1.6 * sin(q.x * 5.0));
        vec3 violet = vec3(0.21, 0.09, 0.46);
        vec3 blue = vec3(0.17, 0.69, 0.97);
        vec3 gold = vec3(1.0, 0.66, 0.30);
        vec3 color = mix(violet, blue, smoothstep(-0.6, 1.0, wave));
        color = mix(color, gold, smoothstep(0.15, 1.0, ribbon) * 0.94);
        color += vec3(0.55, 0.18, 0.46) * smoothstep(0.2, 1.0, -wave * ribbon) * 0.46;

        float thread = pow(1.0 - abs(sin(4.0 * lon + q.y * 10.0 + 1.2 * sin(q.z * 5.0))), 17.0);
        float fine = pow(1.0 - abs(sin(12.0 * lon - 14.0 * q.y)), 27.0);
        float light = max(0.0, dot(n, normalize(vec3(-0.52, 0.63, 1.0))));
        float specular = pow(max(0.0, dot(n, normalize(vec3(-0.38, 0.50, 1.0)))), 32.0);
        float rim = pow(1.0 - n.z, 3.0);
        vec3 dustCell = q * 31.0;
        float dustSeed = fract(sin(dot(floor(dustCell), vec3(17.0, 53.0, 79.0))) * 131.0);
        float dust = step(0.88, dustSeed) * (1.0 - smoothstep(0.08, 0.34, length(fract(dustCell) - 0.5)));
        color *= 0.56 + 0.62 * light;
        color += vec3(0.42, 0.45, 0.70) * thread * (0.33 + light * 0.53);
        color += vec3(0.38, 0.55, 0.95) * fine * 0.18;
        color += vec3(1.0, 0.86, 0.72) * specular * 0.86;
        color += vec3(0.52, 0.37, 0.83) * rim * (0.42 + 0.4 * light);
        color += vec3(0.60, 0.83, 1.0) * rim * smoothstep(0.20, 0.95, n.x) * 0.52;
        color += vec3(1.0, 0.92, 0.80) * dust * (0.32 + 0.48 * light);
        gl_FragColor = vec4(color, 1.0 - smoothstep(0.988, 1.0, r));
      }
    `);
    gl.compileShader(vertex);
    gl.compileShader(fragment);
    if (!gl.getShaderParameter(vertex, gl.COMPILE_STATUS) || !gl.getShaderParameter(fragment, gl.COMPILE_STATUS)) {
      return null;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
    gl.useProgram(program);

    const points = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, points);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const rotation = gl.getUniformLocation(program, "rotation");

    sphere.classList.add("has-canvas");
    return () => {
      const size = Math.round(sphere.clientWidth * Math.min(window.devicePixelRatio, 1.8));
      if (canvas.width !== size || canvas.height !== size) {
        canvas.width = size;
        canvas.height = size;
        gl.viewport(0, 0, size, size);
      }
      gl.uniform2f(rotation, yaw % (2 * Math.PI), pitch);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
  }

  function render() {
    frame = 0;
    if (!stage.clientWidth) return;

    const settled = Math.abs(targetYaw - yaw) + Math.abs(targetPitch - pitch) < 0.002;
    const easing = drag || reduced.matches || settled ? 1 : 0.22;
    yaw += (targetYaw - yaw) * easing;
    pitch += (targetPitch - pitch) * easing;

    const radiusX = orbit.clientWidth / 2;
    const radiusY = orbit.clientHeight / 2;
    portals.forEach((portal, index) => {
      const angle = (index + 0.22) * step + yaw - Math.PI / 2;
      const depth = Math.sin(angle);
      portal.style.setProperty("--portal-x", `${Math.cos(angle) * radiusX}px`);
      portal.style.setProperty("--portal-y", `${depth * radiusY}px`);
      portal.style.setProperty("--portal-scale", 0.96 + 0.06 * depth);
    });
    if (drawSphere) {
      drawSphere();
    } else {
      sphere.style.setProperty("--orb-turn", `${yaw}rad`);
    }
    if (easing < 1) requestRender();
  }

  function requestRender() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  grip.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    ignoreClick = false;
    drag = { x: event.clientX, y: event.clientY, yaw, pitch };
    grip.setPointerCapture(event.pointerId);
  });

  grip.addEventListener("pointermove", (event) => {
    if (!drag || !event.isPrimary) return;
    const x = event.clientX - drag.x;
    const y = event.clientY - drag.y;
    if (!ignoreClick && Math.hypot(x, y) < 5) return;
    ignoreClick = true;
    targetYaw = drag.yaw + x * 0.012;
    targetPitch = Math.max(-1.25, Math.min(1.25, drag.pitch + y * 0.01));
    requestRender();
  });

  function endDrag(event) {
    if (event.isPrimary) drag = null;
  }

  grip.addEventListener("pointerup", endDrag);
  grip.addEventListener("pointercancel", endDrag);
  grip.addEventListener("lostpointercapture", endDrag);
  grip.addEventListener("click", (event) => {
    if (ignoreClick && event.detail) return;
    targetYaw += step;
    requestRender();
  });

  grip.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft": targetYaw -= step; break;
      case "ArrowRight": targetYaw += step; break;
      case "ArrowUp": targetPitch = Math.max(-1.25, targetPitch - 0.3); break;
      case "ArrowDown": targetPitch = Math.min(1.25, targetPitch + 0.3); break;
      default: return;
    }
    event.preventDefault();
    requestRender();
  });

  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    drawSphere = null;
    sphere.classList.remove("has-canvas");
    requestRender();
  });
  canvas.addEventListener("webglcontextrestored", () => {
    drawSphere = createSphereRenderer();
    requestRender();
  });

  stage.classList.add("is-orbit");
  grip.hidden = false;
  document.querySelector("#hub-instructions").hidden = false;
  new ResizeObserver(requestRender).observe(stage);
  requestRender();
})();
