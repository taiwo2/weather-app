/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const displayController = (() => {\n  \n\n  const inputCity = document.getElementById('input-city');\n  const invalidCityText = document.getElementById('invalid-city-text');\n  const form = document.getElementById('form');\n\n  const convert = temp => {\n    const formula = parseInt(((temp - 273.15) * 9) / 5 + 32);\n    return formula;\n  };\n\n  // Fetch api data\n  async function apiCall() {\n    try {\n      let response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=8d1c03ca974d24a85e482dd06b1f0a63\n      `,\n        { mode: 'cors' }\n      );\n      if (response.status === 404) {\n        invalidCityText.style.display = 'block';\n      } else {\n        let weatherData = await response.json().then(data => populate(data));\n        invalidCityText.style.display = 'none';\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  const conditions = [\n    {\n      condition: 'Thunderstorm',\n      icon: '<i class=\"fas fa-thunderstorm\"></i>',\n    },\n    {\n      condition: 'Drizzle',\n      icon: '<i class=\"fas fa-cloud-rain\"></i>',\n    },\n    {\n      condition: 'Rain',\n      icon: '<i class=\"fas fa-cloud-showers-heavy\"></i>',\n    },\n    {\n      condition: 'Snow',\n      icon: '<i class=\"fas fa-snowflake\"></i>',\n    },\n    {\n      condition: 'Clear',\n      icon: '<i class=\"fas fa-sun\"></i>',\n    },\n    {\n      condition: 'Clouds',\n      icon: '<i class=\"fas fa-cloud\"></i>',\n    },\n    {\n      condition: 'Mist',\n      icon: '<i class=\"fas fa-cloud-sun\"></i>',\n    },\n  ];\n\n  const populate = data => {\n    const cityName = document.getElementById('city-name');\n    const weatherIcon = document.getElementById('weather-icon');\n    const temperature = document.getElementById('temperature');\n    const weatherText = document.getElementById('weather-text');\n    const humidity = document.getElementById('humidity');\n    const winds = document.getElementById('winds');\n\n    cityName.textContent = data.name;\n    temperature.textContent = `${convert(data.main.temp)}°`;\n    weatherText.textContent = data.weather[0].main;\n    humidity.textContent = `Humidity: ${data.main.humidity}%`;\n    winds.textContent = `Winds: ${data.wind.speed} meter/sec`;\n\n    for (let i = 0; i < conditions.length; i++) {\n      if (conditions[i].condition === data.weather[0].main) {\n        weatherIcon.innerHTML = conditions[i].icon;\n      }\n    }\n  };\n\n  form.addEventListener('submit', apiCall);\n\n  // Initialize los angeles weather by default\n  async function init(city) {\n    try {\n      let response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d1c03ca974d24a85e482dd06b1f0a63\n      `,\n        { mode: 'cors' }\n      );\n      let weatherData = await response.json().then(data => populate(data));\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  init('los angeles');\n})();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;