const cityDisplay = document.getElementById('location');
const temp = document.getElementById('temp');
const icon = document.getElementById('icon');
const des = document.getElementById('des');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const form = document.querySelector('form');
const formInput = document.getElementById('searchbar');
const unitBtn = document.getElementById('unit-control');
const warning = document.getElementById('warning');
const cityName = cityDisplay.innerText.substr(0, cityDisplay.innerText.length - 3);

async function getWeather(city = 'lagos', unit = '°C') {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=610141c99f975bba14f72033833cff4e`, { mode: 'cors' });
    const data = await response.json();
    renderInfo(data, unit);
  } catch (err) {
    warning.classList.add('show');
    setTimeout(() => {
    warning.classList.remove('show');
    }, 1500);
    renderInfo(cityName, unit);
  }
}

window.addEventListener('load', () => {
  getWeather();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const check = unitBtn.innerText === '°C' ? '°F': '°C';
  getWeather(formInput.value, check);
  formInput.value = '';
});
unitBtn.addEventListener('click', () => {
  cityName = cityDisplay.innerText.substr(0, cityDisplay.innerText.length - 3);
  getWeather(cityName, unitBtn.innerText);
  if (unitBtn.innerText === '°F') {
    unitBtn.innerText = '°C';
  } else {
    unitBtn.innerText = '°F';
  }
});

function renderInfo(arg, unit) {
  cityDisplay.innerText = `${arg.name}, ${arg.sys.country}`;
  temp.innerText = `${tempConversion(unit, arg)} ${unit}`;
  des.innerText = arg.weather[0].main;
  icon.style.background = `url(https://openweathermap.org/img/wn/${arg.weather[0].icon}@2x.png) center no-repeat, linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5))`;
  windspeed.innerText = `${arg.wind.speed} mph`;
  humidity.innerText = `${arg.main.humidity} %`;
}

function tempConversion(unit, arg) {
  return unit=='°C' ? Math.round(arg.main.temp) : Math.round(arg.main.temp * (9 / 5)) + 32;
}
