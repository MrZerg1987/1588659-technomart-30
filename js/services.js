const deliveryButton = document.querySelector(".delivery-button");
const guaranteeButton = document.querySelector(".guarantee-button");
const creditButton = document.querySelector(".credit-button");
const deliveryItem = document.querySelector(".delivery-item");
const guaranteeItem = document.querySelector(".guarantee-item");
const creditItem = document.querySelector(".credit-item");

deliveryButton.addEventListener("click", function () {
  deliveryItem.classList.remove("services-item-disable");
  guaranteeItem.classList.add("services-item-disable");
  creditItem.classList.add("services-item-disable");
  deliveryButton.classList.add("services-item-button-active");
  guaranteeButton.classList.remove("services-item-button-active");
  creditButton.classList.remove("services-item-button-active");
});

guaranteeButton.addEventListener("click", function () {
  guaranteeItem.classList.remove("services-item-disable");
  deliveryItem.classList.add("services-item-disable");
  creditItem.classList.add("services-item-disable");
  guaranteeButton.classList.add("services-item-button-active");
  deliveryButton.classList.remove("services-item-button-active");
  creditButton.classList.remove("services-item-button-active");
});

creditButton.addEventListener("click", function () {
  creditItem.classList.remove("services-item-disable");
  deliveryItem.classList.add("services-item-disable");
  guaranteeItem.classList.add("services-item-disable");
  creditButton.classList.add("services-item-button-active");
  deliveryButton.classList.remove("services-item-button-active");
  guaranteeButton.classList.remove("services-item-button-active");
});
