"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = Number(document.querySelector(".score").textContent);
let highScore = 0;

function display(element, message) {
  document.querySelector(element).textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    display(".message", "😯No Number!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉Correct Number!!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈Too high!" : "📉Too low!";

      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "😣 You lose!";
      currentScore = 0;
      document.querySelector(".score").textContent = currentScore;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  currentScore = 20;
  document.querySelector(".score").textContent = currentScore;
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
