const questions = [
  {
    category: "就业性别歧视",
    question: "某公司使用AI招聘系统，系统算法参考使用含有性别偏见的历史数据，无端降低女性求职者的匹配评分与通过率，且未按规定向有关部门备案。下面说法正确的是？",
    options: ["公司使用歧视女性求职者的招聘系统，属于违法行为", "招聘算法是技术问题，公司没有责任"],
    answer: 0,
    analysis: "根据《中华人民共和国妇女权益保障法》第四十三条，用人单位在招录（聘）过程中，不得实施“其他以性别为由拒绝录（聘）用妇女或者差别化地提高对妇女录（聘）用标准的行为”。本案中，AI系统基于含有性别偏见的历史数据，降低女性求职者的匹配评分与通过率，属于对女性求职者的差别化对待。根据《中华人民共和国个人信息保护法》第二十四条，个人信息处理者利用个人信息进行自动化决策，应当保证决策的透明度和结果公平、公正，不得对个人在交易条件上实行不合理的差别待遇。AI招聘系统的评分筛选属于自动化决策，其歧视性结果与上述公平、公正要求相悖。"
  },
  {
    category: "合同相关维权",
    question: "小王是一名女快递员，入职某快递公司的加盟网点，工作接受快递公司统一管理，未签订书面劳动合同，公司也未缴工伤保险。小王在派件途中发生交通事故受伤。下列说法正确的是（ ）？",
    options: ["小王是加盟网点自己招的人，快递公司不用负责", "快递公司承担工伤赔偿责任"],
    answer: 1,
    analysis: "是否签订书面劳动合同，不影响事实劳动关系的认定。根据《中华人民共和国劳动合同法》第七条，用人单位自用工之日起即与劳动者建立劳动关系。《最高人民法院关于审理劳动争议案件适用法律问题的解释（二）》（法释〔2025〕12号）第一条明确规定，具备合法经营资格的承包人将承包业务转包或者分包给不具备合法经营资格的组织或者个人，该组织或者个人招用的劳动者请求确认承包人为承担用工主体责任单位，承担支付劳动报酬、认定工伤后的工伤保险待遇等责任的，人民法院依法予以支持。根据《工伤保险条例》第十条，用人单位应当按时缴纳工伤保险费，职工个人不缴纳工伤保险费；第六十二条第二款，依照本条例规定应当参加工伤保险而未参加工伤保险的用人单位职工发生工伤的，由该用人单位按照本条例规定的工伤保险待遇项目和标准支付费用。"
  },
  {
    category: "新就业形态维权",
    question: "大学生小雪与某文化传媒公司签订《经济合作协议》，从事网络主播工作，协议中手写注明“本协议非劳动合同”。在职期间，小雪按照公司要求每日打卡、开会复盘，日均直播8小时以上。小雪离职后，公司以其离职为由要求她赔付30万元违约金。下列说法正确的是（ ）",
    options: ["小雪应承担违约责任", "公司无权要求小雪赔付违约金"],
    answer: 1,
    analysis: "劳动关系认定以用工事实为准，不以合同名称或双方约定为准。小雪接受考勤管理、服从工作安排，构成事实劳动关系。协议中“本协议非劳动合同”是公司单方拟定的格式条款，意在免除自身法定责任，依据《中华人民共和国民法典》第四百九十七条，该格式条款应属无效。根据《中华人民共和国劳动合同法》第二十五条，除服务期和竞业限制两种情形外，用人单位不得与劳动者约定由劳动者承担违约金。小雪离职不属于这两种情形，公司无权要求其支付30万元违约金。"
  },
  {
    category: "家政服务员维权",
    question: "李阿姨是某家政公司的家政服务员，到雇主家中提供居家服务。服务结束后，雇主怀疑家中财物丢失，在没有证据的情况下，直接扣留剩余的1000元报酬。这种做法对吗？",
    options: ["对", "不对"],
    answer: 1,
    analysis: "根据《中华人民共和国民法典》第五百零九条第一款，当事人应当按照约定全面履行自己的义务；根据第五百七十九条，当事人一方未支付价款、报酬、租金、利息，或者不履行其他金钱债务的，对方可以请求其支付。李阿姨按约定完成家政服务后，雇主应当足额支付报酬。雇主怀疑家中财物丢失直接扣留剩余1000元报酬，没有法律依据。劳务报酬系劳动者合法所得，雇主不得以财物纠纷为由非法扣留，二者属不同法律关系，应分别处理。雇主如认为李阿姨造成财物损失，应通过报警、人民调解或诉讼等合法途径主张权利，不得以财物争议为由私自扣留劳务报酬。"
  },
  {
    category: "女职工孕期哺乳期维权",
    question: "陈女士在南京一家科技公司从事软件测试工作。陈女士产假返岗后，公司未提前沟通，通知正在哺乳期的陈女士前往北京出差一个月。陈女士拒绝出差。20天后，公司以陈女士旷工为由要求其办理离职相关手续。该公司的做法是否合法？",
    options: ["合法", "不合法"],
    answer: 1,
    analysis: "《女职工劳动保护特别规定》明确，对哺乳未满1周岁婴儿的女职工，用人单位不得延长劳动时间或者安排夜班劳动，并应当在每天的劳动时间内为哺乳期女职工安排1小时哺乳时间。公司安排陈女士前往北京出差一个月，会导致陈女士无法正常享有每日1小时哺乳时间，与上述规定相冲突。将哺乳期女职工派往外地进行长达一个月的工作，实质上属于工作地点的重大变更，需与劳动者充分协商。陈女士拒绝出差有正当理由，不构成旷工。公司以旷工为由要求陈女士办理离职手续，属于违法解除劳动合同。"
  }
];

