
function playGame(rounds) {
    function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            return "0";
        }

        /* The computer will beat user when: 
        a) Computer choice: Rock User choice: Scissors
        b) Computer choice: Paper User choice: Rock
        c) Computer choice: Scissor User choice: Paper */
        if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection =="paper") || (playerSelection == "paper" && computerSelection == "scissors")) {
            return "loose";
        } else {
            return "win";
        }
    }

    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber].toLowerCase();
    }

    /* The lines that are commented are additional features which i will add later on. */
    // function decideWinner(playerWin, computerWin) {
    //     if (playerWin > computerWin) {
    //         console.log(playerWin, computerWin);
    //         console.log("Congratulations!!!! You won");
    //     } else {
    //         console.log("You lose. Better luck next time");
    //     }
    // }

    const playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    let playerWin = 0;
    let computerWin = 0;

    resultOfTheRound = playRound(playerSelection, computerSelection);

    if (resultOfTheRound == "0") {
        console.log("Tie! Play the game again");
        playGame(rounds);
    } else {
        if (resultOfTheRound == "win") {
            console.log("Round: " + rounds + " You Win! " + playerSelection + " beats " + computerSelection);
            // playerWin++;
        } else {
            console.log("Round: " + rounds + " You Lose! " + computerSelection + " beats " + playerSelection);
            // computerWin++;
        }
    }

    // if (rounds == 5) {
    //     decideWinner(playerWin, computerWin);
    // }
}



for (let i = 1; i <= 5; i++) {
    playGame(i);
}