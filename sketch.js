var bullet,wall,thickness;
var speed,weight,damage;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed

  wall=createSprite(1200,200,thickness,height/2);
wall(80,80,80)


  speed=random(55,90)
weight=random(30,52)
thickness=random(223,321)

}

function draw() {
  background(255,255,255);  
 
  if(bullet.X-wall.X < (bullet.width+wall.width/2))
  {
  bullet.velocityX=0

  }
if(hasCollided(bullet,wall))
{
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness
  
 
  if(damage>10)
  {
  bullet.shapeColor=color(255,0,0)
  }
   if(damage<10)
   {
   bullet.shapeColor=color(0,255,0)
   }
  
    


}

 
  drawSprites();
}
function hasCollided(bullet,wall){
bulletrightEdge=bullet.x+bullet.width;
wallleftEdge=wall.x;

if(bulletrightEdge>=wallleftEdge){
  return true
}
return false;

}




