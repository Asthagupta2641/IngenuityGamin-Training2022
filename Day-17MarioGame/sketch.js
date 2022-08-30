// // Global Scope
// var bg, bgImage;
// var mario, mario_running;
// var ground;
// var brickImage,bricksGroup;
// var coinImage,coinsGroup;
// var coinScore = 0;
// var coinSound;
// var jumpSound;
// var mushImage,turImage,ObstacleGroup;
// var gameState = "PLAY";

// var restartImg;


// // Load Assets
// function preload() {
//   bgImage = loadImage("images/bgnew.jpg");
//   mario_running = loadAnimation(
//     "images/mar1.png",
//     "images/mar2.png",
//     "images/mar3.png",
//     "images/mar4.png",
//     "images/mar5.png",
//     "images/mar6.png"
//   );
//   coinImage = loadAnimation(
//     "images/con1.png",
//     "images/con2.png",
//     "images/con3.png",
//     "images/con4.png",
//     "images/con5.png",
//     "images/con6.png"
//   );
//   coinSound=  loadSound("sounds/coinSound.mp3");
//   jumpSound=loadSound("sounds/jump.mp3");
//   //load
//   brickImage=loadImage("images/brick.png");

//   mushImage = loadAnimation(
//     "images/mush1.png",
//     "images/mush2.png",
//     "images/mush3.png",
//     "images/mush4.png",
//     "images/mush5.png",
//     "images/mush6.png"
//     );

//     turImage = loadAnimation(
//         "images/tur1.png",
//         "images/tur2.png",
//         "images/tur3.png",
//         "images/tur4.png",
//         "images/tur5.png"
        
//         );
//         mario_collided = loadAnimation("images/dead.png");

//         dieSound = loadSound("sounds/dieSound.mp3");
      
//         restartImg = loadImage("images/restart.png");
  
// }

// // create basic Scaleton with their required credentials
// function setup() {
//   // Create Canvas
//   createCanvas(1000, 600);

//   // create Objects
//   bg = createSprite(600, 300, 150, 50);
//   mario = createSprite(200, 520, 150, 50);

//   // Add pictures on Objects
//   bg.addImage(bgImage); 
//   mario.addAnimation("running", mario_running);

//   // Scale Objects
//   bg.scale = 0.5;
//   mario.scale = 0.2;

//   // create Ground
//   ground = createSprite(200, 580, 400, 10);
//   bricksGroup = new Group();

//   //coins Group
//   //coins =  createSprite(200, 580, 400, 10);
//   coinsGroup = new Group();


//   //mush Group
//   //tur Group
//   ObstacleGroup = new Group();
//   mario.addAnimation("collided", mario_collided);

//   restart = createSprite(500, 300);
//   restart.addImage(restartImg);
//   restart.visible = false;
// }

// // Used to redraw the Objects on the canvas
// function draw() {
//     drawSprites();
//     if (gameState == "PLAY") {
//   // Make background move and repeate
//   bg.velocityX = -5;
//   if (bg.x < 100) bg.x = bg.width / 4;
//     }
//   // mario Fly
//   if (keyDown("space")){

//    mario.velocityY = -10;
//   jumpSound.play();
// }

//   // add Gravity
//   mario.velocityY = mario.velocityY + 0.5;

//   // mario stuck on ground
//   mario.collide(ground);
//   ground.visible = false;



  
//   //call GenerateBricks
//   generateBricks();


//   for(var i=0; i<bricksGroup.length; i++)
//   {
//     var temp =  bricksGroup.get(i);  //i current brick
//     if(mario.isTouching(temp)){
//         mario.collide(temp);
//     }
//    }
//    if(mario.x<200){
//     mario.x = 50;
//    }
//    if(mario.y<50){
//     mario. y =50;
//    }

//    // call generate coins
//    generateCoins();

//    for(var i=0; i< coinsGroup.length; i++)
//   {
//     var temp =  coinsGroup.get(i);  //i current brick
//     if(mario.isTouching(temp)){
//         mario.collide(temp);
//         temp.destroy();
//         coinSound.play();
//         coinScore++;
//         temp=null;
//         console.log(coinScore++);
//     }
//    }
   

   
   

//    generateobstacles();

//     if(ObstacleGroup.isTouching(mario)){
//         dieSound.play();
//         gameState = "END";
//     }
// }

//     else if(gameState ==="END"){
//     bg.velocityX = 0;
//     mario.velocityY = 0;
//     mario.velocityX = 0;

//     bg.velocityX = 0;
//     mario.velocityY = 0;
//     mario.velocityX = 0;

//     obstaclesGroup.setVelocityXEach(0);
//     coinsGroup.setVelocityXEach(0);
//     brickGroup.setVelocityXEach(0);

//     brickGroup.setLifetimeEach(-1);
//     coinsGroup.setLifetimeEach(-1);
//     obstaclesGroup.setLifetimeEach(-1);

//     mario.changeAnimation("collided", mario_collided);
//     mario.y = 570;
//     mario.scale = 0.4;

//     restart.visible = true;
//     if (mousePressedOver(restart)) {
//       restartGame();
//     }
//   }





// textSize(20);
// fill("brown");
// text("Coin Collected: " + coinScore,400,50);
// }

//   // Redraw Objects
  



// function generateBricks(){
//     if(frameCount % 80 == 0)
//     {
//         // console.log(frameCount);

//         var brick= createSprite(1200, 100, 40, 10);
//         brick.y = random(50,450);
//         brick.addImage(brickImage);
//         brick.velocityX = -5;
//         brick.lifetime = 250;
//         bricksGroup.add(brick);
//     }
   

