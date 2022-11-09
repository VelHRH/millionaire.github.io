import {
 EASY_QUESTIONS,
 MEDIUM_QUESTIONS,
 HARD_QUESTIONS,
} from "./questions.js";
let i = -1;
let sum = 0;
let amount = 0;
let counMistake = 0;
qSum.innerText = sum;
let contMode;

qA.style.transition = "1s";
qB.style.transition = "1s";
qD.style.transition = "1s";
qC.style.transition = "1s";

let cc=0;
function pop(text, color, amount){
  if (cc==0){
    popBox.style.display = "block";
    document.querySelector(".popLayer").style.display = "block";
    popBox.style.background = color;
    popText.innerText = text + amount;
    cc=1;
  }else{
    popBox.style.display = "none";
    document.querySelector(".popLayer").style.display = "none";
    cc=0;
    document.location.reload();
  }
}

closeBtn.onclick = pop;

function clickable(){

  document.getElementById("qAcont").style.pointerEvents="auto";
  document.getElementById("qBcont").style.pointerEvents="auto";
  document.getElementById("qCcont").style.pointerEvents="auto";
  document.getElementById("qDcont").style.pointerEvents="auto";
}

function unclickable(){

  document.getElementById("qAcont").style.pointerEvents="none";
  document.getElementById("qBcont").style.pointerEvents="none";
  document.getElementById("qCcont").style.pointerEvents="none";
  document.getElementById("qDcont").style.pointerEvents="none";
}

function shuffle(array) {
 let currentIndex = array.length,
  randomIndex;
 while (currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  [array[currentIndex], array[randomIndex]] = [
   array[randomIndex],
   array[currentIndex],
  ];
 }
 return array;
}

shuffle(EASY_QUESTIONS);
shuffle(MEDIUM_QUESTIONS);
shuffle(HARD_QUESTIONS);
let slicedEASY_QUESTIONS = EASY_QUESTIONS.slice(0, 5);
let slicedMEDIUM_QUESTIONS = MEDIUM_QUESTIONS.slice(0, 5);
let slicedHARD_QUESTIONS = HARD_QUESTIONS.slice(0, 5);

const getRandomInt = (max) => {
 return Math.floor(Math.random() * max);
};

const sumAmountCounter = () => {
 if (i == 0) sum = 500;
 if (i == 1) sum = 1000;
 if (i == 2) sum = 2000;
 if (i == 3) sum = 3000;
 if (i == 4) {
  sum = 5000;
  amount = 5000;
 }
 if (i == 5) sum = 10000;
 if (i == 6) sum = 15000;
 if (i == 7) sum = 25000;
 if (i == 8) sum = 50000;
 if (i == 9) {
  sum = 100000;
  amount = 100000;
 }
 if (i == 10) sum = 200000;
 if (i == 11) sum = 400000;
 if (i == 12) sum = 800000;
 if (i == 13) sum = 1500000;
 if (i == 14) {
  sum = 3000000;
  amount = 3000000;
 }
 qSum.innerText = sum;
};

const update = () => {
  clickable();
 qA.style.color = "white";
 qB.style.color = "white";
 qC.style.color = "white";
 qD.style.color = "white";
 if(contMode!=0){
 i++;
 qNumber.innerText = i + 1;
 if (i < 5) {
  question.innerText = slicedEASY_QUESTIONS[i].text;
  qA.innerText = slicedEASY_QUESTIONS[i].options[0].text;
  qB.innerText = slicedEASY_QUESTIONS[i].options[1].text;
  qC.innerText = slicedEASY_QUESTIONS[i].options[2].text;
  qD.innerText = slicedEASY_QUESTIONS[i].options[3].text;
 }
 if (i > 4 && i < 10) {
  question.innerText = slicedMEDIUM_QUESTIONS[(i+1) % 5].text;
  qA.innerText = slicedMEDIUM_QUESTIONS[(i+1) % 5].options[0].text;
  qB.innerText = slicedMEDIUM_QUESTIONS[(i+1) % 5].options[1].text;
  qC.innerText = slicedMEDIUM_QUESTIONS[(i+1) % 5].options[2].text;
  qD.innerText = slicedMEDIUM_QUESTIONS[(i+1) % 5].options[3].text;
 }
 if (i > 9 && i < 15) {
  question.innerText = slicedHARD_QUESTIONS[i % 10].text;
  qA.innerText = slicedHARD_QUESTIONS[i % 10].options[0].text;
  qB.innerText = slicedHARD_QUESTIONS[i % 10].options[1].text;
  qC.innerText = slicedHARD_QUESTIONS[i % 10].options[2].text;
  qD.innerText = slicedHARD_QUESTIONS[i % 10].options[3].text;
 }
 contMode = 0;
}
};

const isContinue = () => {
  unclickable();
  contMode++;
 sumAmountCounter();
 if (i == 14) {
  qSum.innerText = 3000000;
  pop ("Вітаємо! Ви виграли ", "#a9faac", amount);
 }
 question.innerText = "Чи бажаете завершити гру?";
 qA.innerText = "";
 qB.innerText = "";
 qC.innerText = "";
 qD.innerText = "";
 YESbtn.onclick = update;
 NObtn.onclick = gameOverWithWin;
};

