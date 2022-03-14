const input = document.querySelector("input");

input.addEventListener("change", () => {
    const val = getValue(input);
    console.log(val)
});

function getValue(int) {
    return int.value;
}