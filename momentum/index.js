import {showTime, stopTimeout, time, dateField} from './modules/time.js';
import {setBg, getSlideNext, getSlidePrev, randomNum} from './modules/slider.js';
import getWeather from './modules/weather.js';
import getQuotes from './modules/quotes.js';
import { links, createLink, linksForm, openForm, closeForm, newLinkButton, closeFormButton, formSubmit, linksContainer } from './modules/links.js';
import fillTextContent from './modules/settings.js';

const name = document.querySelector('.name');
const city = document.querySelector('.city');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const changeQuote = document.querySelector('.change-quote');
const langRuRadio = document.querySelector('#lang-ru');
const langEnRadio = document.querySelector('#lang-en');
const greetingInput = document.querySelector('#block-greeting');
const greetingContainer = document.querySelector('.greeting-container');
const quotesContainer = document.querySelector('.quotes-container');
const weatherField = document.querySelector('.weather');
const linksField = document.querySelector('.links');
const player = document.querySelector('.player');
const timeInput = document.querySelector('#block-time');
const dateInput = document.querySelector('#block-date');
const playerInput = document.querySelector('#block-audioplayer');
const linksInput = document.querySelector('#block-links');
const quotesInput = document.querySelector('#block-quotes');
const weatherInput = document.querySelector('#block-weather');
let lang = localStorage.getItem('lang'); //|| 'en';
const defaultCity = { 'en': 'Minsk', 'ru':'Минск'};
const settingsButton = document.querySelector('.settings-button');
const settings = document.querySelector('.settings');

langRuRadio.checked = lang === 'ru' ? true : false;
langEnRadio.checked = lang === 'en' ? true : false;
greetingInput.checked = localStorage.getItem('greeting') || 'true';
quotesInput.checked == localStorage.getItem('quotes') || 'true';
console.log(localStorage.getItem('quotes'), quotesInput.checked);

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('lang', lang);
    localStorage.setItem('greeting', greetingInput.checked);
    localStorage.setItem('time', timeInput.checked);
    localStorage.setItem('date', dateInput.checked);
    localStorage.setItem('quotes', quotesInput.checked);
    localStorage.setItem('links', linksInput.checked);
    localStorage.setItem('weather', weatherInput.checked);
    localStorage.setItem('player', playerInput.checked);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')){
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')){
        city.value = localStorage.getItem('city');
    } else city.value = defaultCity[lang];

    if(localStorage.getItem('lang')){
        lang = localStorage.getItem('lang');
    } else lang = 'en';

    // if(localStorage.getItem('greeting')){
    //     greetingInput.checked = localStorage.getItem('greeting');
    // } else greetingInput.checked = 'true';

    if(localStorage.getItem('date')){
        dateInput.checked = localStorage.getItem('date');
    } else dateInput.checked = 'true';

    if(localStorage.getItem('time')){
        timeInput.checked = localStorage.getItem('time');
    } else timeInput.checked = 'true';

    if(localStorage.getItem('links')){
        linksInput.checked = localStorage.getItem('links');
    } else linksInput.checked = 'true';

    // if(localStorage.getItem('quotes')){
    //     quotesInput.checked === localStorage.getItem('quotes');
    //     console.log(localStorage.getItem('quotes'), quotesInput.checked);
    // } else quotesInput.checked = 'true';

    if(localStorage.getItem('weather')){
        weatherInput.checked = localStorage.getItem('weather');
    } else weatherInput.checked = 'true';

    if(localStorage.getItem('player')){
        playerInput.checked = localStorage.getItem('player');
    } else playerInput.checked = 'true';
}
window.addEventListener('load', () => {
    getLocalStorage();
    showBlocks();
});

console.log(localStorage.getItem('quotes'));

function showBlocks() {
    console.log('11')
    greetingContainer.style.opacity = greetingInput.checked ? '1' : '0';
    time.style.opacity = timeInput.checked ? '1' : '0';
    dateField.style.opacity = dateInput.checked ? '1' : '0';
    quotesContainer.style.opacity = quotesInput.checked ? '1' : '0';
    linksField.style.opacity = linksInput.checked ? '1' : '0';
    weatherField.style.opacity = weatherInput.checked ? '1' : '0';
    player.style.opacity = playerInput.checked ? '1' : '0';
}

//showBlocks();
fillTextContent(lang);
showTime(lang, name);
getWeather(localStorage.getItem('city') || defaultCity[lang], lang);
getQuotes(lang);
setBg(randomNum);
// links.forEach(el => {
//     const link = createLink(el);
//     const placeElement = link.generateLink();
//     linksContainer.append(placeElement);
//   });

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
city.addEventListener('change', ()=> {getWeather(city.value)});
changeQuote.addEventListener('click', () => {getQuotes(lang)});
langRuRadio.addEventListener('click', () => {
    lang = 'ru';
    fillTextContent(lang);
    getWeather(defaultCity[lang], lang);
    stopTimeout();
    showTime(lang, name);
    getQuotes(lang);
});
langEnRadio.addEventListener('click', () => {
    lang = 'en';
    fillTextContent(lang);
    getWeather(defaultCity[lang], lang);
    stopTimeout();
    showTime(lang, name);
    getQuotes(lang);
});
linksForm.addEventListener('submit', (evt) => { formSubmit(evt) });
newLinkButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);
settingsButton.addEventListener('click', () => {
    settings.classList.toggle('settings_active')
});

greetingInput.addEventListener('click', () => {
    greetingContainer.style.opacity = 
    greetingInput.checked
    ? '1'
    : '0';
});

timeInput.addEventListener('click', () => {
    time.style.opacity = 
    timeInput.checked
    ? '1'
    : '0';
});

dateInput.addEventListener('click', () => {
    dateField.style.opacity = 
    dateInput.checked
    ? '1'
    : '0';
});

quotesInput.addEventListener('click', () => {
    showBlocks();
});

linksInput.addEventListener('click', () => {
    linksField.style.opacity = 
    linksInput.checked
    ? '1'
    : '0';
});

weatherInput.addEventListener('click', () => {
    weatherField.style.opacity = 
    weatherInput.checked
    ? '1'
    : '0';
});

playerInput.addEventListener('click', () => {
    player.style.opacity = 
    playerInput.checked
    ? '1'
    : '0';
});