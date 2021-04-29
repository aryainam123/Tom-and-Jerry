
var bg,bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse2.png");
    catImg2 = loadAnimation("cat2.png");
    mouseImg2 = loadAnimation("mouse3.png");
    mouseImg3 = loadAnimation("mouse1.png");
    catImg3 = loadAnimation("cat4.png");
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400);
    bg.addImage(bgImg);
    cat = createSprite(800,600);
    cat.addAnimation("catstill",catImg1);
    cat.scale = 0.1;
    mouse = createSprite(200,600);
    mouse.addAnimation("mousestill",mouseImg1);
    mouse.scale = 0.1;
    mouse.setCollider("circle",-10,-10,mouse.radius);
    cat.setCollider("circle",-10,-10,mouse.radius);

}

function draw() {

    background("lightsblue");
    //Write condition here to evalute if tom and jerry collide
  console.log(mouse.x-cat.x);
  if(mouse.x-cat.x < mouse.width/2+cat.width/2
    &&cat.x-mouse.x < mouse.width/2+cat.width/2
    &&cat.y-mouse.y < mouse.width/2+cat.width/2
    &&mouse.y-cat.y < mouse.width/2+cat.width/2 ){
    cat.addAnimation("catstill",catImg3);
    cat.changeAnimation("catstill")
    mouse.addAnimation("mousestill",mouseImg3);
    mouse.changeAnimation("mousestill");
    cat.velocityX = 0;
    
  }
  else{
     cat.addAnimation("catstill",catImg1);
     mouse.addAnimation("mousestill",mouseImg1);
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 25;
  }
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -3;
    cat.addAnimation("catwalking",catImg2);
    cat.changeAnimation("catwalking");
    cat.frameDelay = 25;
  }


}
