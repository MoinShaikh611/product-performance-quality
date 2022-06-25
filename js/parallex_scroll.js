const parallexAbout = document.getElementById("elementor-about-image");
const parallexDestination = document.getElementById("elementor-destination-image");
const parallexSustainable = document.getElementById("elementor-sustainable-image");
window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    parallexAbout.style.backgroundPositionY = offset * 0.7 + "px";
    parallexDestination.style.backgroundPositionY = offset * 0.7 + "px";
    parallexSustainable.style.backgroundPositionY = offset * 0.7 + "px";
    console.log(offset);
})

