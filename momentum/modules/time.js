import {showGreeting} from './greeting.js';
export const time = document.querySelector('.time');
export const dateField = document.querySelector('.date');
let timeoutID;

export function showTime(lang, name) {
    const date = new Date();
    console.log(date);
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate(date, lang);
    timeoutID = setTimeout(() => {showTime(lang, name)}, 1000);
    showGreeting(lang, name);
}

export function stopTimeout() {
    clearTimeout(timeoutID);
}

function showDate(date, lang) {
    const options = {weekday: 'long', month: 'long',  day: 'numeric', hour12: false};
    const currentDate = date.toLocaleDateString(`${lang}-${String(lang).toUpperCase()}`, options);
    dateField.textContent = currentDate;
}
