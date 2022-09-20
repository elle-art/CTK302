let f1; let x = 0;
function setup() {
  createCanvas(1130, 560);
  f1 = loadFont("Blazed.ttf");
  rectMode(CENTER);
}

function draw() {
  background(100);
  push() ;
  translate(x, 0);
  avatar();
  x += 5;
  if(x > width) {
    x = 0;
  }
  pop();
}

function avatar() {
noStroke();

//hand flame
fill(230, 101, 62);
circle(674, 303, 30);
beginShape();
vertex(661, 311);vertex(659 , 301); vertex(657, 295); vertex(660, 289); vertex(654, 285); vertex(658, 281); vertex(661, 285); vertex(665, 289); vertex(667, 286); vertex(670, 281); vertex(664, 276); vertex(665, 264); vertex(670, 269); vertex(677, 254); vertex(679, 272); vertex(675, 275);vertex(678, 281);vertex(678, 286);vertex(684, 280); vertex(682, 275); vertex(688, 273); vertex(688, 263); vertex(689, 279); vertex(685, 284); vertex(688, 286);vertex(686, 291); vertex(689, 295);vertex(689, 301); vertex(686, 307);
endShape(CLOSE);
rect(649, 269, 1, 1);
rect(651, 278, 2, 2);
rect(685, 243, 1, 1);
rect(687, 251, 2, 2)
//hair
fill(235, 234, 225);
beginShape();
vertex(601, 229);
vertex(610, 253); vertex(606, 258); vertex(608, 267); vertex(603, 273); vertex(612, 281); vertex(606, 296); vertex(613, 306); vertex(590,313); vertex(594, 306); vertex(525, 313); vertex(507, 306); vertex(510, 298);vertex(507, 281);vertex(515, 274);vertex(511,268);vertex(514,260);vertex(509,253);vertex(513,239); 
endShape(CLOSE);
//head
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
//shirt
fill(240, 240, 240);
quad(521, 297, 600, 297, 580, 350, 540, 350);
fill(158, 47, 47);
textFont(f1, 20);
text("hot", 539, 325);
//sleeves
quad(578, 297, 595, 313, 615, 313, 600, 297);
quad(540, 297, 527, 313, 507, 313, 521, 297);
//pants
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