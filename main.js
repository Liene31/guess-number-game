const landingPageContainer = document.getElementById("landing-page");
const gameLogicContainer = document.getElementById("game-logic-container");

const tentativePara = document.getElementById("tentative-message");
const messageResult = document.getElementById("message-result");
const characterImage = document.getElementById("character-img");

const numberInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const newGameBtn = document.getElementById("new-game-btn");

let tentative;
let maxNumber;
let randomNumber;

// If level easy pressed landing page disappears and game logic opens
document.getElementById("lvl-easy").addEventListener("click", () => {
  landingPageContainer.style.display = "none";
  gameLogicContainer.style.display = "flex";
  characterImage.src = "./images/dwarf.png";

  tentative = 3;
  maxNumber = 10;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativePara.textContent = `You have ${tentative} tentative`;
});

// If level medium pressed landing page disappears and game logic opens
document.getElementById("lvl-medium").addEventListener("click", () => {
  landingPageContainer.style.display = "none";
  gameLogicContainer.style.display = "flex";
  characterImage.src = "./images/elf.png";

  tentative = 10;
  maxNumber = 100;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativePara.textContent = `You have ${tentative} tentative`;
});

// If level difficult pressed landing page disappears and game logic opens
document.getElementById("lvl-difficult").addEventListener("click", () => {
  landingPageContainer.style.display = "none";
  gameLogicContainer.style.display = "flex";
  characterImage.src = "./images/halfling.png";

  tentative = 15;
  maxNumber = 1000;
  randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  tentativePara.textContent = `You have ${tentative} tentative`;
});

// Button Guess
guessBtn.addEventListener("click", () => {
  const chosenNumber = numberInput.valueAsNumber;

  if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > maxNumber) {
    messageResult.style.display = "block";
    messageResult.textContent = "Invalid number";
  } else if (chosenNumber === randomNumber) {
    messageResult.style.display = "block";
    messageResult.textContent = "You Won";
    guessBtn.disabled = true;
    newGameBtn.style.display = "block";
  } else if (chosenNumber > randomNumber) {
    messageResult.style.display = "block";
    messageResult.textContent = "It's too big";
    tentative--;
    tentativePara.textContent = `You have ${tentative} tentative`;
  } else {
    messageResult.style.display = "block";
    messageResult.textContent = "It's too small";
    tentative--;
    tentativePara.textContent = `You have ${tentative} tentative`;
  }

  if (tentative === 0) {
    messageResult.style.display = "block";
    messageResult.textContent = "Game Over";
    guessBtn.disabled = true;
    newGameBtn.style.display = "block";
  }

  document.forms[0].reset();
});

//Button Restart the game
newGameBtn.addEventListener("click", () => {
  location.reload();
});
