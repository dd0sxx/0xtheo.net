let canvasDiv

canvasDiv = document.getElementsByClassName('canvas')

function setup() {
    console.log(canvasDiv[0])
    let canvas = createCanvas(canvasDiv[0].offsetHeight, canvasDiv[0].offsetWidth);  
    canvas.parent("canvasDiv");
  }
  
  function draw() {
    colorMode(RGB)
    background(120, 120, 0);
  }