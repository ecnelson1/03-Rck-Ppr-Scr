// import functions and grab DOM elements
const throwButton = document.getElementById('user-throw');
const resetButton = document.getElementById('user-reset');
const userLosses = document.getElementById('user-losses-disp');
const totalMatchCount = document.getElementById('total-matches');
const resetCounts = document.getElementById('user-resets-disp');
const userWins = document.getElementById('user-wins-disp');
const userFBMDisp = document.getElementById('user-FBM');

import { getRandomThrow, didUserWin } from './get-random-throw.js';
// initialize state
let wins = 0;
let losses = 0;
let total = 0;
// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {
    ++total;
    totalMatchCount.textContent = `Total Matches = ${total}`;
    userLosses.textContent = `Total Losses = ${losses}`;
    userWins.textContent = `Total Wins = ${wins}`;
    // -storing user selection
    const compThrow = Math.round(Math.random() * 3);
    const userSelection = document.querySelector('input[type="radio"]:checked');
    const userThrow = userSelection.value;
    //     -comparing user selection to computer choice
    const compRPS = getRandomThrow(compThrow);
    const outcome = didUserWin(userThrow, compRPS);
    if (outcome === 'You Won!'){
        ++wins;}
    else if (outcome === 'You Lost!'){
        ++losses;
    }
    userFBMDisp.textContent = `${outcome}`;
    userWins.textContent = `Matches Won = ${wins}`;
    userLosses.textContent = `Matches Lost = ${losses}`;
    totalMatchCount.textContent = `Matches Played = ${total}`;
});







    // if ((userThrow === 'Rock' && compRPS === 'scissors') || (userThrow === 'Paper' && compRPS === 'rock') || (userThrow === 'Scissors' && compRPS === 'paper')){        
    //     userFBMDisp.textContent = 'You won!';
    //     ++wins;
    //     userWins.textContent = `Total Wins = ${wins}`;}
    
    // else if ((userThrow === 'Rock' && compRPS === 'paper') || (userThrow === 'Paper' && compRPS === 'scissors') || (userThrow === 'Scissors' && compRPS === 'rock')){
    //     userFBMDisp.textContent = 'You lost!';
    //     ++losses;
    //     userLosses.textContent = `Total Losses = ${losses}`;}
    // else {userFBMDisp.textContent = 'DRAW';}
    // console.log(compRPS);});