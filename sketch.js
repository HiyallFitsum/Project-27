
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobDiameter = 80



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(390, 100, 440, 50);
	bobObject1 = new Bob(220, 500);
	//chain = new Chain(bobObject1.body,{x:220, y:100});
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)  
	bobObject2= new Bob(300, 500);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	bobObject3= new Bob(380, 500);
	//rope3 =new Rope(bobObject3.body, roofObject.body, -bobObject3.diameter*0.5, 0);
	bobObject4 = new Bob(460, 500);
	//rope4 =new Rope(bobObject4.body, roofObject.body, -bobObject4.diameter*0.03125, 0);
	bobObject5 = new Bob(540, 500);
	//rope5 =new Rope(bobObject5.body, roofObject.body, -bobObject5.diameter*-1, 0);

	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	 rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0) 
	 rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

	roofObject.display();
	bobObject1.display();
	rope1.display();
	//chain.display();
	bobObject2.display();
	rope2.display();
	bobObject3.display();
	rope3.display();
	bobObject4.display();
	rope4.display();
	bobObject5.display();
	rope5.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body, {x: mouseX, y: mouseY});
	}