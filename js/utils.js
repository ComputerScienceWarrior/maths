// MAIN GAME LOOP
export const gameLoop = () => {
    const newNumbers = document.getElementById('new-numbers');

    document.getElementById('card').innerText = '1 + 1';

    newNumbers.addEventListener('click', () =>{
        getNums('+');
    });
};

// POPULATE CARDS WITH NUMBERS
export const getNums = (sign) => {
    let randomNumber1 = Math.round(Math.random() * 10);
    let randomNumber2 = Math.round(Math.random() * 10);
    let card = document.getElementById('card');
    
    card.innerText = `${Math.max(randomNumber1, randomNumber2)} ${sign} ${Math.min(randomNumber1, randomNumber2)}`;
};
