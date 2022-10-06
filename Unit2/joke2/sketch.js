let state = 0;
let timer = 0;
let f2;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f2 = loadFont("Franchise.ttf");
}

function draw() {
  switch(state) {
    case 0: 
      textFont(f2, 35);
      background("yellow");
      text("my boss told me to have a good day!", width/2, height/2);
      break;

    case 1:
      background("#c1d6e0");
      text("so I went home.", width/2, height/2);
      break;
  }

timer++;
if (timer > 4 * 60) { 
  timer = 0;
  state++;
  if (state > 1) {
    state = 0;
  }
}
}

