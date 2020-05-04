  // aliases
const $ = document.querySelector.bind(document);

  // band data
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  // take out articles from the beginning of the band name
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

  // only uses strip in the if statement, so it 
  // doesn't affect the actual array
const sortedBands = bands.sort((a,b) => (strip(a) > strip(b)) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');