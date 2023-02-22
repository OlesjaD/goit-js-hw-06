
const ulElem = document.querySelectorAll('.item');
console.log('Number of categories:', ulElem.length);


const itemEl = document.querySelector('#categories');
const firstEl = itemEl.firstElementChild;
const titlefirstEl = firstEl.firstElementChild;
console.log(titlefirstEl.textContent);
const sibFirstEl = titlefirstEl.nextElementSibling;
console.log(sibFirstEl.children.length);


const nextEl = firstEl.nextElementSibling;
const titlenextEl = nextEl.firstElementChild;
console.log(titlenextEl.textContent);
const sibNextEl = titlenextEl.nextElementSibling;
console.log(sibNextEl.children.length);


const lastEl = itemEl.lastElementChild;
const titlelastEl = lastEl.firstElementChild;
console.log(titlelastEl.textContent);
const sibLastEl = titlelastEl.nextElementSibling;
console.log(sibLastEl.children.length);