var tower, towerImage;
var spookySound;
var ghost,ghostImage;
var gameState="play";
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var invisibleBlock,invisibleBlockGroup;



function preload(){

towerImage=loadImage("tower.png");
spookySound=loadSound("spooky.wav");
ghostImage=loadImage("ghost-standing.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");


}


function setup(){
createCanvas(600,600);

tower=createSprite(300,300,10,10);
tower.addImage(towerImage);
tower.velocityY=1;

spookySound.play();

ghost=createSprite(300,300,10,10);
ghost.addImage(ghostImage);
ghost.scale=0.5;

doorsGroup=new Group();
climbersGroup= new Group();
invisibleBlockGroup=new Group();


}



function draw(){
background(0);

if(tower.y>400){
    tower.y=300;
}

if(gameState==="play"){
if(keyDown("left")){
ghost.x=ghost.x-3;
}

if(keyDown("right")){
    ghost.x=ghost.x+3;
}

if(keyDown("space")){
    ghost.velocityY=-10;
}

ghost.velocityY=ghost.velocityY+0.5;

spawnDoors();

//climbersGroup.collide(ghost);
 if(climbersGroup.isTouching(ghost)){ ghost.velocityY = 0; } 
 if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){ 
 ghost.destroy();
 gameState = "end" 

}
drawSprites();
}

if (gameState === "end"){
     stroke("yellow"); 
     fill("yellow");
      textSize(30); 
    text("Game Over", 230,250) 
}



}




function spawnDoors() {
     //write code here to spawn the doors in the tower 
        if (frameCount % 240 === 0) {
            var door = createSprite(200, -50);
            var climber = createSprite(200,10); 
            var invisibleBlock = createSprite(200,15);
            invisibleBlock.width = climber.width; 
            invisibleBlock.height = 2;
                door.x = Math.round(random(120,400));
                climber.x = door.x;
                invisibleBlock.x = door.x; 
                door.addImage(doorImage);
                climber.addImage(climberImage);
                door.velocityY = 1;
                    climber.velocityY = 1;
                    invisibleBlock.velocityY = 1;
                    ghost.depth = door.depth;
                    ghost.depth +=1;
                    //assign lifetime to the variable 
                    door.lifetime = 800;
                     climber.lifetime = 800;
                      invisibleBlock.lifetime = 800;
                       //add each door to the group 
                       doorsGroup.add(door);
                        invisibleBlock.debug = true; 
                        climbersGroup.add(climber); 
                        invisibleBlockGroup.add(invisibleBlock);
                     }
                     }





