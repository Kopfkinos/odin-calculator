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

function operate(operator, a, b) {
  return operator(a, b)
}

const display = document.querySelector("#result")
const nums = document.querySelector(".nums")
const operators = document.querySelector(".operators")
const equalsButton = document.querySelector("#equals-button")
const clearButton = document.querySelector("#clear-button")
const maxNumLeng = 8

let firstNum = ""
let secondNum = ""
let operator

function selectOperator() {
  operators.addEventListener("click", (e) => {
    operator = e.target.id
    console.log(operator)
  })
}

function updateDisplay() {
  nums.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && display.textContent.length < maxNumLeng) {
      if (display.textContent === "0") {
        firstNum = ""
        secondNum = ""
      }
      if (!operator) {
        firstNum += e.target.textContent
        display.textContent = firstNum
      } else {
        secondNum += e.target.textContent
        display.textContent = secondNum
      }
    }
  })
  clearButton.addEventListener("click", () => {
    firstNum = "0"
    secondNum = "0"
    operator = null
    display.textContent = firstNum
  })
}

equalsButton.addEventListener("click", () => {
  display.textContent = operate(window[operator], Number(firstNum), Number(secondNum))
})

updateDisplay()
selectOperator()
