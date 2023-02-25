const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    let inputValue = event.currentTarget.value;
    if (inputValue.length === Number(inputEl.dataset.length)){
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    };
}