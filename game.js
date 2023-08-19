let playerScore = 0;
let computerScore = 0;
const WINNING_POINTS = 5;

function getComputerChoice() {
    let numberOneToThree = Math.floor(Math.random() * 3 + 1)
    const computerChoiceText = document.querySelector('.computerChoice');
    switch (numberOneToThree) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
        default:
            throw TypeError;
        }
        computerChoiceText.textContent = computerChoice;
        return computerChoice;
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
    const roundResult = document.querySelector('#roundResult');
    if (playerSelectionCapitalized === computerSelection) {
        console.log("Tie!");
        roundResult.textContent = "Tie!";
        return 0;
    }
    else if (playerSelectionCapitalized === "Rock" && computerSelection === "Paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        return 2;
    }
    else if (playerSelectionCapitalized === "Paper" && computerSelection === "Scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        return 2;
    }
    else if (playerSelectionCapitalized === "Scissors" && computerSelection === "Rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        return 2;
    }
    console.log(`You Win! ${playerSelectionCapitalized} beats ${computerSelection}`);
    playerScore++;
    roundResult.textContent = `You Win! ${playerSelectionCapitalized} beats ${computerSelection}`;
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

function checkWinner() {
    let message;
    if (playerScore === WINNING_POINTS) {
        message = "Congratulations! You won the game!";
    }
    else if (computerScore === WINNING_POINTS) {
        message = "The computer won. Better luck next time.";
    }
    else {
        return;
    }
    buttons.forEach((button) => {
        button.disabled = true;
    const finalScore = document.querySelector('#finalScore');
    finalScore.textContent = message;
    });
}

function displayCurrentScore() {
    const currentScoreDiv = document.querySelector('#currentScore');
    currentScoreDiv.textContent = `Current Score is ${playerScore} : ${computerScore}`;
}

displayCurrentScore();
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
    displayCurrentScore();
    checkWinner();
    });
});