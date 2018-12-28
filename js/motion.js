////BASIC MOTION
// var radius = 40;
// var x = 110;
// var speed = 5;
// var direction = 1;
// var c1x = 160;
// var c2x = 960;
// var c2y = 600;
// var facing1;
// var facing2;
//
function setup(){
  createCanvas(1280, 700);
  ellipseMode(RADIUS);
  j = width/2;
  k = height/2;
}
//
// //Changing direction and flipping
// function draw(){
//   background(220);
//   x+= speed * direction;
//   if ((x>height-radius) || (x<radius)){ //if PacPeople reach edge of screen
//     direction = -direction; //change direction
//   }
//   //change direction PacPeople face
//   if (direction == 1){
//     facing1 = 0.52;
//     facing2 = 5.76;
//   } else {
//     facing1 = 3.67;
//     facing2 = 8.9;
//   }
//   //draw PacPeople
//   fill(0);
//   arc(c1x, x, radius, radius, facing1, facing2);
//   arc(c2x, c2y-x, radius, radius, facing1, facing2);
//   fill(255);
//   ellipse(c2x, 578-x, 10, 10);
//   ellipse(c1x, x-22, 10, 10);
//   fill(0);
//   ellipse(c2x, 578-x, 5, 5);
//   ellipse(c1x, x-22, 5, 5);
//   fill(255);
//   ellipse(c2x+2, 576-x, 2, 2);
//   ellipse(c1x+2, x-24, 2, 2);
// }


//// TWEENING MOTION
// var startX = 20; // Initial x coordinate
// var stopX = 160; // Final x coordinate
// var startY = 30; // Initial y coordinate
// var stopY = 480; // Final y coordinate
// var x = startX; // Current x coordinate
// var y = startY; // Current y coordinate
// var step = 0.005; // createCanvas of each step (0.0 to 1.0)
// var pct = 0.0; // Percentage traveled (0.0 to 1.0)
//
// function draw(){
//   background(220);
//   if(pct < 1.0){
//     x = startX + ((stopX-startX)*pct);
//     y = startY + ((stopY-startY)*pct);
//     pct+=step;
//   }
//   fill(0);
//   ellipse(x,y,20,20);
// }

// //RANDOM MOTION 1
// function draw(){
//   background (220);
//   for (var x = 20; x<width; x+=100){
//     var mx = mouseX/10;
//     var offsetA = random(-mx, mx);
//     var offsetB = random(-mx, mx); //different random number so that motion isn't mirrored
//     line(x + offsetA, 420, x-offsetB, 100);
//   }
//
// }

//RANDOM MOTION 2
var speed = 100.5;
var diameter = 20;
var j;
var k;

function draw(){
  background(220);
  j += random(-speed, speed);
  k += random(-speed, speed);
  j = constrain(j, 0, width); //keep object within x bounds
  k = constrain(k, 0, height); //keep object within y bounds
  fill(0);
  ellipse(j, k, diameter, diameter);

}
