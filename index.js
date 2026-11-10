const emotions = {
  joy: {
    label: "JOY · 快樂",
    description: "樂樂擅長在日常裡找出值得開心的事。到了陌生的地方，她會先想，有沒有什麼新的事可以期待？",
    signal: "留意那些讓你想靠近、想再試一次的事。",
    example: "新同學主動邀你一起吃午餐，你開始有點期待明天上學。",
    body: "嘴角上揚，想多說幾句，腳步也變輕了。",
    action: "把這個開心的時刻說給朋友聽，或記下你想再做一次的事。"
  },
  sadness: {
    label: "SADNESS · 悲傷",
    description: "憂憂讓萊莉承認自己想家，也讓身邊的人有機會理解她。難過的時候，有人願意聽，就可能好過一點。",
    signal: "你可能失去了很在乎的東西，也可能只是需要有人陪一下。",
    example: "朋友轉學後，你經過以前一起等車的地方，突然很想傳訊息給他。",
    body: "眼眶發熱、喉嚨緊緊的，或者一時不想說話。",
    action: "找一個你信任的人，試著從「我有點想念……」開始說。"
  },
  anger: {
    label: "ANGER · 生氣",
    description: "當事情不如預期，怒怒很快就會跳出來。生氣有時在提醒萊莉，某件事讓她覺得不公平，或有個需求一直沒被聽見。",
    signal: "哪條界線被踩到了？你希望對方知道什麼？",
    example: "小組成員擅自刪掉你的段落，你想請大家先一起討論再改。",
    body: "臉發熱、肩膀變緊，或很想立刻回話。",
    action: "先停一下，想清楚是哪個做法讓你生氣，再說出你希望怎麼改。"
  },
  fear: {
    label: "FEAR · 害怕",
    description: "面對陌生的教室和同學，驚驚會先想到可能出錯的地方。這份警覺能幫萊莉做準備，有時也會讓小事看起來特別可怕。",
    signal: "先弄清楚你擔心什麼，才知道哪一部分可以先準備。",
    example: "上臺前怕忘詞，你把開頭寫在小卡上，先練習說一遍。",
    body: "心跳加快、手心出汗，可能很想先離開現場。",
    action: "挑一件能先準備的小事，例如把第一句話練一次。"
  },
  disgust: {
    label: "DISGUST · 厭惡",
    description: "遇到不想吃的食物或不舒服的情況，厭厭會提醒萊莉保持距離。這種感覺能幫她辨認自己的喜好和界線。",
    signal: "留意自己為什麼想退開，或什麼做法讓你不舒服。",
    example: "同學拿別人開玩笑，你覺得不舒服，也決定不跟著起鬨。",
    body: "皺眉、想轉開臉，或下意識想往後退。",
    action: "先確認什麼讓你不舒服，再決定要拉開距離，還是說清楚自己的界線。"
  }
};

const storyScenes = [
  {
    tone: "gold",
    color: "金色",
    feeling: "開心 × 歸屬感",
    heading: "在冰上，她是球隊的一分子",
    description: "搬家以前，萊莉常和隊友一起打冰球。想到熟悉的冰場和一起練球的朋友，她覺得開心，也知道自己在這裡有個位置。",
    observation: "她在意的是和隊友一起打球的時光。先記住這個線索，再看看搬家後哪裡變了。",
    memory: {
      feeling: "開心",
      heading: "那天，我們配合得真好！",
      description: "和隊友一起在冰上奔跑，讓萊莉覺得自己是球隊的一分子。這時，開心最明顯。",
      clue: "和隊友一起努力、一起玩。"
    }
  },
  {
    tone: "blue",
    color: "藍色",
    feeling: "想念 × 難過",
    heading: "原本開心的回憶，現在讓她想哭",
    description: "搬到舊金山後，萊莉在新同學面前自我介紹，說起以前打冰球的快樂時光。越說越想念，她忍不住在教室裡掉下眼淚。",
    observation: "同一群隊友、同一座冰場，如今離她很遠。她想起這段回憶時，也感覺到自己失去了什麼。",
    memory: {
      feeling: "想念與失落",
      heading: "好想再和他們一起打球。",
      description: "到了陌生的城市，萊莉想起同一場球賽，卻更在意身邊少了誰。以前的快樂，現在也會讓她想家。",
      clue: "不能像以前那樣天天見到熟悉的隊友。"
    }
  },
  {
    tone: "mixed",
    color: "金藍交錯",
    feeling: "難過 × 安心",
    heading: "說出想念，讓家人有機會靠近",
    description: "萊莉告訴爸媽，她想念以前的家和朋友。爸媽也說出自己的想念，三個人抱在一起。難過還在，她也感到有人陪著她。",
    observation: "想家的感覺還在，現在卻有人能一起想念。她也可以慢慢回味那些開心的時刻。",
    memory: {
      feeling: "開心與想念",
      heading: "我還是很想念他們。想到那天，我也會笑。",
      description: "想像萊莉和家人聊起那場球賽。她可以同時說出當時有多開心、現在有多想念。",
      clue: "那些時光依然珍貴，現在也有人願意聽她說。"
    }
  }
];

