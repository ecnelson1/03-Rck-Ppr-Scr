// -creating and storing computer choice
// const compThrow = Math.ceil(Math.random() * 3);
//     -comparing user selection to computer choice
export function getRandomThrow(compSelect){
    if (compSelect === 1){
        return 'rock';
    }
    else if (compSelect === 2){
        return 'paper';
    }
    else return 'scissors';
}
export function didUserWin(player, computer){
    if ((player === 'Rock' && computer === 'scissors') || (player === 'Paper' && computer === 'rock') || (player === 'Scissors' && computer === 'paper')){        
        return 'You Won!';}
    else if ((player === 'Rock' && computer === 'paper') || (player === 'Paper' && computer === 'scissors') || (player === 'Scissors' && computer === 'rock')){
        return 'You Lost!';}
    else { return 'Draw!';}
}
