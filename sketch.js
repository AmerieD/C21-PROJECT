
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground
var wall1
var wall2
var ball
var toss


function setup() {
	createCanvas(1440, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700,670,1490,10);
	wall1 = new Ground(950,620,10,100);
	wall2 = new Ground(1100,620,10,100);

	toss = createImg("toss.png");

	toss.position(100,60);
	toss.size(300,100);


	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.4
	}

	ball = Bodies.circle(180,100,21,ball_options);
 	World.add(world,ball);

	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);

  wall1.show();
  wall2.show();
  ground.show();

  drawSprites();
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(ball,ball.position,{x:90,y:-110});
	}
}

