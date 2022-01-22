const plays = ['rock', 'paper', 'scissors'];
var pcScore = 0
var humanScore = 0

function computerPlay() {
    let play = Math.floor(Math.random() * plays.length);
    return plays[play]
}



const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    const results = document.querySelector('.results')
    //console.log(round('rock'));
    const roundPlayed = document.createElement('li');
    const roundText = document.createTextNode(round('rock'));
    roundPlayed.appendChild(roundText)
    results.appendChild(roundPlayed);

    const currentHumanScore = document.querySelector('.humanScore');
    const hScore = "<h1>" + humanScore + "</h1>";
    currentHumanScore.innerHTML = hScore;

    const currentPCScore = document.querySelector('.pcScore');
    const compScore = "<h1>" + pcScore + "</h1>";
    currentPCScore.innerHTML = compScore;

    game();

});
const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    const results = document.querySelector('.results')
    const roundPlayed = document.createElement('li');
    const roundText = document.createTextNode(round('paper'));
    roundPlayed.appendChild(roundText)
    results.appendChild(roundPlayed);

    const currentHumanScore = document.querySelector('.humanScore');
    const hScore = "<h1>" + humanScore + "</h1>";
    currentHumanScore.innerHTML = hScore;

    const currentPCScore = document.querySelector('.pcScore');
    const compScore = "<h1>" + pcScore + "</h1>";
    currentPCScore.innerHTML = compScore;

    game();

});
const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    const results = document.querySelector('.results')
    const roundPlayed = document.createElement('li');
    const roundText = document.createTextNode(round('scissors'));
    roundPlayed.appendChild(roundText);
    results.appendChild(roundPlayed);

    const currentHumanScore = document.querySelector('.humanScore');
    const hScore = "<h1>" + humanScore + "</h1>";
    currentHumanScore.innerHTML = hScore;

    const currentPCScore = document.querySelector('.pcScore');
    const compScore = "<h1>" + pcScore + "</h1>";
    currentPCScore.innerHTML = compScore;

    game();



});

function round(playerSelection) {
    var computerSelection = computerPlay();
    //console.log("Computer played: " + computerSelection, "You played: " + playerSelection);
    if (playerSelection === computerSelection) {
        return "It's a tie! You both played " + computerSelection
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
    if (humanScore === 5 || pcScore === 5) {
        if (humanScore === 5) {
            const title = document.querySelector('.title');
            const humanWins = "<h1> Game over!! You Win! </h1>";
            title.innerHTML = humanWins;
        }

        else if (pcScore === 5) {
            const title = document.querySelector('.title');
            const pcWins = "<h1> Game over!! Computer Wins! </h1>";
            title.innerHTML = pcWins;
        }

        btnRock.style.cssText = 'display : none'
        btnScissors.style.cssText = 'display : none'
        btnPaper.style.cssText = 'display : none'

        const restart = document.querySelector('.restart')
        const restartHint = document.createElement('h2');
        const restartHintText = document.createTextNode('Hint: Refresh this page to start over');
        restartHint.appendChild(restartHintText)
        restart.appendChild(restartHint);




    }

}

/*function game() {
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
*/

