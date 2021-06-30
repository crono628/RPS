let choices = ['rock', 'paper', 'scissors'];

function computerPlay(){
  let num = choices [Math.floor(Math.random() * 3)]
  return num
} 


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return tie;
    }
    if (playerSelection === 'rock'){
        playerScore++
        return human;
    }
    if (playerSelection === 'paper'){
        playerScore++
        return human; 
    }
    if (playerSelection === 'scissors'){
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
//let playerSelection = prompt(' Choose Rock, Paper, or Scissors').toLowerCase();
let playerScore = 0;
let computerScore = 0;



var i = 0;
let play = () => {
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        play();
    } else {
        alert("Game Over=> User("+playerScore+") vs Computer("+computerScore+")");
    }
}

play();


