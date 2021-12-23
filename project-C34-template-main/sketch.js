
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box,boximg
var helicopoter,helicopoterimg
var buildingimg

function preload () {
  buildingimg=loadImage ('./Images/Buildings.jpg')
  helicopoterimg=loadImage ('./Images/Helicopoter.png')
  boximg=loadImage ('./Images/Box.jpg')
}


function setup() {
  createCanvas(600,600);

  helicopoter=createSprite(100,300)
  helicopoter=addImage("helicopoterimg");

  box = createSprite(300,300)
  box=addImage("boximg")

  engine = Engine.create();
  world = engine.world;

  
}


function draw() 
{
  background(51);
  image(buildingimg,0,0,width,height)
  Engine.update(engine);

  drawSprites();
  
}

