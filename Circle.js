class Circle {
    constructor(x,y,radius) {
      var options = {
          isStatic : true
      }
      this.polygon = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.polygon);
    }
    display(){
      var pos =this.polygon.position;
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y, this.radius);
    }
  }