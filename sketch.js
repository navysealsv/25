
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinImage;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	ground = new Ground(200,height,2000,20)

	paper = new Paper(65,550,70)

	dustbin1 = new Dustbin(813,650,50,167)
	
	dustbin2 = new Dustbin(740,600,245,20)
	dustbin3 = new Dustbin(870,600,245,20)
	
	
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("blue");

 ground.display();
 paper.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 image(dustbinImage,705,453,200,238)
 
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-805})
	 }
	}
