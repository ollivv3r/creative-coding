function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

  translate(100,100);
  rect(0,0,1000,1000);

  for (let x = 0; x < 10; x++){
    for (let y = 0; y < 10; y++){

      // this is the checkerboard conditional
       if((y + x) % 2 == 0){ 

      // this is the quadrant conditional
      // if((x < 5 & y < 5) | (x >= 5 & y >= 5)) {

       push();
     translate(x * 100, y * 100);
     fill("white")
     rect(0,0,100,100);
    
 
      fill("lightblue")
     triangle(100,0,0,100,100,100);
     fill("pink")
     triangle(50,50,50,100,100,100);
     fill("lightgreen")
     triangle(50,50,100,50,100,100)
      fill("plum")
     triangle(50,50,100,50,100,0);
     pop();

      }else{
        push();
     translate(x * 100, y *100);
     fill("white")

     rect(0,0,100,100);
       fill("lightblue")
     triangle(100,0,0,100,100,100);
     fill("pink")
     triangle(50,50,50,100,100,100);
     fill("lightgreen")
     triangle(50,50,100,50,100,100);
     fill("plum")
     triangle(50,50,100,50,100,0);
      pop();
      }


    }
  }
}