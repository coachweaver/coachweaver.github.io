// Option Menu — teacher reference code
// Set dropdown options in Design Mode: Wi-Fi, Library, Cafeteria.
// STUDENT UI BLOCKS: getText and setText.
onEvent("buttonShow", "click", function(event) {
  setText("labelTip", "You chose: " + getText("dropdownTopic"));
});
