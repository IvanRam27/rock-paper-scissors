//PSEUDOCODE
//get choice from user and store it in a string
//get computer choice and store it in a string
//compare user's and computer's choice and define who wins
//tell the user what was the computer's choice and who won

let computerSelection
let playerSelection 
let playerScore = 0
let computerScore = 0
let scoreMessage

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
    return ("It's a Tie!")

    if (playerSelection == "rock" && computerSelection == "scissors")
    return("You Win! Rock beats Scissors.")

    if (playerSelection == "rock" && computerSelection == "paper")
    return("You Lose! Paper beats Rock.")

    if (playerSelection == "paper" && computerSelection == "rock")
    return("You Win! Paper beats Rock.")

    if (playerSelection == "paper" && computerSelection == "scissors")
    return("You Lose! Scissors beats Paper.")

    if (playerSelection == "scissors" && computerSelection == "paper")
    return("You Win! Scissors beats Paper.")

    if (playerSelection == "scissors" && computerSelection == "rock")
    return("You Lose! Rock beats Scissors.")


    }

    return ("Please enter rock, paper or scissors.")
   
}

function game() {
    for(let i = 1; i <= 5; i++){
        playerSelection = prompt("Welcome to Rock, Paper & Scissors!", "Choose")
        computerSelection = getComputerChoice()
 	    scoreMessage =playRound(playerSelection, computerSelection)
  
        if(scoreMessage.substr(4,3) === "Win") {
            playerScore += 1
            console.log("Round " + i + ": " + scoreMessage + " Score is " + playerScore + "-" + computerScore)
        }
  
        if(scoreMessage.substr(4,4) === "Lose") {
            computerScore += 1
            console.log("Round " + i  + ": " + scoreMessage + " Score is " + playerScore + "-" + computerScore)
        }
  
        if(scoreMessage.substr(7,3) === "Tie") {
            console.log("Round " + i  + ": " + scoreMessage + " Score is " + playerScore + "-" + computerScore)
        }
	
        if(scoreMessage.substr(4,1) === "s") {
            console.log(scoreMessage)
            i -= 1
        }
    }
    if (playerScore > computerScore)
    return "You Win the Game!"
 
    if(computerScore > playerScore)
    return "You Lose the Game!"
 
    return "The Game is a tie!"
 
}

console.log(game())