const $ = (id) => document.getElementById(id);
const introScreen = $("introScreen");
const storyScreen = $("storyScreen");
const quizScreen = $("quizScreen");
const resultScreen = $("resultScreen");
const feedback = $("feedback");
const backdrop = document.querySelector(".backdrop");

let current = 0;
let score = 0;
let locked = false;
let soundOn = true;
let starting = false;
let questionsPreloaded = false;

const backgroundMusic = new Audio("./assets/background-music-v2.mp3?v=20260920-restore");
const correctSound = new Audio("./assets/correct-v2.mp3");
const wrongSound = new Audio("./assets/wrong-v2.mp3");
backgroundMusic.loop = true;
backgroundMusic.preload = "auto";
backgroundMusic.volume = .32;
backgroundMusic.autoplay = true;
backgroundMusic.playsInline = true;
correctSound.preload = "auto";
correctSound.volume = .9;
wrongSound.preload = "auto";
wrongSound.volume = .9;

const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let effectContext = null;
let effectDataPromise = null;
let effectDecodePromise = null;
let effectBuffers = null;
let musicRestoreTimer = 0;
let sceneRequest = 0;
const imageCache = new Map();

const preloadEffectData = () => {
  if (effectDataPromise) return effectDataPromise;
  effectDataPromise = Promise.all([
    fetch("./assets/correct-v2.mp3", { cache: "force-cache" }).then((response) => response.arrayBuffer()),
    fetch("./assets/wrong-v2.mp3", { cache: "force-cache" }).then((response) => response.arrayBuffer())
  ]).catch(() => null);
  return effectDataPromise;
};

const unlockEffects = () => {
  if (!AudioContextClass) return;
  if (!effectContext) effectContext = new AudioContextClass();
  if (effectContext.state === "suspended") effectContext.resume().catch(() => {});
  if (!effectDecodePromise) {
    effectDecodePromise = preloadEffectData().then((data) => {
      if (!data) return null;
      return Promise.all(data.map((buffer) => effectContext.decodeAudioData(buffer.slice(0))));
    }).then((buffers) => {
      effectBuffers = buffers;
      return buffers;
    }).catch(() => null);
  }
};

const loadImage = (name, priority = "auto") => {
  if (imageCache.has(name)) return imageCache.get(name).promise;
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = priority;
  const promise = new Promise((resolve) => {
    image.onload = () => {
      if (image.decode) image.decode().catch(() => {}).finally(resolve);
      else resolve();
    };
    image.onerror = resolve;
    image.src = `./assets/${name}`;
  });
  imageCache.set(name, { image, promise });
  return promise;
};

const scene = (name) => {
  const request = ++sceneRequest;
  $("app").classList.toggle("is-cover", name === "cover-v10-hd.webp");
  backdrop.style.opacity = ".15";
  loadImage(name).then(() => {
    if (request !== sceneRequest) return;
    backdrop.style.backgroundImage = `url("./assets/${name}")`;
    requestAnimationFrame(() => { backdrop.style.opacity = "1"; });
  });
};

const showScreen = (screen) => {
  [introScreen, storyScreen, quizScreen, resultScreen].forEach((item) => item.classList.toggle("is-active", item === screen));
};

