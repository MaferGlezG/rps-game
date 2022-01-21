const plays = ['rock', 'paper', 'scissors'];
var pcScore = 0
var humanScore = 0

function computerPlay() {
    let play = Math.floor(Math.random() * plays.length);
    return plays[play]
}



function round() {
    var computerSelection = computerPlay();
    var playerSelectionCase = prompt('Enter your play: ');
    var playerSelection = playerSelectionCase.toLowerCase();
    console.log("Computer played: " + computerSelection, "You played: " + playerSelection);
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                pcScore += 1
                return "You lose! Paper beats Rock!";
                break;
            case 'scissors':
                humanScore += 1;
                return "You win! Rock beats Scissors!";
                break;
        }
    }

    else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                humanScore += 1;
                return "You Win! Paper beats Rock!";
                break;
            case 'scissors':
                pcScore += 1;
                return "You lose! Scissors beats Paper!";
                break;
        }
    }

    else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                pcScore += 1;
                return "You Lose! Rock beats Scissors!";
                break;
            case 'paper':
                humanScore += 1;
                return "You Win! Scissors beats Paper!"
                break;
        }
    }

}

function game() {
    for (i = 0; i < 5; i++) {
        round();
        console.log("Computer score: " + pcScore, "Your score: " + humanScore);

    }

    if (pcScore > humanScore) {
        return "Computer wins!!"
    }

    else if (pcScore === humanScore) {
        return "It's a tie"
    }

    else {
        return "You win!!"
    }

}

console.log(game())
