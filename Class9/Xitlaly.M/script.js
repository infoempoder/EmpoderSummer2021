function mileCalculator(){
  var totalMiles = prompt("How many miles did you run");
  var timePerMile = prompt("How many minutes did each mile take?");
  totalMiles = parseFloat(totalMiles);
  timePerMile = parseFloat(timePerMile);
  var result = totalMiles * timePerMile;
  console.log("You spent " + result + " minutes running.");
  
  document.getElementById("resultText")
  .innerHTML = "You spent " + result + " minutes running.";
}

function main(){
  mileCalculator();
  var userAnswer = prompt("Do you want to play again? Y/N")
  if(userAnswer == "Y"){
    main();
  }else{
    console.log("Thank you for using my calculator");
  }
}


// function future() {
//   var name = prompt ("What's your name?");
//   var number = prompt ("Pick a number 1-10");
//   var celebrity = prompt ("Who's your favourite celabrity");
//   var location = prompt ("whats your favourite location?");

//   var message = "Congratulations " + name + ", in " + number + " years you will meet " + celebrity + " in " + location + ".";

//   document.getElementById("futureText").innerHTML = message;


  // console.log (message);


// var image = new Image();
// image.src = "images.jpeg";
// image.width = "50";
// image.height = "50";
// document.getElementById("futureimage").appendChild
// (image);
// }

// function display() {
//   document.getElementById("displayText").innerHTML = "Hi";
// }
// function displayAlert() {
//   alert ("this is my text on a alert");
// }