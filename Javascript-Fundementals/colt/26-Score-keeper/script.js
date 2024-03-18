let playerOneScore = document.querySelector(".playerOneScore")
let playerTwoScore = document.querySelector(".playerTwoScore")
let totalRounds = document.querySelector("#rounds .totalRounds")
const playerButtonOne = document.querySelector("#buttonGroup .playerButtonOne")
const playerButtonTwo = document.querySelector("#buttonGroup .playerButtonTwo")
const resetButton = document.querySelector("#buttonGroup .resetButton")
let playerOneS = 0
let playerTwoS = 0

function play() {
  playerButtonOne.addEventListener("click", function(e) {
  playerOneScore.textContent = `${parseInt(playerOneScore.textContent)+1}`
  playerOneS ++
  updateScore(playerOneS, playerTwoS)
  })
 playerButtonTwo.addEventListener("click", function(e) {
  playerTwoScore.textContent = `${parseInt(playerTwoScore.textContent)+1}`
  playerTwoS ++
  updateScore(playerOneS, playerTwoS)
  })
}
play()

function updateScore(playerOneS, playerTwoS){

  if(playerOneS == totalRounds.value || playerTwoS == totalRounds.value){
    playerButtonOne.classList.toggle("disabled")
    playerButtonTwo.classList.toggle("disabled")
    if (playerOneS > playerTwoS){
      playerOneScore.classList.add("winner")
      playerTwoScore.classList.add("looser")
    } else 
    { playerTwoScore.classList.add("winner")
    playerOneScore.classList.add("looser")
  }
}
}

const reset = () => {
  playerOneScore.textContent = '0'
  playerTwoScore.textContent = '0'
  playerOneS = 0
  playerTwoS = 0
  playerButtonOne.classList.remove("disabled")
  playerButtonTwo.classList.remove("disabled")
  playerOneScore.classList.remove("winner", "looser")
  playerTwoScore.classList.remove("winner", "looser")
}

resetButton.addEventListener("click", reset)