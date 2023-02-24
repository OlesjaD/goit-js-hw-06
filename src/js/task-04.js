const value = document.querySelector('#value');

const actionsBtn = document.querySelectorAll("button");
const decrementBtn = actionsBtn[0];
// console.log(actionsBtn[0].dataset.action);

const incrementBtn = actionsBtn[1];
// console.log(actionsBtn[1].dataset.action);


let counterValue = 0;

const decrementValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

incrementBtn.addEventListener('click', incrementValue);
decrementBtn.addEventListener('click', decrementValue);