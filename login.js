function joy(){

var a=document.getElementById('username').value;
var b=document.getElementById('passw').value;
var c=document.getElementsByClassName('confirmpass').value;

// here is the starting of validation of username field.
if(a==""){
    document.getElementById('message').innerHTML="** Username cannot be blanked."
    return false;
   }

   if(a.length<3){
    document.getElementById('message').innerHTML='username not less than 3 characters.'
    return false;
  }

  if(a.length>20){
    document.getElementById('message').innerHTML='username not greater than 20 characters.'
    return false;
   }
  
// here is the starting of validation of password field.
if(b==""){
  document.getElementById('fillpass').innerHTML='password cannot be blanked.'

  return false;
}

// here is the starting of validation of confirm password field.
if(b!=c){
  document.getElementById('fillpass').innerHTML="wrong."
  return false;
}else{
  document.getElementById('fillpass2').innerHTML="matched."
}

}