$(document).ready(function () {
    $("#search-form").submit(function (event) {
        event.preventDefault();
        
        // Get the city input value
        var city = $("#cityInput").val().trim();

        if (city !== "") {
            // Use the OpenWeatherMap API endpoint for current weather data
            var apiKey = "66cccddbf9df43145a75f72a7901683a";
            var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

            // Make the AJAX request to fetch current weather data
            $.ajax({
                url: apiUrl,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    // Handle the success response and update the UI
                    console.log(data);
                    // Update the UI with the current weather data
                    updateCurrentWeather(data);
                },
                error: function (error) {
                    // Handle the error response
                    console.error("Error fetching weather data:", error);
                }
            });

            // Use the OpenWeatherMap API endpoint for 5-day forecast data
            var forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

            // Make the AJAX request to fetch 5-day forecast data
            $.ajax({
                url: forecastApiUrl,
                method: "GET",
                dataType: "json",
                success: function (forecastData) {
                    // Handle the success response and update the UI
                    console.log(forecastData);
                    // Update the UI with the 5-day forecast data
                    updateForecast(forecastData);
                },
                error: function (error) {
                    // Handle the error response
                    console.error("Error fetching forecast data:", error);
                }
            });

            // Add the city to the search history
            addToSearchHistory(city);
        }
    });

    // Function to update the UI with current weather data
    function updateCurrentWeather(data) {
        // Implement the logic to update the current weather section of the UI
    }

    // Function to update the UI with 5-day forecast data
    function updateForecast(forecastData) {
        // Implement the logic to update the forecast section of the UI
    }

    // Function to add a city to the search history
    function addToSearchHistory(city) {
        // Implement the logic to add the city to the search history section of the UI
    }
});
