//alert("JavaScript is Disabled. Please go to settings / the three dots at the right top corner and make Enabled it in order to go ahead.");

function clearErrors() {        
for (var loopCounter = 0;         
loopCounter < document.forms["numberFun"].elements.length;         
loopCounter++) {        
if (document.forms["numberFun"].elements[loopCounter]           
.parentElement.className.indexOf("has-") != -1) {                        

document.forms["numberFun"].elements[loopCounter]               
.parentElement.className = "form-group";        
}    
}   
} 
function resetForm() {    
clearErrors();    
document.forms["numberFun"]["Name"].Text = "";    
document.forms["numberFun"]["Email"].value = "";     
document.forms["numberFun"]["Phone"].value = "";
document.forms["numberFun"]["info"].value = "";
document.forms["numberFun"]["radio"].value = "";    
document.getElementById("submitButton").innerText = "Send Request";    
document.forms["numberFun"]["Name"].focus();
}
function validateItems() {    
clearErrors();    
var Name = document.forms["numberFun"]["Name"].value;    
var Email = document.forms["numberFun"]["Email"].value;
var Phone = document.forms["numberFun"]["Phone"].value;
var info = document.forms["numberFun"]["info"].value;    
if (Name == "" ) {        
alert("Please, Name must be filled in.");        
document.forms["numberFun"]["Name"]           
.parentElement.className = "form-group has-error";        
document.forms["numberFun"]["Name"].focus();        
return false;    
}   
if (Email == "" ) {       
alert("Please, Email must be filled out.");       
document.forms["numberFun"]["Email"]          
.parentElement.className = "form-group has-error"       
document.forms["numberFun"]["Email"].focus();       
return false;   
}    
if (Phone == "" || isNaN(Phone)) {       
alert("Please, Phone must be filled in.");       
document.forms["numberFun"]["Phone"]          
.parentElement.className = "form-group has-error"       
document.forms["numberFun"]["Phone"].focus();       
return false;   
}   
if (info == "" ) {       
alert("Please, Info must be filled in.");       
document.forms["numberFun"]["info"]          
.parentElement.className = "form-group has-error"       
document.forms["numberFun"]["info"].focus();       
return false;   
}   
if (radio == "" ) {       
alert("Please, Question must be filled in.");
document.forms["numberFun"]["radio"]          
.parentElement.className = "form-group has-error"       
document.forms["numberFun"]["radio"].focus();       
return false;   
}       
document.getElementById("results").style.display = "block";}
