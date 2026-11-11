// Photo Note — teacher reference code
// Photo Select displays a selected image in its own Design Mode control.
// Students add a separate caption with UI blocks. Use a classroom sample photo.
// STUDENT UI BLOCKS: getText and setText.
onEvent("buttonCaption", "click", function(event) {
  setText("labelCaption", getText("textInputCaption"));
});
