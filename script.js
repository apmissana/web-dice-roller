// Function to generate random number between 1 and 6
function getRandomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to roll the dice and display the values
function rollDice() {
    document.getElementById('dice1').value = getRandomDiceValue();
    document.getElementById('dice2').value = getRandomDiceValue();
    document.getElementById('dice3').value = getRandomDiceValue();
    document.getElementById('dice4').value = getRandomDiceValue();
    document.getElementById('dice5').value = getRandomDiceValue();
}

// Automatically focus the roll button
document.getElementById('rollButton').focus();

// Allow pressing Enter to roll the dice
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        rollDice();
    }
});
