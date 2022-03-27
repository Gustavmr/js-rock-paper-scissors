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
        return ["You Lose! Rock beats scissors",0,1];
    } else if (computerPlay === "paper") {
        return ["You Win! Scissors beats paper",1,0];
    } else if (computerPlay === "scissors") {
        return ["You Tie! Both chose scissors",0,0];
    } else {
        return "Play not valid!"
    }
}

function rockOutput (computerPlay) {
    if (computerPlay === "rock") {
        return ["You Tie! Both chose rock",0,0];
    } else if (computerPlay === "paper") {
        return ["You Lose! Paper beats rock",0,1];
    } else if (computerPlay === "scissors") {
        return ["You Win! Rock beats scissors",1,0];
    } else {
        return ["Play not valid!",0,0];
    }
}



function paperOutput (computerPlay){
    if (computerPlay === "rock") {
        return ["You Win! Paper beats rock",1,0];
    } else if (computerPlay === "paper") {
        return ["You Tie! Both chose pzpdf",0,0];
    } else if (computerPlay === "scissors") {
        return ["You Lose! Scissors beats paper",0,1];
    } else {
        return "Play not valid!";
    }
}


function playRock () {
    let computerSelection = computerPlay();
    if (computerSelection === "rock") return ["You Tie! Both chose rock",0,0];
    if (computerSelection === "paper") return ["You Lose! Paper beats rock",0,1];
    if (computerSelection === "scissors") return ["You Win! Rock beats scissors",1,0];
    return "Play not valid!";
}

function playPaper (){
    let computerSelection = computerPlay();
    if (computerSelection === "rock") return "You Win! Paper beats rock";
    if (computerSelection === "paper") return "You Tie! Both chose paper";
    if (computerSelection === "scissors") return "You Lose! Scissors beats paper";
    return "Play not valid!";
    
}

function playScissors () {
    let computerSelection = computerPlay();
    if (computerSelection === "rock") return "You Lose! Rock beats scissors";
    if (computerSelection === "paper") return "You Win! Scissors beats paper";
    if (computerSelection === "scissors") return "You Tie! Both chose scissors";
    return "Play not valid!"
    
}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const outcome = document.querySelector("div.outcome");
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore") 
const winner = document.querySelector("#winner") 

function gameOutcome (outcomeArray) {
    if (playerScore.textContent >= 5 || computerScore.textContent >= 5)  return; 
    let text = outcomeArray[0];
    let playerOutcome = outcomeArray[1];
    let computerOutcome = outcomeArray[2];
    console.log(text);
    outcome.textContent = text;
    playerScore.textContent = playerScore.textContent*1 + playerOutcome;
    computerScore.textContent = computerScore.textContent*1 + computerOutcome;
    if (playerScore.textContent >= 5) {winner.textContent = "Player Wins!"; return};
    if (computerScore.textContent >= 5) {winner.textContent = "Computer Wins!"; return}; 
}

// rock.addEventListener("click", () => outcome.textContent = playRound("rock",computerPlay())) ;
rock.addEventListener("click", () => gameOutcome(playRound("rock",computerPlay())));
paper.addEventListener("click", () => gameOutcome(playRound("paper",computerPlay()))) ;
scissors.addEventListener("click", () => gameOutcome(playRound("scissors",computerPlay()))) ;


