
function add (num1, num2) {
const sum = num1 + num2 
return sum
}

function subtract (num1, num2) {
    const sum = num1 - num2 
    return sum
}

function multiply (num1, num2) {
    const sum = num1 * num2 
    return sum
}

function divide (num1, num2) {
    const sum = num1 / num2 
    return sum
}

function display (value) {
    document.getElementById('result').value += value
}

function clearDisplay () {
    document.getElementById('result').value = ''
}


