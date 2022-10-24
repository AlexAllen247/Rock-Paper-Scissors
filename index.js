let playerCount = 0
let computerCount = 0
let winner = ""

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = "Tie"
    } else if
    ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerCount++
        winner = "Player"
    } else {
        computerCount++
        winner = "Computer"
    }
}
function game() {
    for (i = 1; i <= 5; i++) {
        console.log(playRound(prompt('Select: ROCK | PAPER | SCISSORS'), getComputerChoice()))
    }
    if (playerCount > computerCount) {
        return "You won! :D"
    } else if (playerCount < computerCount) {
        return "You lost :("
    } else {
        return 'It\'s a tie :/'
    }
}

console.log(game())