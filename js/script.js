import { MY_API_TOKEN } from './config.js';

const searchButton = document.querySelector('.search__button');
searchButton.addEventListener('click', fetchWeather);

const searchInput = document.querySelector('.search__bar');
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && searchInput.value !== '') fetchWeather();
});

async function fetchWeather() {
  if (searchInput.value === '') return;
  try {
    const searchedLocation = document.querySelector('.search__bar').value;
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchedLocation +
        '&appid=' +
        MY_API_TOKEN +
        '&units=metric'
    );
    const data = await response.json();
    if (data.cod !== '404') {
      // Get the elements to change
      const location = document.querySelector('.weather__location');
      const temperature = document.querySelector('.weather__temperature');
      const description = document.querySelector('.weather__description');
      const wind = document.querySelector('.weather__wind');
      const humidity = document.querySelector('.weather__humidity');
      // Update the information displayed
      changeBackground(data.weather[0].main);
      console.log(data.weather[0].main);
      location.innerText = data.name;
      temperature.innerText = Math.round(data.main.temp) + ' ºC';
      description.innerText = data.weather[0].main;
      wind.innerText = 'Wind speed: ' + data.wind.speed + ' km/h';
      humidity.innerText = 'Humidity: ' + data.main.humidity + '%';
    }
  } catch (err) {
    console.log(
      'Something went wrong while fetching the current weather data...',
      err
    );
  }
}

function changeBackground(weatherCondition) {
  switch (weatherCondition) {
    case 'Thunderstorm':
      body.style.backgroundImage =
        "url('/images/backgrounds/thunderstorm.jpg');";
      break;
    case 'Clear':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/clear.jpg')";
      break;
    case 'Clouds':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/clouds.jpg')";
      break;
    case 'Drizzle':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/drizzle.jpg')";
      break;
    case 'Rain':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/rain.jpg')";
      break;
    case 'Snow':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/snow.jpg')";
      break;
    case 'Mist':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/fog-mist.jpg')";
      break;
    case 'Fog':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/fog-mist.jpg')";
      break;
    case 'Ash':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/ash.jpg')";
      break;
    case 'Smoke':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/smoke.jpg')";
      break;
    case 'Haze':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/haze.jpg')";
      break;
    case 'Tornado':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/tornado.jpg')";
      break;
    case 'Dust':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/dust-sand.jpg')";
      break;
    case 'Sand':
      document.body.style.backgroundImage =
        "url('/images/backgrounds/dust-sand.jpg')";
      break;
  }
}

searchInput.value = 'London';
fetchWeather();
searchInput.value = '';
