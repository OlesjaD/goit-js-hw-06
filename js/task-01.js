
const ulElem = document.querySelectorAll('.item');
console.log('Number of categories:', ulElem.length);


const itemEl = document.querySelector('#categories');
const firstEl = itemEl.firstElementChild;
const titlefirstEl = firstEl.firstElementChild;
console.log('Category:', titlefirstEl.textContent);
const sibFirstEl = titlefirstEl.nextElementSibling;
console.log('Elements:', sibFirstEl.children.length);


const nextEl = firstEl.nextElementSibling;
const titlenextEl = nextEl.firstElementChild;
console.log('Category:', titlenextEl.textContent);
const sibNextEl = titlenextEl.nextElementSibling;
console.log('Elements:', sibNextEl.children.length);


const lastEl = itemEl.lastElementChild;
const titlelastEl = lastEl.firstElementChild;
console.log('Category:', titlelastEl.textContent);
const sibLastEl = titlelastEl.nextElementSibling;
console.log('Elements:', sibLastEl.children.length);