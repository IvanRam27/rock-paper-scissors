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
    if (randomNumber >= 0 && randomNumber < 0.33){
        document.getElementById("imgid").src="icons/rock.png";    
        return "rock"
    }

    if (randomNumber >= 0.33 && randomNumber < 0.66){
        document.getElementById("imgid").src="icons/paper.png"
        return "paper"
    }

    document.getElementById("imgid").src="icons/scissors.png"
    return "scissors"
}

function playRound (playerSelection) {
    computerSelection = getComputerChoice()

    round += 1

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

    if (playerSelection === computerSelection)
    return ("It's a tie!")

    if (playerSelection == "rock" && computerSelection == "scissors")
    return("You win! Rock beats Scissors.")

    if (playerSelection == "rock" && computerSelection == "paper")
    return("You lose! Paper beats Rock.")

    if (playerSelection == "paper" && computerSelection == "rock")
    return("You win! Paper beats Rock.")

    if (playerSelection == "paper" && computerSelection == "scissors")
    return("You lose! Scissors beats Paper.")

    if (playerSelection == "scissors" && computerSelection == "paper")
    return("You win! Scissors beats Paper.")

    if (playerSelection == "scissors" && computerSelection == "rock")
    return("You lose! Rock beats Scissors.")
    }   
}

function gameScore(scoreMessage) {


    if(scoreMessage.substr(4,3) === "win") {
        playerScore += 1
        return("Round " + round + ": " + " Score is " + playerScore + "-" + computerScore)
    }
  
    if(scoreMessage.substr(4,4) === "lose") {
        computerScore += 1
        return("Round " + round + ": " + " Score is " + playerScore + "-" + computerScore)
    }
  
    if(scoreMessage.substr(7,3) === "tie") {
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
            scoreStatus.textContent = "You win the game! The final score is " + playerScore + "-" + computerScore + ". Click a button to play again"
    
            if(playerScore < computerScore)
            scoreStatus.textContent = "You lose the game! The final score is " + playerScore + "-" + computerScore + ". Click a button to play again"
            
            if(playerScore == computerScore)
            scoreStatus.textContent = "Game ends in a tie! The final score is " + playerScore + "-" + computerScore + ". Click a button to play again"

            round = 0
            playerScore = 0
            computerScore = 0
        }
        
    });
});



