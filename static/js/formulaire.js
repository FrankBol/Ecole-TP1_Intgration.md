let body = document.querySelector("body")
let email = document.querySelector("#email");

const regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("keydown", validEmail);

function validEmail(){
    if(regexmail.test(email.value)){
        email.classList.remove("emailRouge");
        email.classList.add("emailVert");
    }else{
        email.classList.remove("emailVert");
        email.classList.add("emailRouge");
    }

}
// body.addEventListener("afterprint", printform);

// function printform(){
//     body{
//         body.classList.add("printForm")
//     }
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//   }

  