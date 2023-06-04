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


function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let lose_msg = `Looser! ${computerSelection} beats ${playerSelection}!`,
      win_msg = `Nice, G! ${playerSelection} beats ${computerSelection}`,
      draw_msg = 'Draw!';
    

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerWins++;
            return lose_msg;
        }
        if (computerSelection == 'scissors') {
            playerWins++;
            return win_msg;
        }
        return draw_msg;
    
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computerWins++;
            return lose_msg;
        }
        if (computerSelection == 'rock') {
            playerWins++;
            return win_msg;
        }
        return draw_msg;

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerWins++;
            return lose_msg;
        }
        if (computerSelection == 'paper') {
            playerWins++;
            return win_msg;
        }
        return draw_msg;
    
    } else {
        return false;
    }
}


function game () {
    for (let i = 0 ; i < 5 ; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();

        if (playerSelection === null) {
            return;
        }

        let result = playRound(playerSelection, computerSelection);

        // player typed something else from rock/paper/scissors
        if (!result) {
            i--;
            console.log("Doesn't count! You are stuupid!")
        } else {
            console.log(result);
        }
    }
    console.log((playerWins > computerWins) ? "Nice work G! You win!" : "You're a looser!")
}


let playerWins = 0,
    computerWins = 0;
game();