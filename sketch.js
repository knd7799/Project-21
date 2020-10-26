var bullet,wall;
var weight,speed;
var deformation;
var thickness;


function setup() {
  createCanvas(1600,400);
  /*createSprite(400, 200, 50, 50);*/

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22, 83);

  bullet=createSprite(50,200,50,8) ;

  bullet.velocityX=speed;
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  

 

}

function draw() {
  background(255,255,255); 

  

  /*if(wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0;
  var deformation=0.5 *weight * speed*speed/22509;
  if(deformation>180);
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180  && deformation > 100)
  {
    car.shapeColor=(230,230,0);
  }
  if(deformation<100)
  {
      car.shapeColor=color(0,255,0);
    }
}*/

hasCollided(bullet, wall);
  Hbullet();
  
  
  
  
 
  drawSprites();
}
function hasCollided(bullet1, wall1){

  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge >= wallLeftEdge){

return true;

  }


  return false;


 

}

function Hbullet(){

  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;
  
  var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
  if (deformation > 10){
  
    wall.shapeColor = color (255,0,0);
  
  }
  
  if (deformation < 10){
  
    wall.shapeColor = color (0,255,0);
  
  }

}

}