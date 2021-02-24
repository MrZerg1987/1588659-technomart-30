const cartLinks = document.querySelectorAll(".product-card-button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".close-modal-cart");
const continueLinks = cartPopup.querySelector(".continue-button");


cartLinks.forEach((el) => {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  })
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

continueLinks.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
