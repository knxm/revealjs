function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  fill(255);
  line(0, 0, width, height);  // Line from (0,0) to (480, 120)
  line(width, 0, 0, height);  // Line from (480, 0) to (0, 120)
  ellipse(width/2, height/2, 60, 60);
}
