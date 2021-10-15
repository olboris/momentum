const greetingField = document.querySelector('.greeting');
const timesOfDay = [
    'morning',
    'afternoon',
    'evening',
    'night'
];

function getTimeOfDay(){
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

export default function showGreeting(){
    const greeting = getTimeOfDay();
    greetingField.textContent = `Good ${greeting},`;
}