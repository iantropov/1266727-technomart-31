/* ADD-TO-CART */

const productButtons = document.querySelectorAll(".product__button_buy");
const addToCartPopup = document.querySelector(".modal.add-to-cart");
const addToCartClose = addToCartPopup.querySelector(".modal__close");
const addToCartPurchase = addToCartPopup.querySelector(
    ".add-to-cart__button_purchase"
);
const addToCartContinue = addToCartPopup.querySelector(
    ".add-to-cart__button_continue"
);

if (addToCartPopup) {
    productButtons.forEach((productButton) =>
        productButton.addEventListener("click", (evt) => {
            evt.preventDefault();
            addToCartPopup.classList.add("modal_show");
            addToCartPurchase.focus();
        })
    );

    addToCartClose.addEventListener("click", () => {
        addToCartPopup.classList.remove("modal_show");
    });

    addToCartContinue.addEventListener("click", () => {
        addToCartPopup.classList.remove("modal_show");
    });

    window.addEventListener("keydown", (evt) => {
        if (evt.keyCode === 27) {
            if (addToCartPopup.classList.contains("modal_show")) {
                evt.preventDefault();
                addToCartPopup.classList.remove("modal_show");
            }
        }
    });
}

/* FEATURES */

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

if (slider) {
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
}

/* FEEDBACK */

const feedbackButton = document.querySelector(".contacts__button");
const feedbackPopup = document.querySelector(".modal.feedback");
const feedbackClose = feedbackPopup.querySelector(".modal__close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".feedback-form__input_name");
const feedbackEmail = feedbackPopup.querySelector(
    ".feedback-form__input_email"
);
const feedbackText = feedbackPopup.querySelector(".feedback-form__input_text");

let isStorageSupport = true;
let savedName = "";
let savedEmail = "";

try {
    savedName = localStorage.getItem("feedback.name");
    savedEmail = localStorage.getItem("feedback.email");
} catch (err) {
    isStorageSupport = false;
}

if (feedbackPopup) {
    feedbackButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        feedbackPopup.classList.add("modal_show");

        if (savedName) {
            feedbackName.value = savedName;
        }

        if (savedEmail) {
            feedbackEmail.value = savedEmail;
        }

        if (savedName && savedEmail) {
            feedbackText.focus();
        } else if (savedName) {
            feedbackEmail.focus();
        } else {
            feedbackName.focus();
        }
    });

    feedbackClose.addEventListener("click", (evt) => {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal_show");
        feedbackPopup.classList.remove("modal_error");
    });

    feedbackForm.addEventListener("submit", (evt) => {
        if (
            !feedbackName.value ||
            !feedbackEmail.value ||
            !feedbackText.value
        ) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal_error");
            feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
            feedbackPopup.classList.add("modal_error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("feedback.name", feedbackName.value);
                localStorage.setItem("feedback.email", feedbackEmail.value);
            }
        }
    });

    window.addEventListener("keydown", (evt) => {
        if (evt.keyCode === 27) {
            if (feedbackPopup.classList.contains("modal_show")) {
                evt.preventDefault();
                feedbackPopup.classList.remove("modal_show");
                feedbackPopup.classList.remove("modal_error");
            }
        }
    });
}

/* MAP */

const mapLink = document.querySelector(".contacts__link");
const mapPopup = document.querySelector(".modal.map");
const mapClose = mapPopup.querySelector(".modal__close");

if (mapPopup) {
    mapLink.addEventListener("click", (evt) => {
        evt.preventDefault();
        mapPopup.classList.add("modal_show");
    });

    mapClose.addEventListener("click", (evt) => {
        evt.preventDefault();
        mapPopup.classList.remove("modal_show");
    });

    window.addEventListener("keydown", (evt) => {
        if (evt.keyCode === 27) {
            if (mapPopup.classList.contains("modal_show")) {
                evt.preventDefault();
                mapPopup.classList.remove("modal_show");
            }
        }
    });
}

/* SERVICES */

const servicesTabs = document.querySelector(".services-tabs");
const servicesTabsContents = document.querySelectorAll(
    ".services-tabs-content"
);
const servicesTabsListLinks = document.querySelectorAll(
    ".services-tabs-list__link"
);
const servicesTabsList = document.querySelector(".services-tabs-list");

if (servicesTabs) {
    servicesTabsListLinks.forEach((link, idx) => {
        link.addEventListener("click", (evt) => {
            evt.preventDefault();
            const currentListItem = servicesTabsList.querySelector(
                ".services-tabs-list__item_current"
            );
            currentListItem.classList.remove(
                "services-tabs-list__item_current"
            );
            link.parentElement.classList.add(
                "services-tabs-list__item_current"
            );

            const currentContent = servicesTabs.querySelector(
                ".services-tabs-content_current"
            );
            currentContent.classList.remove("services-tabs-content_current");
            servicesTabsContents[idx].classList.add(
                "services-tabs-content_current"
            );
        });
    });
}
