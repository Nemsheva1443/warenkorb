/*const button = document.querySelector("#success");

button.addEventListener("click", () => {
  console.log("Book added");
});*/

const quantity = document.querySelector("#quantity");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

/*plus.addEventListener("click", () => {
  let value = Number(quantity.innerText);

  value = value + 1;

  quantity.innerText = value;
});

minus.addEventListener("click", () => {
  let value = Number(quantity.innerText);

  value = value - 1;

  quantity.innerText = value;
});

function calculate(operation, value) {
  let value = Number(quantity.innerText);

  if (operation === "+") {
    value = value + 1;
  }

  if (operation === "-") {
    value = value - 1;
  }

  quantity.innerText = value;
} */

plus.addEventListener("click", () => {
  calculate("+");
});

minus.addEventListener("click", () => {
  calculate("-");
});

function calculate(operation) {
  let value = Number(quantity.innerText);

  if (operation === "+") {
    value = value + 1;
  }

  if (operation === "-") {
    value = value - 1;
  }

  quantity.innerText = value;
}
