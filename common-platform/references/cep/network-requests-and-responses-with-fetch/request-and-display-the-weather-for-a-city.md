# Request and display the weather for a city

When the extension loads, it will automatically retrieve and show the weather for New York City.

[Figure: weather panel ps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/weather-panel-ps.png)

In `index.js`, define a `getWeather()` helper method and invoke it immediately. The code comments **#1-8** identify each part:

```javascript
(function getWeather() {
  /* 1) Create an object to contain relevant city data */
  let cityObj = { name: "New York", lat: "40.40", lon: "-73.56" };

  /* 2) Set up the request URL for the Dark Sky API */
  let reqUrl = `https://api.darksky.net/forecast/${darkSkyKey}/${cityObj.lat},${cityObj.lon}`;

  /* 3) Make a request to the URL constructed above */
  fetch(reqUrl)
    .then(function (res) {
      /* 4) If the response is ok, return the Dark Sky JSON response */
      if (res.ok) return res.json();
    })
    .then(function (json) {
      /* 5) Get the current weather slug from the Dark Sky JSON response */
      const currentWeatherSlug = json.currently.icon;

      /* 6) Display the weather information in the panel's HTML DOM */
      const currentWeatherString = `It looks like it\'s ${weatherTypes[currentWeatherSlug]} in ${cityObj.name}.`;
      weatherSummary.textContent = currentWeatherString;

      /* 7) Add weather information to the button dataset for convenient access later */
      applyWeatherButton.dataset.currentWeatherSlug = currentWeatherSlug;
      applyWeatherButton.dataset.currentWeatherString = currentWeatherString;
    })
    .catch(function (err) {
      /* 8) Handle errors */
      weatherSummary.textContent = `We had trouble getting the weather for ${cityObj.name}. Please try again.`;
    });
})();
```

At **#3**, the request is sent with [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch), which Chromium Embedded Framework exposes inside CEP. The returned value is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), so the code continues with `.then()/.catch()` handling.

Step **#6** uses the earlier `weatherTypes` constant to produce the user-readable message.

[Figure: weather panel ps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/weather-panel-ps.png)

On success, the panel UI displays text describing the current weather in New York City. On failure, it displays `"We had trouble getting the weather for New York City. Please try again."`.
