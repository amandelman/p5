var x = 0;
var y = 0;
var location;
var offset = 10;
var easing = 0.01;

function setup() {
createCanvas(1280, 900);
fill(0, 20);
location = width/2;
// strokeWeight(40);
// stroke(0, 102);
}

function draw() {

//Draw a circle of low opacity based on mouse location. The circle gets drawn every frame.
//ellipse (mouseX, mouseY, 9, 9);

//Draw a circle of low opacity that follows the mouse. The circle only draws wherever the cursor is.
// background(220);
// ellipse (mouseX, mouseY, 9, 9);

//Draw continuously using pmouse variables
// line(mouseX, mouseY, pmouseX, pmouseY);

//Set thickness on the fly using pmouse variables
// var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
// strokeWeight(weight);
// line(mouseX, mouseY, pmouseX, pmouseY);

//easing
// var targetX = mouseX;
// var targetY = mouseY;
// x += (targetX - x) * easing;
// y += (targetY - y) * easing;
// ellipse(x, y, 10000/mouseX, 10000/mouseY);
// print(targetX + " : " + x);

//click
// background(204);
// stroke(102);
// strokeWeight(80);
// line(40, 0, 70, height);
// if (mouseIsPressed) {
//   if (mouseButton == LEFT){
//     stroke(255);
//   } else {
//     stroke(0);
//   }
//   line(0, 70, width, 50);
// }

//Location
background(204);
if(mouseX>x){
  x+=0.5;
  offset = -10;
}
if(mouseX<x){
  x-=0.5;
  offset = 10;
}
//then draw arrow left or right depending on offset value
line(x, 0, x, height);
line(mouseX, mouseY, mouseX + offset, mouseY - 10);
line(mouseX, mouseY, mouseX + offset, mouseY + 10);
line(mouseX, mouseY, mouseX + offset*3, mouseY);

}
