// Last edited by: Julia Caro
// Last edited on: May 23, 2024

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return; // stops the function from running altogether
  }

  audio.currentTime = 0; // rewinds an already playing audio to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return; // skip the button if the property name isn't transform
  }

  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);