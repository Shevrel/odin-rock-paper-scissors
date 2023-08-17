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
    return 0 if its a draw, return 1 if player wins, return 2 if the computer wins
    */
    let playerSelectionCapitalized;
    playerSelectionCapitalized = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()
    if (playerSelectionCapitalized === computerSelection) {
        console.log("Tie!");
        return 0;
    }
    else if (playerSelectionCapitalized === "Rock" && computerSelection === "Paper") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        return 2;
    }
    else if (playerSelectionCapitalized === "Paper" && computerSelection === "Scissors") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        return 2;
    }
    else if (playerSelectionCapitalized === "Scissors" && computerSelection === "Rock") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        return 2;
    }
    console.log(`You Win! ${playerSelectionCapitalized} beats ${computerSelection}`);
    return 1; 
}

function game(numberOfGames) {  
    let playerScore = 0;
    let computerScore = 0;
    // for(let i = 0; i < numberOfGames; i++) {
    //     let outcome = playRound(getPlayerChoice(), getComputerChoice());
    //     if (outcome === 1) {
    //         playerScore++;
    //     }
    //     else if (outcome === 2) {
    //         computerScore++;
    //     }
    // }
    // playRound(getPlayerChoice(), getComputerChoice());
    console.log(`The score is:`)
    console.log(`Player: ${playerScore}`)
    console.log(`Computer: ${computerScore}`)

    if (playerScore === computerScore) {
        console.log(`The ${numberOfGames} round match ended in a tie!`);
    }
    else if (playerScore > computerScore) {
        console.log(`Congratulation! You won the ${numberOfGames} round match!`);
    }
    else if (playerScore < computerScore) {
        console.log(`Better luck next time! The computer won the ${numberOfGames} round match`);
    }
    return;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice())
    });
});

// game(5);