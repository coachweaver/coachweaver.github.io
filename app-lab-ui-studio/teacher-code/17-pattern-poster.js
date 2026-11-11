// Pattern Poster — teacher reference code
// Canvas drawing and random numbers are supplied by the teacher.
// Students place canvasPattern and connect the onEvent UI block.
setActiveCanvas("canvasPattern");
onEvent("buttonNewPattern", "click", function(event) {
  clearCanvas();
  setFillColor("#2563eb");
  circle(randomNumber(40, 130), randomNumber(40, 130), 25);
  setFillColor("#f59e0b");
  circle(randomNumber(120, 220), randomNumber(120, 230), 30);
  setText("labelPattern", "A new pattern appeared.");
});
