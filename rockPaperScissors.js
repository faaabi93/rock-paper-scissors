var computerScore = 0;
var humanScore = 0;
var playerGerman;
var computerGerman;

const winner = document.querySelector("#winner");
const currentScore = document.querySelector("#currentScore");
const scorePara = document.querySelector("#score");
const buttons = document.querySelectorAll(".game");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

function computerRound() {
    array = ["rock", "paper", "scissors"]
    return array[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    if (computerScore >= 5 || humanScore >= 5) {
        return;
    }
    console.log(e);
    const playerSelection = "e.path[1].id";
    const computerSelection = computerRound();

    if (playerSelection === "rock") {
        playerGerman = "Stein";
    } else if (playerSelection === "scissors") {
        playerGerman = "Schere";
    } else if (playerSelection === "paper") {
        playerGerman = "Papier";
    };

    if (computerSelection === "rock") {
        computerGerman = "Stein";
    } else if (computerSelection === "scissors") {
        computerGerman = "Schere";
    } else if (computerSelection === "paper"){
        computerGerman = "Papier"
    }

    if (playerSelection === computerSelection) {
        winner.textContent = "Unentschieden!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        winner.textContent = `Der Computer wählte ${computerGerman} und gewinnt damit gegen ${playerGerman}!`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        winner.textContent = `Der Computer wählte ${computerGerman} und gewinnt damit gegen ${playerGerman}!`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        winner.textContent = `Der Computer wählte ${computerGerman} und gewinnt damit gegen ${playerGerman}!`;
    } else {
        humanScore += 1;
        winner.textContent = `Der Computer wählte ${computerGerman} und verliert damit gegen ${playerGerman}!`;
    }
    const para = document.createElement("p");
    para.textContent = `Mensch: ${humanScore} - Computer: ${computerScore}`
    para.classList.add("small-text");
    scorePara.appendChild(para);
    if (computerScore >= 5) {
        winner.textContent = "Der Computer hat gewonnen!";        
    } else if (humanScore >= 5) {
        winner.textContent = "Der Mensch hat gewonnen!";
    }

    currentScore.textContent = `Mensch ${humanScore} - ${computerScore} Computer`;
}