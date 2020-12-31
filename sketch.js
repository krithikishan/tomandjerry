var tom,tomRunning,tomCollided ,tomSitting
var jerry,jerryTeasing,jerryCollided,jerrySitting
var garden,gardenImage


function preload() {
    //load the images here
tomRunning=loadAnimation("tomThree.png","tomTwo.png");
  tomCollided = loadAnimation("tomFour.png");
  tomSitting = loadAnimation("tomOne.png");
    

    gardenImage= loadImage("garden.png");

    jerryTeasing=  loadAnimation("jerryTwo.png","jerryThree.png");
    jerryCollided= loadAnimation("jerryFour.png");
    jerrySitting= loadAnimation("jerryOne.png");
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
  
      garden= createSprite(1200,800,400,20);
    garden.addImage("garden",gardenImage);

    tom= createSprite(400,200,80,30);
    tom.addAnimation("sitting",tomSitting);
  tom.addAnimation("collided",tomCollided);
  tom.addAnimation("running",tomRunning);
   

    jerry= createSprite(200, 200, 50, 80);
    jerry.addAnimation("sitting",jerrySitting);
  jerry.addAnimation("teasing",jerryTeasing);
  jerry.addAnimation("collided",jerryCollided);
  
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    
  if(tom.x - jerry.x<(tom.width-jerry.width)/2){
    tom.changeAnimation("collided",tomCollided);
    tom.velocityX=0;
    jerry.changeAnimation("collided",jerryCollided);
        
  }  
  
keyPressed();

drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyPressed===LEFT_ARROW){
    
    tom.addAnimation("running",tomFour.png);
    tom.changeAnimation("running")
    tom.velocityX=-2;
}

}