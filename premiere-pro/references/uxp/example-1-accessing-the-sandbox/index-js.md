# index.js

```js
const { localFileSystem } = require("uxp").storage;

async function accessPluginDataFolder() {
  // Access the plugin's data folder
  try {
    const dataFolder = await localFileSystem.getEntryWithUrl("plugin-data:/");
    console.log(`Data folder path: ${dataFolder.nativePath}`);

    // List all files in the data folder
    const entries = await dataFolder.getEntries();
    console.log(`Found ${entries.length} items in data folder`);

    for (const entry of entries) {
      console.log(`- ${entry.name} (${entry.isFile ? "file" : "folder"})`);
    }
  } catch (e) {
    console.error("Failed to access data folder:", e);
  }
}
```
