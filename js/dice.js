function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function putDiceImg(diceImg, rollNum) {
    diceImg.src = "./images/dice" + rollNum + ".png";
}

function updateWinner(p1, p2) {
    var header = document.querySelector('h1');
    if (p1 > p2) {
        header.innerHTML = "Player 1 Wins!";
    }
    else if (p2 > p1) {
        header.innerHTML = "Player 2 Wins!";
    }
    else {
        header.innerHTML = "Its a Tie!";
    }
}

function main() {
    //get dice rolls
    var dice1 = document.querySelector('.first-dice img');
    var dice2 = document.querySelector('.second-dice img');
    var playerOneRoll = rollDice();
    var playerTwoRoll = rollDice();

    //change images to roll
    putDiceImg(dice1, playerOneRoll);
    putDiceImg(dice2, playerTwoRoll);

    //change text to which player won
    updateWinner(playerOneRoll, playerTwoRoll);
}

var rollbtn = document.querySelector('.btn');
rollbtn.onclick = function() {main();};