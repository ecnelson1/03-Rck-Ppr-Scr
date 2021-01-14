// -creating and storing computer choice
// const compThrow = Math.ceil(Math.random() * 3);
//     -comparing user selection to computer choice
export function getRandomThrow(compSelect){
    if (compSelect === 0){
        return 'rock';
    }
    else if (compSelect === 1){
        return 'paper';
    }
    else return 'scissors';
}