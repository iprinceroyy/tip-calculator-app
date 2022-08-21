const bill = document.getElementById("bill");
const tip = document.getElementsByClassName("btn");
const numOfPersons = document.querySelector(".people");

const calcTip = (amount, tip, numOfpersons) => {
    return (amount * tip / 100) / numOfpersons;
}

//console.log(calcTip(142.55, 15, 5));