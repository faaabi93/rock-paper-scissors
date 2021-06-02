console.log("Hallo Welt!");

function computerPlay() {
    var arr = ["Rock", "Paper", "Scissors"];
    var rand = Math.floor(Math.random() * 3);
    return arr[rand];
}

function playRound(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerSelection.toLowerCase();

    /*console.log(playerSelection);
    console.log(computerSelection);*/

    if (playerSelection === computerSelection) {
        return "Draw!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return `You won! ${playerSelection} beats ${computerSelection}`;
        }
    
    return `You lost! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    for (var i = 0; i < 5; i++) {
        var computerSelection = computerPlay();
        var playerSelection = window.prompt("Enter your selection!");
        console.log(playRound(computerSelection, playerSelection));
    }
}

game()