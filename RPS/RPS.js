let choices = ['rock', 'paper', 'scissors'];
let human = 'you win'
let computer = 'computer wins'
let tie = 'tie, play again'

function computerPlay(){
  let num = choices [Math.floor(Math.random() * 3)]
  return num
} 


function playRound(playerSelection, computerSelection){


}



let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');



function play(playerSelection) {
    const computerSelection = computerPlay()
    if (playerSelection === computerSelection){
        return tie;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return human;
    }
    if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return human; 
    }
    if (playerSelection === 'scissors'&& computerSelection === 'paper'){
        playerScore++
        return human;
    }
    else {
        computerScore++
        return computer;
    }

    
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return(button.id)
}

play();


console.log(play())