var slideIndex = 0;
var clock;
showSlides();

function plusSlides(n) {
    changeSlides(slideIndex += n);
}

function changeSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    clearTimeout(clock);
    clock = setTimeout(showSlides, 5000);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex-1].style.display = "block";
    clock = setTimeout(showSlides, 5000);
}

setTimeout(splash, 3000);

function splash () {
    document.getElementById("splash").style.display = "none";
}