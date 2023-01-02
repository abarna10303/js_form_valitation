
let submit_btn=document.getElementById('submit');
let username=document.getElementById("firstname");
let userfullname=document.getElementById('fullname');
let usergender=document.getElementById('gender');
let usercourse=document.getElementById('course');
let useremail=document.getElementById('email');
let useraddress=document.getElementById('address');
let usernum=document.getElementById('phoneno');
//Error variables
let usernmae_error= document.getElementById('fnametext');
let fullnaame_error=document.getElementById('fultext');
let gender_error=document.getElementById('gendertext');
let course_error=document.getElementById('coursetext');
let email_error=document.getElementById('eamiltext');
let address_erroe=document.getElementById('addresstext');
let phone_error=document.getElementById('phonenotext');
submit_btn.addEventListener("click",e=>{
    e.preventDefault();
    userValidation();
    fullnmaeValidation();
    genderValidation();
    courseValitation();
    emailValidation();
    addressValidation();
    phoneValidation();

})
function userValidation(){
    if(username.value=="")
    {
        usernmae_error.innerHTML="* Please Enter your Name";
        usernmae_error.style.color="red";
        username.style.border="1px solid red";
    }
    else if(username.value.length<5)
    {
        usernmae_error.innerHTML="* Please the Name in Above 5 characters";
        usernmae_error.style.color="yellow";
        username.style.border="1px solid yellow";
    }
    else if(username.value.length>14)
    {
        usernmae_error.innerHTML="* Please the Name in below 14 characters";
        usernmae_error.style.color="yellow";
        username.style.border="1px solid yellow";
    }
    else{
        username.style.border="1px solid green";  
    }
}
function fullnmaeValidation(){
    if(userfullname.value=="")
    {
        fullnaame_error.innerHTML="* Please Enter your Full Name";
        fullnaame_error.style.color="red";
        userfullname.style.border="1px solid red";
    }
    else{
        userfullname.style.border="1px solid green";  
    }
}
function genderValidation(){
    if(usergender.value=="0"){
        gender_error.innerHTML="* Please select the Gener";
        gender_error.style.color="red";
        usergender.style.border="1px solid red";
    }
    else{
        usergender.style.border="1px solid green";  
    }
}
function courseValitation(){
    if(usercourse.value=="0"){
        course_error.innerHTML="* Please Select the Course";
        course_error.style.color="red";
        usercourse.style.border="1px solid red";
    }
    else{
        usercourse.style.border="1px solid green";  
    }
}
function emailValidation(){
    if(useremail.value=="")
    {
        email_error.innerHTML="* Please Enter the Email";
        email_error.style.color="red";
        useremail.style.border="1px solid red";
    }
    else{
        useremail.style.border="1px solid green";  
    }
}
function addressValidation()
{
    if(useraddress.value=="")
    {
        address_erroe.innerHTML="* Please Enter the Address";
        address_erroe.style.color="red";
        useraddress.style.border="1px solid red";
    }
    else if(useraddress.value.length<10)
    {
        address_erroe.innerHTML="* Please Enter the correct Address";
        address_erroe.style.color="yellow";
        useraddress.style.border="1px solid yellow";
    }
    else{
        useraddress.style.border="1px solid green";  
    }
}
function phoneValidation(){
    if(usernum.value=="")
    {
        phone_error.innerHTML="* Please Enter the Phone Number";
        phone_error.style.color="red";
        usernum.style.border="1px solid red";
    }
    else if(usernum.value.length<10){
        phone_error.innerHTML="* Please Enter the 10 digit Phone Number";
        phone_error.style.color="yellow";
        usernum.style.border="1px solid yellow";
    }
    else{
        usernum.style.border="1px solid green";  
    }
}
