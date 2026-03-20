const apiKey = "34a4e6c080a8d30f79dbcdec086d880e";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weatherResult").innerHTML = "City not found";
            return;
        }

        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = 
            <><h3>${city}</h3><p>🌡️ Temp: ${temp}°C</p><p>☁️ Weather: ${weather}</p><p>💧 Humidity: ${humidity}%</p></>
        ;
    } catch (error) {
        console.log(error);
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
    }
}