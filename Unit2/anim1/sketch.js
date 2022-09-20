let x = 0; let f1;

function setup() {
  createCanvas(850, 500);
  f1 = loadFont("assets/Franchise.ttf");
}

function draw() {
background(100);
textFont(f1, 200);
text("Unit 2 Rules!", x, 200);
x += 5;

if(x > width) {
  x = -1000;
}
}
