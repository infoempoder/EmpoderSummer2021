// function ourAnimation(){
//   var ourImage=document.getElementById
//   ("animation");

//   ourImage.style.position="relative";
//   var position = 0;

//   setInterval=(move, 5);

//   function move(){
//    if(position == window.screen.width - 325){
//     clearInterval();
//     }else{
//     position++;
//     ourImage.style.left = position + "px";
//    }
//   }
// }

function ourAnimation() {
  var ourImage = document.getElementById("animation");

  ourImage.style.position = "relative";
  var position = 0;

  setInterval(move, 5);

  function move() {
    if (position == window.screen.width - 200) {
      clearInterval();
    } else {
      position++;
      ourImage.style.left = position + "px";
    }
  }
}

function yourName(){
  var username=prompt("What is your name");
  if(username == ""){
  document.getElementById("info").innerHTML="Good luck with your day.";
  }else{
  var result="Have a nice day, " + username + ".";
   document.getElementById("info").innerHTML=result; 
  }
}

function quiz(){
  var question = prompt(" Is the left side of the brain the creative one ? True/False ");
question = parseFloat(question);

}

function main(){
//   var quiz= quiz();
  var userAnswer =prompt("Is the left side of the brain the creative one ? True/False ");
  if(userAnswer == "True"){
    document.getElementById("answer").innerHTML="Don't give up";
  } else {
   document.getElementById("answer").innerHTML="Good Job";
  }
}


