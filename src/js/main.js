const divColorArray = document.querySelectorAll(".light");
const startGame = document.getElementById("startButton");
const restartGame = document.getElementById("restartButton");

let playerSelection = [];
let currentLevel = 1;
let clickCount = 0;
let colorPattern = [];

startGame.addEventListener("click", playGame);
restartGame.addEventListener("click", restartListener);

function restartListener() {
  location.reload();
}
function playGame() {
  makeRandomColor();
  console.log(colorPattern);
  setTimeout(iterateRandomColors, 1000);
}

function makeRandomColor() {
  if (currentLevel === 1) {
        console.log("hi");
        colorPattern = [];
        for (i = 0; i < divColorArray.length; i++) {
            let randomValue = Math.floor(Math.random() * divColorArray.length);
            colorPattern.push(divColorArray[randomValue].id);
        }
    } else {
            console.log("hi else");
            let randomNumber = Math.floor(Math.random() * divColorArray.length);
            colorPattern.push(divColorArray[randomNumber].id);
            console.log(colorPattern);
        }
  return colorPattern;
}

function iterateRandomColors() {
  //calls functiosn to add and remove color
  let delay = 1000;
  for (i = 0; i < colorPattern.length; i++) {
    const currentColor = colorPattern[i];
    addColorTimer(currentColor, delay);
    removeColorTimer(currentColor, delay);
    delay += 1000;
  }
  //   checkPlayerSelection()
}

function addColorTimer(color, delay) {
  const addlightTimer = setTimeout(() => {
    addColor(color);
  }, delay);
}

function removeColorTimer(color, delay) {
  const removeLightTimer = setTimeout(() => {
    removeColor(color);
  }, delay + 900);
}

function addColor(color) {
const element = document.getElementById(color);
element.classList.add("shade");
}

function removeColor(color) {
for (i = 0; i < divColorArray.length; i++) {
    if (color === divColorArray[i].id) {
    divColorArray[i].classList.remove("shade");
    console.log(divColorArray[i].id);
    }
}
}

divColorArray.forEach(color => color.addEventListener("click", playerAttempt));

function playerAttempt(event) {
  playerClickInput = event.target.id;
  playerSelection.push(playerClickInput);
  console.log(playerSelection);
  checkPlayerSelection();
}

function checkPlayerSelection() {
  if (playerSelection[clickCount] === colorPattern[clickCount]) {
    clickCount += 1;
    checkWinSelectionLength();
  } else {
    alert("try again");
  }
}

function checkWinSelectionLength() {
  if (clickCount === colorPattern.length) {
    console.log("move to the next level");
    currentLevel++;
    console.log(currentLevel);
    playerSelection = []
    clickCount = 0
    playGame();
  }
}
console.log(currentLevel);
