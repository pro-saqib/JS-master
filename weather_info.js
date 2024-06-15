const apiKey = 'your_api_key_here';
const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherDisplay = document.getElementById('weather-display');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city !== '') {
        getWeather(city);
        cityInput.value = '';
    }
});

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    weatherDisplay.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
