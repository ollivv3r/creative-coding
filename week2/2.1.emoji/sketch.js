function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250) 

// draw an ellipse to the left side for the left eye
  fill("brown")
  stroke("gold")
  strokeWeight("3")
  ellipse(160,175,25,50);

// draw an ellipse to the right side for the right eyeS
fill("brown")
ellipse(230,175,25,50);

// draw a line over the left ellipse to create an eyebrow
fill("brown")
stroke("brown")
strokeWeight("5")
line(145,138,170,152)

//draw a line over the right ellipse to create an eyebrow
fill("brown")
stroke("brown")
strokeWeight("5")
line(217,152,245,138)

//draw an arc underneath the two ellipses to create a frown
fill("brown")
stroke("gold")
strokeWeight("3")
arc(195,250,75,50,radians(180),0);
}