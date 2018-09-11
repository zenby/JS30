
const inputs = document.querySelectorAll('input');
const body = document.querySelector('body');

function updateInput(event) {
  const suffix = this.dataset.size || '';
  body.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('mousemove', updateInput));
inputs.forEach(input => input.addEventListener('change', updateInput));