class Bird{
    constructor(x,y){

  var Option={
      restitution:1,
      friction:0.3,
      density:0.1
  }
this.body=Bodies.rectangle(x,y,20,20,Option)
this.width=20;
this.height=20;

World.add(world,this.body)

    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        strokeWeight(2)
        stroke("red")
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
  
}