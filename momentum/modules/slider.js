import {getTimeOfDay} from './greeting.js';

const body = document.getElementsByTagName('body')[0];
export let randomNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSlideNext() {
    if (randomNum !== 20) {
        randomNum += 1;
    } else {
        randomNum = 1
    };
    setBg(randomNum);
}

export function getSlidePrev() {
    if (randomNum !== 1) {
        randomNum -= 1;
    } else {
        randomNum = 20
    };
    setBg(randomNum);
}

export function setBg(randomNum) {
    let timeOfDay = getTimeOfDay();
    let bgNum = String(randomNum).padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/olboris/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }
}