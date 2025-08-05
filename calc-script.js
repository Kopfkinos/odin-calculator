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

const result = document.querySelector("#result")
const displaySum = document.querySelector("#display-sum")
const nums = document.querySelector(".nums")
const operators = document.querySelector(".operators")
const equalsButton = document.querySelector("#equals-button")
const clearButton = document.querySelector("#clear-button")
const checkVariablesBtn = document.querySelector("#check-variables")
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
    displaySum.textContent += e.target.textContent
  })
}

function updateresult() {
  nums.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && result.textContent.length < maxNumLeng) {
      if (!Number(result.textContent)) {
        firstNum = ""
        secondNum = ""
      }
      if (!operator) {
        firstNum += e.target.textContent
        result.textContent = firstNum
        displaySum.style.visibility = "visible"
        if (displaySum.textContent === "0") {
          displaySum.textContent = e.target.textContent
        } else {
          displaySum.textContent += e.target.textContent
        }
      } else {
        secondNum += e.target.textContent
        result.textContent = secondNum
        displaySum.textContent += e.target.textContent
      }
    }
  })
  clearButton.addEventListener("click", () => {
    firstNum = "0"
    secondNum = "0"
    operator = null
    result.textContent = firstNum
    displaySum.style.visiblity = "hidden"
    displaySum.textContent = "0"
  })
}

function calculateResult() {
  if (secondNum === "0" && operator === "divide") {
    result.textContent = "No / 0"
    operator = ""
  } else {
    firstNum = operate(window[operator], Number(firstNum), Number(secondNum))
    result.textContent = firstNum.toString()
    displaySum.textContent = firstNum.toString()
    secondNum = ""
  }
}

equalsButton.addEventListener("click", () => {
  calculateResult()
  operator = ""
})

/* checkVariablesBtn.addEventListener("click", () => {
  console.log("firstNum: ", firstNum)
  console.log("secondNum: ", secondNum)
  console.log("operator: ", operator)
})
 */
updateresult()
selectOperator()
