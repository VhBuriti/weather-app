
let weather = {
    apiKey: "389e8564e16aeffa043fffe8a9b38655",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey)

            .then((response) => {
                if (!response.ok) {
                    alert("No weather found!");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {name} = data;
        const {country} = data.sys
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {temp_max, temp_min} = data.main;

        console.log(name, description, icon, temp, humidity, speed, country)

        alert("Loading informations...")
        document.getElementById("city_name").innerText = `${name}, ${country}`
        document.getElementById("temp").innerText = `${temp}°C`
        document.getElementById("max_temp").innerText = `${temp_max}°C`
        document.getElementById("min_temp").innerText = `${temp_min}°C`
        document.getElementById("climate").innerText = description;
        document.getElementById("humidity").innerText = `Humidity: ${humidity}%`
        document.getElementById("wind_speed").innerText = `Wind Speed: ${speed}km/h`
        document.getElementById("icon").src = `http://openweathermap.org/img/wn/${icon}.png`
        document.body.classList.add("with_image")
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`
    },
    search: function () {
        this.fetchWeather(document.getElementById("search_input").value);
    }
};

document.querySelector(".btn").addEventListener("click", function () {
    weather.search();
});

document.getElementById("search_input").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});




