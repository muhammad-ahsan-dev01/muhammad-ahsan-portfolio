const apiKey = "616524839018910cfd6ea2cae0261e73";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

function getWeather(){

    const city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(response => response.json())

    .then(data => {

        document.getElementById("cityName").innerHTML = data.name;

        document.getElementById("temperature").innerHTML =
        "🌡 Temperature : " + data.main.temp + " °C";

        document.getElementById("description").innerHTML =
        "🌤 Weather : " + data.weather[0].description;

        document.getElementById("humidity").innerHTML =
        "💧 Humidity : " + data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        "🌬 Wind : " + data.wind.speed + " km/h";

    })

    .catch(() => {

        alert("City Not Found!");

    });

}