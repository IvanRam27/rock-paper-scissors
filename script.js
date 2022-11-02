//PSEUDOCODE
//get choice from user and store it in a string
//get computer choice and store it in a string
//compare user's and computer's choice and define who wins
//tell the user what was the computer's choice and who won

let computerSelection = getComputerChoice()
let playerSelection = prompt("Welcome to Rock, Paper & Scissors!", "Choose")

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.33)
    return "rock"
    
    if (randomNumber >= 0.33 && randomNumber < 0.66)
    return "paper"

    return "scissors"
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

    if (playerSelection === computerSelection)
    return ("It's a tie!")

    if (playerSelection == "rock" && computerSelection == "scissors")
    return("You Win! Rock beats Scissors")

    if (playerSelection == "rock" && computerSelection == "paper")
    return("You Lose! Paper beats Rock")

    if (playerSelection == "paper" && computerSelection == "rock")
    return("You Win! Paper beats Rock")

    if (playerSelection == "paper" && computerSelection == "scissors")
    return("You Lose! Scissors beats Paper")

    if (playerSelection == "scissors" && computerSelection == "paper")
    return("You Win! Scissors beats Paper")

    if (playerSelection == "scissors" && computerSelection == "rock")
    return("You Lose! Rock beats Scissors")


    }

    return ("Please enter rock, paper or scissors")
   
}

console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection))

