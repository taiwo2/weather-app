var cityDisplay = document.getElementById("location");
var temp = document.getElementById("temp");
var icon = document.getElementById("icon");
var des = document.getElementById("des");
var humidity = document.getElementById("humidity");
var windspeed = document.getElementById("windspeed");
var form = document.querySelector("form");
var formInput = document.getElementById("searchbar");
var unitBtn = document.getElementById("unit-control");
var warning = document.getElementById("warning");

var cityName =  cityDisplay.innerText.substr(0, cityDisplay.innerText.length-3);

var windUnit;

async function getWeather(city="mumbai", unit="°C"){
  try{
      var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=610141c99f975bba14f72033833cff4e`, {mode: "cors"});
      var data = await response.json();
      renderInfo(data, unit);
  } catch(err){
      warning.classList.add("show")
      setTimeout(()=>{
          warning.classList.remove("show");
      }, 1500)
      renderInfo(cityName, unit)
  }
    
}

window.addEventListener("load", ()=>{
    getWeather();
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    var check = unitBtn.innerText=="°C"? "°F": "°C";
    getWeather(formInput.value, check);
    formInput.value = "";
})
unitBtn.addEventListener("click", ()=>{
    cityName =  cityDisplay.innerText.substr(0, cityDisplay.innerText.length-3);
    getWeather(cityName, unitBtn.innerText)
    if(unitBtn.innerText == "°F"){
        unitBtn.innerText = "°C";
    } else{
        unitBtn.innerText = "°F";
    }
})

function renderInfo(arg, unit){
    cityDisplay.innerText = `${arg.name}, ${arg.sys.country}`; 
    temp.innerText = `${tempConversion(unit, arg)} ${unit}`;
    des.innerText = arg.weather[0].main;
    icon.style.background = `url(https://openweathermap.org/img/wn/${arg.weather[0].icon}@2x.png) center no-repeat, linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5))`;
    windspeed.innerText = arg.wind.speed + " mph";
    humidity.innerText = arg.main.humidity + " %";
}

function tempConversion(unit, arg){
    return unit=="°C"? Math.round(arg.main.temp) : Math.round(arg.main.temp * (9/5)) + 32;
}
