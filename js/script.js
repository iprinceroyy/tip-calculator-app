'use strict';

console.log('Started.....');
const billInput = document.querySelector('#billAmt');
const tipBtn = document.querySelector('.inputs__tip');
const peopleInput = document.querySelector('#people');
const calculator = document.querySelector('.calculator');
const tipAmount = document.querySelector('.result--amt');
const total = document.querySelector('.result--total');
const customBtn = document.querySelector('.btn--secondary');
const resetBtn = document.querySelector('.result__reset');

const reset = () => {
    billInput.value = peopleInput.value = customBtn.value = '';
    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
    resetBtn.disabled = !resetBtn.disabled;
};

resetBtn.addEventListener('click', reset.bind(this));

const checkInputs = (...args) => args.every(arg => arg > 0 && isFinite(arg));

const calcTip = () => {
    if (checkInputs(billVal, tipVal, people)) {
        const res = ((tipVal / 100) * billVal) / people;
        const totalVal = billVal / people + res;

        tipAmount.textContent = +res.toFixed(2);
        total.textContent = +totalVal.toFixed(2);
    } else if (billVal === 0 || people === 0) {
        billVal === 0 && billInput.classList.toggle('error');
        people === 0 && peopleInput.classList.toggle('error');

        tipAmount.textContent = '$0.00';
        total.textContent = '$0.00';
    }

    resetBtn.disabled = false;
    resetBtn.style.opacity = 1;
};

let [billVal, tipVal, people] = [-1, -1, -1];

const customTipVal = function() {
    customBtn.addEventListener('input', function() {
        tipVal = +this.value;
    });
    return tipVal;
};

tipBtn.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn')) return;

    if (e.target.classList.contains('btn--secondary')) customTipVal();
    else tipVal = +e.target.value.replaceAll('%', '');
    console.log(`tip ${tipVal}`);
});

billInput.addEventListener('input', function() {
    billVal = +billInput.value;
    billVal && tipVal && people && console.log(billVal, tipVal, people);

    calcTip();
});

peopleInput.addEventListener('input', function() {
    people = +this.value;

    calcTip();
});