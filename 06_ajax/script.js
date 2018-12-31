const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
let places;

input.addEventListener('change', filterCities);
input.addEventListener('keyup', filterCities);

fetch(endpoint)
  .then(response => {
    let data;

    if (response.status === 200) {
      data = response.json();
    } else {
      data = Promise.reject('status is not 200');
    }
    return data;
  })
  .then(data => places = data)
  .catch(error => console.log(error));

function filterCities(event) {
  const searchText = event.target.value
  const regex = new RegExp(searchText, 'gi');
  const filteredCities = places.filter(place => place.city.match(regex) || place.state.match(regex));

  addSuggestionsToInput(filteredCities);
}

function addSuggestionsToInput(array) {
  let suggestions = document.querySelector('.suggestions');
  let html = '';

  array.forEach(place => {
    const regex = new RegExp(input.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${input.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${input.value}</span>`);

    html += `<li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${place.population}</span>
            </li>`;
  });

  suggestions.innerHTML = html;
}
