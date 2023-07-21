console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("I am in the event with arrow function! :D");

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
