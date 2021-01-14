// IMPORT MODULES under test here:
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('should return "rock" when given a value of 1', (expect) => {
    const expected = 'rock';
    const actual = getRandomThrow(1);
    expect.equal(actual, expected);
});test('should return "paper" when given a value of 2', (expect) => {
    const expected = 'paper';
    const actual = getRandomThrow(2);
    expect.equal(actual, expected);
});
test('should return "scissors" when given a value other than a 1 or a 2', (expect) => {
    const expected = 'scissors';
    const actual = getRandomThrow(3);
    expect.equal(actual, expected);
});
