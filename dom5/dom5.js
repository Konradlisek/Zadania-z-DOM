const newsletterForm = document.getElementById("newslleter-form");
const allAgreechx = document.getElementById("all-agree");

const validate = (event) => {


  let textName = document.getElementById("name");
  let textEmail = document.getElementById("email");
  let agree1 = document.getElementById("agree-1");
  let errors = document.getElementById("error");

  errors.innerHTML = "";

  if (textName.value.trim() === "") {
    const liError = document.createElement("li");
    liError.innerText = "Wpisz imię i nazwisko!";
    errors.appendChild(liError);
  }
  if (textEmail.value.trim() === "") {
    const liError = document.createElement("li");
    liError.innerText = "Wpisz adres email!";
    errors.appendChild(liError);
  }
  if (!textEmail.value.includes("@")) {
    const liError = document.createElement("li");
    liError.innerText = "Adres e-mail! musi zawierać @";
    errors.appendChild(liError);
  }

  if (!agree1.checked){
    const liError = document.createElement("li");
    liError.innerText = "Nie wyraziłeś zgody 1";
    errors.appendChild(liError);
  }

  if(errors.children.length > 0){
    event.preventDefault();
  }
  

};

const allAgree = (event) => {
  let agree1 = document.getElementById("agree-1");
  let agree2 = document.getElementById("agree-2");

  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;

  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;
};

newsletterForm.addEventListener("submit", validate);
allAgreechx.addEventListener("change", allAgree);
