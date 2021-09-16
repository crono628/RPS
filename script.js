const choiceBtn = document.querySelectorAll('[data-choice]')
const announcement = document.querySelector('.announcement')
const body = document.querySelector('.for-blur')
const popup = document.querySelector('#popup')
const playerTally = document.querySelector('[data-player]')
const computerTally = document.querySelector('[data-computer]')
let gameOn = true
let playerScore = 0
let computerScore = 0

choiceBtn.forEach(item => {
    item.addEventListener('click', () => {
        const buttonChoice = item.dataset.choice
        playRound(buttonChoice, computerPlay())
        console.log(`computer ${computerScore}`)
        console.log(`player ${playerScore}`)
        console.log('----')
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
        popup.style.display = 'block'
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
        checkGameOn()
    } else if (player == 'paper' && computer == 'rock') {
        announcement.textContent = 'You win this round!'
        playerScore++
        playerTally.textContent = `${playerScore}`
        checkGameOn()
    } else if (player == 'scissors' && computer == 'paper') {
        announcement.textContent = 'You win this round!'
        playerScore++
        playerTally.textContent = `${playerScore}`
        checkGameOn()
    } else {
        announcement.textContent = 'The computer wins this round!'
        computerScore++
        computerTally.textContent = `${computerScore}`
        checkGameOn()
    }

}