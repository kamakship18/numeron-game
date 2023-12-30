// Iteration 2: Generate 2 random number and display it on the screen
let number1 = Math.round(Math.random() * 100);
const boxOne = document.getElementById("number1");
boxOne.innerHTML = number1;

let number2 = Math.round(Math.random() * 100);
const boxTwo = document.getElementById("number2");
boxTwo.innerHTML = number2;

// Iteration 3: Make the options button functional
<<<<<<< HEAD
const greater = document.getElementById("greater-than");
const equal = document.getElementById("equal-to");
const lesser = document.getElementById("lesser-than");
let score = 0;

greater.onclick = () => {
  if (number1 > number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "gameover.html";
  }
  number1 = Math.round(Math.random() * 100);
  boxOne.innerHTML = number1;
  number2 = Math.round(Math.random() * 100);
  boxTwo.innerHTML = number2;
};

lesser.onclick = () => {
  if (number1 < number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  number1 = Math.round(Math.random() * 100);
  boxOne.innerHTML = number1;
  number2 = Math.round(Math.random() * 100);
  boxTwo.innerHTML = number2;
};

equal.onclick = () => {
  if (number1 == number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  number1 = Math.round(Math.random() * 100);
  boxOne.innerHTML = number1;
  number2 = Math.round(Math.random() * 100);
  boxTwo.innerHTML = number2;
};

// Iteration 4: Build a timer for the game
let timer = document.getElementById("timer");
let timerId;
function startTimer() {
  time = 15;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "./gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
  localStorage.setItem("score", score);
}
function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}
startTimer();
=======

// Iteration 4: Build a timer for the game
>>>>>>> cdfacf8d4c36c2f43437d72a117dd3b305c9b49b
