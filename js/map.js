const mapLink = document.querySelector(".contacts__link");
const mapPopup = document.querySelector(".modal.map");
const mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("hidden");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!mapPopup.classList.contains("hidden")) {
            evt.preventDefault();
            mapPopup.classList.add("hidden");
        }
    }
});
