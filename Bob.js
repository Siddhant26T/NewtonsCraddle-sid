class Bob
{
    constructor(x,y,r)
    {
        var option={
            'restitution' : 1.3,
            'friction': 1.0,
            'density': 1.0
        }
        
        this.y=y;
        this.x=x;
        this.r = r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
       
        fill ("blue");
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();     
    }

}