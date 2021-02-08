const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pig1;
var bird;
var log;
var log2;
var box3,box4;
var pig2;
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    bird=new Bird(200,200)
    box1 = new Box(700,380,50,50);
    box2 = new Box(900,380,50,50);
    pig1=new Pig(800,380)
    log=new Log(800,320,300,PI /2)

    box3=new Box(700,270,50,50)
    box4=new Box(900,270,50,50)
    pig2=new Pig(800,270)
    log2=new Log(800,230,300,PI/2)
    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    bird.display();
    log.display();
    pig1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    ground.display();
}