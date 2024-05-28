
const prompt = require('prompt-sync')();

function getComputerChoice() {
    let choice = "";
    const array = ["rock", "paper", "scissors"];
    choice = array[Math.floor(Math.random() * 3)]
    return choice;
}


function getHumanChoice() {
    let choice = "";
    prompt(choice);
}


console.log(getComputerChoice());
getHumanChoice()