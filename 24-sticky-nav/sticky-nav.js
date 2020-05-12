const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
      // paddingTop: need to offset the space the navbar 
      // formerly took up or the ui will "jump", best to 
      // do it programatically rather than in css since 
      // we might not know how high the navbar actually is
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);