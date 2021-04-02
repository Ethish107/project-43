var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup(){
  createCanvas(800,800);
   
  angleMode(DEGREES);
}

function draw(){
  background(0);

  hr = hour();
  min = minute();
  sec = second();
   

  fill(245, 37, 214);
  textSize(50);
  text(hr + ":" + min + ":" + sec,300,750);

  hrAngle = map(hr%12,0,12,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);
  

  push()
  translate(400,400);
  rotate(hrAngle - 90);
  strokeWeight(8);
  stroke(255, 0, 0);
  line(0,0,80,0);
  pop();

  push()
  translate(400,400);
  rotate(minAngle - 90);
  strokeWeight(8);
  stroke(0, 72, 255);
  line(0,0,100,0);
  pop();

  push()
  translate(400,400);
  rotate(secAngle - 90);
  strokeWeight(8);
  stroke(31, 255, 23);
  line(0,0,120,0);

  pop();

  push()
  noFill();
  translate(400,400);
  strokeWeight(8);
  stroke(31, 255, 23);
  arc(0,0,400,400,270,secAngle - 90);
  stroke(0, 72, 255);
  arc(0,0,350,350,270,minAngle - 90);
  stroke(255, 0, 0);
  arc(0,0,300,300,270,hrAngle - 90);
  pop()

  fill("grey");
  textSize(20);
  text("3",620,400);
  text("6",400,640);
  text("9",170,400);
  text("12",400,170);

  drawSprites();

  fill("blue");
  textSize(30);
  text(mouseX + "  " + mouseY,mouseX,mouseY);
 
}