var bullet, thickness;
var wall, speed, bulletWeight;

function setup() {
  createCanvas(1366,400);

  speed = random(200,320);
  bulletWeight = random(30,52);
  thickness = random(22,83);
  
  bullet = createSprite(50,200,60,5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1236,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.depth = wall.depth;
  bullet.depth = bullet.depth + 1;
}

function draw() {
  background("black");  
  drawSprites();

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*bulletWeight*speed*speed/thickness*thickness*thickness;

    if(damage < 10){
      wall.shapeColor ="green";
    }

    if(damage > 10){
      wall.shapeColor = "red";
    }
  }
}

function hasCollided(bullet1,wall1){
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}