import '../global.js';
import '../../styles/pages/home.sass';
import createGiftCard from '../../scripts/components/giftCard.js';
import * as data from '../../assets/data/gifts.json';

const gifts = data.default;
const bestGiftsAmount = 4;

//Best Gifts Generation
const bestGiftsContainer = document.querySelector('.best-gifts');
const selectedGifts =  gifts.sort(() => 0.5 - Math.random()).slice(0, bestGiftsAmount);

selectedGifts.forEach((gift) => {
    const giftCard = createGiftCard(gift.category, gift.name, gift.description, gift.superpowers);
    giftCard.classList.add('best-gifts__card');
    bestGiftsContainer.appendChild(giftCard);
})
