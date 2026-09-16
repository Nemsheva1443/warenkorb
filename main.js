/*const text = document.querySelector("#text");
const trigger = document.querySelector("#trigger");
console.dir(text);
text.title = "Hinweis";
text.style.color = "red";*/

const delete_btn = document.querySelectorAll(".btn-soft");
delete_btn.forEach((button) => {
  button.addEventListener("click", () => {
    console.warn("Buch wurde gelöscht");
  });
});
