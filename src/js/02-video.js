import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const TIME_OUT = 500;

const updateSecond = data => {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};
player.on('timeupdate', throttle(updateSecond, TIME_OUT));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime || 0);
