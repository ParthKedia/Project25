
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj = new paper(100, 300, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
	if (gameState === "start") {
		background("black");
		textSize(20);
		fill("red");
		text("Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
		if (keyCode === UP_ARROW) {
		  gameState = "play"
		}
	}
	if (gameState === "play") {
		rectMode(CENTER);
		background(0);
  	groundObject.display();
	  dustbinObj.display();
	  paperObj.display();
	

}
  
  function keyPressed(){
	if (keyCode === UP_ARROW && gameState === "play") {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 12,
		y: -13
	  });
	}
}
}