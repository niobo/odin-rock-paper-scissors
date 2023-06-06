function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


// returns 1 if the player won, 0 if compute won, -1 if draw
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerWins++;
            return 0;
        }
        if (computerSelection == 'scissors') {
            playerWins++;
            return 1;
        }
        return -1;
    
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computerWins++;
            return 0;
        }
        if (computerSelection == 'rock') {
            playerWins++;
            return 1;
        }
        return -1;

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerWins++;
            return 0;
        }
        if (computerSelection == 'paper') {
            playerWins++;
            return 1;
        }
        return -1;
    
    } else {
        return false;
    }
}


// sets everything to 0 and disables btns
function clearGame () {
    playerWins = 0;
    computerWins = 0;
    player_score_node.textContent = 0;
    computer_score_node.textContent = 0;
    winner_place.textContent = "";
    player_btns.forEach((btn) => btn.removeAttribute("disabled"));
}


// starts a round and checks if the game is over
function game (key) {
    // data-key contains the choice (rock | paper | scissors)
    playRound(key.getAttribute("data-key"), getComputerChoice());
    player_score_node.textContent = `${playerWins}`;
    computer_score_node.textContent = `${computerWins}`;

    if (playerWins == 5) {
        winner_place.textContent = "You won!";
        player_btns.forEach((btn) => btn.setAttribute("disabled", "disabled"));
    } else if (computerWins == 5) {
        winner_place.textContent = "You lost!";
        player_btns.forEach((btn) => btn.setAttribute("disabled", "disabled"));
    }
}


const player_score_node = document.querySelector('.score-container .player-score');
const computer_score_node = document.querySelector('.score-container .computer-score');

const winner_place = document.querySelector(".score .winner");
const reset_div = document.querySelector(".reset");

const reset_btn = document.createElement('button');
reset_btn.textContent = 'RESET'
reset_btn.classList.add('reset-btn');
reset_btn.addEventListener('click', clearGame);
reset_div.appendChild(reset_btn);

let playerWins = 0, computerWins = 0;

const player_btns = document.querySelectorAll(".player-side button");
player_btns.forEach((key) => key.addEventListener(
    'click',
    () => game(key)
));
