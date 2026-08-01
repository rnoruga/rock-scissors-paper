function getComputerChoice() { 
let randomInt = Math.floor(Math.random() * 3); 

switch(randomInt) { 
case 0: return "rock"; 
case 1: return "paper";
case 2: return "scissors"; } 
}

console.log(getComputerChoice())

function getHumanChoice() {
    return prompt("rock, paper or scissors?")
}

console.log(getHumanChoice())