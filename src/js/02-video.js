import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeStop, 1000));

function timeStop(timeupdate) {
  let seconds = timeupdate.seconds;
  localStorage.setItem('videoplayer-current-time', seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
