// Define Common Name Arrays
var names = [" Ajay", "John", "Kumar", "Jacob", "Kewal", "Jani", "Kiran", "Nisha", "Jessie", "Anita", "Jitu", "Jamal","Elizabeth","Hussain", "Joseph","Juan","Madhu","Jose","Hari","Josh","Jane","Prem","Kusha","Jagdish"];

var divVar = document.getElementById("nml")
var spnVar = document.createElement("span");
spnVar.textContent = "Names List:";
divVar.appendChild(spnVar);

var nameList=" ";
for (var i = 0; i < names.length; i++) 
 {  if(i == (names.length -1)) 
	   {nameList += names[i];}
  else {nameList += names[i] + ", ";}
  checkName(names[i]);
 } /* for */
  
var text = document.createTextNode(nameList);
divVar.appendChild(text);

function checkName(nameVal) {
  if (nameVal == undefined || nameVal == null)
     {console.log ("Empty Value: " + nameVal)
      return; }  
	 
  var firstChar = nameVal.substring(0,1);
  var uln = document.getElementById("Other");
  
  if (firstChar.toUpperCase() === "J" ) 
     { uln = document.getElementById("jName"); } 
 
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(nameVal));
  uln.appendChild (li);	
}























