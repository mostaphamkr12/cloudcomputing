// Options for the game
const RPC = {
  Rock: "rock",
  Paper: "paper",
  Scissors: "scissors",
};

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// DOM elements
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function getRandomComputerResult() {
  const options = Object.values(RPC);
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === RPC.Rock && computer === RPC.Scissors) ||
    (player === RPC.Scissors && computer === RPC.Paper) ||
    (player === RPC.Paper && computer === RPC.Rock)
  );
}

function playRound(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

function displayResults(userOption) {
  roundResultsMsg.innerText = playRound(userOption);
  updateScores();

  if (playerScore === 3 || computerScore === 3) {
    displayWinner();
  }
}

function updateScores() {
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
}

function displayWinner() {
  winnerMsgElement.innerText = `${
    playerScore === 3 ? "Player" : "Computer"
  } has won the game!`;

  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "flex";
}

// Event listeners for options and reset button
resetGameBtn.addEventListener("click", resetGame);

document.getElementById("rock-btn").addEventListener("click", () => displayResults(RPC.Rock));
document.getElementById("paper-btn").addEventListener("click", () => displayResults(RPC.Paper));
document.getElementById("scissors-btn").addEventListener("click", () => displayResults(RPC.Scissors));
