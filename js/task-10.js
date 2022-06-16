const boxes = document.querySelector("#boxes");
const number = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", function(){createBoxes(Number(number.value))});
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let markup = "";
  for(let i = 0; i < amount; i++){
    markup += `<div style="background-color:${getRandomHexColor()}; width:${30 + 10*i}px; height:${30 + 10*i}px;"></div>`;
  }
  boxes.insertAdjacentHTML("afterbegin", markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}