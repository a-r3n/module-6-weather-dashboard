document.getElementById('search-button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    if (city) {
        searchCity(city);
    }
});

function searchCity(city) {
    getWeather(city);
    getForecast(city);
    addToSearchHistory(city);
    displaySearchHistory();
}

function addToSearchHistory(city) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
}

function displaySearchHistory() {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    let historyList = document.getElementById('search-history');
    historyList.innerHTML = '';
    history.forEach(city => {
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'city-item');
        listItem.textContent = city;
        listItem.onclick = () => searchCity(city);
        historyList.appendChild(listItem);
    });
}

document.getElementById('search-button').addEventListener('click', function() {
    var city = document.getElementById('city-input').value;
    getWeather(city);
    getForecast(city);
});

function getWeather(city) {
    var apiKey = '66cccddbf9df43145a75f72a7901683a';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather: ', error);
            alert('Error fetching current weather data.');
        });
}

function getForecast(city) {
    var apiKey = '66cccddbf9df43145a75f72a7901683a';
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            console.error('Error fetching forecast: ', error);
            alert('Error fetching forecast data.');
        });
}

function displayWeather(data) {
    var currentWeatherDiv = document.getElementById('current-weather');
    currentWeatherDiv.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">${data.name} Current Weather</h4>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
        </div>`;
}

function displayForecast(data) {
    var forecastDiv = document.getElementById('forecast');
    var forecastHTML = `
        <div class="card-body">
            <h5 class="card-title">5-Day Forecast:</h5>
            <div class="d-flex flex-row justify-content-between">`;

    for (let i = 0; i < data.list.length; i += 8) { // Loop through the forecast at 8 intervals (every 24 hours)
        var dayData = data.list[i];
        forecastHTML += `
            <div class="forecast-card">
                <h6>${new Date(dayData.dt_txt).toLocaleDateString()}</h6>
                <p>Temp: ${dayData.main.temp} °C</p>
                <p>Humidity: ${dayData.main.humidity}%</p>
                <p>${dayData.weather[0].main} (${dayData.weather[0].description})</p>
            </div>`;
    }

    forecastHTML += `</div></div>`;
    forecastDiv.innerHTML = forecastHTML;
}

// Call displaySearchHistory on page load to show the history
displaySearchHistory();
