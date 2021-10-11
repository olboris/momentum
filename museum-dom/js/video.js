const player = document.querySelector('.video__player-container');
const video = player.querySelector('.video__poster');
const progressBars = player.querySelectorAll('.video__range');
const videoRange = player.querySelector('.video__range_type_progress-bar')
const volumeRange = player.querySelector('.video__range_type_volume')
const toggle = player.querySelector('.toggle');
const mainPlayButton = player.querySelector('.video__main-play');
const volumeButton = player.querySelector('.video__volume-button');
const fullscreenButton = player.querySelector('.video__full-screen');

function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function mutedVolume(){
  if (video.muted) {
    volumeButton.classList.remove('video__volume-button_muted');
    video.muted = false;
  } else {
    volumeButton.classList.add('video__volume-button_muted');
    video.muted = true;
  }  
}

function slowVideo(){
  video.playbackRate = 0,5;
}

function speedUpVideo(){
  video.playbackRate = 3.0;
}

function fullscreenMode(){
  if (!document.fullscreenElement) {
    fullscreenButton.classList.add('video__full-screen_exit');
    player.requestFullscreen();
  } else {
    fullscreenButton.classList.remove('video__full-screen_exit');
    document.exitFullscreen();
  }  
}

function updateButton(){
  if (video.paused) {
    toggle.classList.remove('video__range-play_disabled');
    mainPlayButton.classList.remove('video__main-play_disabled');
  } else {
    toggle.classList.add('video__range-play_disabled');
    mainPlayButton.classList.add('video__main-play_disabled');
  }  
}

function handleRangeUpdate(){
  video[this.name] = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #C4C4C4 ${this.value}%, #C4C4C4 100%)`;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  videoRange.value = percent;
  videoRange.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`
}

function handleVolumeProgress() {
  if (video.muted || video.volume === 0) {
    volumeRange.value = 0;
    volumeRange.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4 100%)`;
    volumeButton.classList.add('video__volume-button_muted');
  } else {
    volumeButton.classList.remove('video__volume-button_muted');
    volumeRange.value = video.volume * 100;
    volumeRange.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeRange.value}%, #C4C4C4 ${volumeRange.value}%, #C4C4C4 100%)`;

  }
}

function scrub(e) {
  const scrubTime = (e.offsetX / videoRange.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function scrubVolume(e) {
  const scrubVol = (e.offsetX / volumeRange.offsetWidth);
  video.volume = scrubVol;
}

let mousedown = false;
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('play', handleVolumeProgress);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('volumechange', handleVolumeProgress);
toggle.addEventListener('click', togglePlay);
mainPlayButton.addEventListener('click', togglePlay);
videoRange.addEventListener('click', scrub);
videoRange.addEventListener('mousemove', (e) => mousedown && scrub(e));
videoRange.addEventListener('mousedown', () => mousedown = true);
videoRange.addEventListener('mouseup', () => mousedown = false);
volumeRange.addEventListener('click', scrubVolume);
volumeRange.addEventListener('mousemove', (e) => mousedown && scrubVolume(e));
volumeRange.addEventListener('mousedown', () => mousedown = true);
volumeRange.addEventListener('mouseup', () => mousedown = false);
volumeButton.addEventListener('click', mutedVolume);
fullscreenButton.addEventListener('click', fullscreenMode);
progressBars.forEach(bar => bar.addEventListener('change', handleRangeUpdate));
progressBars.forEach(bar => bar.addEventListener('mousemove', handleRangeUpdate));


progressBars.forEach(bar => bar.addEventListener('loadeddata', handleRangeUpdate));
addEventListener('keydown', function(e) {
  if (e.keyCode === 32) {
    e.preventDefault();
    togglePlay();
  };
  if (e.keyCode === 77) {
    mutedVolume();
  };
  if (e.keyCode === 70) {
    fullscreenMode();
  };
  if (e.shiftKey && e.keyCode === 188) {
    video.playbackRate= video.playbackRate + 0.5;
    console.log(video.playbackRate);
  };
  if (e.shiftKey && e.keyCode === 190) {
    video.playbackRate = video.playbackRate - 0.5;
    console.log(video.playbackRate);
  };
});