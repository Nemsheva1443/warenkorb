/*const button = document.querySelector("#success");

button.addEventListener("click", () => {
  console.log("Book added");
});

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
} 

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

/*const title = document.querySelector("#dev-title");
const start_btn = document.querySelector("#dev-get-startet");
const start_test_btn = document.querySelector("#dev-start-test");
const desc = document.querySelector("#dev-desc");

title.style.color = "red";
start_btn.addEventListener("click", () => {
  title.style.color = "orange";
});

start_test_btn.addEventListener("click", () => {
  const answer = prompt("Wie alt bist du?: ");
  console.log(answer);

  if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  }

  if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});

});

if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else if (answer === 211) {
    console.log(
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!",
    );
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});


if (answer === 211) {
    desc.innerText = "Herzlich Willkommen";
  } else if (answer >= 18) {
    console.log(
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!",
    );
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});


 if (answer === 211) {
    desc.innerText =
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!";
  } else if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});


const answer = prompt("Wie alt bist du?: ");
  console.log(answer);

  console.log(typeof answer);

  if (Number(answer) === 211) {
    desc.innerText =
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!";
  } else if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});


start_test_btn.addEventListener("click", () => {
  const answer = prompt("Wie alt bist du?: ");

  if (Number(answer) === 211) {
    desc.innerText =
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!";
    const password = prompt("Wie lautet dass Password?: ");
  } else if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});


start_test_btn.addEventListener("click", () => {
  const answer = prompt("Wie alt bist du?: ");

  if (Number(answer) === 211) {
    desc.innerText =
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!";
    const password = prompt("Wie lautet dass Password?: ");

    if (password === "A45-6Z3") {
      title.innerText = "Geisteskrank das du so alt geworden bist!";
    }
  } else if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});


 if (Number(answer) === 211) {
    desc.innerText =
      "Du hast dass geheime Alter erreicht! Du bekommst alles gratis!";
    const password = prompt("Wie lautet dass Password?: ");

    if (password === "A45-6Z3") {
      title.innerText = "Geisteskrank das du so alt geworden bist!";
    }else {
      title.innerText = "Das Passwort ist falsch!"
    }
  } else if (answer >= 18) {
    desc.innerText = "Herzlich Willkommen";
  } else {
    desc.innerText = "Zugriff nicht erlaubt! Geh bitte!";
  }
});



start_test_btn.addEventListener("click", () => {
  const answer = prompt("Wie alt bist du?: ");

  age.innerText = answer >= 18 ? "Volljährig" : "Minderjährig";


  if (answer >= 18) {
    age.innerText = "Volljährig";
  } else {
    age.innerText = "Minderjährig";
  }

  ternary operator  verwendet nur wenn eine bedingung hat


  let test_started = false;

title.style.color = "red";
start_btn.addEventListener("click", () => {
  title.style.color = "orange";
});



start_test_btn.addEventListener("click", () => {
  test_started = true;


  start_test_btn.addEventListener("click", () => {
  start_test_btn.classList.add(age >= 18 ? "active" : "red");


  let y = 0;
do {
  console.log(y);
  y++
} while(y < 3) */

const quantity1 = document.querySelector("#quantity1");
const plus1 = document.querySelector("#plus1");
const minus1 = document.querySelector("#minus1");

const quantity2 = document.querySelector("#quantity2");
const plus2 = document.querySelector("#plus2");
const minus2 = document.querySelector("#minus2");

const quantity3 = document.querySelector("#quantity3");
const plus3 = document.querySelector("#plus3");
const minus3 = document.querySelector("#minus3");

const price1 = document.querySelector("#price1");
const price2 = document.querySelector("#price2");
const price3 = document.querySelector("#price3");

const gesamtPreis = document.querySelector("#gesamtPreis");

function calculateGesamt() {
  const menge1 = Number(quantity1.innerText);
  const menge2 = Number(quantity2.innerText);
  const menge3 = Number(quantity3.innerText);

  const preis1 = Number(price1.innerText);
  const preis2 = Number(price2.innerText);
  const preis3 = Number(price3.innerText);

  const total = menge1 * preis1 + menge2 * preis2 + menge3 * preis3;

  gesamtPreis.innerText = total + " €";
}

plus1.addEventListener("click", function () {
  let value = Number(quantity1.innerText);

  value = value + 1;

  quantity1.innerText = value;

  calculateGesamt();
});

minus1.addEventListener("click", function () {
  let value = Number(quantity1.innerText);

  if (value > 1) {
    value = value - 1;
  }

  quantity1.innerText = value;

  calculateGesamt();
});

plus2.addEventListener("click", function () {
  let value = Number(quantity2.innerText);

  value = value + 1;

  quantity2.innerText = value;

  calculateGesamt();
});

minus2.addEventListener("click", function () {
  let value = Number(quantity2.innerText);

  if (value > 1) {
    value = value - 1;
  }

  quantity2.innerText = value;

  calculateGesamt();
});

plus3.addEventListener("click", function () {
  let value = Number(quantity3.innerText);

  value = value + 1;

  quantity3.innerText = value;

  calculateGesamt();
});

minus3.addEventListener("click", function () {
  let value = Number(quantity3.innerText);

  if (value > 1) {
    value = value - 1;
  }

  quantity3.innerText = value;

  calculateGesamt();
});

calculateGesamt();
