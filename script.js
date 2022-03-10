const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const selections = document.querySelector('.selections').childNodes;
const playerResults = document.querySelector('.player-results');
const computerResults = document.querySelector('.computer-results');
const playerScoreboard = document.querySelector('.player-scoreboard');
const computerScoreboard = document.querySelector('.computer-scoreboard');

let playerScore = 0;
let computerScore = 0;
let playerWinRound = null;
let history = [];

selections.forEach((selection) => {
  selection.addEventListener('click', (e) => {
    game(e.target.className, computerMove());
  });
});

function computerMove() {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ['rock', 'paper', 'scissors'];
  return choices[randomNum];
}

function showHistory() {
  renderResults(playerResults);
  renderResults(computerResults);
  history.forEach((item) => {
    let newDiv = document.createElement('div');
    newDiv.textContent = item.player;
    playerResults.appendChild(newDiv);
  });
  history.forEach((item) => {
    let newDiv = document.createElement('div');
    newDiv.textContent = item.computer;
    computerResults.appendChild(newDiv);
  });
}

function renderResults(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function game(player, computer) {
  playerWinRound = null;
  history.unshift({ player: player, computer: computer });
  if (player === computer) {
    return;
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    playerScore++;
    playerScoreboard.textContent = `Player: ${playerScore}`;
    playerWinRound = true;
  } else {
    computerScore++;
    computerScoreboard.textContent = `Player: ${computerScore}`;
    playerWinRound = false;
  }
  showHistory();
  playerWinRound === true
    ? playerResults.firstChild.classList.add('winner')
    : playerWinRound === false
    ? computerResults.firstChild.classList.add('winner')
    : null;
}
