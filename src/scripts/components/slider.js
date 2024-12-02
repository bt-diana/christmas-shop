export default function bindSliderScroll() {
    const sliderRow = document.querySelector('.slider-row');
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.slider-arrows__arrow-button--left');
    const rightArrow = document.querySelector('.slider-arrows__arrow-button--right');

    const paddingLeft = window.screen.width > 1440 ? ((1440 - 1276) / 2) 
    : window.screen.width > 1276 ? ((window.screen.width - 1276) / 2) : null;
    slider.style.translate = paddingLeft ? paddingLeft + 'px' : null;

    rightArrow.onclick = () => {
        const paddingLeft = window.screen.width > 1440 ? ((1440 - 1276) / 2) 
            : window.screen.width > 1276 ? ((window.screen.width - 1276) / 2) : null;
        const sliderPartsAmount = window.screen.width <= 768 ? 6 : 3;
        const newTranslate = +slider.style.translate.slice(0, -2) - (slider.offsetWidth + paddingLeft - sliderRow.offsetWidth + 8) / sliderPartsAmount + 'px';
        slider.style.translate = newTranslate;
    }

    leftArrow.onclick = () => {
        const paddingLeft = window.screen.width > 1440 ? ((1440 - 1276) / 2) 
            : window.screen.width > 1276 ? ((window.screen.width - 1276) / 2) : null;
        const sliderPartsAmount = window.screen.width <= 768 ? 6 : 3;
        const newTranslate = +slider.style.translate.slice(0, -2) + (slider.offsetWidth + paddingLeft - sliderRow.offsetWidth + 8) / sliderPartsAmount + 'px';
        slider.style.translate = newTranslate;
    }

    window.addEventListener("resize", () => {
        const paddingLeft = window.screen.width > 1440 ? ((1440 - 1276) / 2) 
            : window.screen.width > 1276 ? ((window.screen.width - 1276) / 2) : null;
        slider.style.translate = paddingLeft ? paddingLeft + 'px' : null;
    })
}