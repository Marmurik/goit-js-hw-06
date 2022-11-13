const inputEl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputEl.addEventListener('input', handleInputRange);
function handleInputRange(event) {
inputText.style.fontSize = event.currentTarget.value +"px";
}
