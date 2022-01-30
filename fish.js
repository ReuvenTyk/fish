const STARTING_COUNTER_DEFAULT = 0;
let sec = 0;

const timer = document.getElementById("timer"),
  userBtn = document.getElementById("user-btn"),
  bar = document.getElementById("bar");
let counter = 0;

userBtn.addEventListener("click", up);

while (counter < 100) {
  timerGo();
}

function up() {
  check();
}

function timerGo() {
  sec += 1;
  if (sec == 4) {
    timer.innerHTML = 0;
    sec = 0;
    return;
  }

  timer.innerHTML = sec;
  setTimeout("timerGo()", 1000);
}

function check() {
  if (userBtn.addEventListener("click") && sec == 0) {
    alert("You Got Fished");
  }
}
