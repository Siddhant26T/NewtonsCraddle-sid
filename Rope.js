class Rope{
    constructor(body1,body2,OffsetX,OffsetY)
    {
        this.OffsetX = OffsetX;
        this.OffsetY = OffsetY;
        
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.OffsetX,y:this.OffsetY}
            
            
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
        strokeWeight(5);
        //fill ("red");
        var point1 = this.rope.bodyA.position;
       var point2 = this.rope.bodyB.position;
      
       var Anchor1X = point1.x;
       var Anchor1Y = point.y;

       var Anchor2X = point2.x + this.OffsetX;
       var Anchor2Y = point2.y + this.OffsetY;

      
     
       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}
