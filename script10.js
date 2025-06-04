 const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const sinButton = document.getElementById('sin');
const cosButton = document.getElementById('cos');
const tanButton = document.getElementById('tan');
const logButton = document.getElementById('log');
const sqrtButton = document.getElementById('sqrt');
const powerButton = document.getElementById('power');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
const decimalButton = document.getElementById('decimal');

let expression = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        expression += button.textContent;
        display.value = expression;
    });
});

decimalButton.addEventListener('click', () => {
    if (!expression.includes('.')) {
        expression += '.';
        display.value = expression;
    }
});

clearButton.addEventListener('click', () => {
    expression = '';
    display.value = '';
});

backspaceButton.addEventListener('click', () => {
    expression = expression.slice(0, -1);
    display.value = expression;
});

sinButton.addEventListener('click', () => {
    expression = `Math.sin(${expression})`;
    display.value = expression;
});

cosButton.addEventListener('click', () => {
    expression = `Math.cos(${expression})`;
    display.value = expression;
});

tanButton.addEventListener('click', () => {
    expression = `Math.tan(${expression})`;
    display.value = expression;
});

logButton.addEventListener('click', () => {
    expression = `Math.log(${expression})`;
    display.value = expression;
});

sqrtButton.addEventListener('click', () => {
    expression = `Math.sqrt(${expression})`;
    display.value = expression;
});

powerButton.addEventListener('click', () => {
    expression += '**';
    display.value = expression;
});

divideButton.addEventListener('click', () => {
    expression += '/';
    display.value = expression;
});

multiplyButton.addEventListener('click', () => {
    expression += '*';
    display.value = expression;
});

subtractButton.addEventListener('click', () => {
    expression += '-';
    display.value = expression;
});

addButton.addEventListener('click', () => {
    expression += '+';
    display.value = expression;
});

equalsButton.addEventListener('click', () => {
    try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
});
