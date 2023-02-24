const form = document.querySelector('#name-input');
// console.log(form);

const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);

form.addEventListener('input', onInputChange);

function onInputChange(event) {
    // event.preventDefault();
    nameOutput.textContent = event.currentTarget.value;
     
};