const divColorArray = document.querySelectorAll(".light");
const startGame = document.getElementById("startButton");
const restartGame = document.getElementById("restartButton");
const playerSelection = [];
const availableColors = ["red", "green", "blue", "yellow"];
let turnCount = 0;
const randomColorArray = makeRandomColor(); // array of randomcolors

startGame.addEventListener("click", playGame);
restartGame.addEventListener('click', restartListener)

function playGame() {
  setTimeout(iterateRandomColors, 1000);
}

function makeRandomColor() {
  const colorPattern = [];
  for (i = 0; i < divColorArray.length + turnCount; i++) {
    const randomValue = Math.floor(Math.random() * divColorArray.length);
    colorPattern.push(divColorArray[randomValue].id);
  }
  return colorPattern;
}

function iterateRandomColors() {
  //calls functiosn to add and remove color
  let delay = 1000;
  for (i = 0; i < randomColorArray.length; i++) {
    const currentColor = randomColorArray[i];
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
  //need to add a timer to this
  for (i = 0; i < randomColorArray.length; i++) {
    if (color === divColorArray[i].id) {
      divColorArray[i].classList.remove("shade");
      console.log(divColorArray[i], color);
    }
  }
}

