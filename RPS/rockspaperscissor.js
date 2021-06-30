let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

game()

function computerPlay(){
  let num = choices [Math.floor(Math.random() * choices.length)]
  return num
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
  return "tie, play again"
  }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++
    return "you win"
  }else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++
    return "you win"
  }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++
    return "you win"
  }else 
    computerScore++
    return "you lose"
}



function game(){
  return (playerScore == 5) ? "you are the champion":(computerScore == 5) ? "admit defeat"
}



let playerSelection = prompt(' Choose Rock, Paper, or Scissors').toLowerCase();
let computerSelection = computerPlay();
 
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore)
console.log(computerScore)
console.log(playerSelection)
console.log(computerSelection)