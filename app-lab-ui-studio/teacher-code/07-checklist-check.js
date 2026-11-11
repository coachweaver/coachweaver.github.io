// Checklist Check — teacher reference code
// The if/else is supplied by the teacher; students handle UI blocks only.
// STUDENT UI BLOCKS: getChecked and setText.
onEvent("buttonCheck", "click", function(event) {
  if (getChecked("checkboxCharger")) {
    setText("labelResult", "Charger packed. Ready to go!");
  } else {
    setText("labelResult", "Remember your charger.");
  }
});
