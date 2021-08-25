function ourAnimation() {
  var ourImage = document.getElementById("animation");
  ourImage.style.position = "relative"; 
  var position = 0;
  setInterval(move, 5);

  function move(){
    var destination= document.getElementById("school");
    if (position == window.screen.width - destination.offsetWidth) {
      clearInterval(); 
    } else  {
      position++;
      ourImage.style.left = position + "px";

    }
  }    
  
}

