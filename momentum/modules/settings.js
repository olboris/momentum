const linkSubtitleContent = { 'en': 'New link', 'ru': 'Новая ссылка'};
const linkTitleContent = { 'en': 'Links', 'ru':'Ссылки'};
const langSubtitleContent = { 'en': 'Language', 'ru':'Язык'};
const backgroundSubtitleContent = { 'en': 'Background images', 'ru':'Фоновые изображения'};
const blocksSubtitleContent = { 'en': 'Show', 'ru':'Отображать'};
const blockGreetingContent = { 'en': 'Greeting', 'ru':'Приветствие'};
const blockTimeContent = { 'en': 'Time', 'ru':'Время'};
const blockDateContent = { 'en': 'Date', 'ru':'Дата'};
const blockPlayerContent = { 'en': 'Audioplayer', 'ru':'Аудиоплеер'};
const blockLinksContent = { 'en': 'Links', 'ru':'Ссылки'};
const blockQuotesContent = { 'en': 'Quotes', 'ru':'Цитаты'};
const blockWeatherContent = { 'en': 'Weather', 'ru':'Погода'};
const settingsInputPlaceholders = { 'en': 'tag', 'ru':'тэг'};

const linksTitle = document.querySelector('.links-title');
const newLinkButton = document.querySelector('.links-subtitle');
const langSubtitle = document.querySelector('#lang-subtitle');
const backgroundSubtitle = document.querySelector('#background-subtitle');
const blocksSubtitle = document.querySelector('#blocks-subtitle');
const greetingLabel = document.querySelector('#label-greeting');
const timeLabel = document.querySelector('#label-time');
const dateLabel = document.querySelector('#label-date');
const playerLabel = document.querySelector('#label-audioplayer');
const linksLabel = document.querySelector('#label-links');
const quotesLabel = document.querySelector('#label-quotes');
const weatherLabel = document.querySelector('#label-weather');
const settingsInput = document.querySelector('.settings-text-input');

export default function fillTextContent(lang) {
    newLinkButton.textContent = linkSubtitleContent[lang];
    linksTitle.textContent = linkTitleContent[lang];
    langSubtitle.textContent = langSubtitleContent[lang];
    backgroundSubtitle.textContent = backgroundSubtitleContent[lang];
    blocksSubtitle.textContent = blocksSubtitleContent[lang];
    greetingLabel.textContent = blockGreetingContent[lang];
    timeLabel.textContent = blockTimeContent[lang];
    dateLabel.textContent = blockDateContent[lang];
    playerLabel.textContent = blockPlayerContent[lang];
    linksLabel.textContent = blockLinksContent[lang];
    quotesLabel.textContent = blockQuotesContent[lang];
    weatherLabel.textContent = blockWeatherContent[lang];
    settingsInput.placeholder = settingsInputPlaceholders[lang];
}