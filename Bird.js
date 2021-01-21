class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x ,this.body.position.y];
      this.trajectory.push(position);
    }
   
    //this.trajectory = [[x,y]]
    //length of the trajectory = 2 (x,y) 
    //when position array records the bird's mvmt --> length =2
    //when the bird is not moving, length --> 0

    //for(start of the repeat; stop the repeat; how should it repeat)
    for (var i = 0; i<this.trajectory.length; i++ ){
//what should be repeated 
//image(imageName,x,y,w,h)
image (this.smokeImage,this.trajectory[i][0], this.trajectory[i][1]);
}
  }
}
