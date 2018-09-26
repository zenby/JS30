const canvas = document.querySelector('#canvas');
const modeInput = document.querySelector('.composite');
const clearButton = document.querySelector('.clear');
const ctx = canvas.getContext('2d');
const SIZE = {
  max: 50,
  min: 16
}

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = SIZE.min;
ctx.globalCompositeOperation = 'source-over';

let isDrawing = false;
let isGrowing = true;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  moveCursor(e);
  hue++;
  if (hue > 360) {
    hue = 0
  };
  if (ctx.lineWidth >= SIZE.max || ctx.lineWidth < SIZE.min) {
    isGrowing = !isGrowing;
  };
  isGrowing ? ctx.lineWidth++ : ctx.lineWidth--;
}

function cursorDown(e) {
  isDrawing = true
  moveCursor(e);
}

function cursorUp() {
  isDrawing = false
}

function moveCursor(e) {
  lastX = e.offsetX;
  lastY = e.offsetY;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function changeDrawMode(ev) {
  ctx.globalCompositeOperation = ev.target.value
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', cursorDown);
canvas.addEventListener('mouseenter', moveCursor);
document.addEventListener('mouseup', cursorUp)
modeInput.addEventListener('change', changeDrawMode);
clearButton.addEventListener('click', clearCanvas);

