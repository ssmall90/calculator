let currentNum = ''
let previousNum = ''
let operator = ''

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clearScreen)

const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    if (currentNum != '' && previousNum != '') {
        calculate()
    }
})

const decimal = document.querySelector('.decimal')

const numberButtons = document.querySelectorAll('.number')

const operators  = document.querySelectorAll('.operator')


numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    })
})

function handleNumber(number) {
    if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;}

}

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperators(e.target.textContent);
    })
})

function handleOperators(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum ;
    currentNum = '';
    currentDisplayNumber.textContent = '';
    
}

function calculate () {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+') {
        previousNum = previousNum + currentNum;
    } else if (operator === '-') {
        previousNum = previousNum - currentNum
    } else if (operator === 'x') {
        previousNum = previousNum * currentNum
    } else if (operator === '/') {
        previousNum = previousNum / currentNum
    }

    //previousNum = previousNum.toString();
    previousNum = roundNumber(previousNum)
    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = previousNum;
   

}

function clearScreen () {
    currentNum = ''
    previousNum = ''
    currentDisplayNumber.textContent = ''
    previousDisplayNumber.textContent = ''
}

decimal.addEventListener('click', (e) => {
    handleNumber(e.target.textContent)
})

function roundNumber (num) {
   return Math.round(num * 100000000) / 100000000
}

