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
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
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
