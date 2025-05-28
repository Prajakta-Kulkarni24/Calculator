 const createMatrixBtn = document.getElementById('create-matrix-btn');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const matrixInputs = document.getElementById('matrix-inputs');
const calculateBtn = document.getElementById('calculate-btn');
const operationSelect = document.getElementById('operation');
const resultElement = document.getElementById('result');

createMatrixBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    matrixInputs.innerHTML = '';
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix-${i}-${j}`;
            input.style.width = '50px';
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    matrixInputs.appendChild(table);
});

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const input = document.getElementById(`matrix-${i}-${j}`);
            row.push(parseFloat(input.value));
        }
        matrix.push(row);
    }
    const operation = operationSelect.value;
    if (operation === 'add') {
        // Add matrix addition logic here
    } else if (operation === 'subtract') {
        // Add matrix subtraction logic here
    } else if (operation === 'multiply') {
        // Add matrix multiplication logic here
    } else if (operation === 'determinant') {
        // Add matrix determinant logic here
    }
});
