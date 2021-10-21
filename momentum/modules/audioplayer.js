import playList from "./playList.js";

const audio = document.querySelector('.audio');
const playListContainer = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const playPrevButton = document.querySelector('.play-prev');
const songTitle = document.querySelector('.audio-title');
const currentSongDuration = document.querySelector('.time-length');
const progressBar = document.querySelector('.progress-bar');

let isPlay = false;
let playNum = 0;
let index = 0;

songTitle.textContent = playList[playNum].title;
currentSongDuration.textContent = playList[playNum].duration;
progressBar.max = playList[playNum].duration;
audio.src = playList[playNum].src;
songTitle.textContent = playList[playNum].title;

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
        //audio.src = playList[playNum].src;
        //audio.currentTime = progressBar.value;
        // songTitle.textContent = playList[playNum].title;
        // currentSongDuration.textContent = playList[playNum].duration;
        audio.play();
        playButton.classList.add('pause');
        document.querySelector('.item-active').classList.add('item-active-pause');
        isPlay = true;
    } else {
        audio.pause();
        playButton.classList.remove('pause');
        document.querySelector('.item-active').classList.remove('item-active-pause');
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
    updateSong();
    playAudio();
}

export function playPrev() {
    if (playNum !== 0) {
        playNum -= 1;
        document.getElementById(playNum+1).classList.remove('item-active');
    } else {
        playNum = playList.length-1;
        document.getElementById(0).classList.remove('item-active');
    };
    updateSong();
    playAudio();
}

function updateSong() {
    isPlay = !isPlay ? true : false;
    audio.src = playList[playNum].src;
    songTitle.textContent = playList[playNum].title;
    currentSongDuration.textContent = playList[playNum].duration;
    audio.currentTime = 0;
    document.getElementById(playNum).classList.add('item-active');
    updateProgressValue();
}

function updateProgressValue() {
    const percent = (audio.currentTime / formatDuration(playList[playNum].duration)) * 100;
    progressBar.value = percent;
    progressBar.style.background = `linear-gradient(to right, #C5B358 0%, #C5B358 ${percent}%, #fff ${percent}%, #fff 100%)`;
    document.querySelector('.time-current').innerHTML = (formatTime(Math.floor(audio.currentTime)));
};

function formatDuration(duration) {
    let arrTime = duration.split(':');
    let sec = +arrTime[0]*60 + +arrTime[1];
    return sec;
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

function handleRangeUpdate() {
    audio.currentTime = this.value / 100 * formatDuration(playList[playNum].duration);
    this.style.background = `linear-gradient(to right, #C5B358 0%, #C5B358 ${this.value}%, #fff ${this.value}%, #fff 100%)`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * formatDuration(playList[playNum].duration);
    audio.currentTime = scrubTime;
}

audio.addEventListener('ended', playNext);
audio.addEventListener('timeupdate', updateProgressValue);
playButton.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);
progressBar.addEventListener('change', handleRangeUpdate);
progressBar.addEventListener('mousemove', handleRangeUpdate);
progressBar.addEventListener('loadeddata', handleRangeUpdate);
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
//progressBar.addEventListener('mousedown', () => mousedown = true);
//progressBar.addEventListener('mouseup', () => mousedown = false);