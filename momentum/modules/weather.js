const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');
const weatherOptions = [
  {'en': 'Wind speed', 'ru': 'Скорость ветра'},
  {'en': 'Humidity', 'ru': 'Влажность'},
  {'en': 'm/s', 'ru': 'м/с'}
]

export default async function getWeather(c, lang) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${c}&lang=${lang}&appid=cc93cdf81a51fc4664dd4f70d431cf69&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${weatherOptions[0][lang]}: ${data.wind.speed} ${weatherOptions[2][lang]}`;
    humidity.textContent = `${weatherOptions[1][lang]}: ${data.main.humidity}%`;
    error.textContent = "";
  }
  catch (err) {
    console.log(err);
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
    error.textContent = "Invalid city name. Please, try again";
  }
  
}