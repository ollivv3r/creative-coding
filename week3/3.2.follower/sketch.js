let debug = false;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let slime
let backgroundImage

function preload(){
  // image from https://cdn.mos.cms.futurecdn.net/V8QroM8eFn3emAsoFqEuu6.jpg
backgroundImage = loadImage("https://ollivv3r.github.io/creative-coding/week3/3.2.follower/mine.jpg")
  // image from https://preview.redd.it/7du6pu02j7g71.png?width=273&format=png&auto=webp&s=388019f5c397a2b1c7ecbd5fc759b8dde81f0ca5
slime = img = loadImage('https://ollivv3r.github.io/creative-coding/week3/3.2.follower/slime.webp');
}


function setup() {
  createCanvas(1920, 1000);

    x = random(width);
    y = random(height);
}

function draw() {
  background(220);

// background image
image(backgroundImage, 0,0, width, height)

// distance formula 
let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

// curser is a stardew character
cursor(CROSS, x,y)


// add the movement
x += speedx;
y += speedy;

// add image for follower
image(slime, x, y, 50, 50);

if(mouseX > x){
    // move to the right
    speedx = speedfactor;
}else{
  //move to the left
  speedx = -speedfactor;
}

if(mouseY > y){
    // move to the right
    speedy = speedfactor;
}else{
  //move to the left
  speedy = -speedfactor;
}

// check for collision
if (d < 25) {
  score -= 1;
  x = random(width)
  y = random(height)
}

if (debug){
  textSize(20);
  text("mouseX: " + mouseX, 50,50);
  text("mouseY: " + mouseY, 50,80);
  text("x: " + x, 50, 120);
  text("y: " + y, 50, 150);
  text("d: " + d, 50, 180);
  text("score: " + score, 50, 210);
  }
}