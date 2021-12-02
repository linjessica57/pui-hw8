//p5.js
function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight)
  myCanvas.parent("#p5")
}

function draw() {
  if (mouseIsPressed === true) {
    sprayPaint()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function sprayPaint() {
  //set the color and brush style
  colorMode(RGB)

  //pick a random color between three predetermined colors
  let red = color(224, 167, 162)
  let blue = color(86, 129, 179)
  let yellow = color(179, 154, 86)
  let interred = lerpColor(red, blue, 0.5)
  let interblue = lerpColor (yellow, blue, 0.66)
  let interyellow=lerpColor(red, yellow, 0.5)
  let colors = [red, blue, yellow, interred, interblue, interyellow]
  let displaycolor = random(colors)
  
  stroke(displaycolor)
  strokeWeight(1)

  //find the speed of the mouse movement
  let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

  //set spray density of spraypaint brush
  let sprayDensity = 90;
  
  //find radius of the spray paint brush and radius squared
  let r = 90;
  let rSquared = r * r;

  //set the number of times we lerp the points in the for loop
  let lerps = 10

  //repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {
    
    //find the lerped X and Y coordinates
    let lerpX = lerp(mouseX, pmouseX, i / lerps)
    let lerpY = lerp(mouseY, pmouseY, i / lerps)
    
    //draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {

      //pick a random position within the circle
      let randX = random(-r, r)
      let randY = random(-1, 1) * sqrt(rSquared - randX * randX)

      //draw the random point
      point(lerpX + randX, lerpY + randY)
    }
  }
}

//jquery
//click to scroll to work section
$(".worksnavbutton").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});

//click to scroll to about section
$(".abtnavbutton").click(function() {
    $('html,body').animate({
        scrollTop: $(".third").offset().top},
        'slow');
});