let img;
let sampleX = 200;
let sampleY = 200;

function preload(){
  img = loadImage('https://ollivv3r.github.io/creative-coding/week2/pixels/catpic3.jpg');
}



function setup() {
  createCanvas(1000, 1000);
  img.loadPixels();
}

function draw() {
  background(220);
  noStroke();
  translate(100,100);
  //image(img, 0,0);

for (let x = 0; x <= img.width; x += sampleX){
  for (let y= 0; y <= img.height; y += sampleY){
    var index = (x + y * img.width) * 4;
    var r = img.pixels[index + 0];
    var g = img.pixels[index + 1];
    var b = img.pixels[index + 2];

    fill(r,g,b); 
    ellipse(x,y,sampleX,sampleY);

  }
}


}