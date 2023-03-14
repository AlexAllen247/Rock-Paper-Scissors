let playerScore = 0;
let computerScore = 0;
let winner = "";

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    winner = "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    winner = "Player";
  } else {
    computerScore++;
    winner = "Computer";
  }
  updateScore();
  displayResult();
}

function updateScore() {
  let scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function displayResult() {
  let resultDiv = document.querySelector("#result");
  if (winner === "Tie") {
    resultDiv.textContent = `It's a tie! You both chose ${playerSelection}.`;
  } else {
    resultDiv.textContent = `${winner} wins! ${playerSelection} beats ${computerSelection}.`;
  }
  if (playerScore === 5 || computerScore === 5) {
    let finalResult =
      playerScore > computerScore ? "You win!" : "Computer wins!";
    resultDiv.textContent += ` Game over. ${finalResult}`;
    disableButtons();
  }
}

function disableButtons() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

let rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

let paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

let scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});
