var ball,img,paddle,img2;
function preload() {
  img=loadImage("ball.png");
  img2=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(25,200);
  ball.addImage("ball",img);
    ball.velocityY=8;
  ball.velocityX=-7;
  
  paddle=createSprite(375,200); 
  paddle.addImage("paddle",img2);
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  //ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle);
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounce(edges[2]);
  paddle.bounce(edges[3]);
  
  if(ball.isTouching(paddle))
  {
  ball.velocityY=random(-8,8);
  ball.velocityX= random(-7,7);
  }
  
  if(keyDown("UP_ARROW"))
  {
   paddle.velocityY=-6;
  }
  
  if(keyDown("DOWN_ARROW"))
  {
 paddle.velocityY=6;
  }
  drawSprites();
  
}


