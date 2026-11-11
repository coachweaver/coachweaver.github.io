// Gallery Preview — teacher reference code
// Place two different Design Mode images and hide imageSecond initially.
// STUDENT UI BLOCKS: onEvent, showElement, hideElement, setText.
hideElement("imageSecond");
onEvent("buttonNext", "click", function(event) {
  hideElement("imageFirst");
  showElement("imageSecond");
  setText("labelCaption", "Community garden");
});
