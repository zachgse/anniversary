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

const timer = () => {
    let firstDay = new Date(2017, 08, 15, 00, 00);
    let currentDate = new Date();
    let timeElapsed= currentDate - firstDay;
    let days = Math.floor((timeElapsed) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeElapsed) / (1000 * 60 * 60) % 24);
    
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = Math.floor((timeElapsed) / (1000 * 60) % 60);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = Math.floor((timeElapsed) / (1000) % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("time-days").innerText = days;
    document.getElementById("time-hours").innerText = hours;
    document.getElementById("time-minutes").innerText = minutes;
    document.getElementById("time-seconds").innerText = seconds;
};

const startTimer = () => {
    timer();
    window.setInterval("timer()", 1);
};

startTimer();

