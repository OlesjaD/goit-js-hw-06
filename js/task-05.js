const form = document.querySelector('#name-input');
// console.log(form);

const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);

form.addEventListener('input', onInputChange);

function onInputChange(event) {
    let textInput = event.currentTarget.value;
    nameOutput.textContent = textInput;
    if (textInput === "")
    nameOutput.textContent = "Anonymous";
};
