const amount = document.getElementsByClassName("amt-input");
const tipsBtn = document.getElementsByClassName("btn");
const numOfPerson = document.getElementsByClassName("people");

function getValues() {

    let arr = [];
    document.addEventListener('click', () => {
        const val = document.activeElement.tagName;
        const cls = document.getElementsByTagName(val)[0].className;
        if (cls === "amt-input") {
            const amount = document.getElementsByClassName("amt-input");
            amount[0].addEventListener('change', () => {
                console.log(amount[0].value);
                arr[0] = amount[0].value;
            });
        } else if (cls === "btn") {
            const tipsBtn = document.getElementsByClassName("btn");
            tipsBtn[0].addEventListener('click', () => {
                console.log(tipsBtn[0]);
                arr[1] = tipsBtn[0];
            });
        } else {
            const numOfPerson = document.getElementsByClassName("people");
            numOfPerson[0].addEventListener('click', () => {
                console.log(numOfPerson[0]);
                arr[2] = numOfPerson[0];
            })
        }
    });

    return arr;
}




/*
for (let i = 0; i < tipsBtn.length; i++) {
    tipsBtn[i].addEventListener('click', () => {
        console.log(tipsBtn[i].value);
    })
}*/

let array = getValues();
console.log(array);