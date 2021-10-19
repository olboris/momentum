import showTime from './modules/time.js';
import {setBg, getSlideNext, getSlidePrev, randomNum} from './modules/slider.js';
import getWeather from './modules/weather.js'

const name = document.querySelector('.name');
const city = document.querySelector('.city');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')){
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')){
        city.value = localStorage.getItem('city');
    } else city.value = "Minsk";
}
window.addEventListener('load', getLocalStorage);

showTime();
getWeather(localStorage.getItem('city') || "Minsk");
setBg(randomNum);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
city.addEventListener('change', ()=> {getWeather(city.value)});