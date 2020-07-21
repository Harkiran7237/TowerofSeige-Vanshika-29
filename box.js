class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':0.2,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect( this.body.position.x, this.body.position.y, this.width, this.height);
       // pop();
      }
}