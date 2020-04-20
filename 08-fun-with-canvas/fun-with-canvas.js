const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerHeight;
canvas.width = window.innerWidth;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
// change for blend mode
// ctx.globalCompositeOperation ='multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let changeAmount = 0.5;

function draw(e) {
  // stop running with not mousedown
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
    // start from
  ctx.moveTo(lastX, lastY);
    // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
    // change color by changeAmount
  hue += changeAmount;
  if(hue >= 360) hue = 0;
    // cycle brush width up & down by changeAmount
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
  if (direction) {
    ctx.lineWidth += changeAmount;
  } else {
    ctx.lineWidth -= changeAmount;
  }
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
