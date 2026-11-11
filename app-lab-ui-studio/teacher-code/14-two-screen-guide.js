// Two-Screen Guide — teacher reference code
// Create screenHome and screenDetail in Design Mode first.
// STUDENT UI BLOCKS: onEvent and setScreen.
onEvent("buttonNext", "click", function(event) {
  setScreen("screenDetail");
});
onEvent("buttonBack", "click", function(event) {
  setScreen("screenHome");
});
