'use strict';

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

const checkInputs = (...args) => args.every(arg => arg > 0 && isFinite(arg));

const calcTip = () => {
    const res = ((tipVal / 100) * billVal) / people;
    const totalVal = billVal / people + res;

    const resDigits = Math.floor(Math.log(res) / Math.log(10));
    const totalValDigits = Math.floor(Math.log(totalVal) / Math.log(10));

    // If digits are more than 8
    if (resDigits > 8 || totalValDigits > 8) {
        tipAmount.style.fontSize = '1rem';
        total.style.fontSize = '1rem';
    }

    // Change tipAmt & total elements
    // to the above result
    tipAmount.textContent = `$${+res.toFixed(2)}`;
    total.textContent = `$${+totalVal.toFixed(2)}`;
};

const showError = element => {
    // If error, shake input elements
    // and keep tipAmt, total to default
    element.classList.toggle('error-animation');
    element.previousElementSibling.classList.toggle('show-error');

    tipAmount.textContent = '$0.00';
    total.textContent = '$0.00';
};

const displayResult = () => {
    // If inputs are valid, then calc tip
    checkInputs(billVal, tipVal, people) && calcTip();

    // Else check error inputs
    billVal === 0 && showError(billInput);
    people === 0 && showError(peopleInput);

    // Make reset btn enabled
    resetBtn.disabled = false;
    resetBtn.style.opacity = 1;
};

const customTipVal = function() {
    customBtn.addEventListener('input', function() {
        tipVal = +this.value;
    });
    return tipVal;
};

// Execution starts here when input element is triggered
calculator.addEventListener('input', function() {
    billInput.value && (billVal = +billInput.value);
    peopleInput.value && (people = +peopleInput.value);

    // Invoke this func every time input is changed
    displayResult();
});

// For tip btn to get tip val
tipBtn.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn')) return;

    e.target.classList.contains('btn--secondary') ?
        customTipVal() :
        (tipVal = +e.target.value.replaceAll('%', ''));
});

// Event handler to reset
resetBtn.addEventListener('click', reset.bind(this));
