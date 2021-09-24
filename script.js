const choiceBtn = document.querySelectorAll('[data-choice]')
const announcement = document.querySelector('.announcement')
const body = document.querySelector('.for-blur')
const popupText = document.querySelector('.popup-text')
const popup = document.querySelector('.popup')
const playerTally = document.querySelector('[data-player]')
const computerTally = document.querySelector('[data-computer]')
const playerDiv = document.querySelector('.player-div')
const computerDiv = document.querySelector('.computer-div')
const restartBtn = document.querySelector('.restart')

let gameOn = true
let playerScore = 0
let computerScore = 0

choiceBtn.forEach(button => {
  button.addEventListener('click', () => {
    const buttonChoice = button.dataset.choice
    let computerChoice = computerPlay()
    playerDiv.appendChild(recordSelection(buttonChoice))
    computerDiv.appendChild(recordSelection(computerChoice))
    playRound(buttonChoice, computerChoice)
  })
})

restartBtn.onclick = () => restartGame()

function restartGame() {
  playerScore = 0
  computerScore = 0
  body.classList.remove('blur')
  popupText.style.display = 'none'
  popup.style.display = 'none'
  announcement.textContent = ''
  playerTally.textContent = '0'
  computerTally.textContent = '0'
  while (playerDiv.firstChild) {
    playerDiv.removeChild(playerDiv.firstChild);
  }
  while (computerDiv.firstChild) {
    computerDiv.removeChild(computerDiv.firstChild);
  }
}

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)];
}

function checkGameOn() {
  if (playerScore == 5) {
    gameOn = false
    body.classList.add('blur')
    popupText.style.display = 'flex'
    popup.style.display = 'flex'
    popupText.textContent = 'YOU ARE THE CHAMPION!'
  } else if (computerScore == 5) {
    gameOn = false
    body.classList.add('blur')
    popupText.style.display = 'flex'
    popup.style.display = 'flex'
    popupText.textContent = 'THE COMPUTER HAS DEFEATED YOU'
  } else {
    return
  }
}

function playRound(player, computer) {
  if (gameOn === false) {
    return
  }
  else if (player === computer) {
    announcement.textContent = 'Tie! Play again'
  }
  else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer == 'rock') || (player === 'scissors' && computer === 'paper')) {
    announcement.textContent = 'You win this round!'
    playerScore++
    playerTally.textContent = `${playerScore}`
    checkGameOn()
  }
  else if ((computer === 'rock' && player === 'scissors') || (computer === 'paper' && player == 'rock') || (computer === 'scissors' && player === 'paper')) {
    announcement.textContent = 'The computer wins this round!'
    computerScore++
    computerTally.textContent = `${computerScore}`
    checkGameOn()
  } else {
    return
  }
}

function recordSelection(a) {
  const div = document.createElement('div')
  div.setAttribute('id', 'record')
  div.textContent = `${a}`
  return div
}