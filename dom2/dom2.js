const ulList = document.querySelector("#items");
const button = document.querySelector("button");
let number = 4;

const createLi = () => {
  const newLi = document.createElement("li");
  newLi.setAttribute("class", "item");
  newLi.textContent = `item ${number}`;
  ulList.appendChild(newLi);
  number++;
};

button.addEventListener("click", createLi);
