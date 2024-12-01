export default function bindOnNavigationButtonClick() {
    const navigationButton = document.querySelector('.navigation-container__buttton');
    navigationButton.onclick = (e) => {
        if (e.currentTarget.classList.contains('close-button')) {
            handleCloseNavigation();
        } else {
            handleOpenNavigation();
        }
    }
}

function handleOpenNavigation() {
    const navigation = document.querySelector('.navigation');
    const body = document.querySelector('body');
    const navigationButton = document.querySelector('.navigation-container__buttton');

    navigationButton.classList.add('close-button');
    navigationButton.classList.remove('burger-button');

    navigation.classList.add('navigation--open');
    navigation.classList.remove('navigation--close');

    body.style.overflowY = 'hidden';
    window.scrollTo(0, 0);

    navigation.childNodes.forEach((navigationLink) => {
        navigationLink.onclick = handleCloseNavigation;
    });
}

function handleCloseNavigation() {
    console.log('click')
    const navigation = document.querySelector('.navigation');
    const body = document.querySelector('body');
    const navigationButton = document.querySelector('.navigation-container__buttton');

    navigationButton.classList.remove('close-button');
    navigationButton.classList.add('burger-button');

    navigation.classList.remove('navigation--open');
    navigation.classList.add('navigation--close');

    body.style.overflow = 'auto';

    navigation.onanimationend = () => {
        navigation.classList.remove('navigation--close');
    }
}