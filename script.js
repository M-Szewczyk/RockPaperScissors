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

function createMessageBox(){
    const messageBox = document.createElement('div');
    messageBox.classList.add('messageBox');
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

function clearMessageBox(messageBox){
    while (messageBox.firstChild){
        messageBox.removeChild(messageBox.lastChild);
    }
}

function clearButtonBox(buttonBox){
    while (buttonBox.firstChild){
        buttonBox.removeChild(buttonBox.lastChild);
    }
}

function createButtons(){
    const rockButton = createButton(buttonBox,"ROCK", chooseRock);
    const paperButton = createButton(buttonBox, "PAPER", choosePaper);
    const scissorsButton = createButton(buttonBox, "SCISSORS", chooseScissors);
}

function createButton(box,buttonText, func){
    const button = document.createElement('button');
    button.textContent = buttonText;
    box.appendChild(button);
    button.addEventListener('click',func);
    return button;
}

function chooseRock(){
    const winner = singleRound(getComputerChoice(),"rock");
    addWinToCounter(winner);
    showScore(messageBox);
}

function choosePaper(){
    const winner = singleRound(getComputerChoice(),"paper");
    addWinToCounter(winner);
    showScore(messageBox);
}

function chooseScissors(){
    const winner = singleRound(getComputerChoice(),"scissors");
    addWinToCounter(winner);
    showScore(messageBox);
}

function addWinToCounter(winner){
    if (winner=='player'){
        playerCounter++;
    }
    if (winner=='computer'){
        computerCounter++;
    }
}

function showScore(messageBox){
    let scoreMessage = "Current score: you - "+playerCounter+", computer - " +computerCounter +".\n";
    createMessage(messageBox, scoreMessage);
    if (playerCounter == 5){
        let playerWonMessage = "Yay, you're the champion! Congrats!";
        createMessage(messageBox, playerWonMessage);
        endGame();
    }
    else if (computerCounter == 5){
        let computerWonMessage = "Oh no! It seems that you have lost. Better luck next time!";
        createMessage(messageBox,computerWonMessage);
        endGame();
    }
}

function endGame(){
    clearButtonBox(buttonBox);
    continueButton = createButton(buttonBox, "Continue");
    continueButton.addEventListener('click', askToPlayAgain);
}

function askToPlayAgain(){
    clearMessageBox(messageBox);
    createMessage(messageBox, "Would you like to play again?");
    clearButtonBox(buttonBox);
    const yesButton = createButton(buttonBox, "Yes");
    const noButton = createButton(buttonBox, "No");
    noButton.addEventListener('click', () => {
        clearMessageBox(messageBox);
        clearButtonBox(buttonBox);
        createMessage(messageBox, "Thank you for playing! See you next time!");
    })
    yesButton.addEventListener('click', () => {
        clearMessageBox(messageBox);
        clearButtonBox(buttonBox);
        playerCounter = 0;
        computerCounter = 0;
        startGame();
    })
}

function singleRound(computerChoice, playerChoice){
    const winner = determineWinner(computerChoice, playerChoice);
    let winnerAnnouncement = "Computer chose "+computerChoice+ ". You chose "+playerChoice+".\n";
    clearMessageBox(messageBox);
    createMessage(messageBox, winnerAnnouncement);
    if(winner == 'player'){
        let playerWonMessage = "Congratulations! You have won, as "+playerChoice+" beats "+computerChoice+".\n";
        createMessage(messageBox, playerWonMessage);
        return winner;
        }
    if(winner == 'computer'){
        let computerWonMessage = "Tough luck! You lose, as "+computerChoice+" beats "+playerChoice+".\n";
        createMessage(messageBox, computerWonMessage);
        return winner;
        }
    if(winner == "draw"){
        let drawMessage = "It's a draw! Try again!";
        createMessage(messageBox, drawMessage);
        return winner;    
    }
}

function startGame(){
    createMessage(messageBox, welcomeMessage);
    createButtons();
}

const container = document.querySelector('#container');
const welcomeMessage = "Welcome! You know the rules. Click one to start playing!";
const messageBox = createMessageBox();
const buttonBox = createButtonBox();
let playerCounter = 0;
let computerCounter = 0;

startGame();