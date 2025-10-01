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
  initGame("easy");
});

// If level medium pressed landing page disappears and game logic opens
document.getElementById("lvl-medium").addEventListener("click", () => {
  initGame("medium");
});

// If level difficult pressed landing page disappears and game logic opens
document.getElementById("lvl-difficult").addEventListener("click", () => {
  initGame("difficult");
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
    tentativePara.style.display = "none";
  } else if (chosenNumber > randomNumber) {
    messageResult.style.display = "block";
    messageResult.textContent = "It's too big";
    tentative--;
    tentativePara.textContent = ` ${"".padEnd(tentative * 2, "💀")} `; // changed
  } else {
    messageResult.style.display = "block";
    messageResult.textContent = "It's too small";
    tentative--;
    tentativePara.textContent = ` ${"".padEnd(tentative * 2, "💀")} `; //changed
  }

  if (tentative === 0) {
    messageResult.style.display = "block";
    messageResult.textContent = "Game Over";
    guessBtn.disabled = true;
    newGameBtn.style.display = "block";
  }

  document.forms[0].reset();
});

// Button Guess on Enter
numberInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    guessBtn.click();
  }
});

//Button Restart the game
newGameBtn.addEventListener("click", () => {
  location.reload();
});

// With a below comment we give an extra information of each function
//It's functionality and type it expects
//When calling the function later, it shows that information

/**
 * Generate a random value
 * @returns {number}
 */
function generateNumber() {
  return Math.floor(Math.random() * maxNumber + 1);
}

/**
 * Initialize game
 * @param {string} level
 */
function initGame(level) {
  landingPageContainer.style.display = "none";
  gameLogicContainer.style.display = "flex";

  if (level === "easy") {
    characterImage.src = "./images/dwarf.png";
    tentative = 3;
    maxNumber = 10;
  } else if (level === "medium") {
    characterImage.src = "./images/elf.png";
    tentative = 10;
    maxNumber = 100;
  } else {
    characterImage.src = "./images/halfling.png";
    tentative = 15;
    maxNumber = 1000;
  }

  randomNumber = generateNumber();
  console.log(randomNumber);
  tentativePara.textContent = ` ${"".padEnd(tentative * 2, "💀")} `;
}
