class computerPlayer{
  constructor(x,y,width,heigth){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=heigth;
  }
  display(){
  fill("#676e6a") ;
  push();
translate(this.x,this.y);
rotate(this.angle);
rect(-10,-20,this.x,this.y);
pop();
arc(this.x-40,this.y+80,180,230,PI,TWO_PI);
nofill();
}
}
