const situations = [
  {
    feelings: "期待，也有點緊張",
    description: "你期待認識新朋友，也會擔心下課時沒有人可以說話。",
    question: "如果旁邊也有人看起來很緊張，你會用哪一句話開頭？"
  },
  {
    feelings: "失落，也為自己驕傲",
    description: "輸了讓你想哭，但你還記得最後一球之前，自己和隊友努力撐住的那幾分鐘。",
    question: "如果先不看比分，今天哪一個動作讓你想對自己說「我有進步」？"
  },
  {
    feelings: "生氣，也有點想念",
    description: "你在約好的地方等了很久，覺得被忽略。你也想念本來說好要一起做的事。",
    question: "你會怎麼告訴朋友，你等得很失望，也還想和他再約一次？"
  },
  {
    feelings: "失望，也鬆了一口氣",
    description: "期待已久的戶外活動因雨取消，你有點掃興；想到這週很累，能在家休息，又覺得放鬆。",
    question: "如果朋友只聽到你說「算了」，你會怎麼讓他知道你其實也很期待這次活動？"
  },
  {
    feelings: "害怕忘記，也期待被看見",
    description: "等待上場時，你一直在心裡背開頭。聽到有人替你加油，你又想快點把練習很久的表演分享出去。",
    question: "上場前還有一分鐘，你會做哪一個小動作，讓自己更準備好？"
  },
  {
    feelings: "為自己開心，也捨不得道別",
    description: "領到畢業證書時，你笑得很開心。拍完合照後，你想到以後不會每天遇見這些人，突然有點想哭。",
    question: "你會想跟誰留一句話，讓他知道你珍惜哪一段共同回憶？"
  }
];

const missions = [
  {
    heading: "一張空著的椅子",
    description: "新班級的第一個午休，大家已經坐成一圈。你看到旁邊還有空位，想過去，又怕打擾他們。",
    start: "緊張 ＋ 期待",
    choices: [
      {
        action: "走過去問「這裡有人坐嗎？」",
        heading: "有人把椅子拉出來。",
        description: "你開口時還有點緊張。同學說可以坐，順手問你上一間學校在哪裡，讓你有了接話的機會。",
        shift: "緊張還在，也多了一點安心。"
      },
      {
        action: "先坐在附近，等熟悉一點再開口。",
        heading: "你有時間看看大家怎麼相處。",
        description: "先坐下吃飯讓你比較放鬆。聽到有人聊起你也喜歡的遊戲，你想好明天可以從哪一句話開頭。",
        shift: "緊張慢慢變成好奇。"
      },
      {
        action: "離開教室，找一個安靜的地方吃。",
        heading: "安靜了一點，也有點孤單。",
        description: "離開讓你暫時不用擔心打擾別人。吃完後，你發現自己還是想認識同學，下次可以從跟一個人打招呼開始。",
        shift: "緊張減輕，想交朋友的心情變得更清楚。"
      }
    ]
  },
  {
    heading: "比分停在最後一秒",
    description: "你漏接了最後一球。比賽結束後，你覺得自己拖累了大家，又擔心隊友也這麼想。",
    start: "失落 ＋ 擔心",
    choices: [
      {
        action: "先喝口水，等平靜一點再談。",
        heading: "你終於能想起比賽的其他片段。",
        description: "坐了一會兒，你想起自己也接住過好幾球。最後一球依然可惜，但現在你能更清楚地回想發生了什麼。",
        shift: "失落還在，也能看見自己的努力。"
      },
      {
        action: "問隊友「可以陪我練一下剛才那球嗎？」",
        heading: "隊友留下來陪你多練了幾球。",
        description: "你們發現那球的速度比預期快。隊友也說自己有幾次差點接不到。你知道下次想練什麼，也感覺有人站在你這邊。",
        shift: "擔心減少，開始有一點期待。"
      },
      {
        action: "急著說「都是因為你傳得不好。」",
        heading: "隊友停下來，沒有接話。",
        description: "把氣說出來的那一刻很痛快。看到隊友離開後，你才發現自己其實很怕被怪罪。你還可以回去談談剛才為什麼那麼急。",
        shift: "生氣先冒出來，後來才看見底下的擔心。"
      }
    ]
  },
  {
    heading: "盒子裡的舊照片",
    description: "搬家後整理房間，你翻到以前和朋友的合照。家人問你今天好不好，你不確定自己要怎麼回答。",
    start: "想念 ＋ 捨不得",
    choices: [
      {
        action: "把照片拿給家人，告訴他們你很想家。",
        heading: "家人也說起他們最想念的地方。",
        description: "你們一起看照片，發現彼此都還記得以前常去的小店。離開的難過還在，但這份想念有人一起分擔。",
        shift: "捨不得和被理解的安心同時出現。"
      },
      {
        action: "先傳一張照片給以前的朋友。",
        heading: "朋友回了另一張你沒看過的照片。",
        description: "你們聊起那天發生的事。想起一個笑話時，你笑了出來，也更想找時間和他見面。",
        shift: "想念裡多了開心。"
      },
      {
        action: "說「我很好」，先把照片收起來。",
        heading: "家人以為你想休息，先離開了。",
        description: "你暫時不用解釋，也可以自己待一下。晚一點如果還想說，你可以先請家人坐在旁邊陪你看看照片。",
        shift: "想念還在，你也多了一點時間整理感受。"
      }
    ]
  }
];

