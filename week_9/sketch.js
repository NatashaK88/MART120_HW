function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 100, 0); // Dark green background

  // Head
  fill(255, 204, 0);
  ellipse(200, 100, 150, 150);

  // Ears
  fill(255, 204, 0);
  ellipse(115, 100, 20, 40); // Left ear
  ellipse(285, 100, 20, 40); // Right ear

  // Black Gauges (Earrings)
  fill(0);
  ellipse(115, 115, 8, 8); // Left ear gauge
  ellipse(285, 115, 8, 8); // Right ear gauge

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

  // Arms
  fill(0, 255, 0);
  rect(140, 150, 20, 80);
  rect(240, 150, 20, 80);

  // Connectors
  fill(0, 255, 0);
  rect(160, 220, 20, 10);
  rect(225, 220, 20, 10);

  // Legs
  fill(0, 255, 0);
  rect(175, 250, 20, 80);
  rect(205, 250, 20, 80);

  // Shoes (Black rectangle shoes)
  fill(0);
  rect(155, 330, 40, 20); // Left shoe
  rect(205, 330, 40, 20); // Right shoe

  // Title
  fill(255); 
  textSize(20);
  textAlign(RIGHT, TOP);
  text("Self Portrait", width - 10, 10);

  // Signature
  textSize(16);
  textAlign(RIGHT, BOTTOM);
  text("Ash Kanning", width - 10, height - 10);
}
