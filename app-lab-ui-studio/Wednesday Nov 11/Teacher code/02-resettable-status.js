// Resettable Status — teacher reference code
// Each button owns a separate event response.
// STUDENT UI BLOCKS: onEvent and setText in both handlers.
onEvent("buttonStart", "click", function(event) {
  setText("labelStatus", "In progress");
});
onEvent("buttonReset", "click", function(event) {
  setText("labelStatus", "Not started");
});
