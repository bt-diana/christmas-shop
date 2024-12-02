export default function bindSliderScroll() {
    const sliderRow = document.querySelector('.slider-row');
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.slider-arrows__arrow-button--left');
    const rightArrow = document.querySelector('.slider-arrows__arrow-button--right');

    rightArrow.onclick = () => {
        const sliderPartsAmount = window.screen.width <= 768 ? 6 : 3;
        const newTranslate = +slider.style.translate.slice(0, -2) - (slider.offsetWidth - sliderRow.offsetWidth + 8) / sliderPartsAmount + 'px';
        slider.style.translate = newTranslate;
    }

    leftArrow.onclick = () => {
        const sliderPartsAmount = window.screen.width <= 768 ? 6 : 3;
        const newTranslate = +slider.style.translate.slice(0, -2) + (slider.offsetWidth - sliderRow.offsetWidth + 8) / sliderPartsAmount + 'px';
        slider.style.translate = newTranslate;
    }
}