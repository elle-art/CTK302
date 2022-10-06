let state = -1;
let s1, s2, s3;

function preload() {
  s1 = loadSound("assets/dreams.mp3");
  s2 = loadSound("assets/hipjazz.mp3");
  s3 = loadSound("assets/inspire.mp3");
}
function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  
  switch (state) {

    case -1:
      text("click to start!", 100, 100);
      break;

    case 0:
      background("purple");
      text("dreams", 100, 100);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1:
      background("brown");
      text("hip jazz", 100, 100);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2:
      background("yellow");
      text("inspire", 100, 100);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop() ; s2.stop() ; s3.stop() ;
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}