const quizQuestions = [
  {
    topic: "辨認情緒",
    review: { target: "emotions", label: "重看情緒角色" },
    question: "萊莉要在新班級自我介紹，擔心一開口就忘詞。哪位角色最可能先跳到控制台？",
    options: ["樂樂，因為她期待認識新同學", "驚驚，因為她擔心當眾出錯", "怒怒，因為她覺得分組不公平"],
    correct: 1,
    explanation: "「擔心會出錯」是這題的線索。驚驚的警覺也能幫萊莉提前練習。"
  },
  {
    topic: "回憶為何變色",
    review: { target: "memory", label: "重看回憶球", scene: 1 },
    question: "同一段冰球回憶，以前讓萊莉開心，搬家後卻讓她想哭。最貼近故事的原因是什麼？",
    options: ["她開始想念回憶裡的人和地方", "她後來發現自己其實討厭冰球", "她把那次比賽的結果記錯了"],
    correct: 0,
    explanation: "搬家改變了回憶對她的意義。她依然珍惜打球的快樂，也會因為見不到隊友而難過。"
  },
  {
    topic: "憂憂的作用",
    review: { target: "story", label: "重看萊莉說出想念的分鏡", scene: 2 },
    question: "萊莉終於說自己很想家。這讓家人有機會做什麼？",
    options: ["趕快換個話題，讓她忘記搬家", "只談新城市有哪些好處", "理解她的失落，也說出自己的想念"],
    correct: 2,
    explanation: "萊莉說出難過後，爸媽才知道她有多想念以前的生活，也能和她一起面對這份失落。"
  },
  {
    topic: "混合情緒",
    review: { target: "palette", label: "試著混合兩種感受" },
    question: "你要搬家，期待自己的新房間，也捨不得以前的鄰居。哪個說法最貼近你的感受？",
    options: ["既然捨不得，就表示我一點也不期待", "我期待新房間，也會想念以前的鄰居", "我只能等搬完家，再決定自己該開心還是難過"],
    correct: 1,
    explanation: "期待和捨不得可以同時出現。它們分別指向你想迎接的新生活，和你珍惜的舊生活。"
  },
  {
    topic: "說出感受與需要",
    review: { target: "practice", label: "練習說出感受與需要" },
    question: "朋友忘了你們的約定，你又氣又失望。哪一句最能讓他知道發生了什麼、你需要什麼？",
    options: ["「我等了很久，有點失望。下次如果會晚到，可以先傳訊息嗎？」", "「沒關係，反正我也沒有很想見你。」", "「你每次都這樣，我以後都不約你了。」"],
    correct: 0,
    explanation: "先描述發生的事，再說出自己的感受，最後提出一個具體請求，對方比較容易理解你在意什麼。"
  },
  {
    topic: "回應別人的心情",
    review: { target: "mission", label: "回到想家的情境", mission: 2 },
    question: "新同學說他很想念以前的班級。你可以怎麼接住他的心情？",
    options: ["「你應該多想想這裡有多好。」", "「我也轉過學，我先跟你說我那時候怎麼做。」", "「你一定很想他們。你想聊聊以前班上最喜歡的事嗎？」"],
    correct: 2,
    explanation: "先聽見對方的想念，再留個空間讓他決定要不要多說。這就像萊莉說出想家時，需要有人願意聽。"
  },
  {
    topic: "讀懂身體的線索",
    review: { target: "emotions", label: "找找身體的情緒線索" },
    question: "準備上場時，你的心跳很快。接下來怎麼做，能幫你分辨是害怕、期待，還是兩者都有？",
    options: ["問自己擔心什麼，又期待什麼", "光看心跳快不快，就判定自己很害怕", "等心跳慢下來再決定，因為有感覺時很難分辨"],
    correct: 0,
    explanation: "期待和害怕都可能讓心跳加快。把身體的反應和當時在意的事放在一起看，會有更多線索。"
  },
  {
    topic: "界線和行動",
    review: { target: "practice", label: "重看三步驟練習" },
    question: "同學擅自把你負責的段落刪掉，你很生氣。這股情緒可能在提醒你什麼？",
    options: ["所有人都應該接受我的原稿", "我希望修改前先一起討論", "這次合作已經沒辦法繼續了"],
    correct: 1,
    explanation: "生氣可能指出一個你在意的界線。提出「修改前先一起討論」的請求，能把這條界線說清楚。"
  },
  {
    topic: "情緒的轉折",
    review: { target: "mission", label: "回到球場，試另一條分支", mission: 1 },
    question: "比賽失誤後，你請隊友留下陪練。你仍然失落，但開始期待下一次練習。這說明什麼？",
    options: ["只要開始期待，就表示失誤已經不重要", "練習能保證下次不會失落", "一個行動可能帶來新的感受，原本的心情也可能還在"],
    correct: 2,
    explanation: "隊友的陪伴和新的練習目標，讓你多了一點期待。你仍然可以為剛才的失誤感到可惜。"
  },
  {
    topic: "替感受取名字",
    review: { target: "palette", label: "做一顆雙色心情球" },
    question: "活動因雨取消，你很失望，同時又慶幸終於可以好好休息。你會怎麼描述這顆心情球？",
    options: ["失望和放鬆都有，它們來自同一件事的不同面向", "既然我覺得放鬆，原本的期待應該沒有那麼真", "哪一種感覺比較強，就只需要說出那一種"],
    correct: 0,
    explanation: "計畫取消讓你失去原本期待的活動，也讓你得到休息的時間。兩種感受都說得通。"
  }
];

