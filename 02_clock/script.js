const arrowSecond = document.querySelector('.second');
const arrowMinute = document.querySelector('.minute');
const arrowHour = document.querySelector('.hour');

calculateArrow();
setInterval(calculateArrow, 1000);

function calculateArrow() {
  const now = new Date();
  const secondArrowDeg = now.getSeconds() / 60 * 360 - 90;
  arrowSecond.style.transform = `rotate(${secondArrowDeg}deg)`;

  const minutesArrowDeg = now.getMinutes() / 60 * 360 - 90;
  arrowMinute.style.transform = `rotate(${minutesArrowDeg}deg)`;

  const hourArrowDeg = now.getHours() / 12 * 360 - 90 + minutesArrowDeg / 12;
  arrowHour.style.transform = `rotate(${hourArrowDeg}deg)`;
}