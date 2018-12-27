//Robot with variables
//Use transform, scale, rotate to simplify script in robot-response.js

//From HERE
var x = 500; // x coordinate
var y = 660; // y coordinate
var bodyHeight = 110; // Body height
var neckHeight = 60; // Neck height
var radius = 55;
var easing = 0.04


function setup(){
  createCanvas(1280, 700);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
//To HERE remains UNCHANGED

//NEW Simplified Code
function draw(){

var neckY = -1*(bodyHeight + neckHeight + radius);

background(220);

translate(mouseX, mouseY);

if(mouseIsPressed){
  scale(1.8);
    //map some color codes based on mouse position
  my = map(mouseX, 0, width, 0, 255);
  mz = map(mouseY, 0, height, 0, 255);
  mx = map(easing*mouseY/mouseX, 0, easing*height/width, 0, 255);

} else {
  scale(1.0);
}


  //map some color codes based on mouse position
var mx = map(mouseX, 0, width, 0, 255);
var my = map(mouseY, 0, height, 0, 255);
var mz = map(mouseX/mouseY, 0, width/height, 0, 255);


// var targetX = mouseX;
// // x += (targetX - x)*easing;
//
// var targetY = mouseY;
// y += (targetY - y)*easing;

// Body
noStroke();
fill(102);
ellipse(0, -33, 33, 33);
fill(0);
rect(-45, -bodyHeight, 90, bodyHeight-33);
fill(102);
rect(-45, -bodyHeight+17, 90, 6);

// Neck
stroke(102);
line(2, -bodyHeight, 2, neckY);
line(12, -bodyHeight, 12, neckY);
line(22, -bodyHeight, 22, neckY);

// Antennae
push();
translate(12,neckY);
var angle = -PI/30.0;
for (var i = 0; i<=30; i++){
  line(80,0,0,0);
  rotate(angle);
}
pop();

// Head
fill(0);
ellipse(12, neckY, radius, radius);
fill(mz, mx, my);
//eye
ellipse(24, neckY-6, 14, 14);
fill(0);
ellipse(24, neckY-6, 3, 3);
fill(153);
ellipse(0, neckY-8, 5, 5);
ellipse(30, neckY-26, 4, 4);
ellipse(41, neckY+6, 3, 3);

//Other object
fill(mx, my, mz);
ellipse(mouseX-x, mouseY-y, mouseX*0.03, mouseX*0.03);

}
