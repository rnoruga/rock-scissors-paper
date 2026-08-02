function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);

  switch (randomInt) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("rock, paper or scissors?");
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let round = 1;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(
        `Round ${round}. Human: ${humanChoice} vs Computer: ${computerChoice}. Draw.`,
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(
        `Round ${round}. Human: ${humanChoice} vs Computer: ${computerChoice}. You win.`,
      );
      ++humanScore;
    } else {
      console.log(
        `Round ${round}. Human: ${humanChoice} vs Computer: ${computerChoice}. You lose.`,
      );
      ++computerScore;
    }

    ++round;
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(
      `Human: ${humanScore} | Computer: ${computerScore}. You win!`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Human: ${humanScore} | Computer: ${computerScore}. You lose!`,
    );
  } else {
    console.log(
      `Human: ${humanScore} | Computer: ${computerScore}. Draw!`,
    );
  }
}

playGame();