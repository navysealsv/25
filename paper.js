class Paper {
    constructor(x,y,r) {
        var options = {
         'isStatic':false,
          'density':1.2,
          'friction':0.5,
          'restitution':0.3
        };
        this.body = Bodies.circle(x,y,r,options);
        this.r=r
        
        World.add(world, this.body);
        this.image=loadImage("paper.png")
        this.r=90
}
display(){
  var paperpos =this.body.position;

  push()
  translate(paperpos.x,paperpos.y);
  imageMode(RADIUS)
 //rectMode(CENTER);
  strokeWeight(3);
  fill("grey");
  stroke(0)
  image(this.image,0, 0, this.r, this.r);
  
 // ellipse(0,0,this.r,this.r)
  pop()
}

   }
