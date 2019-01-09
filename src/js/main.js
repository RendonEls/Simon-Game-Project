

const divColorArray = document.querySelectorAll(".light")
const startGame = document.getElementById("startButton")
const restartGame = document.getElementById("restartButton")
const playerSelection = []
const availableColors = ["red", "green", "blue", "yellow"]
let turnCount = 0
const randomColorArray = makeRandomColor() // array of randomcolors
startGame.addEventListener('click', playGame)

function playGame(){
    setTimeout(iterateRandomColors, 1000)
} 

function makeRandomColor(){
    const colorPattern = []
    for(i=0; i < divColorArray.length + turnCount; i++){
        const randomValue = Math.floor(Math.random() * divColorArray.length)
        colorPattern.push(divColorArray[randomValue].id)
    }
    return colorPattern
}

function iterateRandomColors(){ //calls functiosn to add and remove color
    let delay = 1000
    for (i = 0; i < randomColorArray.length; i++){
        const currentColor = randomColorArray[i]
        addColorTimer(currentColor, delay)
        removeColorTimer(currentColor, delay)
        delay += 1000
    }
}
// for each color
// light it up for 1 second
// then remove lightup
// then increase the delay of the next lightup
// then do next color

function addColorTimer(color, delay) {
    const addlightTimer = setTimeout(() => {
        addColor(color)
    }, delay)
}

function removeColorTimer(color, delay){
    const removeLightTimer = setTimeout(() => {
        removeColor(color)
    }, delay + 1000)
}

function addColor(color) {
        const element = document.getElementById(color)
        element.style.backgroundColor = color
        console.log
}

function removeColor(color){    //need to add a timer to this
    for(i=0; i<randomColorArray.length; i++){
        if(color === divColorArray[i].id){
            divColorArray[i].style.opacity = .3
            console.log(divColorArray[i], color)
            }
        }
    }


    //currently opacity is .3
    //adds solid color over rgba
    //adds opacity as a seperate style //blocks repeat solid