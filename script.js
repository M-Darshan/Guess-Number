"strict";

const checkbtn = document.querySelector(".checkbtn");
const newGame = document.querySelector(".newGame");
const playAgain = document.querySelector(".playAgain");

const displayMessage = function (message) {
  document.querySelector(".remarks").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayHighScore = function (highScore) {
  document.querySelector(".highScore").textContent = highScore;
};

const displayYourScore = function (yourScore) {
  document.querySelector(".yourScore").textContent = yourScore;
};

const changeColor = function (color) {
  document.querySelector(".game").style.backgroundColor = color;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let startScore = 20,
  highScore = 0,
  yourScore = 0;

checkbtn.addEventListener("click", function () {
  const num = Number(document.querySelector(".number").value);
  if (!num) {
    displayMessage("❌ Not a Number!");
  } else if (num === secretNumber) {
    displayMessage("🎉 Hooray! Correct Guess...");
    changeColor("#ffeec4");
    yourScore = startScore;
    displayYourScore(`🎳 Your Score: ${yourScore}`);
    if (startScore > highScore) {
      highScore = startScore;
      displayHighScore(`🥇 High Score: ${highScore}`);
    }
  } else if (num !== secretNumber) {
    if (startScore > 1) {
      displayMessage(
        num < secretNumber
          ? `⛔️ Your Guess is too Low!`
          : `⛔️ Your Guess is too High!`
      );
      startScore--;
      displayScore(`⛳️ Score: ${startScore}`);
    } else {
      displayMessage("😭 You Lost the Game!");
      displayScore("⛳️ Score: 0");
    }
  }
});

newGame.addEventListener("click", function () {
  displayMessage("😃 Enter your Guess!");
  startScore = 20;
  displayScore(`⛳️ Score: ${startScore}`);
  highScore = 0;
  displayHighScore(`🥇 High Score: ${highScore}`);
  yourScore = 0;
  displayYourScore("🎳 Your Score: Yet to Guess Correctly!");
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  changeColor("#fefaf6");
  document.querySelector(".number").value = "";
});

playAgain.addEventListener("click", function () {
  displayMessage("😃 Enter your Guess!");
  startScore = 20;
  displayScore(`⛳️ Score: ${startScore}`);
  yourScore = 0;
  displayYourScore("🎳 Your Score: Yet to Guess Correctly!");
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  changeColor("#fefaf6");
  document.querySelector(".number").value = "";
});
