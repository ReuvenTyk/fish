const STARTING_COUNTER_DEFAULT = 0;
let sec = 0,
  counter = 0,
  intervalID;

const timer = document.getElementById("timer"),
  userBtn = document.getElementById("user-btn"),
  bar = document.getElementById("bar");

userBtn.addEventListener("click", press);

function press() {
  counter += 1;
  if (sec == 0) {
    alert("You Got Caught");
    counter = 0;
  }
  if (counter >= 100) {
    alert("You Won");
  }
  progressBar(counter);
}

function progressBar(progress) {
  bar.style.backgroundColor = "black";
  console.log(progress);
  bar.style.width = progress + "%";
}

function timerGo() {
  sec += 1;
  if (sec == 4) {
    timer.innerHTML = 0;
    sec = 0;
    /* clearInterval(intervalID); */
    return;
  }

  timer.innerHTML = sec;
  setTimeout("timerGo()", 1000);
}

timerGo();
/* 
function randomFunction() {
  let time = Math.random() * 10000;
  console.log(time);
  if (time > 4000) {
    return time;
  }
  return 4000;
}

function delay() {
  timerGo();
}

function start() {
  intervalID = setInterval(delay, randomFunction());
}
 */
