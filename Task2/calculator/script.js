const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let firstValue = "";
let secondValue = "";
let operator = "";
let shouldResetDisplay = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // NUMBERS & DECIMAL
    if (!isNaN(value) || value === ".") {
      if (shouldResetDisplay) {
        display.textContent = "";
        shouldResetDisplay = false;
      }

      if (value === "." && display.textContent.includes(".")) return;

      display.textContent =
        display.textContent === "0" ? value : display.textContent + value;
    }

    // CLEAR
    else if (value === "C") {
      display.textContent = "0";
      firstValue = "";
      secondValue = "";
      operator = "";
      shouldResetDisplay = false;
    }

    // DELETE
    else if (value === "DEL") {
      display.textContent =
        display.textContent.length > 1
          ? display.textContent.slice(0, -1)
          : "0";
    }

    // OPERATOR
    else if (["+", "-", "*", "/"].includes(value)) {
      if (operator !== "") calculate();
      firstValue = display.textContent;
      operator = value;
      shouldResetDisplay = true;
    }

    // EQUALS
    else if (value === "=") {
      if (operator === "") return;
      calculate();
      operator = "";
    }
  });
});

function calculate() {
  secondValue = display.textContent;

  let result;
  const a = parseFloat(firstValue);
  const b = parseFloat(secondValue);

  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") result = b === 0 ? "Error" : a / b;

  display.textContent = result;
  shouldResetDisplay = true;
}
