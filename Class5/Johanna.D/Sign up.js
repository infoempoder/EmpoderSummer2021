function signUp() {
 var username = prompt("What is your name?");
 if (username == "") {
   document.getElementById("information").innerHTML = "You are not signed in.";
 } else {
   var result = "Thank you for signing up, " + username + "!";
   document.getElementById("information").innerHTML = result;
 }


function chat() {
  var name = prompt("Type your name");
  if (name == "") {
    document.getElementById("information").innerHTML = "Unable to chat.";
 } else {
   var result = "Hello " + name + ", The chat is currently unavailable.";
   document.getElementById("information").innerHTML = result;
 }
}