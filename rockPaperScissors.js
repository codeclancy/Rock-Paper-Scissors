//Computer Choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3), computerChoice;
    if (choice === 0) {
        return "Rock"
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// //Human Choice
function getHumanChoice (input) {
    input = window.prompt("Choose Rock, Paper, Or Scissors");
    return input.toLowerCase();
}

// //Play a round
let humanScore = 0, computerScore = 0;
function playRound(computerChoice,humanChoice) {
    if (computerChoice === "Rock" && humanChoice === "rock") {
        return "Draw! Rock ties rock!";
    } else if (computerChoice === "Rock" && humanChoice === "paper") {
        humanScore += 1;
        return "Human wins round! Paper beats rock!";
    } else if (computerChoice === "Rock" && humanChoice === "scissors") {
        computerScore += 1;
        return "Computer wins round! Rock beats scissors";
    } else if (computerChoice === "Paper" && humanChoice === "rock") {
        computerScore += 1;
        return "Computer wins round! Paper beats rock!";
    } else if (computerChoice === "Paper" && humanChoice === "paper") {
        return "Draw! Paper ties paper!";
    } else if (computerChoice === "Paper" && humanChoice === "scissors") {
        humanScore += 1;
        return "Human wins round! Scissors beats paper!";
    } else if (computerChoice === "Scissors" && humanChoice === "rock") {
        humanScore += 1;
        return "Human wins round! Rock beats Scissors!";
    } else if (computerChoice === "Scissors" && humanChoice === "paper") {
        computerScore += 1;
        return "Computer wins round! Scissors beats paper";
    } else if (computerChoice === "Scissors" && humanChoice === "scissors") {
        return "Tie! Scissors beats scissors!";
    }
    console.log(computerScore,humanScore);
    return computerScore, humanScore;
}


//Play to 5 rounds

function playGame() {
    do {
        let result = playRound(getComputerChoice(),getHumanChoice());
        console.log(result);
        console.log(`Human : ${humanScore}, Computer: ${computerScore}`);
    } while (humanScore < 3 && computerScore < 3);
    if (humanScore > computerScore) {
        return `Human wins! Human : ${humanScore}, Computer: ${computerScore}`;
    } else {
        return `Computer wins! Human : ${humanScore}, Computer: ${computerScore}`;
    }
}
console.log(playGame());