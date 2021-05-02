class paper {
  constructor(x,y,d){
    
var options={
  isStatic:false,
  restitution:0.3,
  friction:5,
  density:1.2
}
this.x=x;
this.y=y;
this.d=d;
this.body=Bodies.circle(this.x, this.y,d, options)

this.image = loadImage("paper.png");
World.add(world, this.body);

}
display()
{
  var rubberpos=this.body.position;		
  push()
  translate(rubberpos.x, rubberpos.y);
  //rectMode(CENTER)
  ellipse(0,0,this.r, this.r);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop()
}


}