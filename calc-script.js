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
  const result = operator(a, b)
  if (result % 1 != 0) return parseFloat(result.toFixed(maxNumLeng - 1))
  else return result
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
    if (operator) {
      calculateResult()
    }
    operator = e.target.id
    console.log(operator)
  })
}

function updateDisplay() {
  nums.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && display.textContent.length < maxNumLeng) {
      if (!Number(display.textContent)) {
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

function calculateResult() {
  console.log(operator)
  if (secondNum === "0" && operator === "divide") {
    display.textContent = "No / 0"
    operator = ""
  } else {
    firstNum = operate(window[operator], Number(firstNum), Number(secondNum))
    display.textContent = firstNum.toString()
    secondNum = ""
  }
}

equalsButton.addEventListener("click", () => {
  calculateResult()
})

updateDisplay()
selectOperator()
