
/*These are the 3 variables needed for the calculator. current input = the first number you place in
the calculator, current operation = the operation selected (eg: +, - etc), and previous input =
storing the numers to reach the final equation. The current input is stored in previous input until
executed */
let currentInput = '';
let currentOperation = '';
let previousInput = '';

/* This is to begin to add numbers. The input=number/s chosen */
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

/*These === and !== are for strict and presice calculation */
function appendOperation(operation) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`; /* calculates */
}
/* This is how to calculate the x and y value of the sum, by unsing prev and current numbers also the break to finalise the equation.*/
function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) { /* true (same value, same type - number = ===, makes it absolute) */
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
/* By using current input with display the current answer */ 
    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}
/* This part how to clear the final execution, or to clear an error */
function clearDisplay() { 
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}
