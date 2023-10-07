// calculator
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const number = document.querySelector(".number");
const equals = document.querySelector(".equals");
const operation = document.querySelector(".op");
const clear = document.querySelector(".c");

let numberValue;
let temp;
let operationValue;

number.addEventListener("click", function (event) {
  if (numberValue == undefined) numberValue = event.target.value;
  else numberValue += event.target.value;
  result.innerHTML = parseInt(numberValue);
});

operation.addEventListener("click", function (event) {
  if (numberValue != undefined) {
    operationValue = event.target.value;
    result.innerHTML = operationValue;
    if (temp == undefined) {
      temp = numberValue;
      numberValue = undefined;
    }
  }
});
equals.addEventListener("click", function () {
  if (temp != undefined)
    switch (operationValue) {
      case "+":
        result.innerHTML = parseInt(numberValue) + parseInt(temp);
        break;
      case "-":
        result.innerHTML = temp - numberValue;
        break;
      case "*":
        result.innerHTML = numberValue * temp;
        break;
      case "/":
        result.innerHTML = numberValue / temp;
        break;
      default:
        break;
    }
});

clear.addEventListener("click",function () {
  result.innerHTML = " ";
  numberValue = undefined;
  temp = undefined;
})




//slider
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}
);

function updateSlider() {
    const translateXValue = -currentIndex * 100;
    slider.style.transform = `translateX(${translateXValue}%)`;
}