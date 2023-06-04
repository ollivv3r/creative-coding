let orginal = 190;
let small = 100;
let yato;
let x = 500;
let y = 0;
let a = 100
let b = 0;
let xspeed = 5;
let yspeed = 5;
let aspeed = 7;
let bspeed = 7;

function preload(){
  // image from https://up.quizlet.com/kzsz1-gunQe-256s.png
 yato = img = loadImage('https://ollivv3r.github.io/creative-coding/week3/3.1.bounce/yato3.png');
}

function setup() {
  createCanvas(900, 900);
// noLoop();
}

function draw() {
  background(220);
  image(yato, x, y, orginal, orginal);
  // check for collision with left and right edge
  if (x < 0 | x > width - 190){
      xspeed = -xspeed; // reverse the x direction
  }

  if (y < 0 | y > height - 190){
      yspeed = -yspeed;
}
  x = x + xspeed; // iterate x

  y = y + yspeed; // iterate y


       image(yato, a, b, small, small);
        // check for collision with left and right edge
        if (a < 0 | a > width - 100){
            aspeed = -aspeed; // reverse the x direction
        }

        if (b < 0 | b > height - 100){
            bspeed = -bspeed;
      }
        a = a + aspeed; // iterate x

        b = b + bspeed; // iterate y
}