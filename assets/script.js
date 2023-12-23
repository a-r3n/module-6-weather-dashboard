$(document).ready(function() {
    const apiKey = '66cccddbf9df43145a75f72a7901683a';

    $('#search-button').click(function() {
        const city = $('#city-input').val();
        searchCity(city);
    });

    function searchCity(city) {
        // Construct URL for the current weather and forecast
        // Make AJAX call to OpenWeatherAPI
        // On success, call the functions to update the DOM
    }

    function displayCurrentWeather(data) {
        // Create HTML elements and append to #current-weather
    }

    function displayForecast(data) {
        // Create HTML elements and append to #forecast
    }

    function addToHistory(city) {
        // Create search history list item and append to #search-history
    }
    
    // Implement click handler for search history items
});
