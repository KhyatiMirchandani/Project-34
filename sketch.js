
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img
var cannon, ground, slope
var angle
var canvas


function preload(){
  bg_img = loadImage("wall ball.png") 
}


function setup() {
  canvas= createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  slope = Bodies.rectangle(300, 294, 600, 20, { isStatic: true });
  World.add(world, slope);

 cannon = new Cannon(180,110,130,100,angle);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  Engine.update(engine)

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  push();
translate(slope.position.x, slope.position.y);
rectMode(CENTER);
fill("black")
rect(slope.position.x, slope.position.y, 600, 20);
pop();

  cannon.display();
  
}

