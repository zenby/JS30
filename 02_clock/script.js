const arrowSecond = document.querySelector('.second');
const arrowMinute = document.querySelector('.minute');
const arrowHour = document.querySelector('.hour');

setInterval(() => {
  const now = new Date();
  const secondArrowDeg = now.getSeconds() / 60 * 360 - 90;
  arrowSecond.style.transform = `rotate(${secondArrowDeg}deg)`;

  const minutesArrowDeg = now.getMinutes() / 60 * 360 - 90;
  arrowMinute.style.transform = `rotate(${minutesArrowDeg}deg)`;

  const hourArrowDeg = now.getHours() / 12 * 360 - 90 + minutesArrowDeg / 12;
  arrowHour.style.transform = `rotate(${hourArrowDeg}deg)`;
}, 1000);

setTimeout(() => {
  const arrows = document.querySelectorAll('.arrow');
  const clock = document.querySelector('.clock');

  clock.style.visibility = 'visible';
  arrows.forEach(arrow => arrow.style.visibility = 'visible');
}, 1000);