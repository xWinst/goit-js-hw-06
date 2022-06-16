const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

for(let category of categoryList){
    console.log(); // for beauty :)
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}