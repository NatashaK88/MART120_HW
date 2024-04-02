let leftArmX, rightShoeY, rightArmX, leftShoeY; 
let leftArmSpeed, rightShoeSpeed;
let rightGaugeX, rightGaugeY;
let rightGaugeDirX = 1;
let rightGaugeDirY = 1;
let titleSize = 20;
let titleGrowing = true;

function setup() {
  createCanvas(400, 400);
  // Initialize positions
  leftArmX = 140;
  rightShoeY = 330;
  rightGaugeX = 285;
  rightGaugeY = 115;
  // Initialize speeds
  leftArmSpeed = random(1, 3); // Random speed for left arm
  rightShoeSpeed = random(1, 3); // Random speed for right shoe
}

function draw() {
  background(0, 100, 0);

  // Update left arm position
  leftArmX += leftArmSpeed;
  if (leftArmX <= 140 || leftArmX >= 160) {
    leftArmSpeed *= -1;
  }

  // Update right arm position
  rightArmX = 240 + (leftArmX - 140); // Mirror the movement of left arm

  // Update right shoe position
  rightShoeY += rightShoeSpeed; // Adjust the speed of movement
  // Reverse direction if shoe reaches edges
  if (rightShoeY <= 330 || rightShoeY >= 350) {
    rightShoeSpeed *= -1;
  }

  // Update left shoe position
  leftShoeY = 330 + (rightShoeY - 330); // Mirror the movement of right shoe

  // Update right gauge position (diagonal movement)
  rightGaugeX += rightGaugeDirX;
  rightGaugeY += rightGaugeDirY;
  if (rightGaugeX <= 265 || rightGaugeX >= 305 || rightGaugeY <= 95 || rightGaugeY >= 135) {
    if (rightGaugeX <= 265 || rightGaugeX >= 305) {
      rightGaugeDirX *= -1;
    }
    if (rightGaugeY <= 95 || rightGaugeY >= 135) {
      rightGaugeDirY *= -1;
    }
  }

  // Drawing the self-portrait

  // Head (Unchanged)
  fill(255, 204, 0);
  ellipse(200, 100, 150, 150);

  // Ears
  fill(255, 204, 0);
  ellipse(115, 100, 20, 40); // Left ear
  ellipse(285, 100, 20, 40); // Right ear

  // Black Gauges (Earrings)
  fill(0);
  ellipse(115, 115, 8, 8); // Left ear gauge
  ellipse(rightGaugeX, rightGaugeY, 8, 8); // Right ear gauge

  // Eyes
  fill(0);
  ellipse(170, 90, 20, 20);
  ellipse(230, 90, 20, 20);

  // Nose
  fill(120, 60, 30);
  triangle(200, 100, 190, 120, 210, 120);

  // Mouth
  fill(255, 0, 0);
  rect(185, 130, 30, 10);

  // Black Haircut
  stroke(0);
  strokeWeight(2);
  line(150, 30, 170, 50);
  line(160, 30, 180, 50);
  line(170, 30, 190, 50);
  line(180, 30, 200, 50);
  line(190, 30, 210, 50);
  line(200, 30, 220, 50);
  line(210, 30, 230, 50);
  line(220, 30, 240, 50);
  line(230, 30, 250, 50);

  // Body
  fill(0, 255, 0);
  rect(175, 180, 50, 100);

  // Arms waving
  fill(0, 255, 0);
  rect(leftArmX, 150 + sin(frameCount * 0.1) * 20, 20, 80); // Left arm
  rect(rightArmX, 150 - sin(frameCount * 0.1) * 20, 20, 80); // Right arm

  // Connectors
  fill(0, 255, 0);
  rect(160, 220, 20, 10);
  rect(225, 220, 20, 10);

  // Legs
  fill(0, 255, 0);
  rect(175, 250, 20, 80);
  rect(205, 250, 20, 80);

  // Shoes tapping
  fill(0);
  rect(155, rightShoeY + sin(frameCount * 0.1) * 10, 40, 20); // Left shoe
  rect(205, leftShoeY - sin(frameCount * 0.1) * 10, 40, 20); // Right shoe

  // Ash Kanning text
  textSize(16);
  textAlign(RIGHT, BOTTOM);
  text("Ash Kanning", width - 10, height - 10);

  // Title
  fill(255);
  textSize(titleSize);
  textAlign(RIGHT, TOP);
  text("Self Portrait", width - 10, 10);


  if (titleGrowing) {
    titleSize++;
    if (titleSize >= 30) {
      titleGrowing = false;
    }
  } else {
    titleSize--;
    if (titleSize <= 20) {
      titleGrowing = true;
    }
  }
}
