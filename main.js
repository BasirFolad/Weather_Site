const apiKey = "60c5d32af585c2cba7159e8b6f3205a6"

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById('weatherResult').innerHTML =
            `The weather in ${city} is ${weatherDescription} with a temperature of ${temperature}°C.`
        })
        .catch (error => {
            document.getElementById('weatherResult').innerHTML = 'city not found!'        })
})