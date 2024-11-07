let circles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
}

function draw() {
  clear();
  background(0, 0, 0, 25);

  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    fill(0, 255, 0, circle.alpha);
    ellipse(circle.x, circle.y, circle.size);
    circle.size += 2;
    circle.alpha -= 5;

    if (circle.alpha <= 0) {
      circles.splice(i, 1);
    }
  }
}

// Commenting out unused functions
function mouseMoved() {
circles.push({ x: mouseX, y: mouseY, size: 10, alpha: 255 });
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight); }
