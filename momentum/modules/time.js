import {showGreeting} from './greeting.js';
const time = document.querySelector('.time');
const dateField = document.querySelector('.date');

export default function showTime(lang, name) {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate(date, lang);
    setTimeout(() => {showTime(lang, name)}, 1000);
    showGreeting(lang, name);
}

function showDate(date, lang) {
    const options = {weekday: 'long', month: 'long',  day: 'numeric'};
    const currentDate = date.toLocaleDateString(`${lang}-${String(lang).toUpperCase()}`, options);
    dateField.textContent = currentDate;
}
