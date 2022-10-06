let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
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
      // put a picture here
      break ;
      
      case 2:
      text("two can be as bad as one, it's the loneliest number since the number one", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
     text("three's a crowd though", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}