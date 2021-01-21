class paper{
    constructor(x,y,width,height){
        var P = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = radius
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x, y, radius, P);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}