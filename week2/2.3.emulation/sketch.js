// inspired by "no title" by Frieder Nake, 
// https://www.tate.org.uk/art/artworks/nake-no-title-p80817


function setup() {
  createCanvas(500, 500);
  // orange = 0
  // blue = 1
  // cyan = 2
  // yellow = 3
  // red = 4
  // brown = 5
  array = 
  [[0, 3, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
  [0, 3, 0, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2],
  [3, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 4, 4],
  [3, 0, 3, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2],
  [0, 0, 0, 0, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4],
  [3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [3, 3, 0, 1, 0, 0, 1, 1, 1, 1, 2, 2, 2, 4],
  [3, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 2, 4],
  [0, 3, 0, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4],
  [3, 0, 0, 1, 1, 0, 1, 1, 1, 2, 2, 2, 2, 4],
  [0, 3, 0, 0, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1],
  [3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2],
  [0, 3, 0, 1, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2],
  [0, 3, 1, 1, 2, 1, 1, 1, 1, 2, 4, 4, 4, 4]]
}

function draw() {
  background(255);


// background
fill(228,226,221);
stroke(228,226,221);
square(10,10,480);
translate(115,110);
  	for (let x = 0; x < 14; x++){ 
    	for (let y = 0; y < 14; y++){
			if (array[y][x] == 0) {
				stroke(212,138,64);
			} else if (array[y][x] == 1) {
				stroke(37,75,166)
			} else if (array[y][x] == 2) {
				stroke(42,155,133)
			} else if (array[y][x] == 3) {
				stroke(232,207,1)
			} else if (array[y][x] == 4) {
				stroke(200,74,27)
			} else if (array[y][x] == 5) {
				stroke(108,89,58)
			}
			strokeWeight(3);
			fill(228,226,221);
			rect(20*x,20*y,20,20);
		}
	}
}