var bullet;
var speed,weight;
var wall,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);

  wall = createSprite(1200,200,50,250);
  wall.shapeColor = color(255,228,196);

  bullet = createSprite(10,200,20,7);
  bullet.shapeColor = color(255,223,0);

  weight = random(30,52);

  speed = random(223,321);
  bullet.velocityX = speed; 
}

function draw() {
  background(0,0,0);

 if(collide(bullet,wall)){
    bullet.velocityX = 0;

    if(bullet.x>1160){
      bullet.x=1159;
    }

    damageCalculation();
  }
  
  textFont("Calibri");
  fill("white");
  textSize(27);
  text("Damage that has happened to the wall :",250,380);

  textStyle(BOLD);
  fill(0,255,255);
  text("BULLETS AND WALLS",470,25);

  drawSprites();
}

function collide(object1,object2){
  object1RightEdge = object1.x + object1.width ;
  object2LeftEdge = object2.x - object2.width ;
  if(object1RightEdge >= object2LeftEdge){
    return true;
  }
  else {
    return false;
  }
   
}

function damageCalculation(){
damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    if(damage>10){
      wall.shapeColor = "red";
      textSize(25);
      fill("red");
      text(Math.round(damage),700,380);
    }
    else if(damage<=10){
      wall.shapeColor = "green";
      textSize(27);
      fill("green");
      text(Math.round(damage),700,380);
    }
  }