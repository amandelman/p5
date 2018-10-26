function setup(){
  createCanvas(1000, 600);
}

function draw() {
  // put drawing code here
  background(80,230,100);

//Fun with Loops
  // fill(25,155,25, 50);
  // for (var x = 20; x<width; x+=50){
  // 	for (var y = 20; y<height; y+=5){
  // 	ellipse(x, y, x/10, y/10);
  // 	}
  // }
 //
 // for(var y = 50; y<=height; y+=50){
 // 	for(var x = 50; x<=width; x+=50){
 // 		line(x,y,width/2,height/2);
 // 		ellipse(x,y,10,10);
 //
 // 	}
 // }




//Using Canvas's width and height variables to place circles
  // line(0, 0, width, height); // Line from (0,0) to (480, 120)
  // line(width, 0, 0, height); // Line from (480, 0) to (0, 120)
  // ellipse(width/3, height/3, 60, 60);
  // ellipse(width/3*2, height/3, 60, 60);
  // ellipse(width/3, height/3*2, 60, 60);
  // ellipse(width/3*2, height/3*2, 60, 60);


//Random Drawing
  // quad(800,155, 300,255, 350,355, 850,255);
  // triangle(800,155, 700,175, 665, 85);
  // triangle(350,355, 625,360, 700,285);
  // rect(100,400, 200,40);


//Robot Friend

  stroke(0);
  line(500, 200, 546, 60);
  line(500, 200, 466, 96);
  line(500, 200, 567, 130);

  fill(255, 255, 255);
  ellipse(510, 190, 30, 30);

  fill(0,0,0);
  ellipse(510, 190, 5, 5);

  fill(160);
  ellipse(486, 185, 12, 12);

  fill(160);
  ellipse(523, 170, 10, 10);

  fill(160);
  ellipse(530, 200, 8, 8);

  stroke(0,0,0);
  line(510, 220, 510,320);
  line(500, 220, 500,320);
  line(490, 220, 490,320);

  fill(160);
  noStroke();
  ellipse(489, 470, 74, 74);

  fill(0);
  ellipse(489, 470, 15, 15);

  fill(0,0,0);
  rect(435,320, 105, 150);

  fill(160);
  noStroke();
  rect(435, 340, 105, 10);


}
