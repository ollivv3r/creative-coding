let rm = RiTa.markov(4);

let data = document.getElementById("source").innerText;

rm.addText(data);






function setup() {

// generate 6 sentences
  let lines = rm.generate(6);

// find the letter DIV
  let letter = select("#letter");

//add greeting
letter.child( createP("Dear Niko,"))

for( let l = 0; l < lines.length; l++){
  letter.child(
      createP(lines[l]));
}

// add closing
letter.child ( createP("Your Love, Oliver"))
}


function mousePressed(){
  letter.remove();
  letter = createDiv();
  letter.id("letter");
  setup();
}