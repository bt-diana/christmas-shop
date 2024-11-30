export default function bindOnNavigationButtonClick() {
    const navigationButton = document.querySelector('.navigation-container__buttton');
    navigationButton.onclick = (e) => {
        e.currentTarget.classList.toggle('close-button');
        e.currentTarget.classList.toggle('burger-button');
        const navigation = document.querySelector('.navigation')
        if (navigation) navigation.classList.toggle('navigation--open');
    }
}