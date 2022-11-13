const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrLiEl = document.querySelector('#ingredients'); 

const elements = ingredients.map(ingredient => {
const ingredientEl = document.createElement('li');
ingredientEl.textContent = ingredient;
ingredientEl.classList.add('item'); 

return ingredientEl;
});

console.log(elements);
ingrLiEl.append(...elements);

