let box = document.getElementById("box");
let historyBox = document.getElementById("last_operation_history");

let firstNum = true;
let numbers = [];
let operator = null;
let lastButton = null;

// MAIN INPUT HANDLER
function button_number(btn) {
    lastButton = btn;

    // NUMBER OR DOT
    if (!["+", "-", "*", "/", "="].includes(btn)) {

        if (firstNum) {
            box.innerText = (btn === ".") ? "0." : btn;
            firstNum = false;
        } else {
            if (btn === "." && box.innerText.includes(".")) return;
            if (box.innerText.length >= 20) return;
            box.innerText += btn;
        }
        return;
    }

    // OPERATOR
    if (["+", "-", "*", "/"].includes(btn)) {
        operator = btn;

        // Save first number
        if (numbers.length === 0) {
            numbers.push(box.innerText);
            historyBox.innerText = box.innerText + " " + operator;
        } else if (numbers.length === 1) {
            numbers[1] = box.innerText;
            box.innerText = calculate(numbers[0], numbers[1], operator);
            numbers = [box.innerText];
            historyBox.innerText = box.innerText + " " + operator;
        }

        firstNum = true;
        return;
    }

    // EQUAL BUTTON (=)
    if (btn === "=" && operator !== null && numbers.length > 0) {
        numbers[1] = box.innerText;

        let result = calculate(numbers[0], numbers[1], operator);
        box.innerText = result;

        historyBox.innerText =
            numbers[0] + " " + operator + " " + numbers[1] + " =";

        numbers = [result];
        operator = null;
        firstNum = true;
    }
}

//---- CALCULATE FUNCTION ----//
function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b == 0 ? "Error" : a / b;
    }
}

//---- C (CLEAR ALL) ----//
function button_clear() {
    box.innerText = "0";
    historyBox.innerText = "";
    numbers = [];
    operator = null;
    firstNum = true;
}

//---- CE (CLEAR ENTRY) ----//
function clear_entry() {
    box.innerText = "0";
    firstNum = true;
}

//---- BACKSPACE ----//
function backspace_remove() {
    box.innerText = box.innerText.slice(0, -1) || "0";
    if (box.innerText === "0") firstNum = true;
}

//---- +/- ----//
function plus_minus() {
    if (box.innerText !== "0") {
        box.innerText = (parseFloat(box.innerText) * -1).toString();
    }
}

//---- √x ----//
function square_root() {
    box.innerText = Math.sqrt(parseFloat(box.innerText)).toString();
    firstNum = true;
}

//---- x² ----//
function power_of() {
    box.innerText = Math.pow(parseFloat(box.innerText), 2).toString();
    firstNum = true;
}

//---- 1/x ----//
function division_one() {
    let v = parseFloat(box.innerText);
    box.innerText = v === 0 ? "Error" : (1 / v).toString();
    firstNum = true;
}

//---- % ----//
function calculate_percentage() {
    if (numbers.length > 0) {
        let base = parseFloat(numbers[0]);
        let perc = parseFloat(box.innerText);
        box.innerText = (base * perc / 100).toString();
    } else {
        box.innerText = (parseFloat(box.innerText) / 100).toString();
    }
    firstNum = true;
}
