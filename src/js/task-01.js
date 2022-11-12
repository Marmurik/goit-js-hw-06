const categoriesNumberEl = document.querySelectorAll('li.item');
console.log ('Number of categories:', categoriesNumberEl.length);

for (const category of categoriesNumberEl) {
    const categoryName = category.querySelector('h2');
    console.log('Category:', categoryName.textContent);
    const listName = categoryName.nextElementSibling;
    console.log('Elements:', listName.children.length);
}

// const categoryName1 = categoriesNumberEl[0].firstElementChild;
// console.log('Category:', categoryName1.textContent);
// const categoryList1 = categoryName1.nextElementSibling;

// const listName1 = categoryList1.children.length;
// console.log('Elements:', listName1);


// const categoryName2 = categoriesNumberEl[1].firstElementChild;
// console.log('Category:', categoryName2.textContent);
// const categoryList2 = categoryName2.nextElementSibling;

// const listName2 = categoryList2.children.length;
// console.log('Elements:', listName2);

// const categoryName3 = categoriesNumberEl[2].firstElementChild;
// console.log('Category:', categoryName3.textContent);
// const categoryList3 = categoryName3.nextElementSibling;

// const listName3 = categoryList3.children.length;
// console.log('Elements:', listName3);

