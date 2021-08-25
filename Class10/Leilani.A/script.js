function futurePredictor() {
  var name = prompt("What is your name");
  var years = prompt("Pick a number between 1 to 10");
  var celebrity = prompt("who is your favorite celebrity");
  var geolocation = prompt("what is your favorite location in the world?");
  var result = "Congratulations " + name + ", in " + years + " years, you will meet " + celebrity + " in " + geolocation + ".";
  document.getElementById("resultText").innerHTML = result;
  document.getElementById("resultImage").appendChild(image);
}

function marley() {
  document.getElementById("marleyText").innerHTML = "Stop abusing animals dogs!";
}