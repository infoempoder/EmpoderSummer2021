function displayAlert() {
alert("Go to the Resources tab for more mental health resources!");
}

function ourAnimation() {
  var ourImage = document.getElementById("animation"); 
  
  ourImage.style.position = "relative";
  var position = 0;

  setInterval(move, 5);

  function move() {
    if (position == window.screen.width - 330) {
      clearInterval();
    } else {
      position++;
      ourImage.style.left = position + "px";
    }
  }
}