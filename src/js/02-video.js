import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player')
const player = new Player(video);
const localItems = {
    time: "videoplayer-current-time"
}

function timeUpdate(item) {
    const seconds = item.seconds;
    const localSeconds = JSON.stringify(seconds) ?? [];
    localStorage.setItem(localItems.time, localSeconds);
}

const currentTime = localStorage.getItem(localItems.time);

player.on('timeupdate', throttle(timeUpdate, 1000));
player.setCurrentTime(currentTime || 0);
