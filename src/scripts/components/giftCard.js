import * as data from '../../assets/data/giftsImages.json';
const giftsImages = data.default;

{/* <div class="best-gifts__card gift-card">
<div class="gift-card__image" style="background-image: url('./src/assets/images/gift-for-harmony.png')">
</div>
<div class="gift-card__description gift-card__description--for-harmony">
  <h4>For harmony</h4>
  <h3>Spontaneous Coding Philosopher</h3>
</div> 
</div>*/}

export default function createGiftCard(category, name, description, superpowers) {
  const giftCard = document.createElement('div');
  const image = document.createElement('div');
  const categoryCode = category ? category.toLowerCase().split(' ').join('-') : null;
  const descriptionContainer = document.createElement('div');
  const categoryLabel = document.createElement('h4');
  const nameLabel = document.createElement('h3');

  giftCard.classList.add('gift-card');
  if (categoryCode) descriptionContainer.classList.add('gift-card__description', `gift-card__description--${categoryCode}`);
  image.classList.add('gift-card__image');
  
  if (categoryCode) image.style = `background-image: url('./src/assets/images/${giftsImages[categoryCode]}')`;
  if (category) categoryLabel.innerText = category;
  if (name) nameLabel.innerText = name;

  descriptionContainer.appendChild(categoryLabel);
  descriptionContainer.appendChild(nameLabel);

  giftCard.appendChild(image);
  giftCard.appendChild(descriptionContainer);

  return giftCard;
}