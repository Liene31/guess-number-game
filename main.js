const landingPageContainer = document.getElementById("landing-page");
const gameLogicContainer = document.getElementById("game-logic-container");

const tentativePara = document.getElementById("tentative-message");
const messageResult = document.getElementById("message-result");

const numberInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");

let tentative;
let maxNumber;
let randomNumber;

// If level easy pressed landing page disappears and game logic opens
document.getElementById("lvl-easy").addEventListener("click", () => {
  landingPageContainer.style.display = "none";
  gameLogicContainer.style.display = "block";

  tentative = 3;
  maxNumber = 10;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativePara.textContent = `You have ${tentative} tentative`;
});

// Button Guess
guessBtn.addEventListener("click", () => {
  const chosenNumber = numberInput.valueAsNumber;

  if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > maxNumber) {
    messageResult.textContent = "Invalid number";
  } else if (chosenNumber === randomNumber) {
    messageResult.textContent = "Bingo";
    messageResult.textContent = "You Won";
    guessBtn.disabled = true;
    restartBtn.style.display = "block";
  } else if (chosenNumber > randomNumber) {
    messageResult.textContent = "It's too big";
    tentative--;
    tentativePara.textContent = `You have ${tentative} tentative`;
  } else {
    messageResult.textContent = "It's too small";
    tentative--;
    tentativePara.textContent = `You have ${tentative} tentative`;
  }

  if (tentative === 0) {
    messageResult.textContent = "Game Over";
    guessBtn.disabled = true;
    restartBtn.style.display = "block";
  }
});