const startMusic = () => {
  if (!soundOn || !backgroundMusic.paused) return;
  backgroundMusic.play().catch(() => {});
};

backgroundMusic.addEventListener("ended", () => {
  if (!soundOn) return;
  backgroundMusic.currentTime = 0;
  startMusic();
});

const questionImage = (index) => `question-${index + 1}-${index === 4 ? "v5" : "v3"}.webp`;
const levelNames = ["关卡一", "关卡二", "关卡三", "关卡四", "关卡五"];

const preloadQuestions = () => {
  if (questionsPreloaded) return;
  questionsPreloaded = true;
  questions.forEach((_, index) => {
    loadImage(questionImage(index), index < 2 ? "high" : "auto");
  });
};

const stopMusic = () => {
  backgroundMusic.pause();
  [correctSound, wrongSound].forEach((effect) => {
    effect.pause();
    effect.currentTime = 0;
  });
};

const tone = (correct) => {
  if (!soundOn) return;
  unlockEffects();
  window.clearTimeout(musicRestoreTimer);
  backgroundMusic.volume = .1;
  musicRestoreTimer = window.setTimeout(() => { backgroundMusic.volume = .32; }, 1350);

  const buffer = effectBuffers?.[correct ? 0 : 1];
  if (buffer && effectContext?.state === "running") {
    const source = effectContext.createBufferSource();
    const gain = effectContext.createGain();
    source.buffer = buffer;
    gain.gain.value = .95;
    source.connect(gain).connect(effectContext.destination);
    source.start(0);
    return;
  }

  const effect = correct ? correctSound : wrongSound;
  effect.pause();
  effect.currentTime = 0;
  effect.play().catch(() => {});
};

const launchConfetti = () => {
  const oldBurst = document.querySelector(".confetti-burst");
  if (oldBurst) oldBurst.remove();
  const burst = document.createElement("div");
  burst.className = "confetti-burst";
  burst.setAttribute("aria-hidden", "true");
  const colors = ["#ffd45c", "#ef3150", "#ff7aa8", "#58a9ff", "#34c982", "#ff8b38", "#8c69e8"];
  const pieceCount = window.innerWidth < 760 ? 26 : 36;
  for (let i = 0; i < pieceCount; i += 1) {
    const piece = document.createElement("i");
    const direction = i % 2 === 0 ? -1 : 1;
    const distance = 70 + Math.random() * 190;
    const endX = direction * distance;
    piece.className = `confetti-piece${i % 5 === 0 ? " is-round" : ""}`;
    piece.style.setProperty("--confetti-color", colors[i % colors.length]);
    piece.style.setProperty("--mid-x", `${endX * .58}px`);
    piece.style.setProperty("--mid-y", `${-(45 + Math.random() * 100)}px`);
    piece.style.setProperty("--end-x", `${endX}px`);
    piece.style.setProperty("--end-y", `${260 + Math.random() * 310}px`);
    piece.style.setProperty("--mid-rot", `${direction * (80 + Math.random() * 180)}deg`);
    piece.style.setProperty("--end-rot", `${direction * (360 + Math.random() * 540)}deg`);
    piece.style.setProperty("--duration", `${1.15 + Math.random() * .65}s`);
    piece.style.setProperty("--delay", `${Math.random() * .16}s`);
    burst.appendChild(piece);
  }
  document.querySelector(".feedback-wrap").appendChild(burst);
  window.setTimeout(() => burst.remove(), 2100);
};

