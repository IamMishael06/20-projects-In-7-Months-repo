// ScreenValues
var screenFirstNumber = document.getElementById('first-number')
var screenSecondNumber = document.getElementById('second-number')
var operator = document.querySelector('.operator')
var operatorTwo = document.querySelector('.operator-two')
var answer = document.getElementById('answer')

// Numbers

function showNumber(number) {
    if (operator.textContent === '') {
        screenFirstNumber.textContent += number;
    } else {
        screenSecondNumber.textContent += number;
    }
}
function clearNumber() {
    screenSecondNumber.textContent = '';
    screenFirstNumber.textContent = '';
    operator.textContent = '';
    answer.textContent = '';
    operatorTwo.textContent ="";
}

function removeLastDigit() {
    var currentNumber;
    var currentOperator = operator.textContent;
    if (operator.textContent === '') {
        currentNumber = screenFirstNumber.textContent;
        screenFirstNumber.textContent = currentNumber.slice(0, -1);
        operator.textContent = currentOperator.slice(0, -1)
    } else {
        currentNumber = screenSecondNumber.textContent;
        screenSecondNumber.textContent = currentNumber.slice(0, -1);
        operator.textContent = currentOperator.slice(0, -1)
    }
}
function showOperator(operators) {
    if (operator.textContent === '') {
        operator.textContent = operators;
      } else if (operatorTwo.textContent === '') {
        operatorTwo.textContent = operators;
      } else {
        operatorTwo.textContent += operators;
      }
}
function calculateAnswer() {
    var results = '';
    var secondNumber = parseInt(screenSecondNumber.textContent);
    var firstNumber = parseInt(screenFirstNumber.textContent);
    var operatorText = operator.textContent.trim();

    if (operatorText === '/') {
        results = firstNumber / secondNumber;
    } else if (operatorText === '+') {
        results = firstNumber + secondNumber;
    } else if (operatorText === '-') {
        results = firstNumber - secondNumber;
    } else if (operatorText === 'x') {
        results = firstNumber * secondNumber;
    } else {
        alert('No Operator added');
        return;
    }

    answer.textContent = '=' + results;
}



