function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

const operations = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide
}

function operate(operator, a, b) {
    return operations[operator](a, b)
}

console.log(operate("/",2,5))