 const calculateBtn = document.getElementById('calculate-btn');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    const hcf = calculateHCF(num1, num2);
    resultElement.textContent = `HCF: ${hcf}`;
});

function calculateHCF(a, b) {
    if (b === 0) {
        return a;
    }
    return calculateHCF(b, a % b);
}
