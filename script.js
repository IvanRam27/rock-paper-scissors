//PSEUDOCODE
//get choice from user and store it in a string
//get computer choice and store it in a string
//compare user's and computer's choice and define who wins
//tell the user what was the computer's choice and who won

let computerChoice = getComputerChoice()

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.33)
    return "Rock"
    
    if (randomNumber >= 0.33 && randomNumber < 0.66)
    return "Paper"

    return "Scissors"
}

console.log(computerChoice)