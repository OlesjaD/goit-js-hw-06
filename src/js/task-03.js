const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeList = images.map(option => {
  const itemEl = document.createElement('li');

  const imgElem = document.createElement('img');
  imgElem.src = option.url;
  imgElem.alt = option.alt;
  imgElem.width = 240;
  
  itemEl.insertAdjacentElement("beforeend", imgElem);
  return itemEl;
});

console.log(makeList);

const galeryEl = document.querySelector('.gallery');
galeryEl.append(...makeList);