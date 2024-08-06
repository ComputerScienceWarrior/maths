// POPULATE CARDS WITH NUMBERS
export const getNums = (sign) => {
    let randomNumber1 = Math.round(Math.random() * 10);
    let randomNumber2 = Math.round(Math.random() * 10);
    let card = document.getElementById('card');
    
    card.innerText = `${Math.max(randomNumber1, randomNumber2)} ${sign} ${Math.min(randomNumber1, randomNumber2)}`;
};
