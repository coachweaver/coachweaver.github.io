// Time Adder — teacher reference code
// Arithmetic and variables are supplied by the teacher.
// STUDENT UI BLOCKS: getNumber and setText.
onEvent("buttonAdd", "click", function(event) {
  var first = getNumber("textInputFirstMinutes");
  var second = getNumber("textInputSecondMinutes");
  var total = first + second;
  setText("labelTotal", "Total: " + total + " minutes");
});
