function dogs(){ 

 var name = prompt("What is your name?");

 if( name == "Josheline"){  
  document.getElementById("dogsText").innerHTML = "Welcome back Josheline, you have a REALLY fun dog";
 } else{ 
document.getElementById("dogsText").innerHTML =  name + "you have a fun dog";
 }
}
  
