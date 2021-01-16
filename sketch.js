
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paddle1; var paddle2;var paddle3
function preload()




{
	
}

function setup() {
	createCanvas(500, 600);
	
    
	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(400,440,100,100);
	paperObject = new Ball(50,400,20,20);
	ground = new Ground(250,480,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbin.display();
  paperObject.display();
  ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.position,{x : 10, y : -25});
	}
}

