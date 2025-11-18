let display = document.getElementById("display");

// Button press
function press(value) {
    display.value += value;
}

// Clear all
function clearAll() {
    display.value = "";
}

// Backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Toggle Theme
function toggleTheme() {
    let body = document.body;

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        document.querySelector('.theme-btn').textContent = "☀️";
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        document.querySelector('.theme-btn').textContent = "🌙";
    }
}
