let poem = '';

let grammar = tracery.createGrammar({
"origin":["A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#"],
"material":["STICKS","WOOD","MUD","ROCKS","BRICKS"],
"place":["IN THE WILDERNESS","IN YOUR HOMETOWN","UNDER THE SUN","IN A SNOW STORM","ON AN ISLAND","IN THE CITY","BY THE LAKE","IN SOUTH KOREA","BY A CANYON"],
"light_source":["LOTS OF LITTLE LIGHTS","OIL LAMPS","ALL AVAILABLE LIGHTING","ELECTRICITY","A FIRE","NATURAL LIGHT"],
"inhabitants":["LOTS OF CATS AND KITTENS","FRIENDS AND FAMILY","BEARS","HOARDERS","THE RICH, THE POOR, AND INBETWEEN","KOI FISH","ENEMIES","AMERICAN IDIOTS","ARTISTS"]


});



function setup() {
  createCanvas(800, 800);
  frameRate(0.25);
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("monospace");
  textSize(28);
  text(poem,15,200);
}