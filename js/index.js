document.getElementById('card').innerText = '1 + 1';

const getNums = (sign) => {
    let randomNumber1 = Math.round(Math.random() * 10);
    let randomNumber2 = Math.round(Math.random() * 10);
    let card = document.getElementById('card');
    
    card.innerText = `${randomNumber1} ${sign} ${randomNumber2}`;
};

const newNumbers = document.getElementById('new-numbers');

newNumbers.addEventListener('click', () =>{
    getNums('+');
});
