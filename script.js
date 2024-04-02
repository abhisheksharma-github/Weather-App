const ApiKey = "4122b5d9c6172c2eb48ab375860300b3";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img"); 

async function getWeather(city) {
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) - 273 + "°C";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    } else {
        weatherIcon.src = "images/default.png";
    }


    const temperature = Math.round(data.main.temp) - 273;
    if (temperature < 10) {
    
        weatherIcon.src = "images/snow.png";
    } else if (temperature > 30) {
      
        weatherIcon.src = "images/clear.png";
    }
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});
