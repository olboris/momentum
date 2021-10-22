import showTime from './modules/time.js';
import {setBg, getSlideNext, getSlidePrev, randomNum} from './modules/slider.js';
import getWeather from './modules/weather.js';
import getQuotes from './modules/quotes.js';

const name = document.querySelector('.name');
const city = document.querySelector('.city');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const changeQuote = document.querySelector('.change-quote');
const langRuRadio = document.querySelector('#lang-ru');
const langEnRadio = document.querySelector('#lang-en');
let lang = localStorage.getItem('lang') || 'en';

langRuRadio.checked = lang === 'ru' ? true : false;
langEnRadio.checked = lang === 'en' ? true : false;  

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')){
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')){
        city.value = localStorage.getItem('city');
    } else city.value = "Minsk";

    if(localStorage.getItem('lang')){
        lang = localStorage.getItem('lang');
    } else lang = 'en';
}
window.addEventListener('load', getLocalStorage);

showTime(lang, name);
getWeather(localStorage.getItem('city') || "Minsk", lang);
getQuotes(lang);
setBg(randomNum);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
city.addEventListener('change', ()=> {getWeather(city.value)});
changeQuote.addEventListener('click', getQuotes);
langRuRadio.addEventListener('click', () => {lang = 'ru'; console.log(lang); window.location.reload()});
langEnRadio.addEventListener('click', () => {lang = 'en'; console.log(lang); window.location.reload()});
console.log(localStorage.getItem('lang'));
console.log(langEnRadio.checked);