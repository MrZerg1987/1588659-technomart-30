const feedbackLink = document.querySelector(".contacts-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".close-modal-feedback");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const userName = feedbackPopup.querySelector("[name=name]");
const userMail = feedbackPopup.querySelector("[name=mail]");
const userText = feedbackPopup.querySelector("[name=text]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
    userName.value = storage;

    if (storage) {
      userMail.value = storage;
      userText.focus();
    } else {
      userMail.focus();
    }
  } else {
    userName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("mail", userMail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});
