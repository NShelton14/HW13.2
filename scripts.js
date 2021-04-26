const color = document.getElementById("color");
const mini = document.getElementById("mini");
const maxa = document.getElementById("maxa");
const p = document.createElement("p");

body.document.appendChild(p);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    p.style.color = event.target.value;
  });

document.querySelector("submit").addEventListener('click', event => {
  const num = getRandomIntInclusive(mini.value, maxa.value);

  p.innerText = num;
})