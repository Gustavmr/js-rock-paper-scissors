const playerSelection = "rock";
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game () {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = window.prompt("write rock, paper or scissors")
        let gameResult = playRound(playerSelection,computerPlay());
        if (gameResult[4] === "W") {playerScore = playerScore + 1;} 
        else if  (gameResult[4] === "L") {computerScore = computerScore+1;}
        console.log(gameResult);
        // console.log(gameResultKey);
    }
    let winnerMessage = "Tie"
    if (playerScore > computerScore) {
        winnerMessage = "You win!";} 
    else if (playerScore < computerScore) {
        winnerMessage = "Computer wins!";} 
    console.log(winnerMessage);
    console.log(playerScore);
    console.log(computerScore);
}


function computerPlay () {
    let numberSelection = Math.ceil(Math.random()*3);
    let textSelection = "no selection";
    switch (numberSelection) {
        case 1: textSelection = "rock"; 
        break;
        case 2: textSelection = "paper"; 
        break;
        case 3: textSelection = "scissors"; 
        break;
        default: textSelection = "there was an error";
    }
    return textSelection
}

function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let outcome = "initial";
    switch (player) {
        case "rock": outcome = rockOutput(computer); 
        break;
        case "scissors": outcome = scissorsOutput(computer); 
        break;
        case "paper": outcome = paperOutput(computer); 
        break;
        default: outcome = "there was an error";
    }
    return outcome;
}

function scissorsOutput (computerPlay) {
    if (computerPlay === "rock") {
        return "You Lose! Rock beats scissors";
    } else if (computerPlay === "paper") {
        return "You Win! Scissors beats paper";
    } else if (computerPlay === "scissors") {
        return "You Tie! Both chose scissors";
    } else {
        return "Play not valid!"
    }
}

function rockOutput (computerPlay) {
    if (computerPlay === "rock") {
        return "You Tie! Both chose rock";
    } else if (computerPlay === "paper") {
        return "You Lose! Paper beats rock";
    } else if (computerPlay === "scissors") {
        return "You Win! Rock beats scissors";
    } else {
        return "Play not valid!";
    }
}

function paperOutput (computerPlay){
    if (computerPlay === "rock") {
        return "You Win! Paper beats rock";
    } else if (computerPlay === "paper") {
        return "You Tie! Both chose pzpdf";
    } else if (computerPlay === "scissors") {
        return "You Lose! Scissors beats paper";
    } else {
        return "Play not valid!";
    }
}