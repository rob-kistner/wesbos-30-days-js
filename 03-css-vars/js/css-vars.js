const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // this.dataset will retrieve all `data-` tags
  // in the html element as an object. `sizing` pulls
  // out `data-sizing`.
  const suffix = this.dataset.sizing || '';
  // this.name will retrieve the slider/picker name
  // which shares the name with the css variable values
  // thus allowing us to set the variable value document-wide
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach( input => input.addEventListener('change', handleUpdate));
inputs.forEach( input => input.addEventListener('mousemove', handleUpdate));