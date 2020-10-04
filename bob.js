class Bob {
  constructor(x,y) {
    var options = {
        isStatic: false,
        restitution: 1.125,
    }
    this.body = Bodies.circle(x,y,40, options);
    this.diameter = 40;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //imageMode(CENTER);
    push();
    ellipseMode(CENTER);
    fill("yellow");
    ellipse(pos.x,pos.y, 80);
    //image(this.image, pos.x, pos.y, 40, 40);
    pop();
  }
};