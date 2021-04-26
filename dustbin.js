 class Dustbin {
    constructor(x,y,height,width) {
        var options = {
          isStatic:true
        
        };
      //this.image=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  push()
  //rectMode(CENTER);5
  //fill("red");
  translate(pos.x, pos.y);
  rectMode(CENTER);
  noStroke();
 // imageMode(CENTER);
 // image(this.image);
 // image(this.image,200, 520, this.width, this.height);
  rect(0, 0, this.width, this.height);
  pop()
}
 }