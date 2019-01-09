

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
    for (i = 0; i < randomColorArray.length; i++){
        const currentColor = randomColorArray[i]
        // const revertColor = removeColor(currentColor)
        lightUpColor(currentColor)
        // setTimeout(revertColor, 2000)
    }
}

// console.log(randomColorArray)
// console.log(lights[0].id)

function lightUpColor(color) {           // passed in randomColorArray[i]
    for(i=0; i<randomColorArray.length; i++){
        // console.log(color, lights[i].id)
        if(color === lights[i].id){
            console.log(color, lights[i].id)
            console.log(lights[i])
            lights[i].style.backgroundColor = color
        }
    }
}
function removeColor(color){
    for(i=0; i<randomColorArray.length; i++){

        if(color === lights[i].id){

            lights[i].style.opacity = .3
        }
    }  
}


function playGame(){
    setTimeout(findColor, 1000)
} 

