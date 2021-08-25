

function signUp() {
  var name = prompt("What is your name?");
  if (name == "") {
    var returnNoName = "Please enter a valid name by clicking the button again";
    document.getElementById("signUpText").innerHTML = returnNoName;
  } else {
    var returnThanks = "Thank you " + name + "! You will begin the trivia game soon.";
    document.getElementById("signUpText").innerHTML = returnThanks;
  }
}

function displayHowToPlay() {
  document.getElementById("displayHowToPlay").innerHTML = "After you have read the Notable Women section, there will be questions based on the reading Answer Y or N";
}

function displayAlert() {
  alert("Testing ");
}

    


