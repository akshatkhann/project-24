
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const applyForce = Matter.applyForce;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
 paper1=new Paper(200,450,25,25);
dustbin1=new Dustbin(600,20,20,170);
dustbin2=new Dustbin(-200,0,20,170);

dustbin3=new Dustbin(100,75,180,20);



}


function draw() {
  rectMode(CENTER);
  background(1500,1500);
 
 
  paper1.display()

dustbin1.display()

dustbin2.display()

dustbin3.display()
  
 
}
function keypressed(){
    if (keyCode===UP_ARROW){
    
    
        Matter.Body.applyForce(paper1.Object.body.position,{x:85,y:-85})
    }
    }

