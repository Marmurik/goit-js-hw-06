const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const inputElLength = Number(inputEl.dataset.length);
console.log(inputElLength); 

inputEl.addEventListener ('blur', event => {
    if (event.currentTarget.value.length === inputElLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    }
});