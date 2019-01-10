const divColorArray = document.querySelectorAll(".light");
const startGame = document.getElementById("startButton");
const restartGame = document.getElementById("restartButton");

const playerSelection = [];
let currentLevel = 1;



let numberGenerator = function(){
    for (i = 0; i < divColorArray.length; i++){
    return Math.floor(Math.random() * divColorArray.length)
}
}



let randomValue = numberGenerator()
let clickCount = 0;
const randomColorArray = makeRandomColor(); // array of randomcolors

console.log(randomValue)
console.log(randomColorArray)
console.log(playerSelection)

startGame.addEventListener("click", playGame);
restartGame.addEventListener('click', restartListener)

function restartListener() {
    location.reload()
}

function playGame() {
  setTimeout(iterateRandomColors, 1000);
}
 //at level 1 create an array of 4 random colors 
 //at level > 1 add 1 more color to that array

function makeRandomColor() {
  const colorPattern = [];
//   const randomValue = Math.floor(Math.random() * divColorArray.length);
  if(currentLevel === 1){
      for (i = 0; i < divColorArray.length; i++) {
          colorPattern.push(divColorArray[randomValue].id);
        } 
    }else if (currentLevel > 1){
        colorPattern.push(divColorArray[randomValue].id)
    }
  return colorPattern;
}


function iterateRandomColors() {
  //calls functiosn to add and remove color
  let delay = 1000;
  console.log(randomColorArray)
  for (i = 0; i < randomColorArray.length; i++) {
    const currentColor = randomColorArray[i];
    console.log(currentColor)
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
  //need to add a timer to this
  for (i = 0; i < randomColorArray.length; i++) {
    if (color === divColorArray[i].id) {
      divColorArray[i].classList.remove("shade");
      console.log(divColorArray[i].id);
    }
  }
}

divColorArray.forEach((color) => color.addEventListener('click', playerAttempt))


function playerAttempt(event) {
    playerClickInput = event.target.id;
    playerSelection.push(playerClickInput)
    console.log(playerSelection)
    checkPlayerSelection()
}


function checkPlayerSelection(){
        if (playerSelection[clickCount] === randomColorArray[clickCount]){
            clickCount+=1
            checkWinSelectionLength()
        } else{ alert("try again")
    }
}

function checkWinSelectionLength(){
    if( clickCount === randomColorArray.length){
        console.log("move to the next level")
        // levelProgression()
        currentLevel++
        //run winhandler function to progress level
    } 
}



// function levelProgression(){
//     const randomValue = Math.floor(Math.random() * divColorArray.length) //or * currentLevel?
//     randomColorArray.push(divColorArray[randomValue].id)
//     currentLevel++
//     console.log(currentLevel)
//     playGame()
// }
