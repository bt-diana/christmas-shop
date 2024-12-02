export default function regulateTimer() {
    const daysElement = document.querySelector('.timer-value__days-value');
    const hoursElement = document.querySelector('.timer-value__hours-value');
    const minutesElement = document.querySelector('.timer-value__minutes-value');
    const secondsElement = document.querySelector('.timer-value__seconds-value');

    setInterval(() => {
        const newYearTimeStamp = Date.UTC((new Date()).getFullYear() + 1, 0, 1, 0, 0);
        const currentTimeStamp = (new Date()).getTime();
        const secondsLeft = Math.trunc((newYearTimeStamp - currentTimeStamp) / 1000);
        const days = Math.trunc(secondsLeft / 60 / 60 / 24);
        const hours = Math.trunc((secondsLeft % (60 * 60 * 24)) / 60 / 60);
        const minutes = Math.trunc((secondsLeft % (60 * 60)) / 60);
        const seconds = secondsLeft % 60;
    
        daysElement.innerText = days;
        hoursElement.innerText = hours;
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;
    }, 500);
}
