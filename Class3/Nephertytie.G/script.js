function promptUserEmotion() {
  var userEmotion = prompt("How are you feeling?");
  if (userEmotion.charAt(0).toLowerCase() == "s") {
    document.getElementById("emotionParagraph").innerHTML = "Dont be sad be happy because you got to live another day" ;// do this yourself
  } else if (userEmotion.charAt(0).toLowerCase() == "h") {
    document.getElementById("emotionParagraph").innerHTML = "Being happy is good for your body and for the people around you";// do this yourself
  } else if (userEmotion.charAt(0).toLowerCase() == "w") {
    document.getElementById("emotionParagraph").innerHTML = "Do not  be worried  everything will be fine.";
  } else if (userEmotion.charAt(0).toLowerCase() == "a"){
    document.getElementById("emotionParagraph").innerHTML = "If your angry dont be because that bad for your body"
  }
  // using the same else if statements check if the user is angry and also check if the user is worried
}
  function promptAnswer() {
  var promptAnswer = prompt("Have you talked to anyone?");
  if (promptAnswer == "y") {
    document.getElementById("answerParagraph").innerHTML = "If you have thats great have a lovely day" ;
  } else if (promptAnswer == "n") {
    document.getElementById("answerParagraph").innerHTML = "If you haven't please go talk to someone its good for you"
  }
  }