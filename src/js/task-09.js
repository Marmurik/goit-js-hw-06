function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorSpanEl = document.querySelector('.color');
const btnChangeEl = document.querySelector('.change-color');

btnChangeEl.addEventListener('click', onBtnColorChange)

function onBtnColorChange (event) {
const randomColor = getRandomHexColor();
bodyEl.style.backgroundColor = randomColor;
colorSpanEl.textContent = randomColor;
};

