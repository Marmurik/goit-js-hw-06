function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputFieldEl = document.querySelector('#controls>number');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', onInputButtonChange);

function onInputButtonChange (event){
const randomColor = getRandomHexColor()

}