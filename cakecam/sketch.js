let leftBound;
let isIn=false;
let isRed=false;
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  leftBound = width*2/3;
}

function draw() {
  background(220);
  
  noStroke();
  rect(leftBound, 0, width, height)
  
  if (mouseX>=leftBound && isIn == false){
    isIn = true;
    isRed = !isRed; //whatever the color is, just flip it
  }
  
  else if (mouseX<leftBound){
    isIn = false;
  }
  
  if (isRed){
    fill("red");
  }
  else{
    fill("white");
  }
  
  console.log("isRed:" + isRed + " " + "isIn:" + isIn)

}