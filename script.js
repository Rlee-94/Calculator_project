const screenDisplay = document.querySelector(".calc__screen");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals");
const allClearButton = document.getElementById("all-clear");
const deleteButton = document.getElementById("delete");
const pointButton = document.getElementById("decimal");

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    screenDisplay.textContent = screenDisplay.textContent + btn.textContent;
  });
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  x = Number(x);
  y = Number(y);
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return substract(x, y);
    case "x":
      return multiply(a, b);
    case "÷":
      if (y === 0) return null;
      else return divide(x, y);
    default:
      return null;
  }
}
