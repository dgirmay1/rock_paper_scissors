const buttons = document.querySelectorAll(".custom-button");
const currentScore = document.querySelector(".currentScore");
const result = document.querySelector(".result");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.dataset.player;
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);
    currentScore.style.cssText =
      "color: white; text-align: center; padding-top: 35px";
    currentScore.textContent = roundResult;

    if (roundResult.includes("player")) {
      playerScore++;
    } else if (roundResult.includes("computer")) {
      computerScore++;
    }

    result.style.cssText =
      "color: white; text-align: center; padding-top: 32px";
    result.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;

    if (playerScore == 5 || computerScore == 5) {
      endGame();
    }
  });
});

function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let computerIndex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[computerIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! ${playerSelection} ties ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win player! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You win computer! ${computerSelection} beats ${playerSelection}`;
  }
}

function endGame() {
  if (playerScore > computerScore) {
    result.innerHTML = "Congrats you win player!<br>";
  } else if (playerScore < computerScore) {
    result.innerHTML = "You lose! Computer wins!<br>";
  }
  result.innerHTML += "Refresh the page to play again";
}
