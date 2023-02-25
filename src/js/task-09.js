function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');

const textRef = document.querySelector('.color');

const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', onClickButton);

function onClickButton () {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor("value");
};