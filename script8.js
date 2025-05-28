 const shapeSelect = document.getElementById('shape');
const inputsDiv = document.getElementById('inputs');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// Function to generate inputs based on shape
function generateInputs(shape) {
    inputsDiv.innerHTML = '';
    if (shape === 'rectangle') {
        inputsDiv.innerHTML = `
            <label for="length">Length:</label>
            <input type="number" id="length" required>
            <label for="width">Width:</label>
            <input type="number" id="width" required>
        `;
    } else if (shape === 'square') {
        inputsDiv.innerHTML = `
            <label for="side">Side:</label>
            <input type="number" id="side" required>
        `;
    } else if (shape === 'circle') {
        inputsDiv.innerHTML = `
            <label for="radius">Radius:</label>
            <input type="number" id="radius" required>
        `;
    } else if (shape === 'triangle') {
        inputsDiv.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="height">Height:</label>
            <input type="number" id="height" required>
        `;
    }
}

// Generate inputs for initial shape selection
generateInputs(shapeSelect.value);

shapeSelect.addEventListener('change', (e) => {
    generateInputs(shapeSelect.value);
});

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const shape = shapeSelect.value;
    let area;
    if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        area = length * width;
    } else if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        area = side * side;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        area = Math.PI * radius * radius;
    } else if (shape === 'triangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        area = 0.5 * base * height;
    }
    resultElement.textContent = `Area: ${area}`;
});
