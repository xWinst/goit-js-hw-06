const input = document.querySelector("#name-input");
const anonymous = document.querySelector("#name-output");

input.addEventListener("input", () => {
    if (input.value === "") anonymous.textContent = "Anonymous";
    else anonymous.textContent = input.value;
})