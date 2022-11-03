let cars = [];

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
}

function draw() {
  background("white");

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].opacity < 0) {
      cars.splice(i, 1);
    }
  }
}

class Car {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-0.3, 0.3), random(-10, -3));
    this.r = random(105);
    this.b = random(200);
    this.g = random(255);
    this.opacity = random(255);
    this.size = random(48,128);
  }

  // methods

  display() {
    fill(this.r, this.b, this.g, this.opacity);
    textSize(this.size);
    text("agh", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity -= 5;
  }
}
