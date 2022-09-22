$(document).ready(function () {
        var carousel = $("#owl-demo");
        carousel.owlCarousel({
        items: 4,
        loop:true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });  
});

const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const ques = document.getElementById('question');

noBtn.addEventListener("click", ()=> {
    let rand = Math.floor(Math.random() * (500 - 100) + 1);
    let rand2 = Math.floor(Math.random() * (-300 - 100) + 1);
    noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
});

yesBtn.addEventListener("click", ()=>{
    ques.innerHTML = "DASURB";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});