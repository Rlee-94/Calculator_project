const screenDisplay = document.querySelector(".calc__screen");
const numberBtns = document.querySelectorAll(".calc__button");

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    screenDisplay.textContent = screenDisplay.textContent + btn.textContent;
    console.log(btn.textContent);
  });
});
