# index.js

```js
const fs = require("fs");

async function readConfigFile() {
  // Read a configuration file from the plugin folder
  try {
    const content = await fs.readFile("plugin:/config.json", "utf8");
    const config = JSON.parse(content);
    console.log("Configuration loaded:", config);
  } catch (e) {
    console.error("Failed to read config file:", e);
  }
}

async function writeToDataFolder() {
  // Write data to the plugin's data folder
  try {
    const data = {
      lastRun: new Date().toISOString(),
      version: "1.0.0",
    };

    await fs.writeFile("plugin-data:/state.json", JSON.stringify(data, null, 2), "utf-8");

    console.log("State saved successfully");
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}
```
