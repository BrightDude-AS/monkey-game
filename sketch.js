//all the variables are here
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;


//preload are here
function preload(){
  
  
  //loading the monkey's animation
  monkey_running =                                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  //loading the image of banana
  bananaImage = loadImage("banana.png");
  
  
  //loading the image of the obstacle
  obstacleImage = loadImage("obstacle.png");
 
}


//setup are here
function setup() {
  
  
  //creating the area for the game
  createCanvas(400,400);
  
  
  //creating the monkey
  monkey = createSprite(80,315,30,30);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  //creating the ground
  ground = createSprite(400,380,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  

  //declaring them groups
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


//draw are here
function draw() {
  
  
  //the background of the game
  background (0);
  
  
  //making the ground infinite
  if (ground.x<50) {
    ground.x = 400;
  }
  
  
  //jumping function of the monkey
  if (keyDown("space")) {
     monkey.velocityY = -12;
  }
  
  
  //gravity
  monkey.velocityY = monkey.velocityY+0.8;
  
  
  //collision of monkey to the ground to prevent falling
  monkey.collide(ground);
  
   
  //creating the obstacles
  spawnObstacles();
  
  
  //creating the bananas
  spawnBanana();
  
  
  //creating all the sprites
  drawSprites();
  
  //scoring
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime = Math.ceil(frameCount/frameRate());
  text ("Survival Time : " +survivalTime,100,50);
  
  
}


//function to spawn obstacle
function spawnObstacles() {
  
  //creating the obstacle on a perticular interval of frames
  if (frameCount%300===0) {
    obstacle = createSprite(400,345,30,30);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.15;
    
    //giving the obstacle its velocity
    obstacle.velocityX = - 5;
    
    //giving the obstacle its life time
    obstacle.lifetime = 500;
    
    
    //adding obstacle to its group
    obstacleGroup.add(obstacle);
    
    
  }
    
}


//function to spawn banana
function spawnBanana() {
  
  //creating the banana on a perticular interval of frames
  if (frameCount%80===0) {
    banana = createSprite(400,random(120,200),30,30);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    
    //giving the obstacle its velocity
    banana.velocityX = - 5;
    
    //giving the obstacle its life time
    banana.lifetime = 500;
    
    
    //adding banana to food group
    FoodGroup.add(banana);
    
    
  }
  
  
  
}

