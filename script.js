let computerScore = 0
let humanScore = 0

function getComputerChoice() { 
let randomInt = Math.floor(Math.random() * 3); 

switch(randomInt) { 
case 0: return "rock"; 
case 1: return "paper";
case 2: return "scissors"; } 
}

// console.log(getComputerChoice())

function getHumanChoice() {
    return prompt("rock, paper or scissors?")
}

// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        console.log("Draw! Nobody wins");
        console.log(`Human: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
}   else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        ++humanScore;
        console.log(`Human: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
}   else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
    ++computerScore;
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);