const productButtons = document.querySelectorAll(".product__button_buy");
const addToCartPopup = document.querySelector(".modal.add-to-cart");
const addToCartClose = addToCartPopup.querySelector(".modal__close");
const addToCartPurchase = addToCartPopup.querySelector(
    ".add-to-cart__button_purchase"
);
const addToCartContinue = addToCartPopup.querySelector(
    ".add-to-cart__button_continue"
);

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
