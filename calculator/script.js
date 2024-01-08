// Global variables to track the calculator state
var currentNumber = '';
var operator = '';
var storedNumber = '';

// Function to update the calculator display
function updateDisplay(value) {
  document.getElementById('result').value = value;
}

// Function to clear the calculator state
function clearCalculator() {
  currentNumber = '';
  operator = '';
  storedNumber = '';
  updateDisplay('0');
}

// Function to handle number button clicks
function handleNumberClick(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

// Function to handle operator button clicks
function handleOperatorClick(selectedOperator) {
  if (currentNumber !== '') {
    if (operator !== '') {
      calculateResult();
    }
    storedNumber = currentNumber;
    currentNumber = '';
    operator = selectedOperator;
  }
}

// Function to calculate the result
function calculateResult() {
  var result;
  var num1 = parseFloat(storedNumber);
  var num2 = parseFloat(currentNumber);

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Error';
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Error';
    }
  }

  updateDisplay(result.toString());
  currentNumber = result.toString();
  operator = '';
  storedNumber = '';
}

// Function to handle decimal point button click
function handleDecimalClick() {
  if (currentNumber.indexOf('.') === -1) {
    currentNumber += '.';
    updateDisplay(currentNumber);
  }
}

// Event listeners for number buttons
var numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    handleNumberClick(button.innerText);
  });
});

// Event listeners for operator buttons
var operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    handleOperatorClick(button.innerText);
  });
});

// Event listener for equal button
var equalButton = document.getElementById('equal');
equalButton.addEventListener('click', calculateResult);

// Event listener for clear button
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCalculator);

// Event listener for decimal point button
var decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', handleDecimalClick);
