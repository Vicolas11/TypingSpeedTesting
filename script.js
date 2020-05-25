const TYPINGAREA = document.querySelector("#typingArea");
const CON = document.querySelector(".container-3 p").innerHTML;
const TEXTWRAPPER = document.querySelector("textarea");
const TIMER = document.querySelector("#timer");
const RESETBUTTON = document.querySelector("#reset-button");
var timer = [0,0,0,0];
var interval;
var runTimming = true;

function frontZero(t){
  if (t <= 9){
  t = "0"+t;
  }
  return t;
}

function runTimer() {
  let currentTime = frontZero(timer[0]) + ":" + frontZero(timer[1]) + ":" + frontZero(timer[2]);
  TIMER.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3]/100/60);
  timer[1] = Math.floor(timer[3]/100) - (timer[0] * 60);
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function start() {
  let textEnteredLength = TYPINGAREA.value.length;
  if (textEnteredLength === 0 && true) {
    runTimming = true;
    interval = setInterval(runTimer,10);
  }
  // console.log(textEnteredLength);
}

function spellCheck() {
  let textEntered = TYPINGAREA.value;
  let originalText = CON.substring(0,textEntered.length);
  let currentTime = frontZero(timer[0]) + ":" + frontZero(timer[1]) + ":" + frontZero(timer[2]);

  if (textEntered==CON) {
    TEXTWRAPPER.style.borderColor = "green";
    clearInterval(interval);
    alert("You finished at " + currentTime + "\nWell done keep it up!")

  } else {
      if (textEntered==originalText) {
          TEXTWRAPPER.style.borderColor = "blue";
      } else {
          TEXTWRAPPER.style.borderColor = "red";
      }

  }
  // console.log(originalText);
}

function reset() {
  clearInterval(interval); // This  guy here stops The time
  interval=null;
  runTimming = false;
  timer = [0,0,0,0];

  TYPINGAREA.value = "";
  TEXTWRAPPER.style.borderColor = "grey";
  TIMER.innerHTML = "00:00:00";

  // console.log("The reset button has been pressed!");
}

TYPINGAREA.addEventListener("keypress", start, false);
TYPINGAREA.addEventListener("keyup", spellCheck, false);
RESETBUTTON.addEventListener("click", reset, false);
