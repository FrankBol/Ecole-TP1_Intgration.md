let tr = document.getElementsByTagName("tr");

for(let i = 0 ; i<tr.length ;i++ ){
    console.log(i%2);
    if(i%2 == 0){
        tr[i].style.backgroundColor = "red"
    }
}