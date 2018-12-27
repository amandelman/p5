var imgBuggy;
var imgCapsule;
var imgCloudsGif;
var imgCloudsPng;
var imgNetwork;
var imgFrame11;
var text1 = "Welcome to..."
var text2 = "The Lunar Disco"

function preload(){
  imgBuggy = loadImage("media/lunar.jpg");
  imgCapsule = loadImage("media/capsule.jpg");
  imgCloudsGif = loadImage("media/clouds.gif");
  imgCloudsPng = loadImage("media/clouds.png");
  imgNetwork = loadImage("media/network.svg");
}

function setup(){
  createCanvas(1280, 700);
  textFont("Courier");
}

function draw(){
  background(255);
  image(imgBuggy, 850, 150, 500-mouseX, 500-mouseY);
  push();
  imageMode(CENTER);
  image(imgCapsule, mouseX, mouseY);
  pop();
  image(imgCloudsGif, 0, mouseY*-1);
  image(imgCloudsPng, mouseX*-1, 400);
  image(imgNetwork, 1200-mouseX, 600-mouseY);
  textSize(16);
  push();
  fill(0);
  stroke(20,200,200);
  strokeWeight(35);
  text(text1, 180, mouseY+50);
  pop();
  push();
  fill(200,200,20);
  stroke(200,50,200);
  strokeWeight(105);
  textSize(32);
  text(text2, 1500-mouseX, 550);
}
