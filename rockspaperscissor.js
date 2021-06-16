let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
  let num = choices [Math.floor(Math.random() * choices.length)]
  return num
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
  return "tie, play again"
  }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
  return "you win"
  }else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return "you win"
  }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return "you win"
  }else {
    return "you lose"
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


