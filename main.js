const numberInput = document.getElementById("number");
const message = document.getElementById("message");
const tentativeSpan = document.getElementById("tentative-message");
const messageGamePara = document.getElementById("message-game");
const button = document.getElementById("btn");
const restartBtn = document.getElementById("restart-btn");
const easyBtn = document.getElementById("lvl-easy");
const mediumBtn = document.getElementById("lvl-medium");
const difficultBtn = document.getElementById("lvl-difficult");

let tentative;
let maxNumber;
let randomNumber;

// Random Number
// const randomNumber = Math.floor(Math.random() * maxNumber + 1);
// console.log(randomNumber);

easyBtn.addEventListener("click", () => {
  document.getElementById("lvl-option").textContent = "1 - 10";
  easyBtn.disabled = true;
  mediumBtn.disabled = true;
  difficultBtn.disabled = true;
  tentative = 3;
  maxNumber = 10;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativeSpan.textContent = tentative;
});

mediumBtn.addEventListener("click", () => {
  document.getElementById("lvl-option").textContent = "1 - 100";
  easyBtn.disabled = true;
  mediumBtn.disabled = true;
  difficultBtn.disabled = true;
  tentative = 10;
  maxNumber = 100;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativeSpan.textContent = tentative;
});

difficultBtn.addEventListener("click", () => {
  document.getElementById("lvl-option").textContent = "1 - 1000";
  easyBtn.disabled = true;
  mediumBtn.disabled = true;
  difficultBtn.disabled = true;
  tentative = 15;
  maxNumber = 1000;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativeSpan.textContent = tentative;
});

// Button Go
document.getElementById("btn").addEventListener("click", () => {
  const chosenNumber = numberInput.valueAsNumber;

  if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > maxNumber) {
    message.textContent = "Invalid number";
  } else if (chosenNumber === randomNumber) {
    message.textContent = "Bingo";
    messageGamePara.textContent = "You Won";
    btn.disabled = true;
    restartBtn.style.display = "block";
  } else if (chosenNumber > randomNumber) {
    message.textContent = "It's too big";
    tentative--;
    tentativeSpan.textContent = tentative;
  } else {
    message.textContent = "It's too small";
    tentative--;
    tentativeSpan.textContent = tentative;
  }

  if (tentative === 0) {
    messageGamePara.textContent = "Game Over";
    btn.disabled = true;
    restartBtn.style.display = "block";
  }
});

//Button Restart the game
restartBtn.addEventListener("click", () => {
  location.reload();
});
