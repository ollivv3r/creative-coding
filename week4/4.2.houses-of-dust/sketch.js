let poem = '';

let grammar = tracery.createGrammar({
"origin":["A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#"],
"material":["MUD","BRICKS","LEAVES","WEEDS","STEEL"],
"place":["BY THE SEA","IN A PLACE WITH BOTH HEAVY RAIN AND BRIGHT SUN","UNDERWATER","IN A DESERT","IN A COLD, WINDY CLIMATE","IN AN OVERPOPULATED AREA","AMONG SMALL HILLS","BY AN ABANDONED LAKE","IN MICHIGAN"],
"light_source":["CANDLES","NATURAL LIGHT","ALL AVAILABLE LIGHTING","ELECTRICITY"],
"inhabitants":["FRENCH AND GERMAN SPEAKING PEOPLE","FRIENDS AND ENEMIES","PEOPLE WHO SLEEP ALMOST ALL THE TIME","COLLECTORS OF ALL TYPES","HORSES AND BIRDS","BIRDS AND FISH","LOVERS","AMERICAN INDIANS"]


});



function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("monospace");
  textSize(28);
  text(poem,15,200);
}