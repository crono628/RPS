let choices = ["rock", "paper", "scissors"];
let human = () => ("you win", playerScore++);
let computer = () => ("computer wins", computerScore++);
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
    playRound(playerSelection, computerSelection);

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
    console.log(playerScore)
    console.log(computerScore)
}

function endSeries() {
    if (playerScore === 5) {
        console.log("YOU WIN THE SERIES");
    }
    if (computerScore === 5) {
        console.log("YOU LOSE THE SERIES");
    }
    return false
}

let checkScore = () =>
    playerScore === 5 ? true : computerScore === 5 ? true : false;

function reset() {
    if (checkScore()) {
        playerScore = 0;
        computerScore = 0;
    }
}

function gameString() {
    let win = document.querySelector("#gameoverString");
    if (playerScore === 5) {
        win.textContent = "YOU ARE THE CHAMPION";
        reset();
        return true;
    }
    if (computerScore === 5) {
        win.textContent = "COMPUTER IS THE CHAMPION"
        reset();
        return true;
    }
    return false;
}