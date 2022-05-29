let inputNumberDisplay = document.querySelector("#calculating-content");
let resultDisplay = document.querySelector("#result-content");
const btn = document.querySelectorAll(".btn");

let nextToClear = false;
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
        case "x":
          saveOperator = "*";
        case "-":
          saveOperator = "-";
        case "+":
          saveOperator = "+";
          if (this.operator == undefined) {
            this.firstNumber = inputNumberDisplay.innerHTML;
            this.operator = saveOperator;
            nextToClear = true;
            console.log(this.operator);
            console.log(this.firstNumber);
          } else {
            this.secondNumber = inputNumberDisplay.innerHTML;
            console.log(this.secondNumber);
            this.result = eval(
              this.firstNumber + this.operator + this.secondNumber
            ).toPrecision(6);
            resultDisplay.innerHTML = this.result;
          }
          break;
        case "=":
          //   if (oldIsOperatorButton) break;
          //   oldIsOperatorButton = true;
          //   inputDisplay.innerHTML += e.target.innerHTML;
          break;
        default:
          // try {
          //   inputNumberDisplay.innerHTML += e.target.innerHTML;
          // } catch (error) {}
          if (nextToClear === true) {
            inputNumberDisplay.innerHTML = "";
          }
          inputNumberDisplay.innerHTML += e.target.innerHTML;

          break;
      }
    });
  }
}

calculator.showToDisplay();
