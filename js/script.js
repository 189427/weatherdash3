var submitBTN = document.querySelector("#submit");
var apiKey = "877b4dcfd9c0317333112e17b9a7bc27";




submitBTN.addEventListener("submit", function () {
  event.preventDefault();
  let userInput = document.querySelector("#city").value;
  console.log(userInput);
  getCoord(userInput);
});

function getCoord() {
  let url = "http api";
}

function futureWeather(lat, lon) {

  var futureWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
  //`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
  $.ajax({
      url: futureWeatherURL,
      method: "GET"
  }).then(function (futureResponse) {
      console.log(futureResponse);
      $("#fiveDay").empty();
      for (let i = 1; i < 6; i++) {
          var cityInfo = {
              date: futureResponse.daily[i].dt,
              icon: futureResponse.daily[i].weather[0].icon,
              temp: futureResponse.daily[i].temp.day,
              wind_speed: futureResponse.daily[i].wind_speed,
              humidity: futureResponse.daily[i].humidity
          };
          var currentDate = moment.unix(cityInfo.date).format("MM/DD/YYYY");
          var weatherIconURL = `<img src="https://openweathermap.org/img/w/${cityInfo.icon}.png" alt="${futureResponse.daily[i].weather[0].main}" />`;
          
          // Display weather forecast for the next five days
          // Future weather information includes weather icon, temperature, wind speed, and humidity
          var futureWeatherCard = $(`
              <div class="pl-3">
              <div class="card pl-3 pt-3 mb-3 bg text-light" style="width: 12rem;>
              <div class="card-body">
              <h5>${currentDate}</h5>
              <p>${weatherIconURL}</p>
              <p>Temp: ${cityInfo.temp} °F</p>
              <p> Wind: ${cityInfo.wind_speed} MPH</p>
              <p>Humidity: ${cityInfo.humidity}\%</p>
          </div>
      </div>
  <div>
`);
          $("#fiveDay").append(futureWeatherCard);
      }
  });
}

api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}