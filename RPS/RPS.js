let choices = ["rock", "paper", "scissors"];
let human = "you win";
let computer = "computer wins";
let tie = "tie, play again";
let playerScore = 0;
let computerScore = 0;
let round = 1;

document.getElementById("rock").onclick = game;
document.getElementById("paper").onclick = game;
document.getElementById("scissors").onclick = game;

function computerPlay() {
  let num = choices[Math.floor(Math.random() * 3)];
  return num;
}

function game() {
  let playerSelection = this.id;

  const computerSelection = computerPlay();

  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      round++;
      checkScore();
      endSeries();
      return tie;
    }
    if (playerChoice === "rock" && computerChoice === "scissors") {
      playerScore++;
      round++;
      checkScore();
      endSeries();
      return human;
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
      playerScore++;
      round++;
      checkScore();
      endSeries();
      return human;
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
      playerScore++;
      round++;
      checkScore();
      endSeries();
      return human;
    } else {
      computerScore++;
      round++;
      checkScore();
      endSeries();
      return computer;
    }
  }

  function endSeries() {
    if (playerScore === 5) {
      console.log("YOU WIN THE SERIES");
      reset();
    }
    if (computerScore === 5) {
      console.log("YOU LOSE THE SERIES");
      reset();
    }
  }
  console.log(playerScore);
  console.log(computerScore);
  let checkScore = () =>
    playerScore === 5 ? true : computerScore === 5 ? true : false;

  function reset() {
    if (checkScore()) {
      playerScore = 0;
      computerScore = 0;
    }
  }

  console.log("player: " + playerSelection);
  console.log("computer: " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  console.log(" ---------------- ");
}
