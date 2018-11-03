



//Robot with variables
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

function draw(){

if(mouseIsPressed){
  neckHeight = 16;
  bodyHeight = 90;
  //map some color codes based on mouse position
  my = map(mouseX, 0, width, 0, 255);
  mz = map(mouseY, 0, height, 0, 255);
  mx = map(easing*mouseY/mouseX, 0, easing*height/width, 0, 255);


} else {
  neckHeight = 70;
  bodyHeight = 160;
  //map some different color codes based on mouse position
  var mx = map(mouseX, 0, width, 0, 255);
  var my = map(mouseY, 0, height, 0, 255);
  var mz = map(mouseX/mouseY, 0, width/height, 0, 255);

}

var targetX = mouseX;
x += (targetX - x)*easing;

var targetY = mouseY;
y += (targetY - y)*easing;

var ny = y - bodyHeight - neckHeight - radius;

background(220);

// Neck
stroke(102);
line(x+2, y-bodyHeight, x+2, ny);
line(x+12, y-bodyHeight, x+12, ny);
line(x+22, y-bodyHeight, x+22, ny);
// Antennae
line(x+12, ny, x+88, ny-43);
line(x+12, ny, x+42, ny-99);
line(x+12, ny, x+78, ny+15);
// Body
noStroke();
fill(102);
ellipse(x, y-33, 33, 33);
fill(0);
rect(x-45, y-bodyHeight, 90, bodyHeight-33);
fill(102);
rect(x-45, y-bodyHeight+17, 90, 6);
// Head
fill(0);
ellipse(x+12, ny, radius, radius);
fill(mz, mx, my);
//eye
ellipse(x+24, ny-6, 14, 14);
fill(0);
ellipse(x+24, ny-6, 3, 3);
fill(153);
ellipse(x, ny-8, 5, 5);
ellipse(x+30, ny-26, 4, 4);
ellipse(x+41, ny+6, 3, 3);

//Other object
fill(mx, my, mz);
ellipse(mouseX, mouseY-220, mouseX*0.03, mouseX*0.03);

}
