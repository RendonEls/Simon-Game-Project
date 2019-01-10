const divColorArray = document.querySelectorAll(".light");
const startGame = document.getElementById("startButton");
const restartGame = document.getElementById("restartButton");

let playerSelection = [];
let currentLevel = 1;
let clickCount = 0;
let randomColorPattern = [];

startGame.addEventListener("click", playGame);
restartGame.addEventListener("click", restartListener);

function restartListener() {
  location.reload();
}

function playGame() {
  makeRandomColor();
  setTimeout(iterateRandomColors, 1000);
}

function makeRandomColor() {
  if (currentLevel === 1) {
    console.log("First level");
    randomColorPattern = [];
    for (i = 0; i < divColorArray.length; i++) {
      let randomValue = Math.floor(Math.random() * divColorArray.length);
      randomColorPattern.push(divColorArray[randomValue].id);
    }
  } else {
    console.log("else loop");
    let randomNumber = Math.floor(Math.random() * divColorArray.length);
    randomColorPattern.push(divColorArray[randomNumber].id);
  }
  return randomColorPattern;
}

function iterateRandomColors() {
  let delay = 1000;
  for (i = 0; i < randomColorPattern.length; i++) {
    const currentColor = randomColorPattern[i];
    addColorTimer(currentColor, delay);
    removeColorTimer(currentColor, delay);
    delay += 1000;
  }
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

divColorArray.forEach(color => color.addEventListener("click", playerClickInput));

function playerClickInput(event) {
  playerClickInput = event.target.id;
  playerSelection.push(playerClickInput);
  console.log(playerSelection);
  checkPlayerSelection();
}

function checkPlayerSelection() {
  if (playerSelection[clickCount] === randomColorPattern[clickCount]) {
    clickCount += 1;
    checkWinSelectionLength();
  } else {
    alert("try again");
    //function to add text to game board 
  }
}

function checkWinSelectionLength() {
  if (clickCount === randomColorPattern.length) {
    console.log("move to the next level");
    //call function that adds level to gameboard
    currentLevel++;
    console.log(currentLevel);
    playerSelection = [];
    clickCount = 0;
    playGame();
  }
}
console.log(currentLevel);


//function that adds level to gameboard