// 把同名 JPG 放進 images 資料夾即可顯示，缺圖時保留提示。
function loadSlotImage(slot) {
  slot.classList.remove("has-image");
  slot.querySelector("img")?.remove();

  const image = new Image();
  image.alt = slot.dataset.alt;
  image.hidden = true;
  image.addEventListener("load", () => {
    if (image.parentElement === slot) {
      image.hidden = false;
      slot.classList.add("has-image");
    }
  }, { once: true });
  image.addEventListener("error", () => image.remove(), { once: true });
  slot.append(image);
  image.src = slot.dataset.image;
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function animateEntrance(element, distance = 18, duration = 560) {
  if (reducedMotion.matches || !element.animate) return;

  element.getAnimations().find((animation) => animation.id === "entrance")?.cancel();
  element.animate([
    { opacity: 0.15, transform: `translateY(${distance}px)` },
    { opacity: 1, transform: "translateY(0)" }
  ], { id: "entrance", duration, easing: "cubic-bezier(.22, 1, .36, 1)" });
}

const progressBar = document.querySelector(".reading-progress");
const chapterWindow = document.querySelector(".chapter-window");
const chapterScroll = chapterWindow.querySelector(".chapter-scroll");
const chapterWindowTitle = chapterWindow.querySelector(".chapter-window-title span");
const chapters = [...chapterScroll.querySelectorAll(".chapter-screen")];
const chapterPortals = [...document.querySelectorAll(".hub-portal")];

function updateReadingPosition() {
  const scrollRange = chapterScroll.scrollHeight - chapterScroll.clientHeight;
  const progress = scrollRange > 0 ? Math.min(1, Math.max(0, chapterScroll.scrollTop / scrollRange)) : 0;
  progressBar.style.setProperty("--reading-progress", progress);
}

function showChapter(hash) {
  if (!hash || hash === "#top") {
    if (chapterWindow.open) chapterWindow.close();
    return;
  }

  const target = document.getElementById(hash.slice(1));
  const chapter = target?.closest(".chapter-screen");
  const index = chapters.indexOf(chapter);
  if (index < 0) return;

  chapters.forEach((panel) => { panel.hidden = panel !== chapter; });
  chapterWindow.dataset.chapter = chapter.id;
  chapterWindowTitle.textContent = chapterPortals[index].textContent.trim();
  chapterWindow.setAttribute("aria-labelledby", chapter.getAttribute("aria-labelledby"));
  if (!chapterWindow.open) chapterWindow.showModal();

  const heading = chapter.querySelector("h2");
  const destination = target !== chapter && target.getClientRects().length ? target : heading;
  destination.tabIndex = -1;
  destination.focus({ preventScroll: true });
  if (destination === heading) {
    chapterScroll.scrollTop = 0;
  } else {
    destination.scrollIntoView({ behavior: "instant", block: "start" });
  }
  updateReadingPosition();
}

chapterWindow.querySelector(".chapter-close").addEventListener("click", () => chapterWindow.close());
document.addEventListener("click", (event) => {
  const link = event.target.closest(".hub-portal, .chapter-window a[href^='#']");
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  showChapter(link.hash);
});

chapterScroll.addEventListener("scroll", updateReadingPosition, { passive: true });
const chapterSize = new ResizeObserver(updateReadingPosition);
chapterSize.observe(chapterScroll);
chapters.forEach((chapter) => chapterSize.observe(chapter));
window.addEventListener("hashchange", () => showChapter(window.location.hash));

const emotionCards = [...document.querySelectorAll("[data-emotion]")];
const emotionDetail = document.querySelector("#emotion-detail");
const emotionImage = emotionDetail.querySelector(".image-slot");
const emotionCopy = emotionDetail.querySelector(".detail-copy");
const emotionLabel = document.querySelector("#emotion-label");
const emotionName = document.querySelector("#emotion-name");
const emotionDescription = document.querySelector("#emotion-description");
const emotionSignal = document.querySelector("#emotion-signal");
const emotionExample = document.querySelector("#emotion-example");
const emotionBody = document.querySelector("#emotion-body");
const emotionAction = document.querySelector("#emotion-action");

emotionCards.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;

    const key = button.dataset.emotion;
    const name = button.querySelector("strong").textContent;
    emotionCards.forEach((option) => {
      option.setAttribute("aria-pressed", option === button);
    });
    emotionDetail.className = `emotion-detail ${key}`;
    emotionLabel.textContent = emotions[key].label;
    emotionName.textContent = name;
    emotionDescription.textContent = emotions[key].description;
    emotionSignal.textContent = emotions[key].signal;
    emotionExample.textContent = emotions[key].example;
    emotionBody.textContent = emotions[key].body;
    emotionAction.textContent = emotions[key].action;
    emotionImage.dataset.image = `images/${key}.jpg`;
    emotionImage.dataset.alt = `${name}角色圖片`;
    loadSlotImage(emotionImage);
    animateEntrance(emotionCopy, 10, 430);
  });
});

