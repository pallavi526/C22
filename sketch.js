const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box;
var box1
var ball;
function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)

  var box_options={
    restitution:1
  }
  box=Bodies.rectangle(200,200,50,50,box_options)
  World.add(world,box)

  console.log(box)

  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(300,100,50,ball_options)
  World.add(world,ball)

  var box1_options={
    restitution:1.5  
  }

  box1=Bodies.rectangle(80,120,20,50,box1_options)
  World.add(world,box1)
  

}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);
  rectMode(CENTER);
    rect(box1.position.x,box1.position.y,20,50)
}
