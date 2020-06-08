var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var box1;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(610,200,15,100);
	box2 = new Box(490,300,15,100);
	box3 = new Box(550,400,100,15);
	ground = new Ground(600,height,1200,20);
	paper = new Paper(25,100,40,40);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  drawSprites(); 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	  
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }

}