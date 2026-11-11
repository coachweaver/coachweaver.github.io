// Color Check — teacher reference code
// The screen itself is a Design Mode element with an ID.
// STUDENT UI BLOCKS: onEvent and setProperty.
onEvent("buttonCalm", "click", function(event) {
  setProperty("screenMain", "background-color", "#dbeafe");
  setText("labelColor", "Calm mode");
});
onEvent("buttonBright", "click", function(event) {
  setProperty("screenMain", "background-color", "#fff2b3");
  setText("labelColor", "Bright mode");
});
