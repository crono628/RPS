const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const selections = document.querySelector('.selections').childNodes;
const playerResults = document.querySelector('.player-results');
const computerResults = document.querySelector('.computer-results');
const playerScoreboard = document.querySelector('.player-scoreboard');
const computerScoreboard = document.querySelector('.computer-scoreboard');
const resetButton = document.querySelector('.reset-button');
const finalResult = document.querySelector('.tie-results');

let playerScore = 0;
let computerScore = 0;
let playerWinRound = null;
let gameOn = true;

//add event listeners for selections and reset button
selections.forEach((selection) => {
  selection.addEventListener('click', (e) => {
    game(e.target.className, computerMove());
  });
});

resetButton.addEventListener('click', reset);

//produce random player selection
function computerMove() {
  let randomNum = Math.floor(Math.random() * 3);
  let choices = ['rock', 'paper', 'scissors'];
  return choices[randomNum];
}

//end game logic
function determineWinner() {
  if (playerScore === 3) {
    finalResult.textContent = 'You win!';
    gameOn = false;
  }
  if (computerScore === 3) {
    finalResult.textContent = 'Computer wins!';
    gameOn = false;
  }
  if (gameOn) {
    resetButton.classList.add('game-on');
  } else {
    resetButton.classList.remove('game-on');
  }
}
determineWinner();

//things the need resetting to begin a new game
function reset() {
  playerScore = 0;
  computerScore = 0;
  computerScoreboard.textContent = `Computer: ${computerScore}`;
  playerScoreboard.textContent = `Player: ${playerScore}`;
  playerWinRound = null;
  gameOn = true;
  playerResults.textContent = '';
  computerResults.textContent = '';
  finalResult.textContent = '';
  determineWinner();
}

//game logic
function game(player, computer) {
  if (!gameOn) {
    return;
  } else {
    playerResults.textContent = player;
    computerResults.textContent = computer;
    playerWinRound = null;
    if (player === computer) {
      document.querySelector('.tie-results').textContent = 'Tie!';
      playerResults.classList.remove('winner');
      computerResults.classList.remove('winner');
      return;
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      document.querySelector('.tie-results').textContent = '';
      playerScore++;
      playerScoreboard.textContent = `Player: ${playerScore}`;
      playerWinRound = true;
      playerResults.classList.add('winner');
      computerResults.classList.remove('winner');
      determineWinner();
    } else {
      document.querySelector('.tie-results').textContent = '';
      computerScore++;
      computerScoreboard.textContent = `Computer: ${computerScore}`;
      playerWinRound = false;
      computerResults.classList.add('winner');
      playerResults.classList.remove('winner');
      determineWinner();
    }
  }
}
