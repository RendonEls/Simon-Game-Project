

const lights = document.querySelectorAll(".light")
const startGame = document.getElementById("startButton")
const restartGame = document.getElementById("restartButton")

const playerSelection = []
const colorArray = ["red", "green", "blue", "yellow"]
let turnCount = 0
const generatedColors = randomColor()

startGame.addEventListener('click', playGame)
//     setTimeout(() => {
//         blue.style.background = "rgba(0,0,255,.7)"
//     }, time)

function randomColor(){
    const colorPattern = []
    for(i=0; i < lights.length + turnCount; i++){
        const randomValue = Math.floor(Math.random() * lights.length)
        colorPattern.push(lights[randomValue].id)
    }
    return colorPattern
}


function findColor(){  //pulls out each color from generateColors array runs findLight()
    for (i = 0; i < generatedColors.length; i++){
        lightUpColor(generatedColors[i])
    }
}

function lightUpColor(color) {           // passed in generatedColors[i]
    for(i=0; i<generatedColors.length; i++){
        if(color === lights[i].id){
            lights[i].style.background = color
        }
    }
}
// function removeLightUp(){
//     for(i=0; i<generatedColors.length; i++){
//         if()
//     }
// }

function playGame(){
    findColor()
}