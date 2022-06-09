let weather = {
  apiKey: "75e95cad7edda93c4ead6a4271fc763c",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { country } = data.sys;
    const { lon, lat } = data.coord;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").innerText =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "℉";
    document.querySelector(".location").innerText =
      "Location: " + name + ", " + country + " [" + lon + ", " + lat + "]";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
  },
  search: function (city) {
    this.fetchWeather(document.querySelector(city).value);
  },
};

document.querySelector(".input").addEventListener("keyup", function (event) {
  if (event.key == "enter") {
    weather.search();
  }
});

function promptWeather() {
  if (command.innerHTML.toLowerCase() == "weather" + city) {
    addLine(city, "color2", 0);
   }
}
