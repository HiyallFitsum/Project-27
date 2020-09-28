class Bob{
    constructor(x, y,) {
      var options = {
        isStatic:true,
          
      }
      this.bob = Matter.Bodies.circle(x, y, 80, options);
      this.bob.diameter = 80;
      
      World.add(world, this.bob);
    }
    display(){
      var pos =this.bob.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      //strokeWeight(4)
      //stroke("green");
      fill("purple");
      ellipse(0, 0, this.bob.diameter);
      pop();
    }
  };