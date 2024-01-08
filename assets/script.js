document.getElementById('search-button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    getWeather(city);
});

function getWeather(city) {
    var apiKey = '66cccddbf9df43145a75f72a7901683a';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            alert('Error fetching weather data.');
        });
}

function displayWeather(data) {
    var currentWeatherDiv = document.getElementById('current-weather');
    currentWeatherDiv.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">${data.name} Weather</h4>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
        </div>`;
}

// Optional: Implement search history and 5-day forecast functionality
