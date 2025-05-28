 const createMatrixBtn = document.getElementById('create-matrix-btn');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const matrixInputs = document.getElementById('matrix-inputs');
const calculateBtn = document.getElementById('calculate-btn');
const operationSelect = document.getElementById('operation');
const resultElement = document.getElementById('result');

createMatrixBtn.addEventListener('click', (e) => {
    console.log('Create matrix button clicked');
    e.preventDefault();
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    console.log(`Rows: ${rows}, Columns: ${cols}`);
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
    let result;
    if (operation === 'determinant') {
        result = calculateDeterminant(matrix);
    } else {
        if (operation === 'add') {
            result = addMatrix(matrix, matrix);
        } else if (operation === 'subtract') {
            result = subtractMatrix(matrix, matrix);
        } else if (operation === 'multiply') {
            if (matrix.length === matrix[0].length) {
                result = multiplyMatrix(matrix, matrix);
            } else {
                result = "Matrix multiplication is not possible for non-square matrices or matrices with different dimensions.";
            }
        }
    }
    displayResult(result);
});

function calculateDeterminant(matrix) {
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else {
        return "Determinant calculation is only implemented for 2x2 matrices.";
    }
}

function addMatrix(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

function subtractMatrix(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            row.push(matrix1[i][j] - matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrix(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function displayResult(result) {
    if (typeof result === 'number') {
        resultElement.innerHTML = `Result: ${result}`;
    } else if (typeof result === 'string') {
        resultElement.innerHTML = result;
    } else {
        let resultHtml = 'Result: <br>';
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[0].length; j++)
