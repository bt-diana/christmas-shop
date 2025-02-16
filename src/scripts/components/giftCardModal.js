export default function creategiftCardDetails(category, name, description, superpowers) {
  // modal
  const modal = document.createElement('div');
  modal.classList.add('gift-card__details', 'modal');

  // gift card details
  const giftCardDetails = document.createElement('div');
  giftCardDetails.classList.add('gift-card-details__content', 'gift-details', 'modal__content', 'modal-content');

  modal.appendChild(giftCardDetails);

  //closeButton
  const closeButton = document.createElement('button');

  closeButton.classList.add('modal__close-button', 'close-button');

  closeButton.appendChild(document.createElement('hr'));
  closeButton.appendChild(document.createElement('hr'));

  closeButton.onclick = () => {
    const body = document.querySelector('body');
    modal.classList.remove('modal--show');
    body.style.overflow = 'auto';
  }

  modal.onclick = (e) => {
    if(e.target === e.currentTarget) {
        const body = document.querySelector('body');
        modal.classList.remove('modal--show');
        body.style.overflow = 'auto';
    }
  }

  giftCardDetails.appendChild(closeButton);

  //image
  const image = document.createElement('div');

  image.classList.add('gift-details__image');
  
  //description
  const descriptionContainer = document.createElement('div');

  descriptionContainer.classList.add('gift-details__description', 'gift-details-description');

  //header
  const categoryCode = category ? category.toLowerCase().split(' ').join('-') : null;

  const headerContainer = document.createElement('div');
  const categoryLabel = document.createElement('h4');
  const nameLabel = document.createElement('h3');
  const descriptionLabel = document.createElement('div');

  headerContainer.classList.add('gift-details-description__header', 'gift-details-header');
  categoryLabel.classList.add('gift-details-header__category');
  nameLabel.classList.add('gift-details-header__name');
  descriptionLabel.classList.add('paragraph', 'gift-details-header__description');

  categoryLabel.innerText = category;
  nameLabel.innerText = name;
  descriptionLabel.innerText = description;

  headerContainer.appendChild(categoryLabel); 
  headerContainer.appendChild(nameLabel);
  headerContainer.appendChild(descriptionLabel);

  //superpowers
  const superpowersDetails = document.createElement('div');
  const superpowersTitle = document.createElement('h4');
  const superpowersContainer = document.createElement('div');

  superpowersDetails.classList.add('gift-details__superpowers', 'gift-superpowers');
  superpowersTitle.classList.add('gift-superpowers__title', 'superpowers-title');
  superpowersContainer.classList.add('gift-superpowers__container', 'superpowers-container');

  superpowersTitle.innerText = 'Adds superpowers to:';
  superpowersDetails.appendChild(superpowersTitle);
  superpowersDetails.appendChild(superpowersContainer);

  for (const [superpowerName, superpowerValue] of Object.entries(superpowers)) {
    const superpower = document.createElement('div');
    const superpowerNameLabel = document.createElement('div');
    const superpowerValueLabel = document.createElement('div');
    const progressBar = createSuperpowerProgressBar(Math.trunc(parseInt(superpowerValue) / 100));

    superpower.classList.add('gift-superpowers__superpower', 'superpower');
    superpowerNameLabel.classList.add('superpower__name', 'paragraph');
    superpowerValueLabel.classList.add('superpower__value', 'paragraph');
    progressBar.classList.add('superpower__progressBar');

    superpowerNameLabel.innerText = superpowerName;
    superpowerValueLabel.innerText = superpowerValue;

    superpower.appendChild(superpowerNameLabel);
    superpower.appendChild(superpowerValueLabel);
    superpower.appendChild(progressBar);
    superpowersContainer.appendChild(superpower);
  }

  //description
  descriptionContainer.appendChild(headerContainer);
  descriptionContainer.appendChild(superpowersDetails);

  //giftCardDetails
  giftCardDetails.appendChild(image);
  giftCardDetails.appendChild(descriptionContainer);  

  return modal;
}
  
function createSuperpowerProgressBar(n) {
  const maxUnits = 5;
  const unitImage = 'snowflake.svg';

  const progressBar = document.createElement('div');

  progressBar.classList.add('progressBar');

  //units
  for (let i = 0; i < maxUnits; i++) {
    const unit = document.createElement('div');

    unit.classList.add('progressBar__unit');
    if (i >= n) {
      unit.classList.add('progressBar__unit--empty');
    }

    progressBar.appendChild(unit);
  }

  return progressBar;
}

function handleCloseModal() {
  const body = document.querySelector('body');
  const modal = document.querySelector('modal--show');
  
  modal.classList.remove('modal--show');
  body.style.overflow = 'auto';

}