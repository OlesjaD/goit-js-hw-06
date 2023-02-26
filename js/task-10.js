function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueRef = document.querySelector('input');
const placeEl = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


createBtn.addEventListener('click', createBoxes);

function getAmount () {
  let amount = Number(valueRef.value);
  createBoxes (amount);
};

let listBoxes = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
  const divElements = document.createElement('div');
  divElements.width = 30;
  divElements.height = 30;
  divElements.style.backgroundColor = getRandomHexColor();
  // divElements.nextElementSibling.width = divElements.width + i * 10;
  // divElements.nextElementSibling.height = divElements.height + i * 10;

    listBoxes.push(divElements);
  return listBoxes;
  };
};
placeEl.append(...listBoxes);

