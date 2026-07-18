const buttonContainer = document.querySelector(".all-buttons");
const output = document.querySelector("#screen-output");

let firstOperand = 0;
let secondOperand = 0;
let operator = "";

let operatorList = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "\u00D7": (a, b) => a * b, // multiply
    "\u00F7": (a, b) => a / b, // divide
    "%": (a, b) => a % b,
};

function operate() {
    const num1 = Number(firstOperand);
    const num2 = Number(secondOperand);
    let result;
    if(operator in operatorList) result = operatorList[operator](num1, num2);
    else console.log("error: operator not found");
    secondOperand = 0;
    operator = "";
    firstOperand = result;
    output.textContent = result;
    return result;
}

buttonContainer.addEventListener("click", function(event) {
    // check if the user click is on the button and not the container
    if(!event.target.closest("button")) {
        console.log("target is not a button: " + event.target);
        return;
    }
    const button = event.target;
    const buttonValue = button.textContent;
    console.log("button clicked: " + buttonValue);

    // if user input a number
    if(button.classList.contains("digits")) {
        // if operator is null, input the first number
        if(!operator) {
            firstOperand = firstOperand + buttonValue;
            if(firstOperand[0] === "0") {
                firstOperand = firstOperand.slice(1);
            }
            output.textContent = firstOperand;
            return;
        }
        else {
            // input the second number
            secondOperand = secondOperand + buttonValue;
            if(secondOperand[0] === "0") {
                secondOperand = secondOperand.slice(1);
            }
            output.textContent = firstOperand + " " + operator + " " + secondOperand;
            return;
        }
    }
    // if user input a operator (+, -, *, /, %)
    if(button.classList.contains("operator")) {
        if(!operator) {
            if(!firstOperand) {
                console.log("error: first number is not given but user input a operator");
                return;
            }
            operator = buttonValue;
            output.textContent = firstOperand + " " + operator;
            return;
        }
        else if(secondOperand && operator) {
            const result = operate();
            output.textContent = result + " " + buttonValue;
            operator = buttonValue;
            return;
        }
    }
    // if the operator is AC, C or = 
    if(button.classList.contains("operator-b")) {
        if(buttonValue === "=") {
            if(firstOperand && operator && secondOperand) {
                operate();
                return;
            }
            else {
                console.log("error: user pressed = but number and operator not given");
                return;
            }
        }
        if(buttonValue === "AC") {
            firstOperand = 0;
            operator = "";
            secondOperand = 0;
            output.textContent = 0;
            return;
        }
    }
});
