let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("rgb(240,176,176)");
      fill(177, 201, 184);
      for (let j = 0; j < height; j += 15) {
        for (let i = 0; i < width; i += 15) {
          rect(i, j, 20, 20);
        }
      }
      break;
    case 1:
      background("rgb(196,196,233)");
      for (let j = 0; j < 3000; j += 25) {
        for (let i = 0; i < 3000; i += 25) {
          fill(random(196, 300), 196,210);
          push();
          translate(width / 2, -height - 1000);
          rotate(45);
          rect(i, j, 20, 20);
          pop();
        }
      }
      break;
    case 2:
      background("rgb(141,163,141)");
      fill(177, 201, 184);
      for (let j = 0; j < height; j += 30) {
        for (let i = 0; i < width; i += 30) {
          ellipse(i, j, 40, 20);
        }
      }
      break;
    case 3:
      background("#EFDB9D");
      fill(177, 201, 184);
      for (let j = 0; j < height; j += 40) {
        for (let i = 0; i < width; i += 65) {
          rect(i, j, 20, 20);
        }
      }
      break;
    case 4:
      background("#B6A3D8");
      fill(177, 201, 184);
      for (let j = 0; j < height; j += 15) {
        for (let i = 0; i < width; i += 30) {
          ellipse(i, j, 20, 20);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
