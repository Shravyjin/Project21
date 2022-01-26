
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var stand1;
var stand2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 610);


	engine = Engine.create();
	world = engine.world;

    var ball_options = {
    isStatic : false,
	restitution : 0.3,
    friction:1,
    density:1.2

	};

	//Create the Bodies Here.
	ball = Bodies.circle(100,0,10,ball_options);
	fill('white')
    World.add(world,ball);

    ground = new GroundObj(400,595,800,10);
	stand1 = new GroundObj(550,560,20,60);
    stand2 = new GroundObj(650,560,20,60);
    



	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10);
  ground.display();
  stand1.display();
  stand2.display();
  drawSprites();
  Engine.update(engine);
  keyPressed()
}

 function keyPressed(){
  if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball,{x : 0, y : 0},{x : 0.01, y : -0.02});
  
  }
}