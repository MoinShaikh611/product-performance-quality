let textSlides = document.querySelectorAll("#text-slider-slides .text-slide");
let textSliderLeft = document.querySelector("#text-slider-left")
let textSliderRight = document.querySelector("#text-slider-right")
let currentTextSlide = 0;


textSliderLeft.onclick = function () {
    previousTextSlide();
}

textSliderRight.onclick = function () {
    nextTextSlide();
}


function nextTextSlide() {
    goToTextSlide(currentTextSlide + 1);
}


function previousTextSlide() {
    goToTextSlide(currentTextSlide - 1);
}

function goToTextSlide(n) {
    textSlides[currentTextSlide].className = 'text-slide';
    currentTextSlide = (n + textSlides.length) % textSlides.length;
    textSlides[currentTextSlide].className = 'text-slide showing';
}
