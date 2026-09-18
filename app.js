const questions = [
  {
    category: "就业性别歧视",
    source: "来源：全国妇联女性之声视频",
    question: "某公司使用 AI 招聘系统，系统算法参考使用含有性别偏见的历史数据，无端降低女性求职者的匹配评分与通过率，且未按规定向有关部门备案。下面说法正确的是？",
    options: ["公司使用歧视女性求职者的招聘系统，属于违法行为", "招聘算法是技术问题，公司没有责任"],
    answer: 0,
    analysis: "《中华人民共和国妇女权益保障法》明确，用人单位在招录（聘）过程中，除国家另有规定外，不得实施限定男性或者规定男性优先。根据《生成式人工智能服务管理暂行办法》相关规定，提供和使用生成式人工智能服务时，应在算法设计、训练数据选择、模型生成和优化等过程中采取有效措施，防止产生性别等歧视。"
  },
  {
    category: "合同相关维权",
    source: "来源：真实案例改编",
    question: "小王是一名女快递员，入职某快递公司的加盟网点，工作接受快递公司统一管理，未签订书面劳动合同，公司也未缴工伤保险。小王在派件途中发生交通事故受伤。下列说法正确的是？",
    options: ["小王是加盟网点自己招的人，快递公司不用负责", "快递公司承担工伤赔偿责任"],
    answer: 1,
    analysis: "劳动关系的认定核心在于是否存在支配性劳动管理，以及人身、组织、经济从属性。是否签订书面劳动合同，不影响事实劳动关系的认定。应当参加工伤保险而未参加的用人单位职工发生工伤，由该用人单位按照规定的工伤保险待遇项目和标准支付费用。"
  },
  {
    category: "新就业形态维权",
    source: "来源：江北新区检察院女主播案例分享",
    question: "大学生小雪与某文化传媒公司签订《经济合作协议》，从事网络主播工作，协议中手写注明“本协议非劳动合同”。在职期间，小雪按照公司要求每日打卡、开会复盘，日均直播 8 小时以上。小雪离职后，公司要求其赔付 30 万元违约金。下列说法正确的是？",
    options: ["小雪应承担违约责任", "公司无权要求小雪赔付违约金"],
    answer: 1,
    analysis: "劳动关系认定以用工事实为准，不以合同名称或双方约定为准。小雪接受考勤管理、服从工作安排，构成事实劳动关系。公司单方拟定、加重劳动者责任的格式条款应属无效，不得据此索赔违约金。"
  },
  {
    category: "家政服务员维权",
    source: "来源：真实案例改编",
    question: "李阿姨是某家政公司的家政服务员，到雇主家中提供居家服务。服务结束后，雇主怀疑家中财物丢失，在没有证据的情况下，直接扣留剩余的 1000 元报酬。这种做法对吗？",
    options: ["对", "不对"],
    answer: 1,
    analysis: "《中华人民共和国民法典》规定，劳务提供人按照约定完成劳务的，接受劳务一方应当足额支付报酬。雇主如果怀疑家政服务员造成财物损失，应当通过报警等合法途径主张权利，无权在没有证据的情况下直接扣留报酬。"
  },
  {
    category: "女职工孕期哺乳期维权",
    source: "来源：南京市 2025 年依法维护妇女权益典型案例",
    question: "陈女士在南京一家科技公司从事软件测试工作。产假返岗后，公司未提前沟通，通知正在哺乳期的陈女士前往北京出差一个月。陈女士拒绝出差。20 天后，公司以旷工为由要求其办理离职。该企业的做法是否合法？",
    options: ["合法", "不合法"],
    answer: 1,
    analysis: "《女职工劳动保护特别规定》明确，用人单位应当在每天的劳动时间内为哺乳期女职工安排 1 小时哺乳时间。异地出差会导致无法正常行使哺乳时间权利，公司应与陈女士协商并尊重其意愿。陈女士因不合理工作安排未到岗不构成旷工，公司行为构成违法解除劳动合同。"
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

const backgroundMusic = new Audio("./assets/background-music-v2.mp3");
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

const scene = (name) => {
  $("app").classList.toggle("is-cover", name === "cover-v7.webp");
  backdrop.style.opacity = ".15";
  window.setTimeout(() => {
    backdrop.style.backgroundImage = `url("./assets/${name}")`;
    backdrop.style.opacity = "1";
  }, 140);
};

const showScreen = (screen) => {
  [introScreen, storyScreen, quizScreen, resultScreen].forEach((item) => item.classList.toggle("is-active", item === screen));
};

const startMusic = () => {
  if (!soundOn || !backgroundMusic.paused) return;
  backgroundMusic.play().catch(() => {});
};

const preloadQuestions = () => {
  if (questionsPreloaded) return;
  questionsPreloaded = true;
  questions.forEach((_, index) => {
    const image = new Image();
    image.src = `./assets/question-${index + 1}-v2.webp`;
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
  const effect = correct ? correctSound : wrongSound;
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
  for (let i = 0; i < 36; i += 1) {
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
  $("storyNo").textContent = current + 1;
  $("storyProgressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  $("storyImage").src = `./assets/question-${current + 1}-v2.webp`;
  $("storyImage").alt = `第${current + 1}关${q.category}插画`;
  scene(`question-${current + 1}-v2.webp`);
  showScreen(storyScreen);
};

const renderQuestion = () => {
  const q = questions[current];
  locked = false;
  $("currentNo").textContent = current + 1;
  $("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
  $("category").textContent = q.category;
  $("source").textContent = q.source;
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
  scene(`question-${current + 1}-v2.webp`);
};

const chooseAnswer = (index, button) => {
  if (locked) return;
  locked = true;
  const q = questions[current];
  const correct = index === q.answer;
  button.classList.add("is-selected");
  document.querySelectorAll(".answer").forEach((item) => item.disabled = true);
  if (correct) score += 1;
  tone(correct);

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
  scene("cover-v7.webp");
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
        label.textContent = "开始答题";
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
  if (soundOn) startMusic();
  else stopMusic();
});

window.addEventListener("load", startMusic, { once: true });
document.addEventListener("WeixinJSBridgeReady", startMusic, { once: true });
["pointerdown", "touchstart", "click"].forEach((eventName) => {
  document.addEventListener(eventName, startMusic, { once: true, capture: true });
});
scene("cover-v7.webp");

