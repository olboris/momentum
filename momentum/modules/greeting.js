const greetingField = document.querySelector('.greeting');
const timesOfDay = [
    {'en':'Good morning', 'ru': 'Доброе утро'},
    {'en': 'Good afternoon', 'ru': 'Добрый день'},
    {'en': 'Good evening', 'ru': 'Добрый вечер'},
    {'en': 'Good night', 'ru': 'Доброй ночи'}
];

const placeholders = { 
    'en': 'Enter name', 
    'ru': 'Введите имя'
};

export function getTimeOfDay(){
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours <12){
        return timesOfDay[0];
    } else if (hours >= 12 && hours <18) {
        return timesOfDay[1];
    } else if (hours >= 18 && hours <24){
        return timesOfDay[2];
    } else {
        return timesOfDay[3];
    }
}

export function showGreeting(lang, name){
    const greeting = getTimeOfDay();
    greetingField.textContent = `${greeting[lang]},`;
    name.placeholder = `[${placeholders[lang]}]`;
}