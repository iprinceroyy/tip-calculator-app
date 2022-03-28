const amount = document.getElementById("amount");
const tipsBtn = document.getElementsByClassName("btn");
const numOfPersons = document.querySelector(".people");

amount.addEventListener("change", getValues(amount));

for (let i = 0; i < tipsBtn.length; i++) {
    tipsBtn[i].addEventListener("click", handleChange);
}
numOfPersons.addEventListener("change", handleChange);

function handleChange(ele) {
    return ele.value;
}

function getValues(element) {
    const x = handleChange(element);
    //console.log(x);
    return x;
}

function calculate() {
    const amt = amount.value;
    const tip = tipsBtn.value;
    const person = numOfPersons.value;

    let total = 0;
    total += (amt * (tip / 100)) / person;

    console.log(total);
}

document.querySelector(".tip-amt").addEventListener("click", calculate);