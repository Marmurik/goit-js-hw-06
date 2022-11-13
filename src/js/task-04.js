const counterValue = {
    value: 0,
    increment() {
        console.log('increment => this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement => this', this);
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log (decrementBtn.dataset.action);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log (incrementBtn.dataset.action);

const valueEl = document.querySelector('#value');
console.log(valueEl);

decrementBtn.textContent = 'Зменшити';
incrementBtn.textContent = 'Збільшити';

decrementBtn.addEventListener('click', function () {
    console.log('клік на зменшити');
    
    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;

});
incrementBtn.addEventListener('click', function () {
    console.log('клік на збільшити');

    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});  
