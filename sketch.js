
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Object1,Object2,Object3,Object4,Object5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Object1 = new Bob(350,400,50);
	Object2 = new Bob(400,400,50);
	Object3 = new Bob(450,400,50);
	Object4 = new Bob(500,400,50);
	Object5 = new Bob(550,400,50);
    roof = new Roof(450,175,300,30);
	chain1 = new Rope(Object1.body,roof.body,-100,0);
	chain2 = new Rope(Object2.body,roof.body,-50,0);
	chain3 = new Rope(Object3.body,roof.body,0,0);
	chain4 = new Rope(Object4.body,roof.body,50,0);
	chain5 = new Rope(Object5.body,roof.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  Object1.display();
  Object2.display();
  Object3.display();
  Object4.display();
  Object5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof.display();
 
 
}
function keyPresssed() {
	if (keyCode===UP_ARROW) {
		Matter.body.applyForce(Object1.body,Object1.position,{x:-730,y:0});
	}
}


