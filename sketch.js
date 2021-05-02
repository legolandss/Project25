
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,papeRr;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
	papeRr = new paper(200,50,10)
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
papeRr.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(papeRr.body,papeRr.body.position,{x:22,y:-22.5});
	
 }	
}

