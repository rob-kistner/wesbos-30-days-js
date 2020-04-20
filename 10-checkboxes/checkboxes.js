const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // check if shift key down AND make sure they're
  // actually checking the box (not unchecking)
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));