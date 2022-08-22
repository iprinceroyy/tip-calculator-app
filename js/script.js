'use strict';

console.log('Started.....');
const billInput = document.querySelector('#billAmt');
const tipBtn = document.querySelector('.inputs__tip');
const peopleInput = document.querySelector('#people');
const calculator = document.querySelector('.calculator');
const tipAmount = document.querySelector('.result--amt');
const total = document.querySelector('.result--total');
const resetBtn = document.querySelector('.result__reset');

const reset = () => {
    billInput.value = peopleInput.value = '';
    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
};

resetBtn.addEventListener('click', reset.bind(this));
const calcTip = () => {
    if (checkInputs(billVal, tipVal, people)) {
        const res = ((tipVal / 100) * billVal) / people;
        const totalVal = billVal / people + res;

        tipAmount.textContent = +res.toFixed(2);
        total.textContent = +totalVal.toFixed(2);

        resetBtn.disabled = false;
        resetBtn.style.opacity = 1;
    } else {
        billVal === 0 &&
            billInput.classList.toggle('error') &&
            console.log('error added');

        people === 0 &&
            peopleInput.classList.toggle('error') &&
            console.log('error added');

        tipAmount.textContent = '$0.00';
        total.textContent = '$0.00';
    }
};

const checkInputs = (...args) => args.every(arg => arg > 0 && isFinite(arg));

let [billVal, tipVal, people] = [0, 0, 0];

console.log(checkInputs(1, 1, 1));

tipBtn.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn')) return;

    tipVal = +e.target.value.replaceAll('%', '');
    console.log(tipVal);
});

calculator.addEventListener('input', function() {
    billVal = +billInput.value;
    people = +peopleInput.value;
    billVal && tipVal && people && console.log(billVal, tipVal, people);

    calcTip();
});