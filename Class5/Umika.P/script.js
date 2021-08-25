function signUp(){
  var username=prompt("What is your name?");
  var help = prompt("Do you want to help the envirnoment?");
    if (help == "yes") {
           document.getElementById("information").innerHTML = "Yay! So glad you want to help our environment.";
    }
    else{
      var result = "That's not good, " + username + ". You should want to help our envirnoment.";
      
      document.getElementById("information").innerHTML = result;

    }
  
}