const categories = document.querySelectorAll('.item')
console.log ('Number of categories', categories.length)
console.log('')
categories.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.children.length)
    console.log('')
})


// const categoriesNumberEl = document.querySelectorAll('li.item');
// console.log ('Number of categories:', categoriesNumberEl.length);

// for (const category of categoriesNumberEl) {
//     const categoryName = category.querySelector('h2');
//     console.log('Category:', categoryName.textContent);
//     const listName = categoryName.nextElementSibling;
//     console.log('Elements:', listName.children.length);
// }



