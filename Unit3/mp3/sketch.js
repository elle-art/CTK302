let raindrops = [];
let frogPos;
let frog;
let state = -1;
let timer = 0;
let score = 0;
let pick, m, f, drop, s1, s2, s3, s4, s5, s6, startTitle, startButton, startScreen, win, h, winF, lose, loseF;

function setup() {
  createCanvas(1135, 565);
  pick = loadImage("assets/pick.png");
  m = loadImage("assets/masc.png");
  f = loadImage("assets/femme.png");
  drop = loadImage("assets/drop.png");
  s1 = loadImage("assets/s1.png");
  s2 = loadImage("assets/s2.png");
  s3 = loadImage("assets/s3.png");
  s4 = loadImage("assets/s4.png");
  s5 = loadImage("assets/s5.png");
  s6 = loadImage("assets/s6.png");
  startTitle = loadImage("assets/title.png");
  startButton = loadImage("assets/button.png");
  startScreen = loadImage("assets/flowers.png");
  win = loadImage("assets/win.png");
  h = loadImage("assets/head.png");
  winF = loadImage("assets/win_h.png");
  lose = loadImage("assets/lose.png");
  loseF = loadImage("assets/lose_h.png");

  rectMode(CENTER);
  imageMode(CENTER);

  // Spawn objects

  for (let i = 0; i < 19; i++) {
    raindrops.push(new Rain());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case -1:
      background("#afdaed");
      image(startTitle, width/2 - 20, 80, 450, 525) ;
      image(startScreen, 290, 425, 755, 350) ;
      image(startScreen, 1000, 435, 755, 350) ;
      image(startButton, width/2, height/2, 300, 350) ;
      break;
    case 0:
      background("#afdaed");
      image(pick, width/2, 75, 400, 525) ;
      image(m, width/2 - 150, height/2 + 100, 250, 250) ;
      image(f, width/2 + 150, height/2 + 100, 250, 250) ;
      break;
    case 1:
      background("#afdaed");
      game();
      timer++;
      if (timer > 20*60){
        timer = 0;
        state = 3;
      }
      break;
    case 2:
      background("#afdaed");
      image(win, 250, 300, 400, 525) ;
      image(h, 750, 400, 650, 525) ;
      image(winF, 750, 280, 350, 400) ;
      break;
    case 3:
      background("#afdaed");
      image(lose, 250, 300, 400, 525) ;
      image(h, 750, 400, 650, 525) ;
      image(loseF, 770, 280, 300, 350) ;
      break;
  }
}

function reset() {
    raindrops = [];
    for (let i = 0; i < 20; i++) {
    raindrops.push(new Rain());
  }
  timer = 0;
  score = 0;
}

function mouseReleased() {
  switch (state) {
    case -1:
      if (mouseX > 423 && mouseX < 704 && mouseY > 237 && mouseY < 318){
      state = 0;
      }
      break;
    case 0:
      if (mouseX < width/2){
        frog = m;
      }
      else{
        frog = f;
      }
      state = 1;
      break;
    case 2:
      reset();
      state = -1;
      break;
    case 3:
      reset();
      state = -1;
      break;
  }
}

function game() {
  background("#afdaed");

  // operate on every Rain
  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].display();
    raindrops[i].move();

    if (raindrops[i].pos.dist(frogPos) < 30) {
      raindrops.splice(i, 1);
      score++;
    }
  }

  if (raindrops.length == 0) {
    state = 2;
  }
  
  // add a "frog"
  image(frog, frogPos.x, frogPos.y, 100, 100);
  if (frog == m) {
    plantY = frogPos.y - 30;
  }
  else {
    plantY = frogPos.y - 50;
  }
  switch(int(score/3)){
    case 0:
      break;
    case 1:
      image(s1, frogPos.x, plantY, 50, 50);
      break;
    case 2:
      image(s2, frogPos.x, plantY, 50, 50);
      break;
    case 3:
      image(s3, frogPos.x, plantY, 50, 50);
      break; 
    case 4:
      image(s4, frogPos.x, plantY, 50, 50);
      break; 
    case 5:
      image(s5, frogPos.x, plantY, 50, 50);
      break; 
    case 6:
      image(s6, frogPos.x, plantY, 50, 50);
      break; 
  }

  keyCheck();
  
}

function keyCheck() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  
  if (frogPos.x > width) frogPos.x = width;
  if (frogPos.x < 0) frogPos.x = 0;
}

class Rain {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(-30, -10)); // initialize your attributes here
    this.velocity = createVector(random(-.5, .5), random(3, 7));
    this.size = random(48, 128);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    image(drop, this.pos.x, this.pos.y, 50, 50);
    // image(this.img, this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
