const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');

export default async function getWeather(c) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${c}&lang=en&appid=cc93cdf81a51fc4664dd4f70d431cf69&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.name, data.wind.speed, data.main.humidity);
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    error.textContent = "";
  }
  catch (err) {
    console.log(err);
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
    error.textContent = "Извините, мы не смогли получить данные о погоде в указанном городе";
  }
  
}