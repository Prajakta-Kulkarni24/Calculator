var operators = ["+", "-", "/", "*"];

var box = document.getElementById("box");
var last_operation_history = document.getElementById("last_operation_history");

var firstNum = true;
var numbers = [];
var operator_value = null;
var last_button = null;
var calc_operator = null;
var last_operator = null;

var key_combination = [];

function button_number(button) {
    last_button = button;

    // Number or dot
    if (!operators.includes(button) && button != "=") {
        if (firstNum) {
            box.innerText = (button == ".") ? "0." : button;
            firstNum = false;
        } else {
            if (button == "." && box.innerText.includes(".")) return;
            if (box.innerText.length >= 20) return;
            box.innerText += button;
        }
    } 
    // Operator or equal
    else {
        // Set operator
        if (operators.includes(button)) {
            operator_value = button;
            last_operator = button == "*" ? "×" : button == "/" ? "÷" : button;
            firstNum = true;
            showSelectedOperator();
        }

        // First number
        if (numbers.length == 0 && operators.includes(button)) {
            numbers.push(box.innerText);
            last_operation_history.innerText = box.innerText + " " + last_operator;
        } 
        // Equal pressed
        else if (button == "=" && operator_value && numbers.length > 0) {
            numbers[1] = box.innerText;
            var total = calculate(numbers[0], numbers[1], operator_value);
            box.innerText = total;
            last_operation_history.innerText = numbers[0] + " " + last_operator + " " + numbers[1] + " =";
            numbers = [total];
            operator_value = null;
            firstNum = true;
            showSelectedOperator();
        }
    }
}

// Highlight selected operator
function showSelectedOperator() {
    var elements = document.getElementsByClassName("operator");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#e68a00";
    }
    if (operator_value == "+") document.getElementById("plusOp").style.backgroundColor = "#ffd11a";
    else if (operator_value == "-") document.getElementById("subOp").style.backgroundColor = "#ffd11a";
    else if (operator_value == "*") document.getElementById("multiOp").style.backgroundColor = "#ffd11a";
    else if (operator_value == "/") document.getElementById("divOp").style.backgroundColor = "#ffd11a";
}

// Calculate result
function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var total;
    switch (operator) {
        case "+": total = num1 + num2; break;
        case "-": total = num1 - num2; break;
        case "*": total = num1 * num2; break;
        case "/": total = num2 == 0 ? "Error" : num1 / num2; break;
    }
    if (typeof total === "number" && !Number.isInteger(total)) total = parseFloat(total.toPrecision(12));
    return total;
}

// Clear everything
function button_clear() {
    box.innerText = "0";
    last_operation_history.innerText = "";
    firstNum = true;
    numbers = [];
    operator_value = null;
    last_operator = null;
    showSelectedOperator();
}

// Clear last entry
function clear_entry() {
    box.innerText = "0";
    firstNum = true;
}

// Backspace
function backspace_remove() {
    box.innerText = box.innerText.slice(0, -1) || "0";
    firstNum = box.innerText === "0";
    showSelectedOperator();
}

// Plus-minus
function plus_minus() {
    if (box.innerText != "0") box.innerText = (-parseFloat(box.innerText)).toString();
}

// Square root
function square_root() {
    box.innerText = Math.sqrt(parseFloat(box.innerText));
    firstNum = true;
}

// Power of 2
function power_of() {
    box.innerText = Math.pow(parseFloat(box.innerText), 2);
    firstNum = true;
}

// 1 / x
function division_one() {
    var val = parseFloat(box.innerText);
    box.innerText = val != 0 ? 1 / val : "Error";
    firstNum = true;
}

// Percentage
function calculate_percentage() {
    if (numbers.length > 0) {
        box.innerText = (numbers[0] * parseFloat(box.innerText) / 100).toString();
    } else {
        box.innerText = (parseFloat(box.innerText) / 100).toString();
    }
    firstNum = true;
}

// Keyboard support
document.addEventListener('keydown', function(e) {
    if (isFinite(e.key) || e.key == "." || operators.includes(e.key) || e.key == "Enter") {
        e.preventDefault();
        button_number(e.key == "Enter" ? "=" : e.key);
    } else if (e.key == "Backspace") {
        e.preventDefault();
        backspace_remove();
    } else if (e.key == "Delete") {
        e.preventDefault();
        button_clear();
    }
});
