let state = 0; let f1, f2;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont("Blazed.ttf");
  f2 = loadFont("Franchise.ttf");
  textAlign(CENTER);
}

function draw() {
switch(state) {
  case 0: 
    background("grey");
    textFont(f2, 30);
    text("why did the chicken cross the road??", width/2, height/2);
    break;

  case 1:
    background("red");
    textFont(f1, 20);
    text("because he wanted to.", width/2, height/2);
    break;
}
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}