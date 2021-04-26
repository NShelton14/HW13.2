const color = document.getElementById('color');
const mini = document.getElementById('mini');
const maxa = document.getElementById('maxa');
const add = document.getElementById('add');
const p = document.createElement('p');
const output = document.getElementById('out');

output.appendChild(p);

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

add.addEventListener('click', event => {
  event.preventDefault();

  if (mini.value < maxa.value) {
    const num = getRandomIntInclusive(mini.value, maxa.value);
    p.innerText = num;
  } else {
    p.innerText = 'Maximum is less than minimum.';
  }
});
