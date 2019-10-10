var hamburger = document.querySelector(".hamburger #hamburger");
var ul = document.getElementById("ul")

hamburger.style.color = 'yellowgreen'

hamburger.addEventListener('click', opennav);

function opennav(){

    ul.classList.toggle("openul");

    // if (ul.style.transform === 'scale(0)') {

    //     ul.style.transform = 'scale(1)'
        
    // } else 
    //     { ul.style.transform = 'scale(0)'}
}


