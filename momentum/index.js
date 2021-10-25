import {showTime, stopTimeout, time, dateField} from './modules/time.js';
import {setBg, getSlideNext, getSlidePrev, randomNum, getLinkToImage} from './modules/slider.js';
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
const githubCheck = document.querySelector('#back-github');
const unsplashCheck = document.querySelector('#back-splash');
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
const tagInput = document.querySelector('.settings-text-input');
let lang = localStorage.getItem('lang') || 'en';
let bgSettings = localStorage.getItem('bgSettings') || '1';
let tag = localStorage.getItem('tag') || null;
const defaultCity = { 'en': 'Minsk', 'ru':'Минск'};
const settingsButton = document.querySelector('.settings-button');
const settings = document.querySelector('.settings');

langRuRadio.checked = lang === 'ru' ? true : false;
langEnRadio.checked = lang === 'en' ? true : false;
githubCheck.checked = bgSettings === '1' ? true : false;
unsplashCheck.checked = bgSettings === '1' ? false : true;
greetingInput.checked = localStorage.getItem('greeting') === 'false' ? false : true;
quotesInput.checked = localStorage.getItem('quotes') === 'false' ? false : true;
weatherInput.checked = localStorage.getItem('weather') === 'false' ? false : true;
dateInput.checked = localStorage.getItem('date') === 'false' ? false : true;
timeInput.checked = localStorage.getItem('time') === 'false' ? false : true;
weatherInput.checked = localStorage.getItem('weather') === 'false' ? false : true;
linksInput.checked = localStorage.getItem('linksInput') === 'false' ? false : true;
playerInput.checked = localStorage.getItem('player') === 'false' ? false : true;
tagInput.disabled = bgSettings === '1' ? true : false;
tagInput.value = String(tag) === 'null' ? '' : tag;

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('lang', lang);
    localStorage.setItem('greeting', greetingInput.checked);
    localStorage.setItem('time', timeInput.checked);
    localStorage.setItem('date', dateInput.checked);
    localStorage.setItem('quotes', quotesInput.checked);
    localStorage.setItem('linksInput', linksInput.checked);
    localStorage.setItem('weather', weatherInput.checked);
    localStorage.setItem('player', playerInput.checked);
    localStorage.setItem('bgSettings', bgSettings);
    localStorage.setItem('tag', tag);
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

    if(localStorage.getItem('bgSettings')){
        bgSettings = localStorage.getItem('bgSettings');
    } else bgSettings = '1'; 
}

window.addEventListener('load', () => {
    getLocalStorage();
    showBlocks();
});

function showBlocks() {
    greetingContainer.style.opacity = greetingInput.checked === true ? '1' : '0';
    time.style.opacity = timeInput.checked === true ? '1' : '0';
    dateField.style.opacity = dateInput.checked === true ? '1' : '0';
    quotesContainer.style.opacity = quotesInput.checked === true ? '1' : '0';
    linksField.style.opacity = linksInput.checked === true ? '1' : '0';
    weatherField.style.opacity = weatherInput.checked === true ? '1' : '0';
    player.style.opacity = playerInput.checked === true ? '1' : '0';
}

showBlocks();
fillTextContent(lang);
showTime(lang, name);
getWeather(localStorage.getItem('city') || defaultCity[lang], lang);
getQuotes(lang);
function setBackground(bgSettings) {
    if (bgSettings === '1')  {
        setBg(randomNum);
    } else getLinkToImage(tag);
}
setBackground(bgSettings);
links.forEach(el => {
    const link = createLink(el);
    const placeElement = link.generateLink();
    linksContainer.append(placeElement);
  });

slideNext.addEventListener('click', () => {getSlideNext(bgSettings, tag)});
slidePrev.addEventListener('click', () => {getSlidePrev(bgSettings, tag)});
city.addEventListener('change', ()=> {getWeather(city.value)});
changeQuote.addEventListener('click', () => {
    console.log(greetingInput.checked);
    getQuotes(lang)});
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
githubCheck.addEventListener('click', () => {
    bgSettings = '1';
    setBackground(bgSettings);
    tagInput.disabled = true;
    tagInput.style.opacity = '0';
});
unsplashCheck.addEventListener('click', () => {
    bgSettings = '0';
    setBackground(bgSettings);
    tagInput.disabled = false;
    tagInput.style.opacity = '1';
});
linksForm.addEventListener('submit', (evt) => { formSubmit(evt) });
newLinkButton.addEventListener('click', openForm);
closeFormButton.addEventListener('click', closeForm);
settingsButton.addEventListener('click', () => {
    settings.classList.toggle('settings_active')
});
tagInput.addEventListener('change', () => {
    tag = tagInput.value;
    console.log(tagInput);
    setBackground(bgSettings);
});

greetingInput.addEventListener('click', showBlocks);
timeInput.addEventListener('click', showBlocks);
dateInput.addEventListener('click', showBlocks);
quotesInput.addEventListener('click', showBlocks);
linksInput.addEventListener('click', showBlocks);
weatherInput.addEventListener('click', showBlocks);
playerInput.addEventListener('click', showBlocks);