
function validateform(){
    var username= document.form1.username.value;
    var city= document.form1.city.value;
    var email= document.form1.email.value;
    var phno= document.form1.phno.value;
    var numberofpeople= document.form1.numberofpeople.value;
    var TravelDesti= document.form1.TravelDesti.value; 


    if(username==null || username==""){
        alert("Must have a username")
        return false;
    }
    if(city==null || city==""){
        alert("Please Enter City")
        return false;
    }

    if(email==null || email==""){
        alert("Must have a valid Email!!")
        return false;
    }
    if(phno.length<10){
        alert("Check the phno have 10 digit")
        return false;
    }
    if(numberofpeople ==null || numberofpeople==""){
        alert("Enter Number Of People")
        return false;
    }
    if(TravelDesti==null || TravelDesti==""){
        alert("Please Enter Your Travel Destination")
        return false;
    }



}