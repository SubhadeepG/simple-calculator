const buttonContainer = document.querySelector(".all-buttons");
const output = document.querySelector("#screen-output");

let firstOperand;
let secondOperand;
let operator;

buttonContainer.addEventListener("click", function(event) {
    // check if the user click is on the button and not the container
    if(!event.target.closest("button")) {
        console.log("target is not a button: " + event.target);
        return;
    }
    const button = event.target;
    const buttonValue = button.textContent;
    console.log("button clicked: " + buttonValue);
});

function add(a, b) {
    return a + b;
}
function subtract(a,b) {
    return;
}
function multiply(a,b) {
    return;
}
function divide(a,b) {
    return;
}
function operate(operator, num1, num2) {
    return;
}