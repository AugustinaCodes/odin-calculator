let firstNumber;
let operator
let secondNumber;

function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b //maybe will have to use reduce after
}

function divide (a, b) {
    return a / b
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+' :
            add(firstNumber, secondNumber)
            break;
        case '-':
            subtract(firstNumber, secondNumber)
            break;
        case '*' :
            multiply(firstNumber, secondNumber)
            break;
        case '/' :
            divide(firstNumber, secondNumber)
            break;
    }
}



