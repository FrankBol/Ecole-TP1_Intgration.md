let loupe = document.querySelector("#loupe");
document.querySelector("#search").addEventListener("focus", () => loupe.style.display = "none");
document.querySelector("#search").addEventListener("blur", () => loupe.style.display = "");

logo = () => window.location.assign("/");


let header = document.querySelector("header")

if(window.location.pathname == ("/gin")){
    header.classList.add("nonePrint");
 }