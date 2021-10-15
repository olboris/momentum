import showGreeting from './greeting.js';

const time = document.querySelector('.time');
const dateField = document.querySelector('.date');

export default function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate(date);
    setInterval(showTime, 1000);
    showGreeting();
}

function showDate(date) {
    const options = {weekday: 'long', month: 'long',  day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-EN', options);
    dateField.textContent = currentDate;
}
