let inputNumberDisplay = document.querySelector("#calculating-content");
let resultDisplay = document.querySelector("#result-content");
const btn = document.querySelectorAll(".btn");

let nextToClear = false;
let firstNumberWriteDone = false;
let saveOperator;
console.log(btn);

const calculator = {
  firstNumber: "",
  secondNumber: "",
  operator: " ",
  result: "",
  showToDisplay: buttonclick,
};

function buttonclick() {
  for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener("click", function (e) {
      switch (e.target.innerHTML) {
        case "⌫":
          if (inputNumberDisplay.innerText.length > 1) {
            inputNumberDisplay.innerText = inputNumberDisplay.innerText.slice(
              0,
              -1
            );
          } else {
            inputNumberDisplay.innerText = "";
          }
          break;
        case ".":
          if (inputNumberDisplay.innerHTML.includes(".") === false) {
            inputNumberDisplay.innerHTML += ".";
          }
          break;
        case "÷":
          saveOperator = "/";
          operatorButtonClick(saveOperator);
          break;
        case "x":
          saveOperator = "*";
          operatorButtonClick(saveOperator);
          break;
        case "-":
          saveOperator = "-";
          operatorButtonClick(saveOperator);
          break;
        case "+":
          saveOperator = "+";
          operatorButtonClick(saveOperator);
          break;
        case "±":
          if (inputNumberDisplay.innerHTML.includes("-") === false) {
            inputNumberDisplay.innerHTML = "-" + inputNumberDisplay.innerHTML;
          } else {
            inputNumberDisplay.innerHTML =
              inputNumberDisplay.innerHTML.slice(1);
          }
          break;
        case "%":
          inputNumberDisplay.innerHTML =
            parseFloat(inputNumberDisplay.innerHTML) / 100;
          break;
        case "=":
          if (firstNumberWriteDone == true) {
            calculator.secondNumber = inputNumberDisplay.innerHTML;
          } else {
            return;
          }
          calculator.result =
            calculator.firstNumber +
            calculator.operator +
            calculator.secondNumber;
          resultDisplay.innerHTML = parseFloat(
            eval(calculator.result).toPrecision(6)
          );
          resultDisplay.innerHTML = resultDisplay.innerHTML.substr(0, 11);
          calculator.firstNumber = undefined;
          calculator.operator = undefined;
          calculator.secondNumber = undefined;
          nextToClear = true;
          break;
        case "C":
          backToInitialize();
          break;
        default:
          if (nextToClear === true) {
            inputNumberDisplay.innerHTML = "";
            nextToClear = false;
          }
          if (inputNumberDisplay.innerHTML.length < 9)
            inputNumberDisplay.innerHTML += e.target.innerHTML;
          break;
      }
    });
  }
}

function operatorButtonClick(operator) {
  if (firstNumberWriteDone === false) {
    calculator.firstNumber = inputNumberDisplay.innerHTML;
    calculator.operator = operator;
    nextToClear = true;
    console.log(calculator);
    firstNumberWriteDone = true;
  } else {
    calculator.secondNumber = inputNumberDisplay.innerHTML;
    calculator.result =
      calculator.firstNumber + calculator.operator + calculator.secondNumber;
    resultDisplay.innerHTML = parseFloat(
      eval(calculator.result).toPrecision(6)
    );
    resultDisplay.innerHTML = resultDisplay.innerHTML.substr(0, 11);
    calculator.firstNumber = calculator.result;
    calculator.operator = operator;
    calculator.secondNumber = undefined;
    nextToClear = true;
  }
}

function backToInitialize() {
  calculator.firstNumber = "";
  calculator.operator = "";
  calculator.secondNumber = "";
  calculator.result = "";
  nextToClear = false;
  firstNumberWriteDone = false;
  inputNumberDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
}

calculator.showToDisplay();
