let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';
function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput === '' && number === '.') currentInput = '0';
    currentInput += number;
    updateDisplay();
}
function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput === '' && operator) {
        operator = op;
        return;
    }
    if (operator && currentInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = null;
    previousInput = '';
    updateDisplay();
}
function updateDisplay() {
    display.textContent = currentInput || '0';
}