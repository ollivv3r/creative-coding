let x_hour = 50
let x_minute = 50
let x_second = 50

var r = 0
var b = 255
var p = 550

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);	// change the angle mode from radians to degrees
}

function draw() {
  background("gray");
  stroke("white");
 // text("hour " + hour(), 50, 50);
  //text("minute " + minute(), 50, 75);
  //text("second " + second(), 50, 100);

  push();
  noStroke();

  x_hour = map(hour(), 0, 23, 50, 550);
  r = map(x_hour, 50, 550, 0, 255);
  b = map(x_hour, 50, 550, 255, 0);
  fill(r, 100, b);
  circle(x_hour, 200, 80);

  x_minute = map(minute(), 0, 59, 50, 550);
  r = map(x_minute, 50, 550, 0, 255);
  b = map(x_hour, 50, 550, 255, 0);
  fill(r, 100, b);
  circle(x_minute, 350, 50);

  x_second = map(second(), 0, 59, 50, 550);
  r = map(x_second, 50, 550, 0, 255);
  b = map(x_hour, 50, 550, 255, 0);
  fill(r, 100, b);
  circle(x_second, 500, 30);

  pop();

}
