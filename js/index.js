import { getNums, gameLoop } from './utils.js'

const addition = document.getElementById('addition-operator');
const subtraction = document.getElementById('subtraction-operator');
const multiplication = document.getElementById('multiplication-operator');
const division = document.getElementById('division-operator');

addition.addEventListener('click', () => {
    getNums(addition.innerText);
});

subtraction.addEventListener('click', () => {
    getNums(subtraction.innerText);
});


multiplication.addEventListener('click', () => {
    getNums(multiplication.innerText);
});

division.addEventListener('click', () => {
    getNums(division.innerText);
});

gameLoop();
