let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email= document.querySelector("#email");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword ");
let btn = document.querySelector("#submit");
let terms = document.querySelector("#terms");

form.addEventListener("submit",(e)=>{
   
    if(!validateinput()){
        e.preventDefault();
    }
    else{
        validateinput();
    }
})

function validateinput(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim(); 
    let success = true;

    if(usernameval ==""){
        seterror(username,"username is required")
        success = false;
    }
    else{
        setsuccess(username)
    }
    if(emailval==""){
        success = false;
        seterror(email,"Email is reuired")
    }
    else if((!emailvalidate(emailval)))
    {
        success = false;
seterror(email,"enter valid email")
    }
    else
    {
        setsuccess(email)
    }
    if(passwordval===""){
        success = false;
        seterror(password,"password is required")
    }
    else if(passwordval.length<8){
        success = false;
        seterror(password,"enter minimum 8 character")
    }
    else{
        setsuccess(password)
    }
    if(cpasswordval===""){
        success = false;
        seterror(cpassword,"password is required")
    }
   else if((cpasswordval !== passwordval)){
    success = false;
        seterror(cpassword,"password is mismatch")
    }
    else{
        setsuccess(cpassword)
    }
    if(!(terms.checked)){
        seterror(terms,"please read and agree**")
    }
    if(terms.checked){
        setsuccess(terms)
    }

success=true;
}
function seterror(element,message){
const inputgroup = element.parentElement;
const errorElement = inputgroup.querySelector(".error")

errorElement.innerText = message;
inputgroup.classList.add("error");
inputgroup.classList.remove("success");

}
function setsuccess(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error")
    
    errorElement.innerText = "";
    inputgroup.classList.add("success");
    inputgroup.classList.remove("error");
    
    }

 const emailvalidate =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
 }