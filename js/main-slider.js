let slides = document.querySelectorAll(".custom-slides .slide");
let currentSlide = 0;
let next = document.querySelector('div#next');
let previous = document.querySelector('div#previous');
let buttons = document.querySelectorAll(".button-wrapper .controls")

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};


function nextSlide() {
    goToSlide(1);
}


function previousSlide() {
    goToSlide(0);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    buttons[currentSlide].className = "controls"
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
    buttons[currentSlide].className = "controls active"
}



