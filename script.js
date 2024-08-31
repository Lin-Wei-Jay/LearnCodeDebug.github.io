window.onkeyup = keyup;
function keyup(e) {
  var inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    window.location = "https://duckduckgo.com/?q=" + inputTextValue;
  }
}
