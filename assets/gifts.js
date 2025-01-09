import { c as createGiftCard, g as gifts$1 } from "./gifts2.js";
const gifts = gifts$1;
const allGiftsContainer = document.querySelector(".all-gifts-container");
gifts.forEach((gift) => {
  const giftCard = createGiftCard(gift.category, gift.name, gift.description, gift.superpowers);
  giftCard.classList.add("all-gifts-container__gift");
  allGiftsContainer.appendChild(giftCard);
});
const tabs = document.querySelector(".all-gifts-tabs");
tabs.childNodes.forEach((currentTab) => {
  currentTab.onclick = () => {
    const selectedTab = tabs.querySelector(".tabs__item--selected");
    selectedTab.classList.remove("tabs__item--selected");
    currentTab.classList.add("tabs__item--selected");
    allGiftsContainer.childNodes.forEach((giftCard) => {
      if (currentTab.dataset.category === "all" || currentTab.dataset.category === giftCard.dataset.category) {
        giftCard.style.display = "block";
      } else {
        giftCard.style.display = "none";
      }
    });
  };
});
