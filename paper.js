class Paper{
    constructor(x,y,r) {
		
        var options = {
			isStatic: false,
            'restitution':0.3,
            'friction':0,
            'density':1.2

		}
		this.image=loadImage("paper.png")
		
        this.body = Bodies.rectangle(200, 650, 20, options);
        this.r=r
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
      }
}