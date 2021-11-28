let canvasDiv

canvasDiv = document.getElementsByClassName('canvas')

function setup() {
    let canvas = createCanvas(canvasDiv[0].offsetWidth, canvasDiv[0].offsetHeight, WEBGL);  
    canvas.parent("canvasDiv");
  }
  
  function draw() {
    colorMode(RGB)
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(70, 70, 70);
    pop();
  }