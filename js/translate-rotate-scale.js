var pct = 0.0;
function setup(){
  createCanvas(800,500);
  angleMode(DEGREES);
}

// //translate
// function draw(){
//   noStroke();
//   fill(150);
//   translate(mouseX,mouseY);
//   background(225);
//   rect(0,0,120,50);
//   fill(10);
//   //note how transforms accumulate
//   translate(80, 20);
//   rect(0,0,20,30);
// }


// //rotate
// function draw(){
//   ////rotate at corner
//   // background(225);
//   // rotate(mouseX/10);
//   // rect(0,0, 200, 100);
//
//   //rotate at center
//   translate(mouseX,mouseY);
//   background(225);
//   rotate(mouseX);
//   //set coordinate at negative half width and height to make it roate at center
//   rect(-100,-50, 200, 100);
//   // angle += 10;
// }


//articulating arm

// var angle = 0;
// var angleDirection = 1;
// var speed = 0.4;
//
// function draw(){
//   background(225);
//   var scalar = mouseX/20.0;
//   var startZ = 0;
//   var stopZ = 100;
//   var startY = height;
//   var stopY = 400;
//   var z = startZ;
//   var y = startY;
//   var stepNow = 0.025;
//
//
//   if(pct < 2){
//     z = startZ + ((stopZ-startZ)*pct);
//     y = startY + ((stopY-startY)*pct);
//     pct += stepNow;
//   } else {
//     pct = 0;
//   }
//   // print(pct);
//     // fill(255,0,0);
//     // noStroke();
//   ellipse(z,y, scalar, scalar);
//
//
//   translate(width/3, height/3); //start position
//   rotate(angle);
//   strokeWeight(12);
//   line(0, 0, 80, 0);
//
//   translate (80, 0); //move to next joint
//   rotate(angle*2);
//   strokeWeight(6);
//   line (0,0,60,0);
//
//   translate(60,0); //move to next joint
//   rotate(angle*2.5);
//   strokeWeight(3);
//   line(0,0,40,0);
//
//   translate(40,0); //move to end
//   // rotate(angle*5);
//
//   triangle(25,25,50,10,100,100);
//   fill(0);
//   ellipse(0,0,20,20);
//   fill(255);
//   ellipse(0,0,10,10);
//   strokeWeight(7);
//   line(5,5,30,30);
//
//   angle+=speed * angleDirection;
//   if ((angle>45) || (angle<0)){
//     angleDirection *=-1;
//     }
// }


  //SCALE
  //To keep stroke weight constant, create a variable that holds the scalar value
  //and use it for both the scale and stroke parameters

  function draw() {
    var scalar = mouseX/100.0;
    background(225);
    push();
    translate(mouseX, mouseY);
    scale(scalar);
    strokeWeight(1.0/scalar);
    rect(-25,-25,50,50);
    pop();
    translate(mouseY, mouseX);
    scale(1/scalar);
    strokeWeight(scalar);
    rect(-25,-25,50,50);
  }
