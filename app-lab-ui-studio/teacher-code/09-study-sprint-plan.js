// Study Sprint Plan — teacher reference code
// ASSESSMENT REFERENCE. Teacher supplies the if/else and text joining.
// Students wire only UI controls: getText, getChecked, setText, onEvent.
onEvent("buttonPlan", "click", function(event) {
  var task = getText("textInputTask");
  var duration = getText("dropdownDuration");
  var plan = "Work on " + task + " for " + duration + ".";
  if (getChecked("checkboxQuiet")) {
    plan = plan + " Find a quiet space.";
  } else {
    plan = plan + " Choose a comfortable spot.";
  }
  setText("labelPlan", plan);
});
