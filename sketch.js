const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  arrow = new Arrow(400,400,100,100);

}

function draw() {
  background("white");
  
  arrow.display();

  Engine.update(engine);
}
