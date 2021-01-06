class Box{
    constructor(x, y, width, height ) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.boxObject = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites.png");
        World.add(world, this.boxObject);
        this.Visiblity = 255;
      }
      display(){
        if(this.boxObject.speed < 3){
          strokeWeight(1,5);
          rectMode(CENTER);
          rect(this.boxObject.position.x,this.boxObject.position.y,this.width,this.height);
         }
         else{
           World.remove(world, this.boxObject);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
         }
        pop();
      }
}
 score(){
  if (this.Visiblity<0 && this.Visiblity>=-105){
   score++;
  }
}