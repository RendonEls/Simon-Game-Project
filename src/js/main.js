

const lights = document.querySelectorAll(".light")
const startGame = document.getElementById("startButton")
const restartGame = document.getElementById("restartButton")
const playerSelection = []
const colorArray = ["red", "green", "blue", "yellow"]
let turnCount = 0
const randomColorArray = randomColor() // array of randomcolors

startGame.addEventListener('click', playGame)


function randomColor(){
    const colorPattern = []
    for(i=0; i < lights.length + turnCount; i++){
        const randomValue = Math.floor(Math.random() * lights.length)
        colorPattern.push(lights[randomValue].id)
    }
    return colorPattern
}


function findColor(){  //pulls out each color from generateColors array then passes it as an argument through lightUpColor()
    let delay = 1000
    
    for (i = 0; i < randomColorArray.length; i++){
        const currentColor = randomColorArray[i]
        doTimer(currentColor, delay)
        delay += 1000
    }
}

// console.log(randomColorArray)
// console.log(lights[0].id)

// for each color
// light it up for 1 second
// then remove lightup
// then increase the delay of the next lightup
// then do next color

function doTimer(color, delay) {
    // set timeout
    const timer = setTimeout(() => {
        lightUpColor(color)
    }, delay)

    // delay = 1000
    // next timer starts at 2000


    // removeColor(color)

}

function lightUpColor(color) {
        const element = document.getElementById(color)
        element.style.backgroundColor = color
}

function removeColor(color){    //need to add a timer to this
    for(i=0; i<randomColorArray.length; i++){
        if(color === lights[i].id){
                console.log(lights[i].id) 
            }
        }
    }



function playGame(){
    setTimeout(findColor, 1000)
} 
