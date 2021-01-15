// import functions and grab DOM elements
const throwButton = document.getElementById('user-throw');
const resetButton = document.getElementById('user-reset');
const userLosses = document.getElementById('user-losses-disp');
const totalMatchCount = document.getElementById('total-matches');
const resetCounts = document.getElementById('user-resets-disp');
const userWins = document.getElementById('user-wins-disp');
const userFBMDisp = document.getElementById('user-FBM');

const userBet = document.getElementById('user-bet');
const userCurrency = document.getElementById('user-currency');
const betOutcomeDisplay = document.getElementById('bet-outcome');

import { getRandomThrow, didUserWin } from './get-random-throw.js';
// initialize state
let wins = 0;
let losses = 0;
let total = 0;
let resets = 0;
let currency = 50;
userCurrency.textContent = `you have ${currency} dollars`;


// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {
    ++total;
    const compThrow = Math.round(Math.random() * 3);
    const userBetAmount = Number(userBet.value);

    const userSelection = document.querySelector('input[type="radio"]:checked');
    const userThrow = userSelection.value;
    const compRPS = getRandomThrow(compThrow);
    const outcome = didUserWin(userThrow, compRPS);
    userFBMDisp.textContent = `${outcome}`;

    messagesOutcome(throwButton);

    if (outcome === 'You Won!'){
        ++wins;
        const betWin = userBetAmount * 2;
        currency += betWin;
        betOutcomeDisplay.textContent = `you won ${betWin} dollars!`;

    }
    else if (outcome === 'You Lost!'){
        ++losses;
        currency -= userBetAmount;
        betOutcomeDisplay.textContent = `you lost ${userBetAmount} dollars!`;
    }
    userCurrency.textContent = `you have ${currency} dollars`;

    if (currency <= 0){
        userBet.disabled = true;
        betOutcomeDisplay.textContent = 'You lost all your money, you fool!';
    }

});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    total = 0;
    currency = 50;
    userCurrency.textContent = `you have ${currency} dollars`;
    betOutcomeDisplay.textContent = '';
    ++resets;
    messagesOutcome(resetButton);
    
});

function messagesOutcome(buttonElement) {

    if (buttonElement === throwButton){
        userWins.textContent = `Matches Won = ${wins}`;
        userLosses.textContent = `Matches Lost = ${losses}`;
        totalMatchCount.textContent = `Total Matches = ${total}`;
    }
    else if (buttonElement === resetButton) {
        userFBMDisp.textContent = `YOU'VE RESET!`;
        userWins.textContent = `Matches Won = ${wins}`;
        userLosses.textContent = `Matches Lost = ${losses}`;
        totalMatchCount.textContent = `Total Matches = ${total}`;
        resetCounts.textContent = `You have rest ${resets} times`;
    }
    
}
