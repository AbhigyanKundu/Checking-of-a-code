
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1000,300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper1 = new Paper (810,200,4);


	Engine.run(engine);
	


	 ground = createSprite (10,230,2000,10)
  ground.shapeColor="yellow";

 dustbin1 =createSprite (750,220,200,10);
 dustbin1.shapeColor = "white";

 dustbin2 =createSprite (650,200,10,50);
 dustbin2.shapeColor = "white";

 dustbin3 =createSprite (850,200,10,50);
 dustbin3.shapeColor = "white";


paper1= new Paper (10,240,3,options,maxSides)



}


function draw() {
  rectMode(CENTER);
  background(0);
  //paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();

  drawSprites();
 
}


if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body,position,{x:85,y:-85})


}


