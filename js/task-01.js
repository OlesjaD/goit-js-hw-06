
const itemEl = document.querySelector('#categories');
const ulElem = document.querySelectorAll('.item');

console.log('Number of categories:', itemEl.children.length);

for (let i = 0; i < ulElem.length; i++) {
    const element = ulElem[i];
console.log('Category:', element.firstElementChild.textContent);
console.log('Elements:', element.lastElementChild.children.length);
};