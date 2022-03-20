const img = document.querySelector("#img");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const sophia = document.querySelector("#sophia");
const cirka = document.querySelector("#cirka");
const radoune = document.querySelector("#radoune");

let loupe = document.querySelector("#loupe");
document.querySelector("#search").addEventListener("focus", () => loupe.style.display = "none");
document.querySelector("#search").addEventListener("blur", () => loupe.style.display = "");

let tabImg = ["/static/img/1.jpg","/static/img/2.jpg","/static/img/3.jpg"];
let compteurImg = 0;
img.src = tabImg[compteurImg];

let tablGin =[sophia, cirka, radoune];
tablGin[compteurImg].classList.add("descriptionGin");

next.addEventListener('click', nextItem);
function nextItem(){
    tablGin[compteurImg].classList.remove("descriptionGin");
    compteurImg++;
    if(compteurImg == tabImg.length) compteurImg = 0;
    displayImg();
    displayDescription();
}

prev.addEventListener('click', prevItem);
function prevItem(){
    tablGin[compteurImg].classList.remove("descriptionGin");
    compteurImg--;
    if(compteurImg == -1) compteurImg = tabImg.length - 1;
    displayImg();
    displayDescription();
}

displayImg = () => img.src = tabImg[compteurImg]


displayDescription = () => {
    tablGin[compteurImg].classList.add("descriptionGin");
};

