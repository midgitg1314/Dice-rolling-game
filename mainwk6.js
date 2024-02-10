let player1Ws = 0;
let player2Ws = 0;
let gamesPlayed = 0;

function rollDie(){
    //Generate a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice(){
    //Roll the dice for both players
    const player1Result = rollDie();
    const player2Result = rollDie();

    //Display the results for both players
    const p1Result = document.getElementById("player1Result");
    const p2Result = document.getElementById("player2Result");
    p1Result.textContent = player1Result;
    p2Result.textContent = player2Result;

    //Determine the winner
    const winner =document.getElementById("winner");
    if (player1Result > player2Result) {
        winner.textContent = "Player 1 wins!";
        //keep track of the wins
        player1Ws = player1Ws +1;
    }
    else if (player1Result < player2Result) {
        winner.textContent = "Player 2 wins!";
        player2Ws = player2Ws +1;
    }
    else{
        winner.textContent = "It is a tie!";
    }
    
    //Update the number of games played
    gamesPlayed= gamesPlayed + 1;

    //Updated the games won counters
    const player1WElement = document.getElementById("player1Wins");
    player1WElement.textContent = player1Ws;
    const player2WElement = document.getElementById("player2Wins");
    player2WElement.textContent = player2Ws;

    //Check if a player has won two games
    if (player1WElement >= 2 || player2WElement >= 2) {
        if (player1Ws > player2Ws){
            winner.textContent = "Player 1 wins the best of two rounds!"
        }
        else{
            winner.textContent = "Player 2 wins the best of two rounds!"
        }
         //Rest the game
         player1Ws = 0;
         player2Ws = 0;
         gamesPlayed = 0;
    }
    //Check if three games have been played
    if(gamesPlayed === 3){
        if (player1Ws > player2Ws){
            winner.textContent = "Player 1 wins the best two out of three";
        }
        else if(player2Ws > player1Ws){
            winner.textContent = "Player 2 wins the best two out of three games";
        }
        else{
            winner.textContent = "It's a tie!";
        }

        player1Ws = 0;
        player2Ws = 0;
        gamesPlayed = 0;
    }
}
    //Display the result
    //const resultElement = document.getElementById("result");
    //resultElement.textContent = randomNumber;