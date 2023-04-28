const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");

// Function to generate computer's move
function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
}

// Function to determine winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Event listeners for the buttons
rockButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const resultText = playRound("rock", computerSelection);
  result.textContent = resultText;
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const resultText = playRound("paper", computerSelection);
  result.textContent = resultText;
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const resultText = playRound("scissors", computerSelection);
  result.textContent = resultText;
});