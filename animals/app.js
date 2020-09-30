
var blup = document.querySelector('.blup');

function setProperty(duration) {
  blup.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime() {
  var animationDuration = Math.random();
  setProperty(animationDuration);
}

setInterval(changeAnimationTime, 1000);
