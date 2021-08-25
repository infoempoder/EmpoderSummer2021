function future () {
    var name = prompt("Whats your name?");
    var number = prompt("enter a number from 1-10.");
    var celebrity = prompt("Who is your favorite celebrity");
    var location = prompt("What is your favorite place in the world?");
    var message = "Congratulations" + name + ", in " + number + "years, you will meet" + location + ".";

    document.getElementById("futureText").innerHTML = message;
    //console.log(message);
}