const screenDisplay = document.querySelector(".calc__screen");
const numberBtns = document.querySelectorAll(".calc__button");
const add = document.getElementById("add");
const substract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    screenDisplay.textContent = screenDisplay.textContent + btn.textContent;
  });
});

function addNum(x, y) {
  return x + y;
}

function substractNum(x, y) {
  return x - y;
}

function multiplyNum(x, y) {
  return x * y;
}

function divideNum(x, y) {
  return x / y;
}
