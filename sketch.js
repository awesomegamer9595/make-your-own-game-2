var Background1,BackgroundImage;
var car,Jake,zombie1,Jake_Image,zombieImage;
var edge,rock_image,rock;
var jake_jumpImage;
function preload(){
    BackgroundImage=loadImage("level_One.gif.2.gif")
    Jake_Image=loadAnimation("ninja/Run_000.png","ninja/Run_001.png","ninja/Run_002.png","ninja/Run_003.png","ninja/Run_004.png","ninja/Run_005.png","ninja/Run_006.png","ninja/Run_007.png","ninja/Run_008.png","ninja/Run_009.png")
zombieImage=loadAnimation("zombie/Walk (1).png","zombie/Walk (2).png","zombie/Walk (3).png",
"zombie/Walk (4).png","zombie/Walk (5).png","zombie/Walk (6).png","zombie/Walk (7).png",
"zombie/Walk (8).png")
rock_image=loadImage("rock.png")
jake_jumpImage=loadAnimation("ninja/Jump_000.png","ninja/Jump_001.png","ninja/Jump_002.png","ninja/Jump_003.png","ninja/Jump_004.png","ninja/Jump_005.png","ninja/Jump_006.png","ninja/Jump_007.png","ninja/Jump_008.png")
}


function setup(){
createCanvas(1000,455)
Background1=createSprite(0,225,1000,680)
Background1.x=Background1.width/2
//Background1.width = 1200;
//Background1.height = 600;
edge=createEdgeSprites();

Background1.addImage(BackgroundImage)
Jake=createSprite(400,400,10,40)
Jake.addAnimation("Jake_Image",Jake_Image)
Jake.scale=0.28;

}

function draw(){
background(0)
Background1.velocityX=-2
if(Background1.x<0){
Background1.x=Background1.width/2

}

if(keyDown(RIGHT_ARROW)){
Jake.x=Jake.x+10

}
else if(keyDown(LEFT_ARROW)){
    Jake.x=Jake.x-10
    
    }
 else if(keyDown("space")){
        Jake.velocityY=-6
        Jake.addAnimation("jake_jump",jake_jumpImage)
        }
 else if(keyDown(DOWN_ARROW)){
            Jake.y=Jake.y+20
            
            }
        
Jake.velocityY=Jake.velocityY+0.4
Jake.collide(edge[3])
spawnZombie();
spawnRock();
drawSprites();
}


function spawnZombie(){

if(frameCount%150===0){
zombie1=createSprite(Jake.x+700,400,40,40)
zombie1.velocityX=-4


zombie1.addAnimation("ZOMBIE",zombieImage)

zombie1.scale=0.25;

}



}
function spawnRock(){
    if(frameCount%100===0){
        rock=createSprite(Jake.x+900,415,40,40)
        rock.velocityX=-5
        rock.addImage(rock_image)
        rock.scale=0.45
    }
}