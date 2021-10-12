var bg , backgroundImg;
var boy , boyRunning;
var obstacle1;
var gameState=PLAY;
var PLAY=1;
var END=0;
var ground;
var obstacleGroup;
var treeImg , treeGroup;
var score=0;

function preload(){
  backgroundImg=loadImage('images/Forest bg 2.jpg')
  boyRunning=loadAnimation('images/RB1.PNG','images/RB2.PNG','images/RB3.PNG' )
  obstacle1=loadImage('images/ObstacleT1.PNG')
  treeImg=loadImage('images/Tree.jpg')

}

function setup(){
  createCanvas(1000,600)
  //bg=createSprite(800,300,2000,800)
  //bg.addImage(backgroundImg)
  //bg.scale=2;
  //bg.velocityX=-3;
  //bg.x=bg.width/2;
  boy=createSprite(100,500,50,90)
  boy.addAnimation('Running',boyRunning)
  ground=createSprite(10,590,2000,10);
  ground.visible=false;

  obstacleGroup=new Group()
  treeGroup= new Group()
}

function draw(){
  background ('lightblue');
  textSize(20)
  fill ("black")
  text ("Score : "+ score,10,20);

 if(gameState===1){

 
    //if (bg.x<0){
      //bg.x=bg.width/2;
    //}
    obstacles()
    treeFN()
if (keyDown('space')){
  boy.velocityY=-5;
}

boy.velocityY=boy.velocityY+0.1;



if(boy.isTouching(obstacleGroup)){
  gameState===0;
}

 }

 if(gameState===0){
boy.velocityY=0;
 }

 boy.collide(ground)
 drawSprites()
}

function obstacles(){
  if (frameCount%250===0){
  obstacle=createSprite(800,580,60,30)
  obstacle.addImage(obstacle1)
  obstacle.scale=0.5;
  obstacle.velocityX=-3;
obstacleGroup.add(obstacle)

  }
  }

  function treeFN(){
    if (frameCount%60===0){
    
    var tree=createSprite(50,580,60,30)
    tree.addImage(treeImg)
    tree.scale=2;
    tree.velocityX=-3;
  treeGroup.add(tree)
  
  
    }

}



