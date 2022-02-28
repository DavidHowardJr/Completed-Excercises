console.log("Fetch API");

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let form = document.querySelector("form");
let query = document.getElementById("query");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let queryCity = query.value;

  // In a url, anything after ? is a query parameter
  // in the format of name=value
  // q
  // Query parameters are seperated by &
  // appid
  let WEATHER_URL =
    `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=bde3380ef6812fed351d3e863eb195d4&units=imperial`;

  // Fetch returns a promise
  fetch(WEATHER_URL)
    .then((response) => {
      // .json Parses the response body to JSON, JavaScript Object Notation
      return response.json();
    })
    .then((data) => {
      console.log(data);
      city.textContent = data.name;
      temp.textContent = data.main.temp + "° F";
    })

    .catch((err) => {
      console.error(err);
      city.textContent = err.message;
    });
});
