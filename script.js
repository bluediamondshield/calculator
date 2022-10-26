let ans, num1, num2, currentOperator
ans = 0
num1 = ""
num2 = ""
currentOperator = ""

const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll(".operation")
const display = document.querySelector(".display")
const deleteButton = document.querySelector(".delete")
const equalsButton = document.querySelector(".equals")

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        const number = numberButton.getAttribute("data-number")
        if (currentOperator === "") {
            num1 +=  number;
        } else {
            num2 += number;
        }
        updateDisplay()
    })
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        if (num1 !== "" && num2 === "") {
            currentOperator = operatorButton.innerHTML
            updateDisplay()
        }
    })
})

deleteButton.addEventListener("click", () => {
    clear()
})

equalsButton.addEventListener("click", () => {
    if (num1 === "" || currentOperator === "" || num2 === "") {
        return
    }
    ans = operate(currentOperator, num1, num2)
    if (ans === undefined) {
        return
    }
    console.log(ans)
    num1 = ans.toString()
    num2 = ""
    currentOperator = ""
    updateDisplay()
})

function updateDisplay() {
    let n1Display = (num1 === "" ? "" : +num1)
    let n2Display = (num2 === "" ? "" : +num2)

    display.innerHTML = n1Display + currentOperator + n2Display;
}

function clear() {
    ans = 0
    num1 = ""
    num2 = ""
    currentOperator = ""
    updateDisplay()
}

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
    if (b == 0) {
        clear()
        display.innerHTML = "Error!!!"
        return
    }

    return a / b
}

const operations = {
    "+" : add,
    "-" : subtract,
    "x" : multiply,
    "÷" : divide
}

function operate(operator, a, b) {
    return operations[operator](a, b)
}