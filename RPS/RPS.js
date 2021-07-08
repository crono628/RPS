let choices = ["rock", "paper", "scissors"];
let human = () => ("you win", reset(), playerScore++, newScore(), endSeries());
let computer = () => ("computer wins", reset(), computerScore++, newScore(), endSeries());
let tie = "tie, play again";
let playerScore = 0;
let computerScore = 0;
let round = 1;

document.getElementById("rock").onclick = game;
document.getElementById("paper").onclick = game;
document.getElementById("scissors").onclick = game;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id)
    });
});

console.log(buttons)

function computerPlay() {
    let num = choices[Math.floor(Math.random() * 3)];
    return num;
}

function game() {
    const playerSelection = this.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return tie;
        }
        if (playerChoice === "rock" && computerChoice === "scissors") {
            round++;
            return human();
        }
        if (playerChoice === "paper" && computerChoice === "rock") {
            round++;
            return human();
        }
        if (playerChoice === "scissors" && computerChoice === "paper") {
            round++;
            return human();
        } else {
            round++;
            return computer();
        }
    }
}

function newScore() {
    let scoreHuman = document.querySelector("#playerScore")
    scoreHuman.textContent = `Your score\n${playerScore}`
    let scoreComp = document.querySelector("#computerScore")
    scoreComp.textContent = `Computer score\n${computerScore}`
}

function reset() {
    if (endSeries()) {
        playerScore = 0;
        computerScore = 0;
        let end = document.querySelector("#gameOverString");
        end.textContent = ""
        return true
    }
    return false
}

function endSeries() {
    let end = document.querySelector("#gameOverString");
    if (playerScore >= 5) {
        end.textContent = "YOU ARE THE CHAMPION\nmake a choice to play again";
        return true
    }
    if (computerScore >= 5) {
        end.textContent = "COMPUTER IS THE CHAMPION\nmake a choice to play again"
        return true
    }
    return false;
}