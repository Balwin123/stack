const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const password2 =document.getElementById("password2");

fform.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    //get the values from the inputs
    const usernameValue =username.Value.trim();
    const emailValue =email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value =password2.value.trim();
    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setEmailFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }
     
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password2 cannot be blank');
    }else if(passwordValue !== passwordValue2){
        setErrorFor(password2, 'Passwords does not match')
    }else{
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message){
    const formControl =input.parentElement; //.form-control
    const small =functionControl.querySelector("small");
    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
    return 
}