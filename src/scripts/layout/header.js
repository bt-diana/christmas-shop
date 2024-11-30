export default function bindOnNavigationButtonClick() {
    const navigationButton = document.querySelector('.navigation-container__buttton');
    navigationButton.onclick = (e) => {
        e.currentTarget.classList.toggle('close-button');
        e.currentTarget.classList.toggle('burger-button');
        const navigation = document.querySelector('.navigation')
        if (navigation) {
            navigation.classList.toggle('navigation--open');
            const body = document.querySelector('body')

            if (navigation.classList.contains('navigation--open')) {
                navigation.classList.remove('navigation--close');
                body.style.overflowY = 'hidden';
                window.scrollTo(0, 0);
            } else {
                navigation.classList.add('navigation--close');
                navigation.onanimationend = () => {
                    navigation.classList.remove('navigation--close');
                }
                body.style.overflow = 'auto';
            }
        }
        
    }
}