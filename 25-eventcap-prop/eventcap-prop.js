const divs = document.querySelectorAll('div')
const btn = document.querySelector('button')

function logText(e) {
  console.log(this.classList.value)
  e.stopPropagation() // stop event bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
    // 3rd param = options
    // capture: when true: bubble up instead of down
  capture: false
}))

  // once: will listen for a click, then unbind the listener
btn.addEventListener('click', logText, {once: true})