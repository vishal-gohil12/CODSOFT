
let display = document.getElementById('display');
let currentValue = '';
let currentOperator = '';

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function operate(operator) {
    if (currentValue === '') return;
    currentOperator = operator;
    currentValue += ' ' + operator + ' ';
    display.value = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue.replace('÷', '/').replace('×', '*'));
        display.value = currentValue;
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

