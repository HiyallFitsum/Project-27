
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(390, 100, 440, 50);
    //rope1 = new Rope(bobObject1.body, roofObject.body);
	bobObject1 = new Bob(220, 500);
	rope2 =new rope(bobObject1.body, roofObject.body, -bobObject1.diameter*2, 0);
	bobObject2= new Bob(300, 500);
	//rope2 = new Rope(bobObject2.body, roofObject.body, bobDiameter*2, 0);
	bobObject3= new Bob(380, 500);
	//rope3 = new Rope(bobObject3.body, roofObject.body, bobDiameter*2, 0);
	bobObject4 = new Bob(460, 500);
	//rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter*2, 0);
	bobObject5 = new Bob(540, 500);
	//rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter*2, 0);

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

	roofObject.display();
    //rope1.display();
	bobObject1.display();
	rope2.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
  
  drawSprites();
 
}



