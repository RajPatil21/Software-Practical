let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function calculate() {
    if (previousInput && currentInput && operator) {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
        }
        currentInput = result.toString();
        display.value = result;
        operator = '';
        previousInput = '';
    }
}

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equals').addEventListener('click', calculate);

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.id === 'add' || this.id === 'subtract' || this.id === 'multiply' || this.id === 'divide') {
            previousInput = currentInput;
            currentInput = '';
            operator = this.id;
        } else if (this.id === 'decimal' && !currentInput.includes('.')) {
            appendToDisplay('.');
        } else if (this.id !== 'clear' && this.id !== 'equals') {
            appendToDisplay(this.id);
        }
    });
});
