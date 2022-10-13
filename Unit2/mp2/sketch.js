/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 
let f1, f2;
let mic;
let vol = 0;
let state = 0;
let gameTimer = 20;
let timer = 0;

function setup() {
  mic = new p5.AudioIn();
  mic.start();

  createCanvas(1130, 560);
  f1 = loadFont("Blazed.ttf");
  f2 = loadFont("Brastika.ttf");
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  noStroke();
  text("time log: ");
  text("CODE FREEZE 10/12/2022 @11:59pm");
  text("10/9/22 .5 hrs - setting up states/audio");
  text("10/9/22 .5 hrs - fixing small things like text placement");
  text("10/12/22 2 hrs - finishing up");
}

function draw() {
  background(47, 57, 92);
  scene();
switch (state) {
  //level start
  case 0:
    scene();
    sceneFire();
    textFont(f1, 30);
    text("ARSON", width/2, 50);
    textFont(f2, 20);
    text("click to start", width/2, 90);
    break;
  //directions
  case 1:
    scene();
    avatar();
    textFont(f2, 30);
    fill(220);
    rect(width/2, 90, 800, 140);
    fill(0);
    text("How to play", width/2, 50);
    textFont(f2, 25);
    text("\nThis is Cali and she hates the sound of your voice\nUse your voice to fuel her anger and set stuff on fire. \nClick the screen first to give permission for mic input.", width/2, 50);
    break;
  //plain av, mic, level 1
  case 2:
    avatar();
    fill("grey");
    rect(450, 310, 60, 400);
    noStroke();
    //audioin stuff 
    vol = mic.getLevel(); 
    fill(230, 101, 62);
    textFont(f2, 15);
    text("Anger meter: " + vol.toFixed(3), 400, 530);
    x = map(-vol, 0, 1, 0, height);
    ellipse(450, x + 500, 50, 50);

    gameTimer -= 1/60;
    fill("white");
    textSize(24);
    text("" + round(gameTimer), 1050,50);
    if (gameTimer <= 0) {state = 5;}

    if(vol > 0.5){state = 3;}
    break;
  case 3:
    background("orange");
    avatar2();
    handFlame();
    textSize(50);
    text("Congratulations", width/2, 100);
    textSize(30)
    text("You've set the world on fire!", width/2, 140);

    timer++;
    if (timer > 10 * 60) {
      timer = 0;
      state = 4; 
    }
    break;
  case 4:
    scene();
    sceneFire();
    fill(0);
    textSize(50);
    text("thanks for playing", width/2, height/2);
    break;
  case 5:
    scene();
    fill(0);
    textSize(50);
    text("you lose", width/2, height/2);
    textSize(30)
    text("be louder next time", width/2, height/2 + 40);
    timer++;
    if (timer > 10 * 60) {
      timer = 0;
      state = 4; 
    }
    break;
}}

function avatar() {
   //hair
   fill(235, 234, 225);
   beginShape();
   vertex(601, 229);
   vertex(610, 253); vertex(606, 258); vertex(608, 267); vertex(603, 273); vertex(612, 281); vertex(606, 296); vertex(613, 306);
   vertex(590,313); vertex(594, 306); vertex(525, 313); vertex(507, 306);
   vertex(510, 298);vertex(507, 281);vertex(515, 274);vertex(511,268);vertex(514,260);vertex(509,253);vertex(513,239); 
   endShape(CLOSE);
 
   ///head
   fill(186, 141, 141);
   circle(560, 240, 90);
   rect(560, 283, 10, 40);
 
   //eyes
   noFill();
   stroke(0);
   strokeWeight(1.5);
   bezier(550, 240, 540, 234, 537, 240, 535, 240);
   bezier(580, 240, 570, 234, 567, 240, 565, 240);
   line(535, 240, 530, 238);
   line(580, 240, 585, 238);
 
   //bangs
   stroke(255);
   fill(235, 234, 225);
   bezier(557, 194, 563, 222, 584, 242, 602, 251);
   bezier(565, 194, 610, 206, 607, 227, 604, 251);
   bezier(557, 194, 550, 219, 538, 235, 515, 242);
   bezier(557, 194, 535, 197, 517, 202, 515, 243);
   bezier(565, 194, 610, 206, 607, 227, 604, 251);
 
   fill(158, 47, 47);
   bezier(557, 194, 583, 194, 603, 227, 603, 251);
 
   noStroke();
   //arms
   fill(186, 141, 141);
   quad(610, 313, 594, 313, 580, 346, 584, 357);
   quad(510, 313, 528, 313, 540, 346, 535, 357);
   ///shirt
   fill(240, 240, 240);
   quad(521, 297, 600, 297, 580, 350, 540, 350);
   fill(158, 47, 47);
   textFont(f1, 20);
   text("hot", 559, 325);
   //sleeves
   quad(578, 297, 595, 313, 615, 313, 600, 297);
   quad(540, 297, 527, 313, 507, 313, 521, 297);
   
   ///pants
   fill(60, 62, 74);
   //thigh
   quad(540, 345, 580, 345, 605, 400, 515, 400);
   //calf
   quad(515, 400, 605, 400, 575, 525, 540, 525);
   //line
   stroke(44, 45, 56);
   line(560, 527, 560, 383);
 
   ///shoes
   fill(199, 69, 60);
   bezier(535, 530, 538, 510, 555, 510, 560, 530);
   bezier(560, 530, 563, 510, 580, 510, 585, 530);
 
  }
