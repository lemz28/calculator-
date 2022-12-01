/*function myFunc() {
  
  document.getElementById("img1").src = "/images__1_-removebg-preview.png";
  
  
  
  
  //innerHTML, innerText, textContent
  
  document.getElementById("h1").innerHTML = "<a href='login.php'>Login</a>";
  
  
  //alert, confirm, prompt
  
  
  var isConfirm = confirm('Do you want to continue?'); //true or false
  
  if(isConfirm == true) {
    
    alert('You clicked ok')
    
  } else {
    
    alert('You clicked cancel')
    
  }
 
 var input = prompt('Enter something') 
 
 if(input != null) {
   alert('You entered: ' + input)
 } else {
   alert('You did not input a value')
 } 
  
}
*/



function calculate(number) {
  document.getElementById('input').value += number;
}


function equal() {
  var input = document.getElementById('input');
  input.value = eval(input.value);
}


function Clear() {
  document.getElementById('input').value = "";
}

function Delete() {
  var input = document.getElementById('input');
  input.value = input.value.slice(0, input.value.length - 1);
}