const displayController = (() => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <header>
    <form action="#" id="form">
      <div id="input-container">
        <input type="text" placeholder="City" id="input-city" required/>
        <button type="submit" id="submit">
          <i class="fas fa-search" ></i>
        </button>
      </div>
      <p id="invalid-city-text">* Not Found</p>
    </form>
  </header>
  <main>
    <h1 id="city-name"></h1>
    <div id="weather-icon"></div>
    <h3 id="temperature"></h3>
    <p id="weather-text"></p>
    <div id="group-1">
      <p id="humidity"></p>
      <p id="winds"></p>
    </div>
  </main>
  `;

  const conditions = [
    {
      condition: 'Thunderstorm',
      icon: '<i class="fas fa-thunderstorm"></i>',
    },
    {
      condition: 'Drizzle',
      icon: '<i class="fas fa-cloud-rain"></i>',
    },
    {
      condition: 'Rain',
      icon: '<i class="fas fa-cloud-showers-heavy"></i>',
    },
    {
      condition: 'Snow',
      icon: '<i class="fas fa-snowflake"></i>',
    },
    {
      condition: 'Clear',
      icon: '<i class="fas fa-sun"></i>',
    },
    {
      condition: 'Clouds',
      icon: '<i class="fas fa-cloud"></i>',
    },
    {
      condition: 'Mist',
      icon: '<i class="fas fa-cloud-sun"></i>',
    },
  ];

  const inputCity = document.getElementById('input-city');
  const invalidCityText = document.getElementById('invalid-city-text');
  const form = document.getElementById('form');
  const convert = (temp) => {
    const formula = parseInt(((temp - 273.15) * 9) / 5 + 32, 10);
    return formula;
  };

  const populate = (data) => {
    const cityName = document.getElementById('city-name');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const weatherText = document.getElementById('weather-text');
    const humidity = document.getElementById('humidity');
    const winds = document.getElementById('winds');

    cityName.textContent = data.name;
    temperature.textContent = `${convert(data.main.temp)}°`;
    weatherText.textContent = data.weather[0].main;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    winds.textContent = `Winds: ${data.wind.speed} meter/sec`;

    for (let i = 0; i < conditions.length; i += 1) {
      if (conditions[i].condition === data.weather[0].main) {
        weatherIcon.innerHTML = conditions[i].icon;
      }
    }
  };

  // Fetch api data
  async function apiCall() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=8d1c03ca974d24a85e482dd06b1f0a63
      `, { mode: 'cors' },
      );
      if (response.status === 404) {
        invalidCityText.style.display = 'block';
      } else {
        const weatherData = await response.json().then((data) => populate(data));
        invalidCityText.style.display = 'none';
        return weatherData;
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  form.addEventListener('submit', apiCall);
  // Initialize los angeles weather by default
  async function init(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d1c03ca974d24a85e482dd06b1f0a63
      `, { mode: 'cors' },
      );
      const weatherData = await response.json().then((data) => populate(data));
      return weatherData;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  init('lagos');
})();
displayController();