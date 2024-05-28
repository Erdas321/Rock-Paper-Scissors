let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = "";
    const array = ["rock", "paper", "scissors"];
    choice = array[Math.floor(Math.random() * 3)]
    return choice;
}


function getHumanChoice() {
    let choice = prompt("Make your choice: rock, paper, or scissors").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    
    console.log(`You choose ${humanChoice} : Computer chooses ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats Rock.");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beats Paper.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats Scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper");
    }
}

const playGame = () => {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game");
    } else if (humanScore === computerScore) {
        console.log("5 ties in a row ? Impossible...");
    } else {
        console.log("You lost the game, sad for you...");
    }

    console.log(`Your score ${humanScore} : Computer's score ${computerScore}`);
}



playGame();
