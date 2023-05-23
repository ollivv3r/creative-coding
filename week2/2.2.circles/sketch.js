function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

// pushed the grid out of the corner
translate(100,100)

  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1){
      push();

      // moved the drawing plan to add a new circle
      translate(x * 105,y * 105);

      // line thickness is random for each circle
      strokeWeight(random(1,25));

      // line color
      stroke(random(0,255),230,250);

      // circle color
      fill(147,random(0,255),219);

      //draw the circle
      ellipse(0,0,random(85,126));

      pop();
    }
  }
}