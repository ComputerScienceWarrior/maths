import { getNums } from './utils.js'

const addition = document.getElementById('addition-operator');
const subtraction = document.getElementById('subtraction-operator');
const multiplication = document.getElementById('multiplication-operator');
const division = document.getElementById('division-operator');
const newNumbers = document.getElementById('new-numbers');
let currentSign;

document.getElementById('card').innerText = '1 + 1';

newNumbers.addEventListener('click', () =>{
    getNums(currentSign ? currentSign : '+');
});

addition.addEventListener('click', () => {
    currentSign = addition.innerText;
    getNums(currentSign);
});

subtraction.addEventListener('click', () => {
    currentSign = subtraction.innerText;
    getNums(currentSign);
});

multiplication.addEventListener('click', () => {
    currentSign = multiplication.innerText;
    getNums(currentSign);
});

division.addEventListener('click', () => {
    currentSign = division.innerText;
    getNums(currentSign);
});
