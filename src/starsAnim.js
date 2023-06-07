let parent = document.querySelector("#heading_layout");

const { width: parentWidth, height: parentHeight } =
  parent.getBoundingClientRect();

const canvas = document.getElementById("canvas");
canvas.width = parentWidth;
canvas.height = parentHeight;

const ctx = canvas.getContext("2d");

function resizeCanvas() {
  let parent = document.querySelector("#heading_layout");
  const parentSize = parent.getBoundingClientRect();

  const canvas = document.getElementById("canvas");
  canvas.width = parentSize.width;
  canvas.height = parentSize.height;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let starsColors = [
  "#ebfcfe",
  "#d2fafd",
  "#fefeca",
  "#FFFFFF",
  "#ffff99",
  "#ccffff",
];
function getRandomColor(array) {
  if (starsColors.length == 0) {
    return undefined;
  }
  return array[Math.floor(Math.random() * array.length)];
}

class Star {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vy = 1;
    this.radius = 0.9;
    this.alpha = 0.5;
    this.color = getRandomColor(starsColors);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();

    ctx.save();

    const globalAlpha = ctx.globalAlpha;
    ctx.globalAlpha = this.alpha;

    ctx.fillStyle = this.color;
    ctx.fill;
    ctx.fill();

    ctx.globalAlpha = globalAlpha;
    ctx.restore();
  }
}

function makeRandomStar() {
  const canvasSize = canvas.getBoundingClientRect();
  randomStar = new Star();
  randomStar.x = randomNumber(0, canvasSize.width - randomStar.radius);
  randomStar.y = randomNumber(0, canvasSize.height - randomStar.radius);
  randomStar.vy = randomNumber(1.2, 1.4);
  randomStar.alpha = randomNumber(0, 1);
  return randomStar;
}

let stars = [];

function initScene() {
  for (i = 0; i < 1000; i++) {
    stars.push(makeRandomStar());
  }
}

function mainloop() {
  const canvasSize = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

  for (let i = 0; i < stars.length - 1; i++) {
    if (stars[i].y > 0) {
      stars[i].y -= 1 * stars[i].vy;
      if (Math.random() > 0.8) {
        stars[i].radius = randomNumber(0.9, 1.8);
      }
    } else {
      stars[i] = makeRandomStar();
    }

    stars[i].draw();
  }

  requestAnimationFrame(mainloop);
}

resizeCanvas();
window.addEventListener(
  "resize",
  function () {
    resizeCanvas();
  },
  false
);

initScene();
mainloop();
