var cat, mouse;
var catImg1, catImg2, catRunning, mouseImg1, mouseImg2, mouseTeasing, bgImg;


function preload() {
    //loading the images here
    bgImg = loadImage("garden.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat4.png");
    catRunning = loadAnimation("cat2.png", "cat3.png");

    mouseImg1 = loadImage("mouse1.png");
    mouseTeasing = loadAnimation("mouse2.png", "mouse3.png");
    mouseImg2 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(820,630,10,10);
    cat.addImage("catImage", catImg1);
    cat.scale = 0.17;

    mouse = createSprite(130,580,10,10);
    mouse.addImage("mouseImage", mouseImg1);
    mouse.scale = 0.17;
}

function draw() {

    background(bgImg);
    
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && 
      mouse.x - cat.x < cat.width/2 + mouse.width/2) {
        cat.addImage("catSitting", catImg2);
        mouse.addImage("mouse", mouseImg2);

      } else {
       
        
      }
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  if(keyDown("LEFT_ARROW")) {

    cat.addAnimation("catRunning", catRunning);
    mouse.addAnimation("mouse_tease", mouseTeasing);
    cat.x +=-5;
  }


}
