const mapLink = document.querySelector(".contacts__link");
const mapPopup = document.querySelector(".modal.map");
const mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal_show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal_show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal_show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal_show");
        }
    }
});
