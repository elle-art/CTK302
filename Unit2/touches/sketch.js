let numberOfTouches ; let i1, i2, i3 ;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/1.jfif");
  i2 = loadImage("assets/2.jpg");
  i3 = loadImage("assets/3.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("nobody's here", 5, 22) ; 
      break ;
      
      case 1: 
       text("one is the loneliest number", 5, 22) ; 
       image(i1, width/2, height/2, 200, 200) ;
      break ;
      
      case 2:
      text("two can be as bad as one, it's the loneliest number since the number one", 5, 22) ; 
      image(i2, width/2, height/2, 200, 200) ;
      break ;
      
      case 3:
     text("three's a crowd though", 5, 22) ; 
     image(i3, width/2, height/2, 200, 200) ;
      break ;
    
      
  }
  
}