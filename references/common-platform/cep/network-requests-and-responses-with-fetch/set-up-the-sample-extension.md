# Set up the sample extension

Use these steps to install and prepare the sample extension used by the guide:

1. Place the `./com.cep.weather-simple/` directory in the local `extensions` folder. If the folder location is unclear, [See the Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders).
1. [Download CEP's `CSInterface.js` library](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/CSInterface.js), then put it at `./com.cep.weather-simple/client/js/lib/CSInterface.js`.
1. Create a free API Key from [Dark Sky](https://darksky.net/dev).
1. Add a `config.js` file at `./com.cep.weather-simple/client/js/config.js`.
1. In the new `config.js`, insert this code and replace the placeholder with your Dark Sky API Key:

```javascript
const darkSkyKey = "YOUR_API_KEY";
```

Once those steps are complete, the sample extension can run in the host apps listed under [Technology Used](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch/readme.md#technology-used) for this guide.
