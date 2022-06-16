let counterValue = 0;

const counter = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener("click", () => {
    counter.textContent = --counterValue;
});

btnIncrement.addEventListener("click", () => {
    counter.textContent = ++counterValue;
})