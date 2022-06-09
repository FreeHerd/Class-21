const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload();
{
	
}

function setup(); {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(200,390,400,20);
	right = new ground(390,200,20,400);
	left = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
var top_wall;
var right;
var left;
var ground;
var ball;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

	function draw(); 
	{
	ellipse(ball.position.x,ball.position.y,20);
		background(51);
		ground.show();
		left.show();
		right.show();
		Engine.update(engine);
	}
		rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
groundObj.display();
groundObj=new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120);

function keyPressed(); {
	if (keyCode === UP_ARROW) {
class Ground
{
	constructor(x, y,w, h)
	{
		let options = {
			isStatic:true
		};

		this.body = Bodies.rectangle(x, y, w, h, otptions);
		this.w = w;
		this.h = h;
		World.add(world, this.body);
	}
	show(); {
var pos = this.body.position;
push();
rectMode(CENTER);
stroke(255);
fill(127);
rect(pos.x, pos.y, this.w, this.h);
pop();

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var button1
var ground;
var left;
var right;
var top_wall;
var ball;
var button2;
function setup(); {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_Options={
    restitution:0.95
  }
  ball=Bodies.circle(200,100,20,ball_Options);
  World.add(world,ball);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 button1=createImg("right.png");
 button1.position(220,30);
 button1.size(50,50);
button1.mouseClicked(hForce);
button2=createImg("up.png");
button2.position(20,30);
button2.size(50,50);
button2.mouseClicked(vForce);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

var ball;

function setup(); {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
ground =new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20);

	var ball_options = {
		restitution: 0.95
		btn1 = createImg('right.png');
		btn1.position(220,30);
		btn1.size(50,50);
		btn1.mouseClicked(hForce);

		btn2 = createImg('up.png')
		btn2.position(220,30)
		btn2.size(50,50)
		btn2.mouseClicked(hForce)
	}
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}
function hForce();
}
Matter.Body.applyForce(ball,{x:0.05,y:0});

function vForce();
}
Matter.Body.applyForce(ball,{x:0.05,y:0});

	}
