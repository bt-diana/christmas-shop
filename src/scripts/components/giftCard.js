import createGiftCardModal from './giftCardModal.js';

export default function createGiftCard(category, name, description, superpowers) {
  const gift = document.createElement('div');
  const giftCard = document.createElement('div');
  const image = document.createElement('div');
  const categoryCode = category ? category.toLowerCase().split(' ').join('-') : null;
  const descriptionContainer = document.createElement('div');
  const categoryLabel = document.createElement('h4');
  const nameLabel = document.createElement('h3');

  gift.classList.add('gift');
  gift.dataset.category = categoryCode;
  giftCard.classList.add('gift-card');
  descriptionContainer.classList.add('gift-card__description', 'gift-description');
  categoryLabel.classList.add('gift-description__category');
  nameLabel.classList.add('gift-description__name');
  image.classList.add('gift-card__image');
  
  if (category) categoryLabel.innerText = category;
  if (name) nameLabel.innerText = name;

  descriptionContainer.appendChild(categoryLabel);
  descriptionContainer.appendChild(nameLabel);

  giftCard.appendChild(image);
  giftCard.appendChild(descriptionContainer);

  const giftCardModal = createGiftCardModal(category, name, description, superpowers);
  gift.appendChild(giftCard);
  gift.appendChild(giftCardModal);

  giftCard.onclick = () => {
    const body = document.querySelector('body');
    giftCardModal.classList.add('modal--show');
    body.style.overflowY = 'hidden';
  }

  return gift;
}