const showStory = () => {
  const q = questions[current];
  const storyIndex = current;
  const imageName = questionImage(current);
  const storyFrame = document.querySelector(".story-frame");
  $("storyNo").textContent = current + 1;
  $("storyLevelCaption").textContent = `【${levelNames[current] || `关卡${current + 1}`}】`;
  $("storyProgressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  $("storyImage").alt = `第${current + 1}关${q.category}插画`;
  storyFrame.classList.add("is-loading");
  loadImage(imageName, "high").then(() => {
    if (current !== storyIndex) return;
    $("storyImage").src = `./assets/${imageName}`;
    requestAnimationFrame(() => storyFrame.classList.remove("is-loading"));
    if (storyIndex + 1 < questions.length) loadImage(questionImage(storyIndex + 1), "low");
  });
  scene(imageName);
  showScreen(storyScreen);
};

const renderQuestion = () => {
  const q = questions[current];
  locked = false;
  $("currentNo").textContent = current + 1;
  $("quizLevelBadge").textContent = `【${levelNames[current] || `关卡${current + 1}`}】`;
  $("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  $("questionText").textContent = q.question;
  $("answers").replaceChildren(...q.options.map((text, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.dataset.letter = String.fromCharCode(65 + index);
    button.textContent = text;
    button.addEventListener("click", () => chooseAnswer(index, button));
    return button;
  }));
  const card = $("questionCard");
  card.classList.remove("enter");
  requestAnimationFrame(() => card.classList.add("enter"));
  scene(questionImage(current));
};

const chooseAnswer = (index, button) => {
  if (locked) return;
  locked = true;
  const q = questions[current];
  const correct = index === q.answer;
  button.classList.add("is-selected");
  document.querySelectorAll(".answer").forEach((item) => item.disabled = true);
  if (correct) score += 1;

  window.setTimeout(() => {
    feedback.classList.toggle("is-wrong", !correct);
    $("face").innerHTML = correct
      ? '<span class="happy-face">🥳</span><span class="face-star star-one">★</span><span class="face-star star-two">★</span><span class="face-star star-three">★</span>'
      : "🥺";
    $("feedbackTitle").textContent = correct ? "答对啦" : "答错啦";
    $("correctAnswer").textContent = String.fromCharCode(65 + q.answer);
    $("analysisText").textContent = `解析：${q.analysis}`;
    $("nextBtn").textContent = current === questions.length - 1 ? "查看成绩" : "挑战下一关";
    feedback.hidden = false;
    tone(correct);
    if (correct) launchConfetti();
    $("nextBtn").focus({preventScroll: true});
  }, 340);
};

const finish = () => {
  $("scoreNo").textContent = score;
  $("resultTitle").textContent = score === 5 ? "权益知识达人" : score >= 3 ? "普法进阶达人" : "权益学习新星";
  $("resultNote").textContent = score === 5
    ? "全部答对！每一次了解，都是守护自己与她人的力量。"
    : "了解权益，才能更好地守护权益。再巩固一次，你会更有底气。";
  scene("cover-v10-hd.webp");
  showScreen(resultScreen);
};

$("startBtn").addEventListener("click", () => {
  if (starting) return;
  starting = true;
  const button = $("startBtn");
  const fill = $("startProgress");
  const label = $("startLabel");
  button.disabled = true;
  button.classList.add("is-loading");
  startMusic();
  unlockEffects();
  preloadQuestions();

  const startedAt = performance.now();
  const duration = 1250;
  const advance = (now) => {
    const raw = Math.min(1, (now - startedAt) / duration);
    const progress = 1 - Math.pow(1 - raw, 2.2);
    const percent = Math.round(progress * 100);
    fill.style.width = `${percent}%`;
    label.textContent = `准备题目 ${percent}%`;

    if (raw < 1) requestAnimationFrame(advance);
    else window.setTimeout(() => {
      current = 0;
      score = 0;
      showStory();
      window.setTimeout(() => {
        starting = false;
        button.disabled = false;
        button.classList.remove("is-loading");
        fill.style.width = "0";
        label.textContent = "开始挑战";
      }, 450);
    }, 130);
  };
  requestAnimationFrame(advance);
});

$("enterQuestionBtn").addEventListener("click", () => {
  showScreen(quizScreen);
  renderQuestion();
});

$("nextBtn").addEventListener("click", () => {
  feedback.hidden = true;
  if (current === questions.length - 1) finish();
  else { current += 1; showStory(); }
});

$("restartBtn").addEventListener("click", () => {
  current = 0;
  score = 0;
  startMusic();
  showStory();
});

$("soundBtn").addEventListener("click", (event) => {
  soundOn = !soundOn;
  event.currentTarget.setAttribute("aria-pressed", String(soundOn));
  event.currentTarget.setAttribute("aria-label", soundOn ? "关闭音效" : "开启音效");
  if (soundOn) {
    startMusic();
    unlockEffects();
  }
  else stopMusic();
});

window.addEventListener("load", () => {
  preloadEffectData();
  preloadQuestions();
  correctSound.load();
  wrongSound.load();
  startMusic();
}, { once: true });
document.addEventListener("WeixinJSBridgeReady", () => {
  startMusic();
  unlockEffects();
}, { once: true });
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && soundOn) startMusic();
});
["pointerdown", "touchstart", "click"].forEach((eventName) => {
  document.addEventListener(eventName, () => {
    startMusic();
    unlockEffects();
  }, { once: true, capture: true });
});
preloadEffectData();
backgroundMusic.load();
startMusic();
scene("cover-v10-hd.webp");

