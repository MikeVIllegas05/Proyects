document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("header");
const logo = document.querySelector(".logo img");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                header.classList.add("active");
                logo.src = "img/vv-logo-cafe.png"; 
            } else {
                header.classList.remove("active");
                logo.src = "img/vv-logo.png"; 
            }
        });
    },
    { threshold: 0.1 }
);

const target = document.querySelector("#fondo");
if (target) {
    observer.observe(target);
}
});




var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var appendNumber = 4;
var prependNumber = 1;

document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
});

document.querySelector(".prepend-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
});

document.querySelector(".append-slide").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
});

document.querySelector(".append-2-slides").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
});