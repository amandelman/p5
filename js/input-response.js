// var loc;
var x = 400;
var y = 400;
// var offset = 10;
// var easing = 0.01;

function setup() {
createCanvas(1280, 700);
fill(0, 20);
ellipseMode(RADIUS);
// strokeWeight(40);
// stroke(0, 102);
}

function draw() {
//
// //Draw a circle of low opacity based on mouse location. The circle gets drawn every frame.
// //ellipse (mouseX, mouseY, 9, 9);
//
// //Draw a circle of low opacity that follows the mouse. The circle only draws wherever the cursor is.
// // background(220);
// // ellipse (mouseX, mouseY, 9, 9);
//
// //Draw continuously using pmouse variables
// // line(mouseX, mouseY, pmouseX, pmouseY);
//
// //Set thickness on the fly using pmouse variables
// // var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
// // strokeWeight(weight);
// // line(mouseX, mouseY, pmouseX, pmouseY);
//
// //easing
// // var targetX = mouseX;
// // var targetY = mouseY;
// // x += (targetX - x) * easing;
// // y += (targetY - y) * easing;
// // ellipse(x, y, 10000/mouseX, 10000/mouseY);
// // print(targetX + " : " + x);
//
// // click
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


// Location
// loc=width/2;
// background(204);
// if(mouseX>x){
//   x+=0.5;
//   offset = -10;
// }
// if(mouseX<x){
//   x-=0.5;
//   offset = 10;
// }
// //then draw arrow left or right depending on offset value
// line(x, 0, x, height);
// line(mouseX, mouseY, mouseX + offset, mouseY - 10);
// line(mouseX, mouseY, mouseX + offset, mouseY + 10);
// line(mouseX, mouseY, mouseX + offset*3, mouseY);

//Bounds of a circle
// x = width/2;
// y = height/2;
// var radius = 12;
// var d = dist(mouseX, mouseY, x, y);
// background(220)
// if (d < radius) {
// radius+=100;
// fill(0);
// } else {
// fill(255);
// }
// ellipse(x, y, radius, radius);

//Bounds of a rectangle`
// x = 80;
// y = 30;
// var w = 80;
// var h = 60;
//
// background(204);
////Tests if cursor is inside bounds of rectangle
// if ((mouseX > x) && (mouseX < x+w) &&
// (mouseY > y) && (mouseY < y+h)) {
// fill(0);
// }
// else {
// fill(255);
// }
// rect(x, y, w, h);

////Type
// background(204);
// if(keyIsPressed){
//   if(key=="q"){
//     for (var x = 20; x<width; x+=50){
//     	for (var y = 20; y<height; y+=5){
//     	line(x, y, x/10, y/10);
//     	}
//     }
//   }
//   if(key=="w"){
//     for (var a = 800; a>0; a-=50){
//     	for (var b = 800; b>0; b-=50){
//     	line(a, b, a/10, b/10);
//     	}
//     }
//   }
// }

////Move with arrow keys
// background(220);
// if (keyIsPressed) {
// if (keyCode == LEFT_ARROW) {
// x-=10;
// }
// else if (keyCode == RIGHT_ARROW) {
// x+=10
// }
// else if (keyCode == DOWN_ARROW){
// y+=10;
// } else if (keyCode == UP_ARROW){
// y-=10;
// }
//
// }
// rect(x, y, 50, 50);

// //MAP values to range
// strokeWeight(12);
// background(204);
// stroke(102);
// line(mouseX, 0, mouseX, height); // Gray line
// stroke(0);
// var mx = mouseX/2 + 60;
// line(mx, 0, mx, height); // Black line

//MAP values to range using MAP function
strokeWeight(20);
background(204);
stroke(255);
line(width/2, height/2, mouseX, mouseY); // White line
stroke(0);
var mx = map(mouseX, 0, width, 500, height); //map function's first paramters is the variable to be transformed, second and third parameters are the actual low and high values of that parameters, and the 4th and 5th are the desired low and high values
line(width/2, height/2, mx, mouseY); // Black line

}
