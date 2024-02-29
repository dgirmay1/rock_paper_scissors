function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === computerSelection){
        return "It's a tie!"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')){
        return `Player wins ${playerSelection} beats ${computerSelection}`

    } else {
        return `Computer wins ${computerSelection} beats ${playerSelection}`

    } 
}
  
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log(roundResult);
  
      // Update scores
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    // Determine the overall winner
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  playGame();