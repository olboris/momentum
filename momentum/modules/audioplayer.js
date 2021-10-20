import playList from "./playList.js";

const audio = document.querySelector('.audio');
const playListContainer = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const playPrevButton = document.querySelector('.play-prev');

let isPlay = false;
let playNum = 0;
let index = 0;
console.log(playList[playNum])

playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    li.id = index;
    playListContainer.append(li);
    if (el === playList[playNum]) {
        li.classList.add('item-active');
    };
    index++;
  });

function playAudio() {
    if(!isPlay) {
        audio.src = playList[playNum].src
        audio.currentTime = 0;
        audio.play();
        playButton.classList.add('pause');
        isPlay = true;
    } else {
        audio.pause();
        console.log("!!!");
        playButton.classList.remove('pause');
        isPlay = false;
    }
}

export function playNext() {
    if (playNum !== playList.length-1) {
        playNum += 1;
        document.getElementById(playNum-1).classList.remove('item-active');
    } else {
        playNum = 0;
        document.getElementById(playList.length-1).classList.remove('item-active');
    };
    isPlay = !isPlay ? true : false;
    playAudio();
    document.getElementById(playNum).classList.add('item-active');
}

export function playPrev() {
    if (playNum !== 0) {
        playNum -= 1;
        document.getElementById(playNum+1).classList.remove('item-active');
    } else {
        playNum = playList.length-1;
        document.getElementById(0).classList.remove('item-active');
    };
    isPlay = !isPlay ? true : false;
    playAudio();
    document.getElementById(playNum).classList.add('item-active');
}

playButton.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);