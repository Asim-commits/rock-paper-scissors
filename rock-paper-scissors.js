
let roundResult = document.querySelector(".round-results");
let score = document.querySelector(".scores");
let finalResult = document.querySelector(".final-result");
const button = document.querySelectorAll('.button');
const rock = button[0];
const paper = button[1];
const scissors = button[2];

// Stores the number of rounds user played, won and lost.
let count = 1;
let userWin = 0;
let computerWin = 0;

score.innerText = `Player: ${userWin} Computer: ${computerWin}`;

// The function is called each time the button is pressed except when the user has played 5 rounds.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundResult.innerText = "Tie! Play the game again";
        return;
    }

    /* The computer will beat user when: 
    a) Computer choice: Rock User choice: Scissors
    b) Computer choice: Paper User choice: Rock
    c) Computer choice: Scissor User choice: Paper */
    if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection =="paper") || (playerSelection == "paper" && computerSelection == "scissors")) {
        roundResult.innerText = `Round:  ${count}
                            You played: ${playerSelection} 
                            Computer played: ${computerSelection} 
                            You Lost!`;
        computerWin++;
        count++;
    } else {
        roundResult.innerText = `Round:  ${count} 
                            You played: ${playerSelection} 
                            Computer played: ${computerSelection} 
                            You won!`;
        
        userWin++;
        count++;
    }

    score.innerText = `Player: ${userWin} Computer: ${computerWin}`;


    // Disable the buttons after the user has played 5 rounds and at the same time announce the winner by using another function.
    if (count > 5) {
        let allButtons = document.getElementsByClassName("button");

        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].disabled = true
        }

        roundResult.style.display = "none"; 

        decideWinner(userWin, computerWin);
    } 
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
}

function decideWinner(userWin, computerWin) {    
    if (userWin > computerWin) {
        finalResult.innerText = `Congratualtions!!!! You won!`;
    } else {
        finalResult.innerText = `Computer won! Better luck next time.`;
    }
}

rock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});