 function calculateLCM() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Invalid input. Please enter numbers.";
        return;
    }

    // Find the GCD (Greatest Common Divisor)
    function gcd(a, b) {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Calculate the LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
    let lcm = (num1 * num2) / gcd(num1, num2);

    // Display the result
    document.getElementById("result").textContent = "The LCM of " + num1 + " and " + num2 + " is: " + lcm;
} 
