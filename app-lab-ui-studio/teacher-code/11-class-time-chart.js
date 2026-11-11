// Class Time Chart — teacher reference code
// Teacher supplies this chart data and drawChart statement.
// Students place the Chart element and wire the Reveal UI control.
var readingData = [
  {day:"Mon", minutes:10},
  {day:"Tue", minutes:20},
  {day:"Wed", minutes:15}
];
drawChart("chartTime", "bar", readingData);
hideElement("chartTime");
onEvent("buttonReveal", "click", function(event) {
  showElement("chartTime");
  setText("labelChart", "Tuesday has the most minutes.");
});
