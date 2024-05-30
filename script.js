const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = "";
    const array = ["rock", "paper", "scissors"];
    choice = array[Math.floor(Math.random() * 3)]
    return choice;
}



const playRound = (humanChoice) => {

    let computerChoice = getComputerChoice();
    
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

    result.innerText = `Your score ${humanScore} : Opponent's score ${computerScore}`;

    if (humanScore === 5) {
        result.innerText += "\n" + "Congratulations! You are the winner!";
        humanScore = 0;
        computerScore = 0;
    } 
    else if (computerScore === 5) {
        result.innerText += "\n" + "Sorry...you lost. Better luck next time!";
        humanScore = 0;
        computerScore = 0;
    }
}

rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));






