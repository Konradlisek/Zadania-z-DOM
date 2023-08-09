const olList = document.createElement("ol");

let cities = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "New York",
  "Tokio",
  "Moscow",
];



for (let i = 0; i < cities.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = cities[i];
  liElement.classList.add("city");
  olList.appendChild(liElement);
}
document.body.appendChild(olList);
