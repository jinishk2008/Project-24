
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=createSprite(150, 650, 15,15);
	paper = setColor("yellow")

	dustbinMiddle=createSprite(625,650,30,10);
	dustbinLeft=createSprite(595,605,10,30);
	dustbinRight=createSprite(655,650,10,30);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
if(keyDown("space")){
	paper.velocityX=4;
	paper.velocityY=4;

}

  drawSprites();
 
}



