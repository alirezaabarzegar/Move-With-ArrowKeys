const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xP = 400;
let yP = 300;
let radius = 50;
let speed = 10;

// Arrow Direcitons Event Listeners
let upDir = false;
let downDir = false;
let leftDir = false;
let rightDir = false;

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Running the game -> the game loop
function runGame() {
  requestAnimationFrame(runGame);
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

  arrowInputs();
  collisionDetection();

  drawBall();
}

// Collision Detection
function collisionDetection() {
  // bottom boundary
  if (yP >= canvasEl.height - radius) {
    yP = canvasEl.height - radius;
  }
  // right boundary
  if (xP >= canvasEl.width - radius) {
    xP = canvasEl.width - radius;
  }
  // top boundary
  if (yP <= radius) {
    yP = radius;
  }

  // left boundary
  if (xP <= radius) {
    xP = radius;
  }
}

// Moving balls
function arrowInputs() {
  if (upDir) {
    yP = yP - speed;
  }
  if (downDir) {
    yP = yP + speed;
  }
  if (leftDir) {
    xP = xP - speed;
  }
  if (rightDir) {
    xP = xP + speed;
  }
}

// drawing the ball
function drawBall() {
  canvasContext.fillStyle = "white";
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

// Arrow Key Function
function keyDown(e) {
  if (e.keyCode === 37) {
    leftDir = true;
  }
  if (e.keyCode === 38) {
    upDir = true;
  }
  if (e.keyCode === 39) {
    rightDir = true;
  }
  if (e.keyCode === 40) {
    downDir = true;
  }
}

function keyUp(e) {
  if (e.keyCode === 37) {
    leftDir = false;
  }
  if (e.keyCode === 38) {
    upDir = false;
  }
  if (e.keyCode === 39) {
    rightDir = false;
  }
  if (e.keyCode === 40) {
    downDir = false;
  }
}

runGame();
