let numberOfTouches ; let i1, i2, i3 ;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/1.jfif");
  i2 = loadImage("assets/2.jpg");
  i3 = loadImage("assets/3.jpg");
  rectMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', width/2, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("nobody's here", width/2, 22) ; 
      break ;
      
      case 1: 
       text("one is the loneliest number", width/2, 22) ; 
       image(i1, width/2, height/2, 200, 200) ;
      break ;
      
      case 2:
      text("two can be as bad as one, \nit's the loneliest number since the number one", width/2, 22) ; 
      image(i2, width/2, height/2, 200, 200) ;
      break ;
      
      case 3:
     text("three's a crowd though", width/2, 22) ; 
     image(i3, width/2, height/2, 200, 200) ;
      break ;
    
      
  }
  
}