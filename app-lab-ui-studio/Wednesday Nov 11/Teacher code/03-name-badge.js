// Name Badge — teacher reference code
// The input field is read only when Make badge is clicked.
// STUDENT UI BLOCKS: onEvent, getText, and setText.
onEvent("buttonMake", "click", function(event) {
  setText("labelBadge", getText("textInputName"));
});
