
  // will be a nodeList, you need it to be an array,
  // so convert it immediately with Array.from
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    // this will apply parseFloat to every item in the array
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins*60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`%cTotal Video Time… ${hours}hr ${mins}min`, 'background-Color: red; color: white; font-size: 1.25rem; padding: 0.25rem 0.5rem; margin: 1.5rem 0; border-radius: 6px;');

