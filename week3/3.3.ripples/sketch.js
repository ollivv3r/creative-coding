let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50;
let backgroundImage
let ripplers = [];

class Rippler {
  constructor (x,y) {
    this.x = x,
    this.y = y,
    this.d = 1
  }

  draw(){
    this.d += 1;
    circle(this.x, this.y, this.d);
  }
}

function preload(){
  // image from: https://i.pinimg.com/736x/95/e8/ee/95e8ee0e90aa22312e057a2d4812deec.jpg
  backgroundImage = loadImage("https://ollivv3r.github.io/creative-coding/week3/3.3.ripples/water.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(90, 80, 160);
  image(backgroundImage, 0,0, width, height)



  //ripple_d += 1;
 // circle(ripple_x, ripple_y, ripple_d);
  stroke("white");
  strokeWeight(2);
  noFill();

  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }

 //push();
//fill("white");
 //strokeWeight(1);
 //textSize(25);
 //text("ripple_x: " + ripple_x, 50,50);
  //text("ripple_y: " + ripple_y, 50,75);

  pop();
}

function mousePressed(){

  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_d = 0;

  ripplers.push( new Rippler(mouseX, mouseY));

}