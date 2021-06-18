let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
  let num = choices [Math.floor(Math.random() * choices.length)]
  return num
}

//game()

function playRound(playerSelection, computerSelection) {
  do{
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
  }else if (playerSelection !== 'rock'|| 'paper'|| 'scissors'){
    return "Invalid Entry"
  }else
    computerScore++
    return "you lose"
}
while (playerScore < 5) || (computerScore < 5)
}



//function game()
  

let playerSelections = prompt(' Choose Rock, Paper, or Scissors');
let computerSelections = computerPlay();
let playerSelection = playerSelections.toLowerCase();
let computerSelection = computerSelections.toLowerCase();

//const playerSelection = "rock";
//const computerSelection = computerPlay();
    
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore)
console.log(computerScore)
console.log(playerSelection)
console.log(computerSelection)