const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paperObject;
var Base;
var dustbin1,dustbin2,dustbin3;
var engine,world; 

function preload()
{
	
	
}

function setup() {
	var canvas = createCanvas(1350, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Base = new Ground(650,500,1500,20);
	paperObject = new Paper(100,450,20);
	dustbin1 = new Dustbin(1100,480,200,20);
	dustbin2 = new Dustbin(1210,415,20,150);
	dustbin3 = new Dustbin(990,415,20,150);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Base.display();
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body, paperObject.body. position, {x:85,y:-85});
	}
}