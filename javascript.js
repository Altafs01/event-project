var a = document.querySelector("body");

var b = document.querySelector("svg");

var c = document.querySelector("nav");

var d = document.getElementById("nav-anchor")

var e = document.getElementById("nav-anchor1")
var f = document.getElementById("nav-anchor2")
var g = document.getElementById("nav-anchor3")
var h = document.getElementById("nav-anchor4")

var ser = document.getElementById("services")

var flag = 0;

b.addEventListener("click", function(){
    if (flag == 0){
        a.style.backgroundColor = "black";
        a.style.color = "white";
        b.style.color = "white";
        c.style.backgroundColor = "black";
        d.style.color = "white";
        e.style.color = "white";
        f.style.color = "white";
        g.style.color = "white";
        h.style.color = "white";
        flag = 1;
    }else{
        a.style.backgroundColor = "transparent";
        a.style.color = "black";
        b.style.color = "black"
        c.style.backgroundColor = "transparent";
        d.style.color = "black";
        e.style.color= "black";
        f.style.color= "black";
        g.style.color= "black";
        h.style.color= "black";
        flag = 0;
    }
})





// contact.html code start ----------------

function validate(){
    var user = document.getElementById('exampleInputfname').value;
    var pass1 = document.getElementById('exampleInputPassword1').value;
    var pass2 = document.getElementById('exampleInputPassword2').value;
    var pnumber = document.getElementById('exampleInputpnumber').value;
    var email = document.getElementById('email').value;
    // var button = document.getElementById('button').value;

    if (user == 0 || user == ""){
        document.getElementById('fname').innerHTML = "*Please fill username field*"
        return false;
    }

    if (user.length <3 || user.length > 25){
        document.getElementById('fname').innerHTML = "*Username lenght between 3 to 25*";
        return false;
    }

    if(!isNaN(user)){
        document.getElementById('fname').innerHTML = "*Please fill valid username*"
        return false;
    }

    
    if(pass1 == null || pass1 == ""){
        document.getElementById('password1').innerHTML = "*Please fill password field*";
        return false;
    }
    
    if (pass1.length < 5 || pass1.length > 20){
        document.getElementById('password1').innerHTML = "*Please set strong password greater than 5 and less than 20";
        return false;
    }   

    
    if(pass1!=pass2){
        document.getElementById('password2').innerHTML = "*Password not matching please enter correct password*"
        return false;
    }

    if(pass2 == null || pass2 == ""){
        document.getElementById('password2').innerHTML = "*Confirm password cannot be empty"
        return false;
    }
    
    if (isNaN((pnumber))){
        document.getElementById('pnumber').innerHTML = "*Please enter  in digit number*"
        return false;
    } 

    if (pnumber == null || pnumber == ""){
        document.getElementById('pnumber').innerHTML = "* Please enter Your mobile number*"
        return false;
    }

    if(pnumber.length !=10){
        document.getElementById('pnumber').innerHTML = "*Please enter valid mobile number"
        return false;
    }


    if(email == 0 || email == ""){
        document.getElementById('email').innerHTML = "*Please fill email address field*"
        return false;
    }
    
    if(email.length < 8 || email.length> 30){
        document.getElementById('email').innerHTML = "*Email address between 8 to 30 *"
        return false;
    }
    
    if ((email.charAt(email.length-4) != ".")&&(email.charAt(email.length-3) !=".")){
        document.getElementById("email").innerHTML = ".invalid position";
        return false;
    }
    
    if(email.indexof("@")<=0){
        document.getElementById('email').innerHTML = "@ invalid postion";
        return false
    }

    
    return true;
}

// contant.html code end--------------------------------