const img = document.querySelector("#img");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const sophia = document.querySelector("#sophia");
const cirka = document.querySelector("#cirka");
const radoune = document.querySelector("#radoune");



let tabImg = ["/static/img/1.jpg","/static/img/2.jpg","/static/img/3.jpg"];
let compteurImg = 0;
img.src = tabImg[compteurImg];

const tabGin =[sophia, cirka, radoune];
tabGin[compteurImg].classList.add("descriptionGin");

next.addEventListener('click', nextItem);
function nextItem(){
    tabGin[compteurImg].classList.remove("descriptionGin");
    compteurImg++;
    if(compteurImg == tabImg.length) compteurImg = 0;
    displayImg();
    displayDescription();
}

prev.addEventListener('click', prevItem);
function prevItem(){
    tabGin[compteurImg].classList.remove("descriptionGin");
    compteurImg--;
    if(compteurImg == -1) compteurImg = tabImg.length - 1;
    displayImg();
    displayDescription();
}

displayImg = () => img.src = tabImg[compteurImg]


displayDescription = () => {
    tabGin[compteurImg].classList.add("descriptionGin");
};

