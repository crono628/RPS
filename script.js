const choiceBtn = document.querySelectorAll('[data-choice]')
const announcement = document.querySelector('.announcement')
const body = document.querySelector('.for-blur')
const popup = document.querySelector('#popup')
const playerTally = document.querySelector('[data-player]')
const computerTally = document.querySelector('[data-computer]')
const playerSpan = document.querySelector('.player-span')
const computerSpan = document.querySelector('.computer-span')
const playerDiv = document.createElement('div')
const computerDiv = document.createElement('div')

let gameOn = true
let playerScore = 0
let computerScore = 0



choiceBtn.forEach(item => {
  item.addEventListener('click', () => {
    const buttonChoice = item.dataset.choice
    playRound(buttonChoice, computerPlay())
  })
})

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)];
}

function checkGameOn() {
  if (playerScore == 5) {
    gameOn = false
    body.classList.add('blur')
    popup.style.display = 'flex'
    popup.textContent = 'YOU ARE THE CHAMPION!'
  } else if (computerScore == 5) {
    gameOn = false
    body.classList.add('blur')
    popup.style.display = 'flex'
    popup.textContent = 'THE COMPUTER HAS DEFEATED YOU'
  } else {
    return
  }
}

function playRound(player, computer) {
  if (gameOn == false) {
    return
  } else if (player == computer) {
    announcement.textContent = 'Tie! Play again'
  } else if (player == 'rock' && computer == 'scissors') {
    announcement.textContent = 'You win this round!'
    playerScore++
    playerTally.textContent = `${playerScore}`
    recordSelections(player, computer)
    checkGameOn()
  } else if (player == 'paper' && computer == 'rock') {
    announcement.textContent = 'You win this round!'
    playerScore++
    playerTally.textContent = `${playerScore}`
    recordSelections(player, computer)
    checkGameOn()
  } else if (player == 'scissors' && computer == 'paper') {
    announcement.textContent = 'You win this round!'
    playerScore++
    playerTally.textContent = `${playerScore}`
    recordSelections(player, computer)
    checkGameOn()
  } else {
    announcement.textContent = 'The computer wins this round!'
    computerScore++
    computerTally.textContent = `${computerScore}`
    recordSelections(player, computer)
    checkGameOn()
  }

}

function recordSelections (a, b){
playerDiv.style.border = 'black solid'
playerTally.appendChild(playerDiv)
playerDiv.textContent = `${playerDiv.textContent += a}`
computerTally.appendChild(computerDiv)
computerDiv.textContent = `${computerDiv.textContent += b}`
}