const storyButtons = document.querySelectorAll(".story-steps button");
const storyDetail = document.querySelector("#story-detail");
const storyFeeling = document.querySelector("#story-feeling");
const storyHeading = document.querySelector("#story-heading");
const storyDescription = document.querySelector("#story-description");
const storyObservation = document.querySelector("#story-observation");
const storyCopy = storyDetail.querySelector(".story-copy");
const storyOrbLabel = document.querySelector("#story-orb-label");
const memoryPanel = document.querySelector("#memory-panel");
const memoryButtons = document.querySelectorAll("[data-memory]");
const memoryResult = document.querySelector("#memory-result");
const memoryStage = document.querySelector("#memory-stage");
const memoryFeeling = document.querySelector("#memory-feeling");
const memoryHeading = document.querySelector("#memory-heading");
const memoryDescription = document.querySelector("#memory-description");
const memoryClue = document.querySelector("#memory-clue");

function selectJourneyScene(index) {
  const scene = storyScenes[index];
  storyButtons.forEach((button) => button.setAttribute("aria-pressed", Number(button.dataset.scene) === index));
  memoryButtons.forEach((button) => button.setAttribute("aria-pressed", Number(button.dataset.memory) === index));
  storyDetail.dataset.scene = index;
  storyDetail.dataset.tone = scene.tone;
  storyOrbLabel.textContent = `回憶球 / ${scene.color}`;
  storyFeeling.textContent = scene.feeling;
  storyHeading.textContent = scene.heading;
  storyDescription.textContent = scene.description;
  storyObservation.textContent = scene.observation;
  memoryPanel.dataset.tone = scene.tone;
  const frame = storyButtons[index].querySelector(".story-frame-caption strong").textContent;
  memoryStage.textContent = `0${index + 1} / ${frame}`;
  memoryFeeling.textContent = `${scene.color} · ${scene.memory.feeling}`;
  memoryHeading.textContent = scene.memory.heading;
  memoryDescription.textContent = scene.memory.description;
  memoryClue.textContent = scene.memory.clue;
}

storyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    selectJourneyScene(Number(button.dataset.scene));
    animateEntrance(storyCopy, 12, 450);
  });
});

memoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    selectJourneyScene(Number(button.dataset.memory));
    animateEntrance(memoryResult, 8, 360);
  });
});

const situationButtons = document.querySelectorAll("[data-situation]");
const labResult = document.querySelector("#lab-result");
const labFeelings = document.querySelector("#lab-feelings");
const labDescription = document.querySelector("#lab-description");
const labQuestion = document.querySelector("#lab-question");

situationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;

    situationButtons.forEach((option) => option.setAttribute("aria-pressed", option === button));
    const situation = situations[button.dataset.situation];
    labFeelings.textContent = situation.feelings;
    labDescription.textContent = situation.description;
    labQuestion.textContent = situation.question;
    animateEntrance(labResult, 9, 430);
  });
});

document.querySelectorAll(".image-slot").forEach(loadSlotImage);

const missionButtons = [...document.querySelectorAll("[data-mission]")];
const missionHeading = document.querySelector("#mission-heading");
const missionDescription = document.querySelector("#mission-description");
const missionStart = document.querySelector("#mission-start");
const missionDecision = document.querySelector("#mission-decision");
const missionPrompt = document.querySelector("#mission-prompt");
const missionChoices = document.querySelector("#mission-choices");
const missionOutcome = document.querySelector("#mission-outcome");
const missionOutcomeHeading = document.querySelector("#mission-outcome-heading");
const missionOutcomeDescription = document.querySelector("#mission-outcome-description");
const missionOutcomeShift = document.querySelector("#mission-outcome-shift");
const missionCount = document.querySelector("#mission-count");
const missionCompare = document.querySelector("#mission-compare");
const missionCompareLink = document.querySelector(".mission-compare-link");
const missionCompareCaption = document.querySelector("#mission-compare-caption");
const missionRoutes = document.querySelector("#mission-routes");
const missionRouteTemplate = document.querySelector("#mission-route-template");
const missionSeen = missions.map(() => new Set());
const totalBranches = missions.reduce((total, mission) => total + mission.choices.length, 0);
let currentMission = 0;

function updateMissionProgress() {
  const visited = missionSeen[currentMission];
  const seen = missionSeen.reduce((total, branches) => total + branches.size, 0);
  const canCompare = visited.size >= 2;
  const status = canCompare ? `可比較本任務的 ${visited.size} 條路線` : "試過本任務的兩種回應即可比較";
  missionCount.textContent = `已探索 ${seen} / ${totalBranches} 條分支 · ${status}`;
  missionCompare.hidden = !canCompare;
  missionCompareLink.hidden = !canCompare;
  missionCompare.dataset.routeCount = visited.size;
  if (!canCompare) {
    missionRoutes.replaceChildren();
    return;
  }

  const mission = missions[currentMission];
  missionCompareCaption.textContent = `${mission.heading} · ${visited.size} 條已探索的路線`;
  const routes = [...visited].map((index) => {
    const choice = mission.choices[index];
    const route = missionRouteTemplate.content.cloneNode(true);
    route.querySelector(".route-number").textContent = `路線 0${index + 1}`;
    route.querySelector(".route-start").textContent = mission.start;
    route.querySelector(".route-action").textContent = choice.action;
    route.querySelector(".route-shift").textContent = choice.shift;
    return route;
  });
  missionRoutes.replaceChildren(...routes);
  missionRoutes.scrollLeft = 0;
}

