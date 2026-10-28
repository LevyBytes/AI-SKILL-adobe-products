# index.js

```js
const { localFileSystem } = require("uxp").storage;

async function accessUserDocuments() {
  // Access a specific location outside the sandbox
  try {
    // For macOS
    const documentsFolder = await localFileSystem.getEntryWithUrl(
      "file:/Users/user/Documents", // ðŸ‘ˆ update with your user
    );
    // For Windows, use: "file:/C:/Users/user/Documents"

    console.log(`Documents folder path: ${documentsFolder.nativePath}`);

    // Read a specific file
    const configFile = await localFileSystem.getEntryWithUrl(
      "file:/Users/user/Documents/config.json", // ðŸ‘ˆ update with your user
    );
    if (configFile.isFile) {
      const content = await configFile.read();
      console.log("Config file content:", content);
    }
  } catch (e) {
    console.error("Failed to access documents folder:", e);
  }
}
```
