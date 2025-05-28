 const calculateBtn = document.getElementById('calculate-btn');
const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const cInput = document.getElementById('c');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    const c = parseFloat(cInput.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    if (a === 0) {
        resultElement.textContent = 'Not a quadratic equation';
        return;
    }

    const determinant = b * b - 4 * a * c;

    if (determinant > 0) {
        const root1 = (-b + Math.sqrt(determinant)) / (2 * a);
        const root2 = (-b - Math.sqrt(determinant)) / (2 * a);
        resultElement.textContent = `Roots: ${root1} and ${root2}`;
    } else if (determinant === 0) {
        const root = -b / (2 * a);
        resultElement.textContent = `Root: ${root}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-determinant) / (2 * a);
        resultElement.textContent = `Roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
    }
});
