

function checkValidation(){
    var username = document.getElementById('username').value;
    var useremail = document.getElementById('useremail').value;
    var userphoneNumber = document.getElementById('userphoneNumber').value;

    // in address user write anything about their address...
    // also user type anything in extra medical details...
   
  
    var usercheck = /^[A-Za-z. ]{3,30}$/;             //using regex
    var emailcheck = /^[A-Za-z_0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
    var mobilecheck = /^[789][0-9]{9}$/
    

    if(usercheck.test(username)){
        document.getElementById('userval').innerHTML = " ";
    }else{
        document.getElementById('userval').innerHTML = "-- Username should be in between 3-30 characters";
        return false;
    }
    
    if(emailcheck .test(useremail)){
        document.getElementById('emailval').innerHTML = " ";
    }else{
        document.getElementById('emailval').innerHTML = "Invalid emailId .";
        return false;
    }

    if( mobilecheck.test(userphoneNumber)){
        document.getElementById('phoneval').innerHTML = " ";
    }else{
        document.getElementById('phoneval').innerHTML = "Invalid Phone number .";
        return false;
    }
}



















