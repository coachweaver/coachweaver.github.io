// Minutes Slider — teacher reference code
// Set slider min=0, max=60, step=5 in Design Mode.
// STUDENT UI BLOCKS: onEvent, getProperty, setText.
onEvent("sliderMinutes", "change", function(event) {
  setText("labelMinutes", getProperty("sliderMinutes", "value") + " minutes");
});
