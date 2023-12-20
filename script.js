function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    if(computerChoice == 0){
        return "rock";
    }

    else if(computerChoice ==1 ){
        return "paper";
    }
    else {
        return "scissors"
    }
}


function determineWinner(computerChoice, playerChoice){
    if(computerChoice=='rock' && playerChoice=='paper'){
        return 'player';
    }
    if(computerChoice=='rock' && playerChoice=='scissors'){
        return 'computer';
    }
    if(computerChoice=='rock' && playerChoice=='rock'){
        return 'draw';
    }
    if(computerChoice=='paper' && playerChoice=='paper'){
        return 'draw';
    }
    if(computerChoice=='paper' && playerChoice=='rock'){
        return 'computer';
    }
    if(computerChoice=='paper' && playerChoice=='scissors'){
        return 'player';
    }
    if(computerChoice=='scissors' && playerChoice=='paper'){
        return 'computer';
    }
    if(computerChoice=='scissors' && playerChoice=='rock'){
        return 'player';
    }
    if(computerChoice=='scissors' && playerChoice=='scissors'){
        return 'draw';
    }
    
}
function singleRound(computerChoice, playerChoice){
    const winner = determineWinner(computerChoice, playerChoice);
    alert("Computer chose "+computerChoice+ ". You chose "+playerChoice+".\n")
    if(winner == 'player'){
        alert("Congratulations! You have won, as "+playerChoice+" beats "+computerChoice+".\n")
        return winner;
        }
    if(winner == 'computer'){
        alert("Tough luck! You lose, as "+computerChoice+" beats "+playerChoice+".\n")
        return winner;
        }
    if(winner == "draw"){
        alert("It's a draw! Try again!")    
    }
}

function getMaxRounds(){
    let number = prompt("Welcome to Rock, Paper, Scissors! You can play best of X. Please specify X.");
    number = Number(number);
    if (isNaN(number)){
        alert("That is not a number! Please provide a number.");
        return getMaxRounds();
    }
    else if(number<1){
        alert("Come now, the number must be positive!")
        return getMaxRounds();
    }
    else if(number%2==0){
        alert("We must declare a winner! Choose an odd number.")
        return getMaxRounds();
    }
    else {
        return number;
    }
    //return number;
    
}

function game(){
    const best_of_x = getMaxRounds();
    const max_wins = Math.floor((best_of_x+1)/2)
    let computerCounter = 0;
    let playerCounter = 0;
    while(computerCounter<max_wins && playerCounter<max_wins){
        let winner = singleRound(getComputerChoice(), getPlayerChoice());
        if (winner == 'player'){
            playerCounter++;
        }
        else if (winner == 'computer'){
            computerCounter++;
        }
        if (computerCounter<max_wins && playerCounter<max_wins){
            alert("Current score: you - "+playerCounter+". Computer - "+computerCounter+".");
        }
        
    }
    let final_score = "Final score: you - "+playerCounter+". Computer - "+computerCounter+".";
    if (playerCounter>computerCounter){
        alert("YOU ARE THE CHAMPION! CONGRATULATIONS! "+final_score);
    }
    else if (playerCounter<computerCounter){
        alert("Better luck next time! "+final_score);
    }
    let playAgain = prompt("Want to play again? Y/N");
    if (playAgain=="Y"){
        game(getMaxRounds());
    }
    else if (playAgain=="N"){
        alert("Alright. Thank you for playing!");
    }
    else {
        alert("Please only choose Y or N.");
        game(getMaxRounds());
    }

}

//game();

function createMessageBox(){
    const messageBox = document.createElement('div');
    container.appendChild(messageBox);
    return messageBox;
}

function createButtonBox(){
    const buttonBox = document.createElement('div');
    buttonBox.classList.add('buttonBox');
    container.appendChild(buttonBox);
    return buttonBox;
}

function createMessage(box,text){
    const message = document.createElement('h2');
    message.classList.add("message");
    message.textContent = text;
    box.appendChild(message);
}


function createButtons(box){
    const rockButton = document.createElement('button');
    rockButton.textContent = "ROCK";
    box.appendChild(rockButton);
    
    const paperButton = document.createElement('button');
    paperButton.textContent = "PAPER";
    box.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = "SCISSORS";
    box.appendChild(scissorsButton);

    return [rockButton, paperButton, scissorsButton]

}

function chooseRock(){
    messageBox.removeChild(messageBox.firstChild);
    createMessage(messageBox, "Siema siema o tej porze kazdy wypic moze");
    singleRound(getComputerChoice(),"rock");
}

const container = document.querySelector('#container');
let welcomeMessage = "Welcome! You know the rules. Click one to start playing!";
const messageBox = createMessageBox();
const buttonBox = createButtonBox();
createMessage(messageBox, welcomeMessage);
const buttonsArray = createButtons(buttonBox);
const rockButton = buttonsArray[0];
const paperButton = buttonsArray[1];
const scissorsButton = buttonsArray[2];

rockButton.addEventListener('click', chooseRock)

//skonczylem na tym ze da sie rozegrac runde klikajac na guzik