const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // filter out matches to search text
    const regex = new RegExp(wordToMatch, 'gi'); // global, case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}

// format population numbers
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// compile and show match list
function displayMatches() {
 
  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map(place => {
    // find actual search text
    const regex = new RegExp(this.value, 'gi');
    // replace actual search text in data values with highlighted version
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="name">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);