const gameOver = () => {
  pop ("Кінець гри. Ваш виграш = ", "#fbb0b0", amount);
};

const gameOverWithWin = () => {
  if(contMode!=0){
    pop ("Ваш виграш = ", "#a9faac", sum);
  }
};

const qAhandler = () => {
 if (i < 5) {
  if (slicedEASY_QUESTIONS[i].options[0].isTrue) {
   qA.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qA.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (slicedMEDIUM_QUESTIONS[(i + 1) % 5].options[0].isTrue) {
   qA.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qA.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (slicedHARD_QUESTIONS[i % 10].options[0].isTrue) {
   qA.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qA.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const qBhandler = () => {
 if (i < 5) {
  if (slicedEASY_QUESTIONS[i].options[1].isTrue) {
   qB.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qB.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (slicedMEDIUM_QUESTIONS[(i + 1) % 5].options[1].isTrue) {
   qB.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qB.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (slicedHARD_QUESTIONS[i % 10].options[1].isTrue) {
   qB.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qB.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const qChandler = () => {
 if (i < 5) {
  if (slicedEASY_QUESTIONS[i].options[2].isTrue) {
   qC.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qC.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (slicedMEDIUM_QUESTIONS[(i + 1) % 5].options[2].isTrue) {
   qC.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qC.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (slicedHARD_QUESTIONS[i % 10].options[2].isTrue) {
   qC.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qC.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const qDhandler = () => {
 if (i < 5) {
  if (slicedEASY_QUESTIONS[i].options[3].isTrue) {
   qD.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qD.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 4 && i < 10) {
  if (slicedMEDIUM_QUESTIONS[(i + 1) % 5].options[3].isTrue) {
   qD.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qD.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
 if (i > 9 && i < 15) {
  if (slicedHARD_QUESTIONS[i % 10].options[3].isTrue) {
   qD.style.color = "green";
   setTimeout(isContinue, 2000);
  } else {
   qD.style.color = "red";
   setTimeout(gameOver, 1000);
  }
 }
};

const help50handler = () => {
 help50.style.transition = "1s";
 help50.parentNode.removeChild(help50);
 let QUESTIONS;
 if (i < 5) {
  QUESTIONS = slicedEASY_QUESTIONS[i];
 }
 if (i > 4 && i < 10) {
  QUESTIONS = slicedMEDIUM_QUESTIONS[(i + 1) % 5];
 }
 if (i > 9 && i < 15) {
  QUESTIONS = slicedHARD_QUESTIONS[i % 10];
 }
 let count = 0;
 let arr = [];
 while (count < 2) {
  let k = getRandomInt(4);
  if (!QUESTIONS.options[k].isTrue && !arr.includes(k)) {
   if (k == 0) qA.style.color = "transparent";
   if (k == 1) qB.style.color = "transparent";
   if (k == 2) qC.style.color = "transparent";
   if (k == 3) qD.style.color = "transparent";
   count++;
   arr.push(k);
  }
 }
};

const helpFriendhandler = () => {
 helpFriend.style.transition = "1s";
 helpFriend.parentNode.removeChild(helpFriend);
 while (true) {
  let k = getRandomInt(4);
  if ((k == 0) && (qA.style.color != "transparent")) {
    qA.style.color = "yellow";
    break;
  }
  if ((k == 1) && (qB.style.color != "transparent")) {
    qB.style.color = "yellow";
    break;
  }
  if ((k == 2) && (qC.style.color != "transparent")){
    qC.style.color = "yellow";
    break;
  }
  if ((k == 3) && (qD.style.color != "transparent")){
    qD.style.color = "yellow";
    break;
  }
 }
};

const helpMistakehandler = () => {
 helpMistake.style.transition = "1s";
 helpMistake.parentNode.removeChild(helpMistake);
 let QUESTIONS;
 if (i < 5) {
  QUESTIONS = slicedEASY_QUESTIONS[i];
 }
 if (i > 4 && i < 10) {
  QUESTIONS = slicedMEDIUM_QUESTIONS[(i + 1) % 5];
 }
 if (i > 9 && i < 15) {
  QUESTIONS = slicedHARD_QUESTIONS[i % 10];
 }

 qAcont.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[0].isTrue) {
    qA.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qA.style.color = "red";
   }
  } else {
   qAhandler();
  }
 };
 qBcont.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[1].isTrue) {
    qB.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qB.style.color = "red";
   }
  } else {
   qBhandler();
  }
 };
 qCcont.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[2].isTrue) {
    qC.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qC.style.color = "red";
   }
  } else {
   qChandler();
  }
 };
 qDcont.onclick = function () {
  if (counMistake == 0) {
   counMistake++;
   if (QUESTIONS.options[3].isTrue) {
    qD.style.color = "green";
    setTimeout(isContinue, 2000);
   } else {
    qD.style.color = "red";
   }
  } else {
   qDhandler();
  }
 };
};

update();
qAcont.onclick = qAhandler;
qBcont.onclick = qBhandler;
qCcont.onclick = qChandler;
qDcont.onclick = qDhandler;
help50.onclick = help50handler;
helpFriend.onclick = helpFriendhandler;
helpMistake.onclick = helpMistakehandler;
