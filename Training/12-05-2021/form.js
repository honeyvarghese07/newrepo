function ValidateForm(){
    	 ValidateText();
	 ValidateEmail();
	 ValidatePhone();
	 ValidateDate();
	 ValidatePassword();
}
function ValidateText(){  
   if(document.getElementById("fname").value==""){
	alert("First Name is empty!");
	return false;
	}
  if(document.getElementById("lname").value==""){
	alert("Last Name is empty!");
	return false;
	}
 }
	
function ValidateEmail(){
    var mail = document.getElementById('emailid');
    var reg_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!reg_mail.test(mail.value)){
  	 alert("Invalid Email");
 	 return false;
 	}
}

function ValidatePassword(){
   var password= document.getElementById('password').value;
   var reg_password =/^[a-zA-Z0-9!@#$%^&*]$/;
   if((password.length < 8) && (!reg_password.test(password.value))){
	alert("Password must contain atleast 8 letters, one number and one special character");
	return false;
	}
}

function ValidateDate() {
   var Dob = document.getElementById('dob').value;
   var selectedDate = new Date(Dob);
   var now = new Date();
   if (selectedDate > now) {
    	alert("Invalid Date");
	return false;
   }
}

function ValidatePhone(){
 var phoneNo = document.getElementById('phone').value;
 var reg_phone=/^\d{10}$/;
 if(!reg_phone.test(phoneNo)){
	alert("Invalid Phone Number");
	return false;
	}
}
