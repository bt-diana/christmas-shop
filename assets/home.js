import { c as createGiftCard, g as gifts$1 } from "./gifts2.js";
function regulateTimer() {
  const daysElement = document.querySelector(".timer-value__days-value");
  const hoursElement = document.querySelector(".timer-value__hours-value");
  const minutesElement = document.querySelector(".timer-value__minutes-value");
  const secondsElement = document.querySelector(".timer-value__seconds-value");
  setInterval(() => {
    const newYearTimeStamp = Date.UTC((/* @__PURE__ */ new Date()).getFullYear() + 1, 0, 1, 0, 0);
    const currentTimeStamp = (/* @__PURE__ */ new Date()).getTime();
    const secondsLeft = Math.trunc((newYearTimeStamp - currentTimeStamp) / 1e3);
    const days = Math.trunc(secondsLeft / 60 / 60 / 24);
    const hours = Math.trunc(secondsLeft % (60 * 60 * 24) / 60 / 60);
    const minutes = Math.trunc(secondsLeft % (60 * 60) / 60);
    const seconds = secondsLeft % 60;
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
  }, 500);
}
function bindSliderScroll() {
  const sliderRow = document.querySelector(".slider-row");
  const slider = document.querySelector(".slider");
  const leftArrow = document.querySelector(".slider-arrows__arrow-button--left");
  const rightArrow = document.querySelector(".slider-arrows__arrow-button--right");
  const paddingLeft = window.innerWidth > 1440 ? (1440 - 1276) / 2 : window.innerWidth > 1276 ? (window.innerWidth - 1276) / 2 : null;
  slider.style.translate = paddingLeft ? paddingLeft + "px" : null;
  rightArrow.onclick = () => {
    const paddingLeft2 = window.innerWidth > 1440 ? (1440 - 1276) / 2 : window.innerWidth > 1276 ? (window.innerWidth - 1276) / 2 : null;
    const paddingRight = paddingLeft2 ? paddingLeft2 - 8 : 8;
    const sliderPartsAmount = window.innerWidth <= 768 ? 6 : 3;
    const newTranslate = +slider.style.translate.slice(0, -2) - (slider.offsetWidth + paddingLeft2 - sliderRow.offsetWidth + paddingRight) / sliderPartsAmount;
    slider.style.translate = newTranslate + "px";
    if (Math.ceil(Math.abs(newTranslate)) >= slider.offsetWidth - sliderRow.offsetWidth + paddingRight) {
      rightArrow.setAttribute("disabled", "");
    }
    if (Math.trunc(newTranslate - paddingLeft2) < 0) {
      leftArrow.removeAttribute("disabled");
    }
  };
  leftArrow.onclick = () => {
    const paddingLeft2 = window.innerWidth > 1440 ? (1440 - 1276) / 2 : window.innerWidth > 1276 ? (window.innerWidth - 1276) / 2 : null;
    const paddingRight = paddingLeft2 ? paddingLeft2 - 8 : 8;
    const sliderPartsAmount = window.innerWidth <= 768 ? 6 : 3;
    const newTranslate = +slider.style.translate.slice(0, -2) + (slider.offsetWidth + paddingLeft2 - sliderRow.offsetWidth + paddingRight) / sliderPartsAmount;
    slider.style.translate = newTranslate + "px";
    if (Math.ceil(Math.abs(newTranslate)) < slider.offsetWidth - sliderRow.offsetWidth + paddingRight) {
      rightArrow.removeAttribute("disabled");
    }
    if (Math.trunc(newTranslate - paddingLeft2) >= 0) {
      leftArrow.setAttribute("disabled", "");
    }
  };
  window.addEventListener("optimizedResize", resetSlider);
  window.addEventListener("resize", resetSlider);
}
function resetSlider() {
  document.querySelector(".slider-row");
  const slider = document.querySelector(".slider");
  const leftArrow = document.querySelector(".slider-arrows__arrow-button--left");
  const rightArrow = document.querySelector(".slider-arrows__arrow-button--right");
  const paddingLeft = window.innerWidth > 1440 ? (1440 - 1276) / 2 : window.innerWidth > 1276 ? (window.innerWidth - 1276) / 2 : null;
  slider.style.translate = paddingLeft ? paddingLeft + "px" : null;
  rightArrow.removeAttribute("disabled");
  leftArrow.setAttribute("disabled", "");
}
const gifts = gifts$1;
const bestGiftsAmount = 4;
const bestGiftsContainer = document.querySelector(".best-gifts");
const selectedGifts = gifts.sort(() => 0.5 - Math.random()).slice(0, bestGiftsAmount);
selectedGifts.forEach((gift) => {
  const giftCard = createGiftCard(gift.category, gift.name, gift.description, gift.superpowers);
  giftCard.classList.add("best-gifts__gift");
  bestGiftsContainer.appendChild(giftCard);
});
regulateTimer();
bindSliderScroll();
