let body = document.querySelector("body")
let email = document.querySelector("#email");

const regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("keydown", validEmail);
email.addEventListener("blur", validEmail);

function validEmail(){
    if(regexmail.test(email.value)){
        email.style.borderColor = "rgb(3, 255, 3)";
    }else{
        email.style.borderColor = "red";
    }

}

  