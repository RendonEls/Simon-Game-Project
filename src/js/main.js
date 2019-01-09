

const lights = document.querySelectorAll(".light")
const startGame = document.getElementById("startButton")
const restartGame = document.getElementById("restartButton")
// let colorChage = document.querySelector()
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

// console.log(generatedColors)

function findColor(){  //pulls out each color from generateColors array then passes it as an argument through lightUpColor()
    for (i = 0; i < generatedColors.length; i++){
        lightUpColor(generatedColors[i])
        removeColor(generatedColors[i])
        // setTimeout(function(){
        //     removeColor(generatedColors[i])}, 1500)
            // console.log(generatedColors[i])
    }
}

function lightUpColor(color) {           // passed in generatedColors[i]
    for(i=0; i<generatedColors.length; i++){
        if(color === lights[i].id){
            lights[i].style.background = color
            console.log(lights[i].id)
        }
    }
}
function removeColor(color){
    for(i=0; i<generatedColors.length; i++){
        console.log(lights[i].id)
        console.log(generatedColors)
        // console.log(generatedColors[i])
        if(color === lights[i].id){
            lights[i].style.opacity = .3
        }
    }  
}


function playGame(){
    setTimeout(findColor, 1000)
    setTimeout(removeColor, 2000)
    findColor()
} 

