export default function bindOnNavigationButtonClick() {
    const navigationButton = document.querySelector('.navigation-container__buttton');
    navigationButton.onclick = (e) => {
        e.currentTarget.classList.toggle('close-button');
        e.currentTarget.classList.toggle('burger-button');
        const navigation = document.querySelector('.navigation')
        if (navigation) {
            navigation.classList.toggle('navigation--open');
            console.log(navigation.classList.contains('navigation--open'))
            const body = document.querySelector('body')
            if (navigation.classList.contains('navigation--open')) {
                body.style.overflowY = 'hidden';
                window.scrollTo(0, 0);
            } else {
                body.style.overflow = 'auto';
            }
        }
        
    }
}