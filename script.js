let inputNumberDisplay = document.querySelector("#calculating-content");
let resultDisplay = document.querySelector("#result-content");
const btn = document.querySelectorAll(".btn");

console.log(btn);

const caculator = {
  inputNumber: "",
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
          // case "=":
          //   oldIsOperatorButton = false;
          //   oldIsEqualButton = true;
          //   outputDisplay.innerText = eval(inputDisplay.innerText);
          //   break;
          // case "+":
          // case "-":
          // case "*":
          // case "/":
          //   if (oldIsOperatorButton) break;
          //   oldIsOperatorButton = true;
          //   inputDisplay.innerHTML += e.target.innerHTML;
          break;
        default:
          console.log(e.target.innerHTML);
          try {
            inputNumberDisplay.innerHTML += e.target.innerHTML;
          } catch (error) {}

          break;
      }
    });
  }
}

caculator.showToDisplay();
