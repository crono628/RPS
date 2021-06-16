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
    playerScore++
  return "you win"
  }else if (playerSelection == 'paper' && computerSelection == 'rock'){
    playerScore++
    return "you win"
  }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    playerScore++
    return "you win"
  }else if{
    computerScore++
    return "you lose"
  } else return "Invalid Entry"
}

function game() {
  while (playerScore <= 5 && computerScore <= 5) {
    let playerSelection = prompt(' Enter Rock, Paper, or Scissors');
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    alert(playRound(playerSelection, computerSelection));
  }
  alert(winner());
}

function winner(){
  if (playerScore == 5){
    return "You won the game!"
  }  
  if (computerScore == 5) 
    return "Computer wins the game!"
  }
}

//const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
console.log(playerScore)
console.log(computerScore)
