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

eval("const cityDisplay = document.getElementById('location');\nconst temp = document.getElementById('temp');\nconst icon = document.getElementById('icon');\nconst des = document.getElementById('des');\nconst humidity = document.getElementById('humidity');\nconst windspeed = document.getElementById('windspeed');\nconst form = document.querySelector('form');\nconst formInput = document.getElementById('searchbar');\nconst unitBtn = document.getElementById('unit-control');\nconst warning = document.getElementById('warning');\nconst cityName = cityDisplay.innerText.substr(0, cityDisplay.innerText.length - 3);\n\nfunction tempConversion(unit, arg) {\n  return unit === '°C' ? Math.round(arg.main.temp) : Math.round(arg.main.temp * (9 / 5)) + 32;\n}\n\nfunction renderInfo(arg, unit) {\n  cityDisplay.innerText = `${arg.name}, ${arg.sys.country}`;\n  temp.innerText = `${tempConversion(unit, arg)} ${unit}`;\n  des.innerText = arg.weather[0].main;\n  icon.style.background = `url(https://openweathermap.org/img/wn/${arg.weather[0].icon}@2x.png) center no-repeat, linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5))`;\n  windspeed.innerText = `${arg.wind.speed} mph`;\n  humidity.innerText = `${arg.main.humidity} %`;\n}\n\nasync function getWeather(city = 'lagos', unit = '°C') {\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=610141c99f975bba14f72033833cff4e`, { mode: 'cors' });\n    const data = await response.json();\n    renderInfo(data, unit);\n  } catch (err) {\n    warning.classList.add('show');\n    setTimeout(() => {\n      warning.classList.remove('show');\n    }, 1500);\n    renderInfo(cityName, unit);\n  }\n}\n\nwindow.addEventListener('load', () => {\n  getWeather();\n});\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const check = unitBtn.innerText === '°C' ? '°F' : '°C';\n  getWeather(formInput.value, check);\n  formInput.value = '';\n});\nunitBtn.addEventListener('click', () => {\n  const cityName = cityDisplay.innerText.substr(0, cityDisplay.innerText.length - 3);\n  getWeather(cityName, unitBtn.innerText);\n  if (unitBtn.innerText === '°F') {\n    unitBtn.innerText = '°C';\n  } else {\n    unitBtn.innerText = '°F';\n  }\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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