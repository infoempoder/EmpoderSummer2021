function display(){
  var text= "Choosing a variety of foods from the different food groups – specifically: vegetables and fruits; protein (meat, fish, eggs, beans, soy); dairy (low-fat milk, cheese, yogurt); carbohydrates (starchy foods like rice, pasta, potatoes and bread – preferably wholegrain or wholewheat varieties); and a small quantity of healthy fats such as the unsaturated fat from olive oil. <br><ul> <li>Prevents diseases and infections</li><li>Helps you control your weight</li><li>Improves mental health</li><li>Good for growth</li><li>Better sking and hair</li>";

  var image= new Image();
  image.src="plate.jpeg";
  image.width="400";
  image.height="500";

  document.getElementById("resultImage").appendChild(image)

  document.getElementById("displayText").innerHTML=text;
}



function display1(){
  var text1= "<b>Caloric Surplus</b><br>When the amount of calories that we consume is higher than the amount of calories we burn<br>notes:<ul><li>ideal for those struggling to put on weight</li><li>better promotes muscle growth</li><li>quick to workout BMR + 5-10% calories</li><li>make up of high protein</li></ul><br><b>Caloric Deficit</b><br>When the amount of calories that we consume is lower than the amount of calories we burn<br>notes:<ul><li>ideal for utilizing adipose (tissue fat)</li><li> do not use deficits for prolonged periods of time</li><li>small perentage is lost from exercise vs BMR (daily diet needs)</li><li>difficult to increase muscle mass vs surplus</li><li>must learn nutritional content of diet before reducing willy nilly</li></ul>";



  document.getElementById("displayText1").innerHTML =text1
}


function hey(){
  var name = prompt("What is your name?");

  var image1= new Image();
  image1.src= "ay.gif";
  image1.width = "200";
  image1.height="300";

  var result = name + ", you are awesome!";

  document.getElementById("resultImage2").appendChild(image1);

  document.getElementById("resultText2").innerHTML= result;


}


