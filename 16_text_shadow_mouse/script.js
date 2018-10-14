const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 30;

function shadow(event) {
  const { offsetHeight, offsetWidth } = hero;
  let { offsetX: x, offsetY: y, target } = event;

  if (this !== target) {
    x += target.offsetLeft;
    y += target.offsetTop;
  }
  const xWalk = (x / offsetWidth - 0.5) * walk;
  const yWalk = (y / offsetHeight - 0.5) * walk;

  text.style.textShadow = `${xWalk}px ${yWalk}px 5px rgba(100, 100, 100, 0.7)`;
}

hero.addEventListener('mousemove', shadow);
