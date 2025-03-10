
let lines, fullText, mv,c,wc;

function preload() 
// Through the Looking Glass (https://www.gutenberg.org/files/12/12-h/12-h.htm)
{
  lines = loadStrings("https://ollivv3r.github.io/creative-coding/week4/book/throughthelookingglass.txt");
}

function setup() {
  noCanvas();
  
  // the base container for the book
  let content = createElement("div");
  content.attribute("id","content");

  // build the markov model
  // see options at: https://rednoise.org/rita/reference/RiTa/markov/index.html 
  mv = RiTa.markov(2, {'disableInputChecks': true, 'temperature': 100, 'maxAttempts': 9999});
  mv.addText(lines.join(" "));
  
  // creates a title for the book by generating a sentence
  content.child(createElement("h1", mv.generate(1)));
  
  
  c = 1;
  do {
    
    // create chapter titles from single sentences.
    content.child( createElement("h2","Chapter " + c + ": " + mv.generate(1)));
    let newText = "";
    // use random() to specify the minimum and maximum
    // paragraphs per chapter
    for (let p = 0; p < random(12,60); p++ ){
     
      // generate a random number of sentences, using
      // random() to dictate min and max sentences
      let sentGen = mv.generate(floor(random(1,7)));
      
      let sentences = (typeof sentGen == 'object') ? sentGen.join(" ") : sentGen;
            newText += "<p>" + sentences  + "</p>";   
    }
    content.child(createElement("div", newText));
   
    c++;
  }
  while (c < 64); // the number of chapters to generate.
    
  // Make it into a book
  Bindery.makeBook({
    content: '#content',
    
    rules: [
      Bindery.PageBreak({
        selector: "h1",
        position: "after",
      })]
  });
  
}
