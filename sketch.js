
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,400,40)
	ground=new Ground(800,700,1700,40)
	platform=new Platform(400,150,170,20)
	rope=new Rope(platform.body,bob1.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  platform.display()
  bob1.display();
  rope.display()
  drawSprites();
 
}



