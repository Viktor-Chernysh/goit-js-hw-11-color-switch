const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
],
 refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('style'),
};
let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', startColorSwitcher);
refs.stop.addEventListener('click', stopChangeColor);

function startColorSwitcher() {
  refs.start.setAttribute('disabled', 'disabled');
  interval = setInterval(bodyColorPicker, 1000);
  
};

function bodyColorPicker()  {
  const id = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.textContent = `body {background-color: ${colors[id]}}`;
  console.log(refs.body.textContent);
};


function stopChangeColor() {
  clearInterval(interval);
  refs.start.removeAttribute('disabled');
}