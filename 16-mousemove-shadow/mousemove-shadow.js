const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; // 100px max distance of shadow from object, 50 to -50

function shadow(e) {
    // destructure hero.width & hero.height
  const { offsetWidth: width, offsetHeight: height } = hero;
    // same as e.offsetX & e.offsetY
  let { offsetX: x, offsetY: y } = e;

  // this = div.hero
  // e.target = the thing that it triggered on...
  // see effect by uncommenting
  // console.log(this, e.target);
  
  
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // go to 50 & -50
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // console.log(xWalk, yWalk);
  
  // regular shadow
  // text.style.textShadow = `
  //   ${xWalk}px ${yWalk}px 3px rgba(0,0,0,0.2)
  // `;

  // psychodelic
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 2px rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 2px rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk* -1}px 2px rgba(255,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 2px rgba(0,255,128,0.7)
  `;

}

hero.addEventListener('mousemove', shadow);