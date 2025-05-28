 const createMatrixBtn = document.getElementById('create-matrix-btn');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const matrix1Inputs = document.getElementById('matrix1-inputs');
const matrix2Inputs = document.getElementById('matrix2-inputs');
const calculateBtn = document.getElementById('calculate-btn');
const operationSelect = document.getElementById('operation');
const resultElement = document.getElementById('result');

createMatrixBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    matrix1Inputs.innerHTML = '';
    matrix2Inputs.innerHTML = '';
    const table1 = document.createElement('table');
    const table2 = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const input1 = document.createElement('input');
            const input2 = document.createElement('input');
            input1.type = 'number';
            input2.type = 'number';
            input1.id = `matrix1-${i}-${j}`;
            input2.id = `matrix2-${i}-${j}`;
            input1.style.width = '50px';
            input2.style.width = '50px';
            cell1.appendChild(input1);
            cell2.appendChild(input2);
            row1.appendChild(cell1);
            row2.appendChild(cell2);
        }
        table1.appendChild(row1);
        table2.appendChild(row2);
    }
    matrix1Inputs.appendChild(table1);
    matrix2Inputs.appendChild(table2);
});

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    const matrix1 = [];
    const matrix2 = [];
    for (let i = 0; i < rows; i++) {
        const row1 = [];
        const row2 = [];
        for (let j = 0; j < cols; j++) {
            const input1 = document.getElementById(`matrix1-${i}-${j}`);
            const input2 = document.getElementById(`matrix2-${i}-${j}`);
            row1.push(parseFloat(input1.value));
            row2.push(parseFloat(input2.value));
        }
        matrix1.push(row1);
        matrix2.push(row2);
    }
    const operation = operationSelect.value;
    let result;
    if (operation === 'add') {
        result = addMatrix(matrix1, matrix2);
    } else if (operation === 'subtract') {
        result = subtractMatrix(matrix1, matrix2);
    } else if (operation === 'multiply') {
        result = multiplyMatrix(matrix1, matrix2);
    }
    displayResult(result);
});

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
    let resultHtml = '';
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[0].length; j++) {
            resultHtml += `${result[i][j]} `;
        }
        resultHtml += '<br>';
    }
    resultElement.innerHTML = `Result: <br>${resultHtml}`;
}
