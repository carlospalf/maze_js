function draw(){
  if($(".maze-canvas .element").length != 0){
    reset();
  }
  // Disable dimension input
  $(".dimension-input").get(0).disabled = true;

  // Get square dimension
  let dim = parseInt($(".dimension-input").get(0).value);
  // Calculate numbr of elements
  let elements = dim * dim;

  // make square the canvas
  let heightCanvas = parseInt($(".maze-canvas").height());
  $(".maze-canvas").height(heightCanvas);
  $(".maze-canvas").width(heightCanvas);
  let i = 0;

  // Loop for the creation of maze elements
  while(i< elements){
    $(".maze-canvas").append('<div class="element initial"></div>');
    i++;
  }

  // Applying initial styles to maze elements
  size = ((heightCanvas / parseInt(dim)) -1);
  $(".maze-canvas .element").css({"height": size + "px", "width": size + "px"});
}

function reset(){
  // Disable dimension input
  $(".dimension-input").get(0).disabled = false;
  // Delete elements from canvas
  $(".maze-canvas .element").remove();
  // Clear canvas styles
  $(".maze-canvas").removeAttr("style");
}
