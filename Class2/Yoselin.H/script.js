function display(){
  var textual = "Education is everything- education is your power, education is your way in life for whatever you want to do";

  document.getElementById("displayText").innerHTML = textual;
}
function Magic(){
  var textual = "This book is about Malala describing how she would watch a boy with a magic pencil that could create whatever he drew with the magic pencil. Malala had a magical pencil to get her family the things they want.As she grew older she wished the magic pencil could erase the poverty around her.She worked hard at school and spoke about the importance of letting girls attend school.";

  document.getElementById("MagicText").innerHTML = textual;
}
function Malala(){
  var textual ="Malala is a Pakistani girl who spoke out against the Taliban’s oppressive rule and their ban on the education of girls. She was subsequently shot by the Taliban, but she survived and went on to become an internationally acclaimed human rights and education activist. ";

  document.getElementById("MalalaText").innerHTML = textual;
}
function Virgie(){
  var textual = "Virgie a young girl, began going to school with boys and her 5 year old brother.They all make the 7 mile trip together and with a week’s worth of food and clothing in a bucket. The setting and story illustrate how we use education to ultimately achieve freedom.";

  document.getElementById("VirgieText").innerHTML = textual;
}
function Ruby(){
  var textual = "Ruby is determined to attend university when she grows up, just like the boys in her family. Even as she does more and more household chores, she keeps up with her learning.";

  document.getElementById("RubyText").innerHTML = textual;
}
function Iqbal(){
  var textual = "Two Stories of Bravery is an inspiring true story of to child heroes. Children in Pakistan were enslaved and not allowed to be educated. Malala and Iqbal who were children themselves, stood up against the mistreatment of children in Pakistan.";

  document.getElementById("IqbalText").innerHTML = textual;
}
function Secret(){
  var textual = "Two Stories of Bravery is an inspiring true story of to child heroes. Children in Pakistan were enslaved and not allowed to be educated. Malala and Iqbal who were children themselves, stood up against the mistreatment of children in Pakistan.";

  document.getElementById("SecretText").innerHTML = textual;
}
function ourAnimation(){
  var ourImage = 
document.getElementById
("animation");

ourImage.style.position=
"relative";
var position = 0;
  
setInterval(move,5);

function move(){
if(position == window.screen.width - 200){
  clearInterval(); 
}

else {
  position++;
  ourImage.style.left = position + "px";

    }
  }
}