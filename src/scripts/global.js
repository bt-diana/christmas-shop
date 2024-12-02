import '../styles/global.sass';
import bindOnNavigationButtonClick from '../scripts/layout/header.js';

//navigation
bindOnNavigationButtonClick();

//back to top button
const backToTopButton = document.querySelector('.back-to-top-button');

backToTopButton.onclick = () => {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 300) {
        if (!backToTopButton.classList.contains('back-to-top-button--show')) 
            backToTopButton.classList.add('back-to-top-button--show')
    } else {
        if (backToTopButton.classList.contains('back-to-top-button--show')) 
            backToTopButton.classList.remove('back-to-top-button--show')
    }
});
