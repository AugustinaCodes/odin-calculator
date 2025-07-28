let firstNumber;
let operator;
let secondNumber;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

[...buttons].map((button) => {
  button.addEventListener("click", () => {
    firstNumber = display.textContent = `${button.textContent}`;
    console.log(firstNumber);
    // currently with each button press, the value gets replaced rather than saved/appended

    // so keep storing the value and appending the display until an operator is selected
    
    

    // if (button.id === "equals") {
    //     operate(operator, firstNumber, secondNumber)
    // }
  });
});

//button click
//save value
//populate the display

//don't replace the display (and value)
//keep showing the other number and operator in the display


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b; //maybe will have to use reduce after
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
}
