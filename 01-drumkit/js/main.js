function playSound(e) {
  // capture audio tag and key pressed
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  // ignore if not a trigger key
  if (!audio) return;
  
  // play it, rewind if the sound isn't
  // done playing yet
  audio.currentTime = 0;
  audio.play();
  
  // animate the button pressed
  key.classList.add('playing')
}

function removeTransition(e) {
  // skip if it's not a transform
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound)

// remove transition class from key on
// transition end
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
