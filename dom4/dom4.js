const form = document.getElementById("form");
const submitForm = (event) => {
  event.preventDefault();

  const firstName = document.querySelector('[name="fname"]');

  const lastName = document.querySelector('[name="lname"');
  console.log(`Imię : ${firstName.value} Nazwisko: ${lastName.value}`);

};

form.addEventListener("submit", submitForm);
