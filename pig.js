class Pig{

    constructor(x,y){

        var options={
            restitution:1,
            friction:0.3,
            density:1.0
        }

        this.body=Bodies.rectangle(x,y,40,40,options)
        this.width=40;
        this.height=40;
     



        World.add(world,this.body)

    }

    display(){
   push()
        translate(this.body.position.x,this.body.position.y)

        angleMode(RADIANS)
        rotate(this.body.angle)
        strokeWeight(1)
        stroke("blue")
        fill("brown")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
  pop()
    }

}