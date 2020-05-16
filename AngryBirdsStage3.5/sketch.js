const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingShot;
var box1,box2,box3;
var garb

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(1100,285,30,200);
    box2 = new Box(950,285,30,200);
    box3 = new Box(1025,370,120,30);
    garb= new Gar(1025,305,115,100);
    bird = new Bird(100,150,25,25);
    slingShot = new Slingshot(bird.body,{x:200,y:100});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    garb.display();
    bird.display();
    slingShot.display();    
}


function mouseDragged(){
 Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
slingShot.fly();
}