let choices = ['rock', 'paper', 'scissors'];

function computerPlay(){
  let num = choices [Math.floor(Math.random() * 3)]
  return num
} 


function playRound(playerSelection, computerSelection){
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

let human = 'you win'
let computer = 'computer wins'
let tie = 'tie, play again'
let playerScore = 0;
let computerScore = 0;



let i = 0;
let play = () => {
    let playerSelection = prompt('choose rock, paper, or scissors').toLowerCase();
    const computerSelection = computerPlay()
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("computer score = " + computerScore);
    console.log();
    i++;
    if (i !== 5) {
        play();
    } else {
        alert('GAME OVER\nyour score '+playerScore+' \ncomputer score '+computerScore+'');
    }
}

play();


