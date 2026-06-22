# Network Requests And Responses With Fetch, Pull Request Template

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Network requests and responses with Fetch; Submit a pull request — CLA.

## Network requests and responses with Fetch

Many Creative Cloud app extensions need to communicate with web API services. Because CEP is built on Chromium Embedded Framework (CEF) and Node.js, an extension can issue network calls from inside the panel in whatever pattern fits the workflow.

This walkthrough shows a third-party API call, panel UI changes driven by that API response, and host-app creative asset updates based on the same response.

[Figure: weather panel ps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/weather-panel-ps.png)

After completing the walkthrough, the result is a CEP extension for Photoshop and InDesign that:

1. Requests current weather from the Dark Sky API for a chosen city.
1. Shows panel text that reports the current weather to the user.
1. Provides a button the user can click to change the open asset dynamically according to the weather.

### Contents

1. [Technology Used](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#technology-used)
1. [Prerequisites](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#prerequisites)
1. [Configuration](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#configuration)
1. [Client-side: HTML Markup](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#client-side-html-markup)
1. [Client-side: Service API interaction](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#client-side-service-api-interaction)
1. [Client-side: Creative Cloud host app interaction](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#client-side-creative-cloud-host-app-interaction)
1. [Host app: Automation with ExtendScript](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#host-app-automation-with-extendscript)
1. [Other Resources](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#other-resources)

### Technology Used

- Supported Host Applications: Photoshop, InDesign
- Libraries/Frameworks/APIs:
  - Adobe-specific: [CEP](https://www.adobe.io/apis/creativecloud/cep.html), ExtendScript for Photoshop and InDesign
  - Other: [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [Dark Sky API](https://darksky.net/dev)

### Prerequisites

Before using this guide, install the required software and finish every step in these prerequisite guides:

- [Getting Started](cep-readme.md)
- [Debugging your Adobe panel](https://medium.com/adobe-io/debugging-your-adobe-panel-cf73f00f6961)

### Configuration

### Set up the sample extension

Use these steps to install and prepare the sample extension used by the guide:

1. Place the `./com.cep.weather-simple/` directory in the local `extensions` folder. If the folder location is unclear, [See the Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders).
1. [Download CEP's `CSInterface.js` library](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/CSInterface.js), then put it at `./com.cep.weather-simple/client/js/lib/CSInterface.js`.
1. Create a free API Key from [Dark Sky](https://darksky.net/dev).
1. Add a `config.js` file at `./com.cep.weather-simple/client/js/config.js`.
1. In the new `config.js`, insert this code and replace the placeholder with your Dark Sky API Key:

   ```
   const darkSkyKey = "YOUR_API_KEY";
   ```

Once those steps are complete, the sample extension can run in the host apps listed under [Technology Used](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#technology-used) for this guide.

### Configure `manifest.xml`

As described in the [Getting Started guide](cep-readme.md), `manifest.xml` is one place where an extension declares supported Creative Cloud host apps and version numbers.

For this guide, the extension supports Photoshop and InDesign. In `manifest.xml`, confirm that the supported host apps are listed inside `<HostList>`:

```xml



```

The versions shown in the example code target only one version of each host app to keep the demo simple. In most cases, extension developers should support a range of host app versions. For details on multi-version host-app support, [see the Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-manifest).

### Client-side: HTML Markup

CEP extension interfaces are built with HTML. In this sample, the document lives at `./com.cep.weather-simple/client/index.html` and uses the code below; see comments **#1-3**:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Weather Simple</title>
    <link rel="stylesheet" href="styles/style.css" />
  </head>
  <body>
    <p id="weather-summary"></p>

    <button id="apply-weather-button">Apply weather</button>

    <script type="text/javascript" src="js/lib/CSInterface.js"></script>
    <script type="text/javascript" src="js/config.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>
```

Inside the body, the sample includes two basic HTML elements, `button` and `p`. Each has a distinct `id` attribute so later steps can target it.

This guide does not cover CSS styling, but the sample panel stylesheet is available at `./com.cep.weather-simple/client/styles/style.css`.

### Client-side: Service API interaction

The earlier `index.html` example points to the client-side JavaScript file at `./com.cep.weather-simple/client/js/index.js`. This section focuses on that `index.js` file.

The material here is not CEP-specific. It is regular client-side JavaScript that prepares the extension for CEP interactions covered later.

### Create references to the UI elements

Start `index.js` by storing references to the elements from `index.html`:

```javascript
const applyWeatherButton = document.querySelector("#apply-weather-button");
const weatherSummary = document.querySelector("#weather-summary");
```

The following step uses these UI element references.

### Map API responses to user-readable strings

In the next step, the Dark Sky API JSON response provides an `.icon` property for the weather condition. Its `.icon` value is a kebob-case slug such as `"clear-day"`.

Create a constant that maps every possible slug to text a user can read:

```javascript
const weatherTypes = {
  "clear-day": "a clear day",
  "clear-night": "a clear night",
  rain: "raining",
  snow: "snowing",
  sleet: "sleeting",
  wind: "windy",
  fog: "foggy",
  cloudy: "cloudy",
  "partly-cloudy-day": "a partly cloudy day",
  "partly-cloudy-night": "a partly cloudy night",
};
```

With that mapping, an API value like `"clear-day"` can become a natural user-facing message such as `"It looks like it's a clear day."`.

The next step relies on this `weatherTypes` constant.

### Request and display the weather for a city

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

### Alternatives to `fetch()`

CEP does not limit network requests to `fetch()`.

Because Chromium Embedded Framework behaves like a browser environment, `XMLHttpRequest` is available, along with client-side wrappers such as jQuery. CEP also includes Node.js, giving extensions additional network-request options.

### Client-side: Creative Cloud host app interaction

### Instantiate `CSInterface`

Every CEP panel needs a `CSInterface` instance. Among its other responsibilities, that object provides communication with the host app scripting engine:

```javascript
const csInterface = new CSInterface();
```

Later code uses the `csInterface` constant.

### Add a click handler to the button

Attach a click handler to `applyWeatherButton`:

```javascript
applyWeatherButton.addEventListener("click", applyWeatherToAsset);
```

The next step defines the `applyWeatherToAsset()` helper method.

### Communicate with the host app

Communication with the host app scripting engine goes through `csInterface.evalScript()`. For a refresher on `.evalScript()`, see the [Getting Started guide](cep-readme.md).

In the sample app, the `.evalScript()` call is placed inside an `applyWeatherToAsset()` helper method, which the previous step registered as the button click handler. See comments **#1-3** in this code:

```javascript
function applyWeatherToAsset(e) {
  /* 1) Get the dataset from the click event */
  const dataset = e.target.dataset;

  /* 2) Pass an ExtendScript function call to the host app with .evalScript() */
  csInterface.evalScript(
    `applyWeatherToAsset("${dataset.currentWeatherSlug}", "${dataset.currentWeatherString}")`,
  );
}
```

The final line's `.evalScript()` call can be read as this request:

> Host app, run the `applyWeatherToAsset()` function from my ExtendScript file.

The following section creates that ExtendScript function.

### Host app: Automation with ExtendScript

Many CC host apps, including Photoshop and InDesign, support automation through ExtendScript. This sample extension changes the active asset in Photoshop or InDesign according to the weather.

Again, the sample app stays deliberately simple so the main idea is easy to follow. ExtendScript can automate much more inside CC host apps, and additional capabilities are covered in the Scripting Guides.

The extension's ExtendScript file is at `./com.cep.weather-simple/host/index.jsx`.

### Create an ExtendScript function

Inside the extension `index.jsx`, add this function declaration:

```javascript
function applyWeatherToAsset(currentWeatherSlug, currentWeatherString) {
  // Code will go here
}
```

The function receives the `currentWeatherSlug` and `currentWeatherString` string arguments passed from the client-side `.evalScript()` call.

### Create document element references

ExtendScript can interact with the host app DOM, including items in an open document. Because DOM properties and methods differ among host apps, this sample checks the global `app.name` property to identify the running application; see comments **#1-4**:

```javascript
function applyWeatherToAsset(currentWeatherSlug, currentWeatherString) {
  var layer;
  var frame;

  /* 1) If we're running in Photoshop */
  if (app.name === "Adobe Photoshop") {
    /* 2) Make a reference to the first art layer of the first open document */
    layer = app.documents[0].artLayers[0];
  } else if (app.name === "Adobe InDesign") {
  /* 3) Otherwise, if we're running in InDesign */
    /* 4) Create a text frame on the first page of the first open document */
    frame = app.documents
      .item(0)
      .pages.item(0)
      .textFrames.add({ geometricBounds: [72, 72, 110, 300] });
  }

  // To be continued...
}
```

Depending on which app hosts the extension, the code either stores an art-layer reference for Photoshop or creates a text frame in InDesign.

### Alter the open asset in the host app

Finally, change the open asset based on the weather condition. A `switch` statement selects behavior from `currentWeatherSlug`; see comments **1-8**:

```javascript
function applyWeatherToAsset(currentWeatherSlug, currentWeatherString) {
  var layer;
  var frame;

  if (app.name === "Adobe Photoshop") {
    layer = app.documents[0].artLayers[0];
  } else if (app.name === "Adobe InDesign") {
    frame = app.documents
      .item(0)
      .pages.item(0)
      .textFrames.add({ geometricBounds: [72, 72, 110, 300] });
  }

  /* 1) Switch based on the currentWeatherSlug we got from the Dark Sky API */
  switch (currentWeatherSlug) {
    /* 2) If it's a clear day */
    case "clear-day":
      /* 3) If we're running in Photoshop */
      if (app.name === "Adobe Photoshop") {
        /* 4) Adjust the color balance of the art layer */
        layer.adjustColorBalance([0, 0, 0], [-10, 0, 0], [-50, 0, 0]);
      } else if (app.name === "Adobe InDesign") {
      /* 5) If it's InDesign */
        /* 6) Use the currentWeatherString as the text frame contents */
        frame.contents = currentWeatherString;
      }
      break;

    /* 7) Repeat for clear night... */
    case "clear-night":
      if (app.name === "Adobe Photoshop") {
        layer.adjustColorBalance([0, 0, 33], [-39, -14, 100], [-10, 0, 17]);
      } else if (app.name === "Adobe InDesign") {
        frame.contents = currentWeatherString;
      }
      break;

    /* 8) And so on for all possible currentWeatherSlug strings... */
  }
}
```

Clicking the button produces output like this:

[Figure: photoshop](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/photoshop.png)
[Figure: indesign](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme-assets/indesign.png)

Put another way, a Photoshop-hosted panel adjusts an art layer's color balance, while an InDesign-hosted panel adds a text frame to the document containing the weather message.

### Other Resources

- [CEP Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md)

## Submit a pull request — CLA

- [ ] I have signed the [Adobe CLA](http://adobe.github.io/cla.html) (required).

### Submit a pull request — Topic

Pull request topic:

- [ ] A guide in this repo.
- [ ] A sample in this repo.
- [ ] Something new already discussed with Adobe in a GitHub issue. Issue link:

### Submit a pull request — Versions

- [ ] CEP version(s) tested [must be `8.x+` for this repo]:
- [ ] Supported/tested CC app(s) and version(s):
