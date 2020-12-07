const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

function setup(){
createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var options={


    isStatic:true
}

ground=Bodies.rectangle(10,380,400,20,options);
World.add(world,ground);
console.log(ground);

var options={

    restitution:1
}

ball = Bodies.circle(200,100,40,options);
World.add(world,ball)

}

function draw(){
background(0);
Engine.update(engine);

rect(ground.position.x,ground.position.y,400,30);
rectMode(CENTER)
rect(200,200,40,40)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);


}