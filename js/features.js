const slider = document.querySelector(".slider");
const sliderButtonPrev = document.querySelector(".slider__button_prev");
const sliderButtonNext = document.querySelector(".slider__button_next");
const sliderControls = document.querySelectorAll(".slider__control");
const slides = document.querySelectorAll(".slide");

const NUM_OF_SLIDES = 2;
let currentSlide = 1;

function switchToSlide(slideIdx) {
    const currentSlide = slider.querySelector(".slide_current");
    currentSlide.classList.remove("slide_current");
    slides[slideIdx].classList.add("slide_current");

    const currentSliderControl = slider.querySelector(
        ".slider__control_current"
    );
    currentSliderControl.classList.remove("slider__control_current");
    sliderControls[slideIdx].classList.add("slider__control_current");
}

sliderControls.forEach((sliderControl, idx) => {
    sliderControl.addEventListener("click", () => {
        switchToSlide(idx);
    });
});

sliderButtonPrev.addEventListener("click", () => {
    currentSlide = Math.abs(--currentSlide % NUM_OF_SLIDES);
    switchToSlide(currentSlide);
});

sliderButtonNext.addEventListener("click", () => {
    currentSlide = ++currentSlide % NUM_OF_SLIDES;
    switchToSlide(currentSlide);
});
