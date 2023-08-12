function getComputerChoice() {
    let numberOneToThree = Math.floor(Math.random() * 3 + 1)
    let computerChoice;
    switch (numberOneToThree) {
        case 1:
            return computerChoice = "rock";
        case 2:
            return computerChoice = "paper";
        case 3:
            return computerChoice = "scissors";
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
            return input;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let roundOutcomeMessage;
    if (playerSelection === computerSelection) {
        return "Tie!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
    
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

// console.log(getComputerChoice());
getPlayerChoice()
