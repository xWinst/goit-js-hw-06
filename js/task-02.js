const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridientsList = document.querySelector("#ingredients");
const listItems =[];
let item;
for (let ingredient of ingredients) {
  item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  //ingridientsList.append(item); - На этом можно было и закончить, если бы не ТЗ,
  //                                и тогда строки 10, 19 и 22 - лишние

  listItems.push(item);
}

ingridientsList.append(...listItems);