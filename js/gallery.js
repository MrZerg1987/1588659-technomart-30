const galleryButtonBack = document.querySelector(".gallery-button-back");
const galleryButtonNext = document.querySelector(".gallery-button-next");
const galleryPaginationOne = document.querySelector(".button-pagination-1");
const galleryPaginationTwo = document.querySelector(".button-pagination-2");
const gallerySlideOne = document.querySelector(".slide-1");
const gallerySlideTwo = document.querySelector(".slide-2");

galleryButtonBack.addEventListener("click", function () {
    gallerySlideOne.classList.remove("slide-off");
    galleryButtonBack.classList.add("button-disable");
    gallerySlideTwo.classList.add("slide-off");
    galleryButtonNext.classList.remove("button-disable");
    galleryPaginationOne.classList.add("gallery-pagination-active");
    galleryPaginationTwo.classList.remove("gallery-pagination-active");
});

galleryPaginationOne.addEventListener("click", function () {
  gallerySlideOne.classList.remove("slide-off");
  galleryButtonBack.classList.add("button-disable");
  gallerySlideTwo.classList.add("slide-off");
  galleryButtonNext.classList.remove("button-disable");
  galleryPaginationOne.classList.add("gallery-pagination-active");
  galleryPaginationTwo.classList.remove("gallery-pagination-active");
});

galleryButtonNext.addEventListener("click", function () {
    gallerySlideTwo.classList.remove("slide-off");
    galleryButtonNext.classList.add("button-disable");
    gallerySlideOne.classList.add("slide-off");
    galleryButtonBack.classList.remove("button-disable");
    galleryPaginationTwo.classList.add("gallery-pagination-active");
    galleryPaginationOne.classList.remove("gallery-pagination-active");
});

galleryPaginationTwo.addEventListener("click", function () {
  gallerySlideTwo.classList.remove("slide-off");
  galleryButtonNext.classList.add("button-disable");
  gallerySlideOne.classList.add("slide-off");
  galleryButtonBack.classList.remove("button-disable");
  galleryPaginationTwo.classList.add("gallery-pagination-active");
  galleryPaginationOne.classList.remove("gallery-pagination-active");
});