function showMissionChoices() {
  const mission = missions[currentMission];
  const seen = missionSeen[currentMission];
  missionHeading.textContent = mission.heading;
  missionDescription.textContent = mission.description;
  missionStart.textContent = `開始的心情 · ${mission.start}`;
  missionChoices.replaceChildren(...mission.choices.map((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.choice = index;
    const number = document.createElement("span");
    number.textContent = `0${index + 1}`;
    const action = document.createElement("span");
    action.textContent = choice.action;
    button.append(number, action);
    if (seen.has(index)) {
      const status = document.createElement("small");
      status.textContent = "已探索";
      button.append(status);
    }
    return button;
  }));
  missionOutcome.hidden = true;
  missionDecision.hidden = false;
  updateMissionProgress();
}

missionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (currentMission === index) return;
    currentMission = index;
    missionButtons.forEach((option) => option.setAttribute("aria-pressed", option === button));
    showMissionChoices();
    animateEntrance(missionDecision, 8, 340);
  });
});

missionChoices.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  const index = Number(button.dataset.choice);
  const choice = missions[currentMission].choices[index];
  missionSeen[currentMission].add(index);
  missionOutcomeHeading.textContent = choice.heading;
  missionOutcomeDescription.textContent = choice.description;
  missionOutcomeShift.textContent = `心情的變化 · ${choice.shift}`;
  missionDecision.hidden = true;
  missionOutcome.hidden = false;
  updateMissionProgress();
  missionOutcomeHeading.focus();
  animateEntrance(missionOutcome, 8, 340);
});

document.querySelector("#mission-retry").addEventListener("click", () => {
  showMissionChoices();
  missionPrompt.focus();
});
showMissionChoices();

const palette = document.querySelector("#palette");
const paletteButtons = [...palette.querySelectorAll("[data-palette]")];
const paletteBalance = palette.querySelector(".palette-balance");
const paletteRatio = document.querySelector("#palette-ratio");
const paletteLeft = document.querySelector("#palette-left");
const paletteRight = document.querySelector("#palette-right");
const paletteResult = document.querySelector("#palette-result");
const paletteClear = document.querySelector("#palette-clear");
const paletteSelection = [];

function updatePalette() {
  const [first, second] = paletteSelection;
  const firstColor = first ? getComputedStyle(first).getPropertyValue("--glow") : "#c7a7ff";
  const secondColor = second ? getComputedStyle(second).getPropertyValue("--glow") : firstColor;
  palette.style.setProperty("--palette-first", firstColor);
  palette.style.setProperty("--palette-second", secondColor);
  palette.style.setProperty("--palette-ratio", `${paletteRatio.value}%`);
  paletteBalance.hidden = !second;
  paletteClear.disabled = !first;
  paletteButtons.forEach((button) => button.setAttribute("aria-pressed", paletteSelection.includes(button)));

  if (second) {
    const firstName = first.textContent;
    const secondName = second.textContent;
    const ratio = Number(paletteRatio.value);
    paletteLeft.textContent = firstName;
    paletteRight.textContent = secondName;
    const blend = `${firstName} ${ratio}%、${secondName} ${100 - ratio}%`;
    paletteRatio.setAttribute("aria-valuetext", blend);
    paletteResult.textContent = `${blend}。試著接著說：「我會覺得這兩種心情，是因為……」`;
  } else if (first) {
    paletteResult.textContent = `你選了${first.textContent}。${emotions[first.dataset.palette].action}`;
  } else {
    paletteResult.textContent = "想想今天發生的一件事，再選出最貼近當時的感受。";
  }
}

paletteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = paletteSelection.indexOf(button);
    if (index >= 0) {
      paletteSelection.splice(index, 1);
    } else if (paletteSelection.length === 2) {
      paletteResult.textContent = "已選兩種感受。再點一次已選的感受即可取消，再換上另一種。";
      return;
    } else {
      paletteSelection.push(button);
    }
    paletteRatio.value = 50;
    updatePalette();
  });
});

paletteRatio.addEventListener("input", updatePalette);
paletteClear.addEventListener("click", () => {
  paletteSelection.length = 0;
  paletteRatio.value = 50;
  updatePalette();
  paletteButtons[0].focus();
});

