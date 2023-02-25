const inputRef = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};