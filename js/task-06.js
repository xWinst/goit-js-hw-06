const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {

    // if (input.value.length === 0){                    // Если нужно что бы при отсутствии символов,
    //     input.classList.remove("valid");              // border инпута опять становился серым, то 
    //     input.classList.remove("invalid");            // пожалуйста, раскоментируйте эти строчки (с 5-й по 9-ю), 
    //     return;                                       // т.к. в ТЗ об этом ни слова
    // }

    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
})