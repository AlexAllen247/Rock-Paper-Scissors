let playerCount = 0
let coumputerCount = 0
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
        coumputerCount++
        winner = "Computer"
    }
}
function game() {
    
}