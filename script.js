window.onload = function() {
  document.getElementById("popup").style.display = "block";
  
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.onclick = function() {
      document.getElementById("popup").style.display = "none";
  };
  
  const noBtn = document.getElementById("noBtn");
  noBtn.onclick = function() {
      alert("Haha psych! Click 'Yes' please! (;");
  };
};


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");

// Function to generate computer's move
function getComputerChoice() {
  // To generate number b/w 0-2
  const randomNumber = Math.floor(Math.random() * 3)
  const returned = randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors'
  return returned
}

// Function to determine the winner of each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return 'It is a tie! Badamtush!'
  } else if (playerSelection.toLowerCase() === 'rock') {
    return computerSelection === 'scissors'
      ? 'Rock beats scissors, you win!'
      : 'Paper beats rock, you lose!'
  } else if (playerSelection.toLowerCase() === 'paper') {
    return computerSelection === 'rock'
      ? 'Paper beats rock, you win!'
      : 'Scissors beat paper, you lose!'
  } else {
    return computerSelection === 'rock'
      ? 'Rock beats scissors, you lose!'
      : 'Scissors beat paper, you win!'
  }
}

// Event listeners for the buttons
rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const resultText = playRound("rock", computerSelection);
  result.textContent = resultText;
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const resultText = playRound("paper", computerSelection);
  result.textContent = resultText;
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const resultText = playRound("scissors", computerSelection);
  result.textContent = resultText;
});