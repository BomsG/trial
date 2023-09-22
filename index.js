let addBtn = document.getElementById("add");
let substractBtn = document.getElementById("substract");
let output = document.getElementById("output");
let value = 0;

addBtn.addEventListener(`click`, () => {
  value++;
  output.innerHTML = value;
});

substractBtn.addEventListener(`click`, () => {
  value--;
  output.innerHTML = value;
});
console.log(add);
