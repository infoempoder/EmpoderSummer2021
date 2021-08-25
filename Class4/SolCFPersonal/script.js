function future(){
  var userName=prompt(" what kind of skateboard do you want  ?");
  var userNumber=prompt(" What is your favorite wheel brand  ?");
  var userPerson =prompt(" What color do you want your deck? yellow-green or purple  ");
  

  var result="Congratulation you got a " + userName +" with  " +userNumber+ " and your deck board is  " +userPerson + ".";

  document.getElementById("resultText").innerHTML=result;

  var image=new Image();
  image.src="SATURN-DECK.jpg";
  image.width="200";
  image.height="200";
  document.getElementById("resultImage").appendChild(image);
}


function displayAlert(){
  alert("you got 1 free skateboard");
}

function signUp(){
  var username = prompt("What is your name ?");
  if(username==""){
    document.getElementById("information").innerHTML= "you are not signed in ."
  
  }
  else{
  var result="thank you for signing up,"+ username + "!";
  document.getElementById("information").innerHTML=result;
  }
}

