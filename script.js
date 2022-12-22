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
let round = 0

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.33)
    return "rock"
    
    if (randomNumber >= 0.33 && randomNumber < 0.66)
    return "paper"

    return "scissors"
}

function playRound (playerSelection) {
    computerSelection = getComputerChoice()

    round += 1

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
}

function gameScore(scoreMessage) {


    if(scoreMessage.substr(4,3) === "Win") {
        playerScore += 1
        return("Round " + round + ": " + " Score is " + playerScore + "-" + computerScore)
    }
  
    if(scoreMessage.substr(4,4) === "Lose") {
        computerScore += 1
        return("Round " + round + ": " + " Score is " + playerScore + "-" + computerScore)
    }
  
    if(scoreMessage.substr(7,3) === "Tie") {
        return("Round " + round + ": " + " Score is " + playerScore + "-" + computerScore)
    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener, and a function to play a round based on button selection    
    button.addEventListener('click', function() {
        const result = document.querySelector('#result')
        result.textContent = playRound(button.id)
        const scoreStatus = document.querySelector('#scoreStatus')
        scoreStatus.textContent = gameScore(result.textContent)
        if (round === 5) {
            if(playerScore > computerScore)
            scoreStatus.textContent = "You Win the Game! The Final Score is " + playerScore + "-" + computerScore + ". Click a Button to Play Again"
    
            if(playerScore < computerScore)
            scoreStatus.textContent = "You Lose the Game! The Final Score is " + playerScore + "-" + computerScore + ". Click a Button to Play Again"
            
            if(playerScore == computerScore)
            scoreStatus.textContent = "Game ends in a Tie! The Final Score is " + playerScore + "-" + computerScore + ". Click a Button to Play Again"

            round = 0
            playerScore = 0
            computerScore = 0
        }
        
    });
});



