const amountOfMoney = document.querySelector('.money');
const isChecked = document.querySelector('.check');
const button = document.querySelector('button');

const result = document.querySelector('.result');

function calculate(evt) {
    evt.preventDefault();
    console.log(!isChecked.checked);
    const firstPrice = 2; //First price between 1-50
    const secondPrice = 1; //Second price higher than 51
    const bonus = 0.8; //bonus if checked
    const money = parseInt(amountOfMoney.value);

    if (isChecked.checked) {
        if (money <= 50 && money >= 1) { 
            result.innerHTML = (money * firstPrice) * bonus;
        } else if (money >= 51) {
            result.innerHTML = (money * secondPrice) * bonus;
        }
    } else if (!isChecked.checked) {
        if (money <= 50 && money >= 1) {
            result.innerHTML = (money * firstPrice);
        } else if (money >= 51) {
            result.innerHTML = (money * secondPrice);
        }
    }
}

button.addEventListener('click', calculate);