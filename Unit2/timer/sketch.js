let state = -1;
let timer = 0;
let s1, f1, i1, i2, i3, i4, i5;

function preload() {
  s1 = loadSound("assets/sunflower.mp3");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  f1 = loadFont("assets/joynoted.ttf");
  i1 = loadImage("assets/woah.jpg");
  i2 = loadImage("assets/know.jfif");
  i3 = loadImage("assets/go.jpg");
  i4 = loadImage("assets/around.jfif");
  i5 = loadImage("assets/down.jfif");
}

function draw() {
  background(220);

  switch (state) {

    case -1:
      background(220);
      textFont(f1, 30);
      text("click to start!", 100, 100);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 0:
      textFont(f1, 30);
      background("#B6A3D8");
      if (!s1.isPlaying()) {
        s1.play();
      }
      text("Sunflower - Rex Orange County", 15, 100);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 1;
      }
      break;
    case 1:
      background("rgb(196,196,233)");
      text("woah oh ohohhhh", 80, 100);
      image(i1, 100, 150, 200, 200) ;
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 2;
      }
      break;
    case 2:
      background("rgb(141,163,141)");
      text("i want to know", 100, 100);
      image(i2, 100, 150, 200, 200) ;
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 3; 
      }
      break;
    case 3:
      background("#97d996");
      text("where i can go", 100, 100);
      image(i3, 100, 150, 200, 200) ;
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 4; 
      }
      break;
    case 4:
      background("#d698bd");
      text("when you're not around", 50, 100);
      image(i4, 100, 150, 200, 200) ;
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 5; 
      }
      break;
    case 5:
      background("#3277a8");
      text("when i'm feelin' down", 65, 100);
      image(i5, 100, 150, 200, 200) ;
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 0; 
        s1.stop() ;
      }
      break;
  }

}
  function mouseReleased() {
    s1.pause() ; 
    state++;
    if (state > 5) 
    state = 0;
  }


function touchStarted() {
  getAudioContext().resume();
}
