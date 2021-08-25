function ourAnimation() {
  var ourImage = document.getElementById("animation");
  ourImage.style.position = "relative";
  var position = 0;
  setInterval(move, 5);

  function move() {
    if (position == window.screen.width- ourImage.width) {
      clearInterval();

    } else {
      position++;
      ourImage.style.left = position + "px";

    }
  }


}
