// Sound Cue — teacher reference code
// Choose one short sound in the App Lab sound library before class.
// Replace the sample URL if your account's sound library gives another asset.
// STUDENT UI BLOCKS: playSound, stopSound, onEvent, setText.
var cue = "https://studio.code.org/blockly/media/skins/studio/1_goal.mp3";
onEvent("buttonPlay", "click", function(event) {
  playSound(cue, true);
  setText("labelSound", "Playing cue");
});
onEvent("buttonStop", "click", function(event) {
  stopSound(cue);
  setText("labelSound", "Stopped");
});
