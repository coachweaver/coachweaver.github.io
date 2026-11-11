// Focus Break Coach — teacher reference code
// ASSESSMENT REFERENCE. Teacher supplies the conditional and string joining.
// Set radioButtonQuiet and radioButtonActive to groupId breakMode in Design Mode.
// Students wire only UI controls: getChecked, getProperty, getText, setText.
onEvent("buttonSuggest", "click", function(event) {
  var minutes = getProperty("sliderBreak", "value");
  var need = getText("textAreaNeed");
  var activity = "movement";
  if (getChecked("radioButtonQuiet")) {
    activity = "quiet breathing";
  }
  setText("labelSuggestion", "Try " + minutes + " minutes of " + activity + ". You wrote: " + need);
});
