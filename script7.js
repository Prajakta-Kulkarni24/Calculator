 const calculateBtn = document.getElementById('calculate-btn');
const nInput = document.getElementById('n');
const rInput = document.getElementById('r');
const operationSelect = document.getElementById('operation');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const n = parseInt(nInput.value);
    const r = parseInt(rInput.value);

    if (isNaN(n) || isNaN(r)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    if (n < 0 || r < 0) {
        resultElement.textContent = 'Numbers cannot be negative';
        return;
    }

    if (r > n) {
        resultElement.textContent = 'r cannot be greater than n';
        return;
    }

    const operation = operationSelect.value;

    if (operation === 'permutation') {
        const permutation = calculatePermutation(n, r);
        resultElement.textContent = `Permutation: ${permutation}`;
    } else if (operation === 'combination') {
        const combination = calculateCombination(n, r);
        resultElement.textContent = `Combination: ${combination}`;
    }
});

function calculateFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculatePermutation(n, r) {
    return calculateFactorial(n) / calculateFactorial(n - r);
}

function calculateCombination(n, r) {
    return calculateFactorial(n) / (calculateFactorial(r) * calculateFactorial(n - r));
}
