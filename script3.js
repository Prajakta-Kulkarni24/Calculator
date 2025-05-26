 const calculateBtn = document.getElementById('calculate-btn');
const num1Input = document.getElementById('num1');
const operatorSelect = document.getElementById('operator');
const num2Input = document.getElementById('num2');
const resultBinaryElement = document.getElementById('result-binary');
const resultDecimalElement = document.getElementById('result-decimal');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const num1 = num1Input.value;
    const operator = operatorSelect.value;
    const num2 = num2Input.value;

    if (!/^[01]+$/.test(num1) || !/^[01]+$/.test(num2)) {
        resultBinaryElement.textContent = 'Invalid binary number';
        return;
    }

    const decimalNum1 = parseInt(num1, 2);
    const decimalNum2 = parseInt(num2, 2);

    let resultDecimal;
    switch (operator) {
        case 'add':
            resultDecimal = decimalNum1 + decimalNum2;
            break;
        case 'subtract':
            resultDecimal = decimalNum1 - decimalNum2;
            break;
        case 'multiply':
            resultDecimal = decimalNum1 * decimalNum2;
            break;
        case 'divide':
            if (decimalNum2 === 0) {
                resultBinaryElement.textContent = 'Cannot divide by zero';
                return;
            }
            resultDecimal = Math.floor(decimalNum1 / decimalNum2);
            break;
        default:
            resultBinaryElement.textContent = 'Invalid operator';
            return;
    }

    const resultBinary = resultDecimal.toString(2);
    resultBinaryElement.textContent = `Result (Binary): ${resultBinary}`;
    resultDecimalElement.textContent = `Result (Decimal): ${resultDecimal}`;
});
