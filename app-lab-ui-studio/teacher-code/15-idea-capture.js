// Idea Capture — teacher reference code
// This preview is temporary; it does not save to a database.
// STUDENT UI BLOCKS: getText and setText.
onEvent("buttonPreview", "click", function(event) {
  setText("labelReceipt", getText("textAreaIdea"));
});
