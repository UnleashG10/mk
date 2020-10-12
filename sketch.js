
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  monkey = createSprite(width - 580,height-377,20,20)
  monkey.addAnimation("m",monkey_running)
  monkey.scale = 0.09;
  monkey.debug = false;

  invis = createSprite(width /2,height-7,600,20);
  invis.visible = false;
  
  ground = createSprite(width /2,height-10,600,20);
    ground.velocityX = -5;
  ground.x = ground.width /2;
  ground.shapeColor = "red";
  
  ground2=createSprite(width+300,height-10,600,20);
  ground2.velocityX = -5;
  ground2.shapeColor = "blue";
  
 score = 0;
  
  survivaltime = 0;
    
  foodGroup = new Group(); 
  obG = new Group();
  
}


function draw() {
background(220);
  
  
  if(touches.length > 0 || keyDown("space") && monkey.y > 360){
    monkey.velocityY = -20;
    touches[0];       
    
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invis);
  
  if (width === 200){
      
    ground2=createSprite(width+100,height-7,600,20);
    if (ground2.x === width-5){
    ground2.x = width+95;
    ground2.collide(ground)
      
      }
    if (ground.x === 0){
    ground.x = 50;
    
      
      }
    
    
     monkey = createSprite(width - 180,height-77,20,20)
      
      }
  
  b();
  g();
  g2();
  o();
  
  drawSprites();
  
  textSize(22);
  fill("red");
  text(" SCORE  =  " + score,450,50)
  
  textSize(22);
  fill("blue");
  text(" SURVIVAL  TIME  = " + survivaltime,10,50)
  survivaltime = survivaltime+1;
  
}


 function b(){
   
   if (frameCount % 170 === 0) {
     
   banana = createSprite(600,200,20,20);
  banana.addImage("b",bananaImage)
  banana.scale = 0.1;
  banana.velocityX = -5;
     banana.y = random(180,220);
     banana.debug = false;
     
     foodGroup.add(banana);
   }
     
     
     if(foodGroup.isTouching(monkey)){
        
       foodGroup.destroyEach();
       
       score = score+2;
       
        }
    
     
   
 }


function g(){
  
  if (ground.x === 0){
    ground.x = 300;
    
      
      }
    
}

function g2(){
  
  if (ground2.x === width-5){
    ground2.x = width+295;
    ground2.collide(ground)
      
      }
    
}

function o(){
  
  if (frameCount % 130 === 0) {
  
   ob = createSprite(600,height-40,20,20)
  ob.addImage("o",obstaceImage);
  ob.scale = 0.2
  ob.velocityX = -5;
    ob.debug = false ;
    ob.setCollider("circle",0,0,180);
    
    obG.add(ob);
    
  }
  
  switch (score){
      
    case 30: monkey.scale = 0.1;
      if(touches.length > 0 || keyDown("space") && monkey.y > 330){
    monkey.velocityY = -20;
        touches[0];
           
     }
      break;
      case 60: monkey.scale = 0.14;
      if(touches.length > 0 || keyDown("space") && monkey.y > 310){
    monkey.velocityY = -20;
        touches[0];
           
     }
      break;
      case 120: monkey.scale = 0.18;
      if(touches.length > 0 || keyDown("space") && monkey.y > 300){
    monkey.velocityY = -20;
        touches[0];
           
     }
      break;
      case 150: monkey.scale = 0.22;
      if(touches.length > 0 || keyDown("space") && monkey.y > 290){
    monkey.velocityY = -20;
        touches[0];
           
     }
      break;
      case 180: monkey.scale = 0.26;
      if(touches.length > 0 || keyDown("space") && monkey.y > 280){
    monkey.velocityY = -20;
        touches[0];
           
     }
      break;
      case 210: monkey.scale = 0.3;
      if(touches.length > 0 || keyDown("space") && monkey.y > 270){
    monkey.velocityY = -20;
        touches[0];
           
     }
      break;
      case 240: monkey.scale = 0.34;
      if(touches.length > 0 || keyDown("space") && monkey.y > 270){
    monkey.velocityY = -20;
        touches[0];
           
      }
      
      break;
      default: break;
  }
      
      
      if (monkey.isTouching(obG)) {
        monkey.scale = 0.09;
        
        score = 0;
         
         }
      
  
  
    
}
  

