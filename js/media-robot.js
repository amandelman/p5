var bot1;
var bot2;
var landscape;

var easing = 0.05;
var offset = 0;


function preload(){
  bot1 = loadImage("media/robot1.svg");
  bot2 = loadImage("media/robot2.svg");
  // bot3 = loadImage("media/robot3.svg");
  landscape = loadImage("media/Wayag3.jpg");
}

function setup(){
  createCanvas(1400, 750);
}

function draw(){
  background(landscape);

  //set offset and easing for smooth transitions
  var targetOffset = map(mouseY, 0, height, -180, 180);
  offset += (targetOffset - offset) * easing;

  image(bot1, 85 + offset, 365);

  var smallerOffset = offset *0.7;
  image(bot2, 910 + smallerOffset, 240, 78, 248);

  smallerOffset *= -0.5;
  push();
  scale(0.5, 0.5);
  image(bot1, 710 + smallerOffset, 225, 39, 125);
  pop();



}
