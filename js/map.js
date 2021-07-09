const mapLink = document.querySelector(".contacts__link");
const mapPopup = document.querySelector(".modal.map");
const mapClose = mapPopup.querySelector(".modal__close");

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
