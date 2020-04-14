const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  // some browsers trigger "flex-grow", some 
  // trigger "flex", so cover both bases
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');   
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));