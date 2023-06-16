let x;
let y;
let d;
let city;
let radius = 450;
let angle = 0;
let speed = 0.05;
let centerX = 400;
let centerY = 700;

function preload(){
  city = img = loadImage('https://ollivv3r.github.io/creative-coding/week5/final/city.png')
}

function setup() {
  createCanvas(800, 800);
 background("#ADD8E6");
   frameRate(5);
   rectMode(CENTER);
 // noLoop();
}

function draw() {
image(city,0,500,800,300);

push();
 translate(centerX, centerY);
  rotate(angle);
  fill(255,random(10,255),0,191);
  noStroke();
  ellipse(radius, 0, 80, 80);
  
  angle = angle + speed;

pop();

push();
x=random(0,width);
y=random(0,height);
d=random(50,100);
fill(random(255,200),random(20,255),random(0,200),100);
stroke(random(255,0),random(110,255),random(0,225));
rect(x,y,100,d);
pop();


  }
