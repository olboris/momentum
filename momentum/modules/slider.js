import {getTimeOfDay} from './greeting.js';

const body = document.getElementsByTagName('body')[0];
export let randomNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSlideNext(bgSettings, tag) {
    if (bgSettings === '1') {
        if (randomNum !== 20) {
            randomNum += 1;
        } else {
            randomNum = 1
        };
        setBg(randomNum);
    } else getLinkToImage(tag);
}

export function getSlidePrev(bgSettings, tag) {
    if (bgSettings === '1') {
        if (randomNum !== 1) {
            randomNum -= 1;
        } else {
            randomNum = 20
        };
        setBg(randomNum);
    } else {
        getLinkToImage(tag);
    };
}

export function setBg(randomNum) {
    let timeOfDay = getTimeOfDay();
    let bgNum = String(randomNum).padStart(2, '0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/olboris/stage1-tasks/assets/images/${timeOfDay.en.slice(5, timeOfDay.en.length)}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }
};

export async function getLinkToImage(tag) {
    try {
      let timeOfDay = getTimeOfDay();
      let tagValue = (String(tag) !== 'null') ? tag : timeOfDay.en.slice(5, timeOfDay.en.length);
      const url = `https://api.unsplash.com/photos/random?query=${tagValue}&client_id=TIc1F-peBWdjXskPknjhG9Zn82Mp_vSmvynA-U0evGY`;
      const res = await fetch(url);
      const data = await res.json();
      const img = new Image();
      img.src = data.urls.regular;
      img.onload = () => {
        body.style.backgroundImage = `url(${data.urls.regular})`;
    }
    }
    catch (err) {
      console.log(err);
      setBg(randomNum);
    }
  }