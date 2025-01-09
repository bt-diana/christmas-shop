function bindOnNavigationButtonClick() {
  const navigationButton = document.querySelector(".navigation-container__buttton");
  navigationButton.onclick = (e) => {
    if (e.currentTarget.classList.contains("close-button")) {
      handleCloseNavigation();
    } else {
      handleOpenNavigation();
    }
  };
  window.addEventListener("optimizedResize", () => {
    if (window.innerWidth > 768 && navigationButton.classList.contains("close-button")) {
      resetNavigation();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navigationButton.classList.contains("close-button")) {
      resetNavigation();
    }
  });
}
function handleOpenNavigation() {
  const navigation = document.querySelector(".navigation");
  const body = document.querySelector("body");
  const navigationButton = document.querySelector(".navigation-container__buttton");
  navigationButton.classList.add("close-button");
  navigationButton.classList.remove("burger-button");
  navigation.classList.add("navigation--open");
  navigation.classList.remove("navigation--close");
  body.style.overflowY = "hidden";
  window.scrollTo(0, 0);
  navigation.childNodes.forEach((navigationLink) => {
    navigationLink.onclick = handleCloseNavigation;
  });
}
function handleCloseNavigation() {
  const navigation = document.querySelector(".navigation");
  const body = document.querySelector("body");
  const navigationButton = document.querySelector(".navigation-container__buttton");
  navigationButton.classList.remove("close-button");
  navigationButton.classList.add("burger-button");
  navigation.classList.remove("navigation--open");
  navigation.classList.add("navigation--close");
  body.style.overflow = "auto";
  navigation.onanimationend = () => {
    navigation.classList.remove("navigation--close");
  };
}
function resetNavigation() {
  const navigation = document.querySelector(".navigation");
  const body = document.querySelector("body");
  const navigationButton = document.querySelector(".navigation-container__buttton");
  navigationButton.classList.remove("close-button");
  navigationButton.classList.add("burger-button");
  navigation.classList.remove("navigation--open");
  navigation.classList.remove("navigation--close");
  body.style.overflow = "auto";
}
bindOnNavigationButtonClick();
const backToTopButton = document.querySelector(".back-to-top-button");
backToTopButton.onclick = () => {
  window.scrollTo(0, 0);
};
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 300) {
    if (!backToTopButton.classList.contains("back-to-top-button--show"))
      backToTopButton.classList.add("back-to-top-button--show");
  } else {
    if (backToTopButton.classList.contains("back-to-top-button--show"))
      backToTopButton.classList.remove("back-to-top-button--show");
  }
});
function creategiftCardDetails(category, name, description, superpowers) {
  const modal = document.createElement("div");
  modal.classList.add("gift-card__details", "modal");
  const giftCardDetails = document.createElement("div");
  giftCardDetails.classList.add("gift-card-details__content", "gift-details", "modal__content", "modal-content");
  modal.appendChild(giftCardDetails);
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal__close-button", "close-button");
  closeButton.appendChild(document.createElement("hr"));
  closeButton.appendChild(document.createElement("hr"));
  closeButton.onclick = () => {
    const body = document.querySelector("body");
    modal.classList.remove("modal--show");
    body.style.overflow = "auto";
  };
  modal.onclick = (e) => {
    if (e.target === e.currentTarget) {
      const body = document.querySelector("body");
      modal.classList.remove("modal--show");
      body.style.overflow = "auto";
    }
  };
  giftCardDetails.appendChild(closeButton);
  const image = document.createElement("div");
  image.classList.add("gift-details__image");
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("gift-details__description", "gift-details-description");
  category ? category.toLowerCase().split(" ").join("-") : null;
  const headerContainer = document.createElement("div");
  const categoryLabel = document.createElement("h4");
  const nameLabel = document.createElement("h3");
  const descriptionLabel = document.createElement("div");
  headerContainer.classList.add("gift-details-description__header", "gift-details-header");
  categoryLabel.classList.add("gift-details-header__category");
  nameLabel.classList.add("gift-details-header__name");
  descriptionLabel.classList.add("paragraph", "gift-details-header__description");
  categoryLabel.innerText = category;
  nameLabel.innerText = name;
  descriptionLabel.innerText = description;
  headerContainer.appendChild(categoryLabel);
  headerContainer.appendChild(nameLabel);
  headerContainer.appendChild(descriptionLabel);
  const superpowersDetails = document.createElement("div");
  const superpowersTitle = document.createElement("h4");
  const superpowersContainer = document.createElement("div");
  superpowersDetails.classList.add("gift-details__superpowers", "gift-superpowers");
  superpowersTitle.classList.add("gift-superpowers__title", "superpowers-title");
  superpowersContainer.classList.add("gift-superpowers__container", "superpowers-container");
  superpowersTitle.innerText = "Adds superpowers to:";
  superpowersDetails.appendChild(superpowersTitle);
  superpowersDetails.appendChild(superpowersContainer);
  for (const [superpowerName, superpowerValue] of Object.entries(superpowers)) {
    const superpower = document.createElement("div");
    const superpowerNameLabel = document.createElement("div");
    const superpowerValueLabel = document.createElement("div");
    const progressBar = createSuperpowerProgressBar(Math.trunc(parseInt(superpowerValue) / 100));
    superpower.classList.add("gift-superpowers__superpower", "superpower");
    superpowerNameLabel.classList.add("superpower__name", "paragraph");
    superpowerValueLabel.classList.add("superpower__value", "paragraph");
    progressBar.classList.add("superpower__progressBar");
    superpowerNameLabel.innerText = superpowerName;
    superpowerValueLabel.innerText = superpowerValue;
    superpower.appendChild(superpowerNameLabel);
    superpower.appendChild(superpowerValueLabel);
    superpower.appendChild(progressBar);
    superpowersContainer.appendChild(superpower);
  }
  descriptionContainer.appendChild(headerContainer);
  descriptionContainer.appendChild(superpowersDetails);
  giftCardDetails.appendChild(image);
  giftCardDetails.appendChild(descriptionContainer);
  return modal;
}
function createSuperpowerProgressBar(n) {
  const maxUnits = 5;
  const progressBar = document.createElement("div");
  progressBar.classList.add("progressBar");
  for (let i = 0; i < maxUnits; i++) {
    const unit = document.createElement("div");
    unit.classList.add("progressBar__unit");
    if (i >= n) {
      unit.classList.add("progressBar__unit--empty");
    }
    progressBar.appendChild(unit);
  }
  return progressBar;
}
function createGiftCard(category, name, description, superpowers) {
  const gift = document.createElement("div");
  const giftCard = document.createElement("div");
  const image = document.createElement("div");
  const categoryCode = category ? category.toLowerCase().split(" ").join("-") : null;
  const descriptionContainer = document.createElement("div");
  const categoryLabel = document.createElement("h4");
  const nameLabel = document.createElement("h3");
  gift.classList.add("gift");
  gift.dataset.category = categoryCode;
  giftCard.classList.add("gift-card");
  descriptionContainer.classList.add("gift-card__description", "gift-description");
  categoryLabel.classList.add("gift-description__category");
  nameLabel.classList.add("gift-description__name");
  image.classList.add("gift-card__image");
  if (category) categoryLabel.innerText = category;
  if (name) nameLabel.innerText = name;
  descriptionContainer.appendChild(categoryLabel);
  descriptionContainer.appendChild(nameLabel);
  giftCard.appendChild(image);
  giftCard.appendChild(descriptionContainer);
  const giftCardModal = creategiftCardDetails(category, name, description, superpowers);
  gift.appendChild(giftCard);
  gift.appendChild(giftCardModal);
  giftCard.onclick = () => {
    const body = document.querySelector("body");
    giftCardModal.classList.add("modal--show");
    body.style.overflowY = "hidden";
  };
  return gift;
}
const gifts = [
  {
    name: "Bug Magnet",
    description: "Able to find bugs in code like they were placed there on purpose.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+400"
    }
  },
  {
    name: "Console.log Guru",
    description: "Uses console.log like a crystal ball to find any issue.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+400"
    }
  },
  {
    name: "Shortcut Cheater",
    description: "Knows every keyboard shortcut like they were born with them.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+400",
      dream: "+200"
    }
  },
  {
    name: "Merge Master",
    description: "Merges branches in Git without conflicts, like a wizard during an exam.",
    category: "For Work",
    superpowers: {
      live: "+200",
      create: "+500",
      love: "+200",
      dream: "+300"
    }
  },
  {
    name: "Async Tamer",
    description: "Handles asynchronous code and promises like well-trained pets.",
    category: "For Work",
    superpowers: {
      live: "+100",
      create: "+400",
      love: "+200",
      dream: "+300"
    }
  },
  {
    name: "CSS Tamer",
    description: "Can make Flexbox and Grid work together like they were always best friends.",
    category: "For Work",
    superpowers: {
      live: "+200",
      create: "+500",
      love: "+200",
      dream: "+300"
    }
  },
  {
    name: "Time Hacker",
    description: "Writes code at the last moment but always meets the deadline.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+200"
    }
  },
  {
    name: "Layout Master",
    description: "Creates perfect layouts on the first try, like they can read the designer's mind.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+300",
      love: "+200",
      dream: "+200"
    }
  },
  {
    name: "Documentation Whisperer",
    description: "Understands cryptic documentation as if they wrote it themselves.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+100"
    }
  },
  {
    name: "Feedback Master",
    description: "Accepts client revisions with the Zen calm of Buddha.",
    category: "For Work",
    superpowers: {
      live: "+300",
      create: "+500",
      love: "+300",
      dream: "+400"
    }
  },
  {
    name: "Code Minimalist",
    description: "Writes code so concise that one line does more than a whole file.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+200"
    }
  },
  {
    name: "Pixel-Perfect Magician",
    description: "Aligns elements to the last pixel, even when the design looks abstract.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+400",
      dream: "+400"
    }
  },
  {
    name: "Posture Levitation",
    description: "Can sit for hours, but maintains perfect posture like a ballerina.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+500",
      love: "+500",
      dream: "+400"
    }
  },
  {
    name: "Step Master",
    description: "Gets 10,000 steps a day even while sitting at the computer.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+500",
      dream: "+400"
    }
  },
  {
    name: "Snack Resister",
    description: "Ignoring desktop snacks like a strict dietician.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+100",
      love: "+200",
      dream: "+400"
    }
  },
  {
    name: "Hydration Bot",
    description: "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
    category: "For Health",
    superpowers: {
      live: "+500",
      create: "+300",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Sleep Overlord",
    description: "Sleeps 6 hours but feels like they had 10.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+500",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Break Guru",
    description: "Takes a stretch break every hour without forgetting, no matter how focused.",
    category: "For Health",
    superpowers: {
      live: "+300",
      create: "+300",
      love: "+300",
      dream: "+400"
    }
  },
  {
    name: "Eye Protector",
    description: "Can work all day at the monitor without feeling like their eyes are on fire.",
    category: "For Health",
    superpowers: {
      live: "+100",
      create: "+300",
      love: "+500",
      dream: "+400"
    }
  },
  {
    name: "Stress Dodger",
    description: "Masters meditation right at the keyboard.",
    category: "For Health",
    superpowers: {
      live: "+100",
      create: "+400",
      love: "+200",
      dream: "+400"
    }
  },
  {
    name: "Yoga Coder",
    description: "Easily switches from coding to yoga and back.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+400",
      love: "+400",
      dream: "+400"
    }
  },
  {
    name: "Healthy Snacker",
    description: "Always picks fruit, even when chocolate is within arm’s reach.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+200",
      dream: "+400"
    }
  },
  {
    name: "Chair Exerciser",
    description: "Manages to work out without leaving the chair.",
    category: "For Health",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+400"
    }
  },
  {
    name: "Caffeine Filter",
    description: "Drinks coffee at night and still falls asleep with no problem.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+500",
      dream: "+200"
    }
  },
  {
    name: "Joy Charger",
    description: "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Error Laugher",
    description: "Laughs at code errors like they’re jokes instead of getting angry.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Bug Acceptance Guru",
    description: "Accepts bugs as part of the journey to perfection — it’s just another task.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+400"
    }
  },
  {
    name: "Spontaneous Coding Philosopher",
    description: "Philosophically accepts any client suggestion after a long refactor.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+400"
    }
  },
  {
    name: "Deadline Sage",
    description: "Remains zen even when the deadline is close and the project manager is stressed.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+300",
      dream: "+500"
    }
  },
  {
    name: "Inspiration Maestro",
    description: "Finds inspiration on an empty screen as if masterpieces are already there.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+400",
      dream: "+100"
    }
  },
  {
    name: "Peace Keeper",
    description: "Maintains inner calm even in moments of intense crisis.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Empathy Guru",
    description: "Feels the team’s mood and can lift everyone’s spirits.",
    category: "For Harmony",
    superpowers: {
      live: "+500",
      create: "+200",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Laughter Generator",
    description: "Can lighten any tense situation with a joke that even bugs laugh at.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+200",
      dream: "+500"
    }
  },
  {
    name: "Pause Master",
    description: "Knows when to just step back from the keyboard and breathe.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+100",
      dream: "+100"
    }
  },
  {
    name: "Coder Healer",
    description: "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+500"
    }
  },
  {
    name: "Music Code Curator",
    description: "Creates work playlists so good, even deadlines follow the rhythm.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+300",
      dream: "+200"
    }
  }
];
export {
  createGiftCard as c,
  gifts as g
};