const quizContent = document.querySelector("#quiz-content");
const quizRound = document.querySelector("#quiz-round");
const quizResult = document.querySelector("#quiz-result");
const quizProgress = document.querySelector("#quiz-progress");
const quizProgressLabel = document.querySelector("#quiz-progress-label");
const quizQuestion = document.querySelector("#quiz-question");
const quizAnswers = document.querySelector("#quiz-answers");
const quizFeedback = document.querySelector(".quiz-feedback");
const quizNext = document.querySelector("#quiz-next");
const quizScore = document.querySelector("#quiz-score");
const quizSummary = document.querySelector("#quiz-summary");
const quizReview = document.querySelector("#quiz-review");
const quizRestart = document.querySelector("#quiz-restart");
const quizSelections = [];
const answerLetters = ["A", "B", "C"];

function renderQuizQuestion() {
  const index = quizSelections.length;
  const question = quizQuestions[index];
  quizProgressLabel.textContent = `第 ${index + 1} / ${quizQuestions.length} 題 · ${question.topic}`;
  quizProgress.value = index;
  quizQuestion.textContent = question.question;
  quizFeedback.textContent = "";
  quizFeedback.removeAttribute("data-status");
  quizNext.disabled = true;
  quizNext.firstChild.textContent = index === quizQuestions.length - 1 ? "查看結果 " : "下一題 ";

  const buttons = question.options.map((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.answer = optionIndex;
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = answerLetters[optionIndex];
    const text = document.createElement("span");
    text.textContent = option;
    button.append(letter, text);
    return button;
  });
  quizAnswers.replaceChildren(...buttons);
}

quizAnswers.addEventListener("click", (event) => {
  const selected = event.target.closest("[data-answer]");
  if (!selected || selected.getAttribute("aria-disabled") === "true") return;

  const question = quizQuestions[quizSelections.length];
  const answer = Number(selected.dataset.answer);
  const isCorrect = answer === question.correct;
  quizSelections.push(answer);
  quizAnswers.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-disabled", "true");
    if (button !== selected) button.tabIndex = -1;
  });
  selected.dataset.status = isCorrect ? "correct" : "incorrect";
  quizAnswers.children[question.correct].dataset.status = "correct";
  const feedbackTitle = document.createElement("strong");
  feedbackTitle.textContent = isCorrect ? "答對了！" : `正確答案是 ${answerLetters[question.correct]}`;
  const explanation = document.createElement("p");
  explanation.textContent = question.explanation;
  quizFeedback.dataset.status = isCorrect ? "correct" : "incorrect";
  quizFeedback.replaceChildren(feedbackTitle, explanation);
  quizProgress.value = quizSelections.length;
  quizNext.disabled = false;
});

function showQuizResult() {
  const missed = quizQuestions.filter((question, index) => question.correct !== quizSelections[index]);
  const score = quizQuestions.length - missed.length;
  quizProgressLabel.textContent = "任務完成";
  quizScore.textContent = `答對 ${score} / ${quizQuestions.length} 題`;
  quizSummary.textContent = missed.length ? "看看錯題的解析，也可以回到對應的分鏡或練習再試一次。" :
    "你找到了全部的情緒線索！下次心情很複雜時，也可以試著把兩種感受都說出來。";
  quizReview.replaceChildren(...missed.map((question) => {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = question.topic;
    const answer = document.createElement("p");
    answer.textContent = question.options[question.correct];
    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;
    const review = question.review;
    const link = document.createElement("a");
    link.className = "quiz-review-link";
    link.href = `#${review.target}`;
    link.textContent = review.label;
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (review.scene !== undefined) selectJourneyScene(review.scene);
      if (review.mission === undefined) return;
      if (review.mission === currentMission) {
        showMissionChoices();
      } else {
        missionButtons[review.mission].click();
      }
    });
    item.append(title, answer, explanation, link);
    return item;
  }));
  quizReview.hidden = missed.length === 0;
  quizRound.hidden = true;
  quizResult.hidden = false;
  quizScore.focus();
}

quizNext.addEventListener("click", () => {
  if (quizSelections.length === quizQuestions.length) {
    showQuizResult();
    return;
  }
  renderQuizQuestion();
  quizQuestion.focus();
});

quizRestart.addEventListener("click", () => {
  quizSelections.length = 0;
  quizResult.hidden = true;
  quizRound.hidden = false;
  renderQuizQuestion();
  quizQuestion.focus();
});

quizProgress.max = quizQuestions.length;
renderQuizQuestion();
quizContent.hidden = false;
showChapter(window.location.hash);
