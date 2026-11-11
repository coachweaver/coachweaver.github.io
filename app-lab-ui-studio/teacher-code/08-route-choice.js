// Route Choice — teacher reference code
// Give radioButtonWalk and radioButtonRide the same group ID in Design Mode.
// The selection logic is supplied by the teacher.
// STUDENT UI BLOCKS: getChecked and setText.
onEvent("buttonConfirm", "click", function(event) {
  if (getChecked("radioButtonWalk")) {
    setText("labelRoute", "Route: Walk");
  } else {
    setText("labelRoute", "Route: Ride");
  }
});
