// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temp = 0;
let feelsLike = 0;
let i1;

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather. We build the string first.
  i1 = loadImage("seattle.jpg");
  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Seattle,WA,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=b652224f2b671edf1a4c1484a0970224" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
temp = weather.main.temp;
feelsLike = weather.main.feels_like;

}

function draw() {

  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1: 
  
      background(200);
      image(i1, 0, 0, 400, 400) ;
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("The windspeed is " + windspeed, 20, 40);
      text("The temperature is " + temp + " degrees Fahrenheit", 20, 60);
      text("It feels like " + feelsLike + " degrees Fahrenheit", 20, 80);
 

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 340, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

    rect(350, 20, 30, 200);
    noStroke();
    fill(230, 101, 62);
    text("temp: " + temp, 280, 220);
    rect(350, 220 - temp, 30, temp);


      break;
  }
}