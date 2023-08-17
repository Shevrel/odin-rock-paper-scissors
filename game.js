let playerScore = 0;
let computerScore = 0;
const WINNING_POINTS = 5;

function getComputerChoice() {
    let numberOneToThree = Math.floor(Math.random() * 3 + 1)
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
        if (input === "rock" || input === "paper" || input === "scissors") {
            return input[0].toUpperCase() + input.substring(1);
        }
    }
}

function playRound(playerSelection, computerSelection) {
    /*
    Play a round of rock paper scissors and determine a potential winner
    return 0 if its a draw, return 1 if player wins, return 2 if computer wins
    */
    let playerSelectionCapitalized;
    playerSelectionCapitalized = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()
    if (playerSelectionCapitalized === computerSelection) {
        console.log("Tie!");
        return 0;
    }
    else if (playerSelectionCapitalized === "Rock" && computerSelection === "Paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        return 2;
    }
    else if (playerSelectionCapitalized === "Paper" && computerSelection === "Scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        return 2;
    }
    else if (playerSelectionCapitalized === "Scissors" && computerSelection === "Rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        return 2;
    }
    console.log(`You Win! ${playerSelectionCapitalized} beats ${computerSelection}`);
    playerScore++;
    return 1; 
}

function getSingleGameResult(outcome) {
    switch (outcome) {
        case 0:
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
        default:
            break;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    let outcome = playRound(button.id, getComputerChoice());
    console.log(playerScore + " : " + computerScore);
    checkWinner();
    });
});

function checkWinner() {
    if (playerScore === WINNING_POINTS) {
        console.log("You win");
    }
    else if (computerScore === WINNING_POINTS) {
        console.log("Computer wins");
    }
    else {
        return;
    }
    buttons.forEach((button) => {
        button.disabled = true;
    });
}