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

let [billVal, tipVal, people] = [-1, -1, -1];

const reset = () => {
    billInput.value = peopleInput.value = customBtn.value = '';
    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
    resetBtn.disabled = !resetBtn.disabled;
    resetBtn.style.opacity = 0.4;
};

resetBtn.addEventListener('click', reset.bind(this));

const checkInputs = (...args) => args.every(arg => arg > 0 && isFinite(arg));

const calcTip = () => {
    const res = ((tipVal / 100) * billVal) / people;
    const totalVal = billVal / people + res;

    tipAmount.textContent = +res.toFixed(2);
    total.textContent = +totalVal.toFixed(2);
};

const showError = element => {
    element.classList.toggle('error');

    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
};

const displayResult = () => {
    checkInputs(billVal, tipVal, people) && calcTip();

    billVal === 0 && showError(billInput);
    people === 0 && showError(peopleInput);

    resetBtn.disabled = false;
    resetBtn.style.opacity = 1;
};

const customTipVal = function() {
    customBtn.addEventListener('input', function() {
        tipVal = +this.value;
    });
    return tipVal;
};

tipBtn.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn')) return;

    e.target.classList.contains('btn--secondary') ?
        customTipVal() :
        (tipVal = +e.target.value.replaceAll('%', ''));
});

calculator.addEventListener('input', function() {
    billInput.value && (billVal = +billInput.value);
    peopleInput.value && (people = +peopleInput.value);

    displayResult();
});