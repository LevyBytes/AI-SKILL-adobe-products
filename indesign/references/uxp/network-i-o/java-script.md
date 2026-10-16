# JavaScript

```js
async function foo() {
  // Get weather forecast for San Jose
  try {
    const response = await fetch(`https://api.weather.gov/gridpoints/MTR/99,82/forecast`);
    if (!response.ok) {
      throw new Error(`HTTP error fetching weather station; status: ${response.status}`);
    }
    const responseJson = await response.json();
    console.log(`Forecast ${responseJson.properties.periods[0].detailedForecast}`);
  } catch (e) {
    console.error(e);
  }
}
```

### JavaScript

```js
function foo() {
  // Get weather forecast for San Jose via XHR
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.weather.gov/gridpoints/MTR/99,82/forecast");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    const responseObj = xhr.response;
    console.log(`Forecast ${responseObj.properties.periods[0].detailedForecast}`);
  };
}
```

### JavaScript

```js
let socket;
async function foo() {
  // Establish web socket connection
  if (!!socket) {
    console.log("Already connected; disconnecting first.");
    await socket.close();
    return;
  }

  socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

  socket.onopen = function (e) {
    console.log("Connection established");
    // sending data to server
    socket.send("My name is John");
  };

  socket.onmessage = function (event) {
    alert(`Data received from server: ${event.data}`);
  };

  socket.onclose = function (event) {
    console.log("Connection closed");
    socket = null;
  };

  socket.onerror = function (error) {
    console.error(`Connection error ${error}`);
  };
}
```
