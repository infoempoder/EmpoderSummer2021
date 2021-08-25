function pollution() {
 
  var name=prompt("What is your name?");
  var years=prompt("Enter a number between 1 and 10.");
  var celebrity=prompt("Who is your favorite celebrity?");
  var geolocation=prompt("What is your favorite location in the world?");
  var result = "Congratulations " + name + ", in " + years + " years, you will meet " + celebrity + " in " + geolocation + ".";
document.getElementById("resultText").innerHTML = result;
}
function display(){
  document.getElementById("displayText").innerHTML="How much plastic is in the ocean?"
}
function display(){
  document.getElementById("displayText").innerHTML="There is enough plastic in the ocean to cover the whole state of Texas!";
}
function displayAlert(){
  alert("The rough estamet is about 3,500,000,000,000 as of Apr 25, 2017. By 2050 there will be more pieces of plasic in the ocean than fish.");
}
function signUp() {
  var username= prompt("What is your name?");
}
function signUp() {
  var username=prompt("What is your name?");
  if (username=="") {
     document.getElementById("information").innerHTML = "You are not signed up yet.";

  }else{
    var result = "Thank you for signing up, " + username + "!";

     document.getElementById("information").innerHTML = result;

  }
}