export default function bindSliderScroll() {
    const sliderRow = document.querySelector('.slider-row');
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.slider-arrows__arrow-button--left');
    const rightArrow = document.querySelector('.slider-arrows__arrow-button--right');

    const paddingLeft = window.innerWidth > 1440 ? ((1440 - 1276) / 2) 
    : window.innerWidth > 1276 ? ((window.innerWidth - 1276) / 2) : null;

    slider.style.translate = paddingLeft ? paddingLeft + 'px' : null;

    rightArrow.onclick = () => {
        const paddingLeft = window.innerWidth > 1440 ? ((1440 - 1276) / 2) 
            : window.innerWidth > 1276 ? ((window.innerWidth - 1276) / 2) : null;
        const paddingRight = paddingLeft ? paddingLeft - 8 : 8;
        const sliderPartsAmount = window.innerWidth <= 768 ? 6 : 3;
        const newTranslate = +slider.style.translate.slice(0, -2) - (slider.offsetWidth + paddingLeft - sliderRow.offsetWidth + paddingRight) / sliderPartsAmount;
        slider.style.translate = newTranslate + 'px';

        if (Math.ceil(Math.abs(newTranslate)) >= slider.offsetWidth - sliderRow.offsetWidth + paddingRight) {
            rightArrow.setAttribute('disabled', '');
        }

        if (Math.trunc(newTranslate - paddingLeft) < 0) {
            leftArrow.removeAttribute('disabled');
        }
    }

    leftArrow.onclick = () => {
        const paddingLeft = window.innerWidth > 1440 ? ((1440 - 1276) / 2) 
            : window.innerWidth > 1276 ? ((window.innerWidth - 1276) / 2) : null;
        const paddingRight = paddingLeft ? paddingLeft - 8 : 8;
        const sliderPartsAmount = window.innerWidth <= 768 ? 6 : 3;
        const newTranslate = +slider.style.translate.slice(0, -2) + (slider.offsetWidth + paddingLeft - sliderRow.offsetWidth + paddingRight) / sliderPartsAmount;
        slider.style.translate = newTranslate + 'px';

        if (Math.ceil(Math.abs(newTranslate)) < slider.offsetWidth - sliderRow.offsetWidth + paddingRight) {
            rightArrow.removeAttribute('disabled');
        }

        if (Math.trunc(newTranslate - paddingLeft) >= 0) {
            leftArrow.setAttribute('disabled', '');
        }
    }

    window.addEventListener("optimizedResize", resetSlider);
    window.addEventListener("resize", resetSlider); }

function resetSlider() {
    const sliderRow = document.querySelector('.slider-row');
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.slider-arrows__arrow-button--left');
    const rightArrow = document.querySelector('.slider-arrows__arrow-button--right');
    const paddingLeft = window.innerWidth > 1440 ? ((1440 - 1276) / 2) 
        : window.innerWidth > 1276 ? ((window.innerWidth - 1276) / 2) : null;
    slider.style.translate = paddingLeft ? paddingLeft + 'px' : null;
    rightArrow.removeAttribute('disabled');
    leftArrow.setAttribute('disabled', '');
}