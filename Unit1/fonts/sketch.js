let f1, f2, f3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Blazed.ttf");
  f2 = loadFont("assets/Franchise.ttf");
  f3 = loadFont("assets/FranchiseFilled.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("pink");
  textFont(f1, 48);
  text("take it sleezy!", width / 2, 100);

  textFont(f2, 24);
  text("I am Iron Man.", width / 2, 200);

  textFont(f3, 24);
  text("Bingus", width / 2, 300);


}
