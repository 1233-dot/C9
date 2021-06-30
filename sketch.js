var box;



function setup() {
  createCanvas(1200,600);
  box = createSprite(600,300,10,10);
  box.shapeColor = "grey";
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    box.x = box.x + 1
  }
  if(keyDown("left")){
    box.x = box.x - 1
  }
  if(keyDown("up")){
    box.y = box.y - 1
  }
  if(keyDown("down")){
    box.y = box.y + 1
  }
  drawSprites()
}