// }
// function generateCoins(){
//     if(frameCount%50 == 0)
//     {
//         // console.log(frameCount);
//         var coins= createSprite(1200, 100, 40, 10);
//         coins.y = random(50,450);
//         coins.addAnimation("rotate",coinImage);
//         coins.scale=0.1;
//         coins.velocityX = -5;
//         coins.lifetime = 250;
//         coinsGroup.add(coins);
//     }
// }

// function generateobstacles(){
//     if(frameCount % 100 == 0)
//     {
//         // console.log(frameCount);

//         var obstacle= createSprite(1200, 555, 10, 40);
//         var random = Math.round(random(1,2));
        
//         obstacle.scale=0.1;
//         obstacle.velocityX = -5;
//         switch(random){
//             case 1:
//                 obstacle.addAnimation("mush",mushImage);
//                 break;
//             case 2:
//                 obstacle.addAnimation("tur",turImage);
//                 break;
//                 default:
//                     break;
//         }
       
//         mush.lifetime = 300;
//         mushGroup.add(obstacle);
//     }
// }

// function restartGame() {
//     gameState = "PLAY";
  
//     obstaclesGroup.destroyEach();
//     brickGroup.destroyEach();
//     coinsGroup.destroyEach();
  
//     mario.changeAnimation("running", mario_running);
//     mario.scale = 0.2;
  
//     coinScore = 0;
  
//     restart.visible = false;
//   }
    
var bg, bgImage;

var mario, mario_running;
var mario_collided;

var brickGroup, brickImage;

var pipeGroup, pipeImage;

var coinImage, coinsGroup;
var coinScore = 0;

var mushObstacleImage, turtleObstacleImage, obstaclesGroup;

var gameState = "PLAY";

var restartImg;

function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png",
    "images/mar7.png"
  );

  brickImage = loadImage("images/brick.png");

  pipeImage = loadImage("images/marpiper.png");

  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png"
  );

  // Add Sounds
  coinSound = loadSound("sounds/coinSound.mp3");
  jumpSound = loadSound("sounds/jump.mp3");

  mushObstacleImage = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  turtleObstacleImage = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  mario_collided = loadAnimation("images/dead.png");

  dieSound = loadSound("sounds/dieSound.mp3");
  mariosound =loadSound("sounds/mariosound.mp3");
  restartImg = loadImage("images/restart.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(600, 300);
  bg.addImage(bgImage);
  bg.scale = 0.5;

  mario = createSprite(200, 520, 20, 50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.2;

  ground = createSprite(200, 580, 400, 10);

  pipeGroup = new Group();

  brickGroup = new Group();

  coinsGroup = new Group();

  obstaclesGroup = new Group();

  mario.addAnimation("collided", mario_collided);

  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;
  
}

function draw() {
  drawSprites();
  
  if (gameState == "PLAY") {
    
    
    // Make background Move
    bg.velocityX = -5;
    if (bg.x < 100) {
      bg.x = bg.width / 4;
      mariosound.play();
    }

    // Make Mario Jump-Up
    if (keyDown("space")) {
      mario.velocityY = -10;

      // Mario Jump Sound
      jumpSound.play();
    }

    // Make Mario Come-Down
    mario.velocityY = mario.velocityY + 0.5;

    // Ground for Mario
    mario.collide(ground);
    ground.visible = false;
    
    generatePipes();

    // Stay on Bricks
    for (var i = 0; i < pipeGroup.length; i++) {
      var temp = pipeGroup.get(i);
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }

    // // Mario Issue
    // if (mario.x < 200) mario.x = 200;
    // if (mario.y < 50) mario.y = 50;

    generateBricks();

    // Stay on Bricks
    for (var i = 0; i < brickGroup.length; i++) {
      var temp = brickGroup.get(i);
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }

    // Mario Issue
    if (mario.x < 200) mario.x = 200;
    if (mario.y < 50) mario.y = 50;

    generateCoins();

    // Collect Coins
    for (var i = 0; i < coinsGroup.length; i++) {
      var temp = coinsGroup.get(i);
      if (temp.isTouching(mario)) {
        coinScore++;
        //Coin Sound
        coinSound.play();

        temp.destroy();
        temp = null;
      }
    }

    generateObstacles();
    if (obstaclesGroup.isTouching(mario)) {
      dieSound.play();
      gameState = "END";
    }
  } 
  
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);

    brickGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }

  // Score Card
  textSize(20);
  fill("brown");
  text("Coins Collected: " + coinScore, 500, 50);
}
function generatePipes() {
  if (frameCount % 70 === 0) {
    var pipe = createSprite(1200, 520, 40, 10);
    // 
    
    pipe.addImage(pipeImage);
    pipe.scale = 0.5;
    pipe.velocityX = -5;

    pipe.lifetime = 250;

    pipeGroup.add(pipe);
  }
}

function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200, 120, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;

    brick.lifetime = 250;

    brickGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 80 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = Math.round(random(80, 350));
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -3;

    coin.lifetime = 500;

    coinsGroup.add(coin);
  }
}

function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 555, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushObstacleImage);
        break;
      case 2:
        obstacle.addAnimation("turtle", turtleObstacleImage);
        break;
      default:
        break;
    }
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}

function restartGame() {
  gameState = "PLAY";

  obstaclesGroup.destroyEach();
  brickGroup.destroyEach();
  coinsGroup.destroyEach();

  mario.changeAnimation("running", mario_running);
  mario.scale = 0.2;

  coinScore = 0;

  restart.visible = false;
}