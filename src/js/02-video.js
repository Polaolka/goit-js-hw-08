import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const updateSecond = (data) => {localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
console.log(data.seconds);}
player.on('timeupdate',  throttle(updateSecond, 500)
);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

console.log(currentTime);
player.setCurrentTime(currentTime || 0).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});
