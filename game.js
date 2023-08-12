function getComputerChoice() {
    let numberOneToThree = Math.floor(Math.random() * 3 + 1)
    let computerChoice;
    switch (numberOneToThree) {
        case 1:
            return computerChoice = "Rock";
        case 2:
            return computerChoice = "Paper";
        case 3:
            return computerChoice = "Scissors";
        default:
            return "";
    }
}

function getPlayerChoice() {
    let input;
    while (true) {
        input = prompt("Your choice: Rock, Paper, Scissors").toLowerCase();
        console.log(input)
        if (input === "rock" || input === "paper" || input === "scissors") {
            return input[0].toUpperCase() + input.substring(1);
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

// console.log(getComputerChoice());
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));