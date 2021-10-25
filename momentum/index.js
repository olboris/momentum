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

console.log('Итого 147/160');
console.log('1. Часы и календарь +15');
console.log('- время выводится в 24-часовом формате, например: 21:01:00 +5');
console.log('- время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5');
console.log('-выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5')
console.log('Приветствие +10')
console.log('- текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5');
console.log('- пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5');
console.log('Смена фонового изображения +20');
console.log('- ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5');
console.log('- изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.');
console.log('- изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5');
console.log('- изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5');
console.log('- при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. +5');
console.log('Виджет погоды +15');
console.log('- при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5');
console.log('- данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5');
console.log('- выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5');
console.log('Виджет цитата дня +10');
console.log('- при загрузке страницы приложения отображается рандомная цитата и её автор +5');
console.log('- при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5');
console.log('Аудиоплеер +15');
console.log('- при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3');
console.log('- при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3');
console.log('- треки можно пролистывать кнопками Play-next и Play-prev');
console.log('- треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3');
console.log('- трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3');
console.log('- после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3');
console.log('Продвинутый аудиоплеер (реализуется без использования библиотек) +12');
console.log('- добавлен прогресс-бар в котором отображается прогресс проигрывания +3');
console.log('- при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека +3');
console.log('- над прогресс-баром отображается название трека +3');
console.log('- отображается текущее и общее время воспроизведения трека +3');
console.log('- есть кнопка звука при клике по которой можно включить/отключить звук -2');
console.log('- добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука -3');
console.log('- можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте -3');
console.log('Перевод приложения на два языка (en/ru или en/be) +15');
console.log('- переводится язык и меняется формат отображения даты +3');
console.log('- переводится приветствие и placeholder +3');
console.log('- переводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3');
console.log('- переводится цитата дня (используйте подходящий для этой цели API, возвращающий цитаты на нужном языке или создайте с этой целью JSON-файл с цитатами на двух языках) +3');
console.log('- переводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3');
console.log('Получение фонового изображения от API +5'); 
console.log('- в качестве источника изображений может использоваться Unsplash API +5');
console.log('- в качестве источника изображений может использоваться Flickr API -5');
console.log('Настройки приложения +20');
console.log('- в настройках приложения можно указать язык приложения (en/ru или en/be) +3');
console.log('- в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3');
console.log('- если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +3');
console.log('- в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3');
console.log('- скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3');
console.log('- настройки приложения сохраняются при перезагрузке страницы +5');
console.log('- Дополнительный функционал на выбор +10');
console.log('- список ссылок (как в оригинальном приложении) +10');