function scene() {
  //street
  fill(51, 51, 51); rect(565, 536, 1130, 50); noStroke();
  //buildings
  fill(184, 77, 141); rect(110, 300, 200, 425); 
  fill(227, 214, 116); rect(345, 275, 170, 475);
  fill(134, 174, 219); rect(800, 255, 190, 515);
  fill(154, 129, 212); rect(1040, 300, 250, 425);

  //windows
  fill(161, 193, 201);
  //building1
  rect(60, 140, 80, 90); rect(60, 240, 80, 90); rect(60, 340, 80, 90); rect(60, 440, 80, 90); rect(155, 140, 80, 90); rect(155, 240, 80, 90); rect(155, 340, 80, 90); rect(155, 440, 80, 90);
  //building2
  rect(340, 70, 160, 35); rect(340, 115, 160, 35); rect(340, 160, 160, 35); rect(340, 205, 160, 35); rect(340, 250, 160, 35); rect(340, 295, 160, 35); rect(340, 340, 160, 35); rect(340, 385, 160, 35); rect(340, 430, 160, 35);
  //building3
  rect(840, 70, 60, 300); rect(750, 70, 60, 300); rect(840, 350, 60, 200); rect(750, 350, 60, 200);
  //building4
  rect(1025, 150, 190, 75); rect(1025, 240, 190, 75); rect(1025, 330, 190, 75); rect(1025, 420, 190, 75); 
}
function sceneFire() {
  //fire
  fill(230, 101, 62);
  rect(500, 402, 140, 220);
  beginShape();
  vertex(430, 292); vertex(436, 266); vertex(445, 269); vertex(461, 253); vertex(459, 225); vertex(487, 207); vertex(494, 166); vertex(543, 152); vertex(507, 168); vertex(508, 196); vertex(509,207);vertex(595,189);vertex(539, 311);
  endShape(CLOSE);

  //buildingfire
  fill('rgba(49, 55, 77,0.9)');
  beginShape();
  vertex(768, 0); vertex(895, 0); vertex(895, 202); vertex(865, 210); vertex(835, 173); vertex(792, 164);vertex(785, 112);vertex(770, 80);
  endShape(CLOSE);
  fill(230, 101, 62);
  beginShape();
  vertex(785, 112); vertex(812, 67); vertex(827, 52); vertex(884, 37); vertex(902, 28); vertex(924, 43);vertex(936,35);vertex(956, 36);vertex(950,46); vertex(941, 50);vertex(938, 57);vertex(923, 61);vertex(921, 72);vertex(942, 73);vertex(955, 67);vertex(960, 56);vertex(971, 57); vertex(992, 63);vertex(1000, 55);vertex(1009, 58);vertex(1042, 73);vertex(1000, 64);vertex(995, 72);vertex(985, 70);vertex(975, 76);vertex(956, 84);vertex(936,100);vertex(950,104);vertex(971,115);vertex(993,104);vertex(1000,120);vertex(1015,110);vertex(1050,136);vertex(1017,127);vertex(1007,128);vertex(976,126);vertex(961,137);vertex(936,143);vertex(946,154);vertex(920,159);vertex(924,173);vertex(917,185);vertex(902,200);vertex(895,202);vertex(864,209);vertex(835,172);vertex(790,163);
  endShape();

  //window fires
  beginShape();
  vertex(20,95);vertex(20,186);vertex(100,186);vertex(107,177);vertex(118,179);vertex(135,179);vertex(107,154);vertex(103,163);vertex(97,150);vertex(106,143);vertex(117,148);vertex(125,144);vertex(130,136);vertex(152,150);vertex(128,128);vertex(120,134);vertex(89,123);vertex(96,112);vertex(111,115);vertex(115,109);vertex(125,114);vertex(130,104);vertex(152,105);vertex(129,99);vertex(123,102);vertex(107,93);vertex(103,100);vertex(84,92);vertex(89,79);vertex(97,70);vertex(86,61);vertex(91,50);vertex(82,39);vertex(82,17);vertex(75,36);vertex(64,43);vertex(67,56);vertex(59,68);vertex(42,76);
  endShape();
  beginShape();
  vertex(114,295);vertex(114,386);vertex(195,386);vertex(197,373);vertex(206,361);vertex(199,347);vertex(202,332);vertex(196,325);vertex(208,315);vertex(183,324);vertex(188,331);vertex(175,332);vertex(170,322);vertex(180,313);vertex(175,304);vertex(182,293);vertex(175,283);vertex(198,273);vertex(164,280);vertex(168,288);vertex(163,294);vertex(157,303);vertex(160,309);vertex(150,315);vertex(150,327);vertex(140,330);vertex(135,316);vertex(139,307);vertex(135,297);vertex(142,290);vertex(139,282);vertex(128,257);vertex(130,284);
  endShape();
}
function avatar2() {
  //hair
  fill(235, 234, 225);
  beginShape();
  vertex(601, 229);
  vertex(610, 253); vertex(606, 258); vertex(608, 267); vertex(603, 273); vertex(612, 281); vertex(606, 296); vertex(613, 306);
  vertex(590,313); vertex(594, 306); vertex(525, 313); vertex(507, 306);
  vertex(510, 298);vertex(507, 281);vertex(515, 274);vertex(511,268);vertex(514,260);vertex(509,253);vertex(513,239); 
  endShape(CLOSE);

  ///head
  fill(186, 141, 141);
  circle(560, 240, 90);
  rect(560, 283, 10, 40);
 
  //eyes
  fill(204, 70, 33);
  stroke(0);
  strokeWeight(2);
  line(550, 242, 530, 238);
  line(565, 242, 585, 238);
  bezier(550, 242, 543, 250, 529, 248, 530, 240);
  bezier(565, 242, 570, 250, 583, 248, 584, 240);
     
  //bangs
  stroke(255);
  fill(235, 234, 225);
  bezier(557, 194, 563, 222, 584, 242, 602, 251);
  bezier(565, 194, 610, 206, 607, 227, 604, 251);
  bezier(557, 194, 550, 219, 538, 235, 515, 242);
  bezier(557, 194, 535, 197, 517, 202, 515, 243);
  bezier(565, 194, 610, 206, 607, 227, 604, 251);
 
  fill(158, 47, 47);
  bezier(557, 194, 583, 194, 603, 227, 603, 251);
 
  noStroke();
  //arms
  fill(186, 141, 141);
  quad(610, 313, 594, 313, 620, 335, 620, 322);
  quad(620, 335, 620, 322, 665, 328, 665, 332);
  quad(665, 328, 665, 332, 682, 333, 692, 320);
  quad(510, 313, 528, 313, 540, 346, 535, 357);

  ///shirt
  fill(240, 240, 240);
  quad(521, 297, 600, 297, 580, 350, 540, 350);
  fill(158, 47, 47);
  textFont(f1, 20);
  text("hot", 559, 325);
  //sleeves
  quad(578, 297, 595, 313, 615, 313, 600, 297);
  quad(540, 297, 527, 313, 507, 313, 521, 297);
     
  ///pants
  fill(60, 62, 74);
  //thigh
  quad(540, 345, 580, 345, 605, 400, 515, 400);
  //calf
  quad(515, 400, 605, 400, 575, 525, 540, 525);
  //line
  stroke(44, 45, 56);
  line(560, 527, 560, 383);
 
  ///shoes
  fill(199, 69, 60);
  bezier(535, 530, 538, 510, 555, 510, 560, 530);
  bezier(560, 530, 563, 510, 580, 510, 585, 530);
}
function handFlame() {
  noStroke();
  //hand flame
  circle(674, 303, 30);
  beginShape();
  vertex(661, 311);vertex(659 , 301); vertex(657, 295); vertex(660, 289); vertex(654, 285); vertex(658, 281); vertex(661, 285); vertex(665, 289); vertex(667, 286); vertex(670, 281); vertex(664, 276); vertex(665, 264); vertex(670, 269); vertex(677, 254); vertex(679, 272); vertex(675, 275);vertex(678, 281);vertex(678, 286);vertex(684, 280); vertex(682, 275); vertex(688, 273); vertex(688, 263); vertex(689, 279); vertex(685, 284); vertex(688, 286);vertex(686, 291); vertex(689, 295);vertex(689, 301); vertex(686, 307);
  endShape(CLOSE);
  //wisps
  rect(649, 269, 1, 1);
  rect(651, 278, 2, 2);
  rect(685, 243, 1, 1);
  rect(687, 251, 2, 2);
}

//for state
function mouseReleased() {
state++;
if (state > 4) {
  state = 0;
}
}
//for audioin
function touchStarted() {
  getAudioContext().resume();
}