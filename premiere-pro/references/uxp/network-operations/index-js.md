# index.js

```js
// Get weather forecast for San Jose â˜€ï¸
async function getForecast() {
  try {
    const response = await fetch("https://api.weather.gov/gridpoints/MTR/99,82/forecast");

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json(); // ðŸ‘ˆ parse the response as JSON
    console.log(`Forecast: ${data.properties.periods[0].detailedForecast}`);
  } catch (err) {
    console.error("âŒ Failed to fetch forecast:", err);
  }
}
```

### index.js

```js
function getForecastWithXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.weather.gov/gridpoints/MTR/99,82/forecast");
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(`Forecast: ${xhr.response.properties.periods[0].detailedForecast}`);
    } else {
      console.error(`XHR failed with status ${xhr.status}`);
    }
  };

  xhr.onerror = () => console.error("Network error occurred");
  xhr.send();
}
```

### index.js

```js
let socket;

async function connectToServer() {
  try {
    if (socket) {
      console.log("ðŸ”Œ Disconnecting existing socket...");
      socket.close();
      socket = null;
      return;
    }

    socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

    socket.onopen = () => {
      console.log("âœ… WebSocket connection established");
      socket.send("Hello from Premiere plugin!");
    };

    socket.onmessage = (event) => {
      console.log(`ðŸ“© Message from server: ${event.data}`);
    };

    socket.onerror = (err) => {
      console.error("âš ï¸ WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("Connection closed");
      socket = null;
    };
  } catch (e) {
    console.error("Failed to connect via WebSocket:", e);
  }
}
```
