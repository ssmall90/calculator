const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-23";
const bdy = document.querySelector('body')
bodyClass.split(' ').forEach((cls) => bdy.classList.add(cls))

const calcBodyClass = "max-w-lg rounded overflow-hidden shadow-2xl bg-red-600 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex"
const calcBody = document.querySelector('.calcBody')
calcBodyClass.split(' ').forEach((cls) => calcBody.classList.add(cls))

const outputClass = 'flex flex-col w-3/4 h-12 justify-center item-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded'
const outputBody = document.querySelector('.output')
outputClass.split(' ').forEach((cls) => outputBody.classList.add(cls))

const previousNumberClass = 'flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs'
const previousNumberBody = document.querySelector('.previousNumber')
previousNumberClass.split(' ').forEach((cls) => previousNumberBody.classList.add(cls))

const currentNumberClass = 'flex max-w-lg h-2/3 pb-2 text-xl'
const currentNumberBody = document.querySelector('.currentNumber')
currentNumberClass.split(' ').forEach((cls) => currentNumberBody.classList.add(cls))

const buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
    addClasses(btn)
})

function addClasses(button) {
    const btnNumberClass = 'flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:bg-green-500 border-green-500'
    const btnClearClass = 'flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:bg-red-500 border-red-500'
    const btnOperatorClass = 'flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:bg-yellow-500 border-yellow-500'
    const btnEqualsClass = 'flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:bg-white-500 border-white-500'
    const btnDecimalClass = 'flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:bg-purple-500 border-purple-500'
    
    if (button.classList.value === "number") {
        btnNumberClass.split(' ').forEach((cls) => button.classList.add(cls))
    } else if (button.classList.value === "operator") {
        btnOperatorClass.split(' ').forEach((cls) => button.classList.add(cls))
    } else if (button.classList.value === "clear") {
        btnClearClass.split(' ').forEach((cls) => button.classList.add(cls))
    } else if (button.classList.value === "equals") {
       btnEqualsClass.split(' ').forEach((cls) => button.classList.add(cls))
    } else if (button.classList.value === 'decimal') {
        btnDecimalClass.split(' ').forEach((cls) => button.classList.add(cls))
    }

const baseClass = 'flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-yellow-800 rounded text-white border-2 text-2xl'
baseClass.split(' ').forEach((cls) => button.classList.add(cls))
}