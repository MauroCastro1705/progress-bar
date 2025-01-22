let number = document.getElementById("number");
let counter = 0;
var circulo = document.querySelector(".circle");
let fillBarra = window.getComputedStyle(circulo).strokeDashoffset;

setInterval(()=>{
    if(counter == 100){
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
    
}, 17)