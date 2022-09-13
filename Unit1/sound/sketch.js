/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let jazz

function preload() {
  jazz = loadSound("assets/jazzyfrenchy.mp3")
}


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  jazz.play();
}

function draw() {
background(154, 126, 189);
fill("white");

text("The name of this song is Jazzy Frenchy.", 100, 100, 400, 400);
}

function mouseReleased() {
  if (jazz.isPlaying()){
      jazz.pause();
  }
  else {
    jazz.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}