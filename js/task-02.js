const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredient = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const element = ingredients[i];

  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredients[i];
  ingredientsEl.classList.add('item');

  ingredient.push(ingredientsEl);
}

const listEl = document.querySelector('#ingredients');
listEl.append(...ingredient);
console.log(listEl);