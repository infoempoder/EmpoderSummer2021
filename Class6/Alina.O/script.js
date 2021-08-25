function namesAndPronouns(){  
  var userName = prompt("what is your name?");
  var pronouns= prompt("what are your pronouns?");result=
  ("Hello! My name is "+ userName +" and my pronouns are "+ pronouns + "!");
  document.getElementById("resultText").innerHTML = result;
}