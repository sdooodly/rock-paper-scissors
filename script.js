const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
window.onload = () => {
  document.getElementById("popup").style.display = "block";
  yesBtn.onclick = () =>
    (document.getElementById("popup").style.display = "none");
  noBtn.onclick = () => alert("Haha psych! Click 'Yes' please! (;");
};

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const result = document.getElementById("result");
const yourScore = document.getElementById("yourScoreCell");
const computerScore = document.getElementById("computerScoreCell");
const yct = document.getElementById("ycText");
const cct = document.getElementById("ccText");
let ys = 0;
let cs = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "paper"
    : "scissors";
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) return "It is a tie! Badamtush!";
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      ys++;
      return "Rock beats scissors, you win!";
    } else {
      cs++;
      return "Paper beats rock, you lose!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      ys++;
      return "Paper beats rock, you win!";
    } else {
      cs++;
      return "Scissors beat paper, you lose!";
    }
  } else {
    if (computerSelection === "rock") {
      cs++;
      return "Rock beats scissors, you lose!";
    } else {
      ys++;
      return "Scissors beat paper, you win!";
    }
  }
};

const handleButtonClick = (playerSelection) => {
  const computerSelection = getComputerChoice();
  const resultText = playRound(playerSelection, computerSelection);
  yct.textContent = `${playerSelection}`;
  cct.textContent = `${computerSelection}`;
  result.textContent = resultText;
  yourScore.textContent = ys;
  computerScore.textContent = cs;
  document.getElementById("yourChoiceImg").src = `./images/${playerSelection}.png`;
  document.getElementById("computerChoiceImg").src = `./images/${computerSelection}.png`;
};

rockButton.addEventListener("click", () => handleButtonClick("rock"));
paperButton.addEventListener("click", () => handleButtonClick("paper"));
scissorsButton.addEventListener("click", () => handleButtonClick("scissors"));
