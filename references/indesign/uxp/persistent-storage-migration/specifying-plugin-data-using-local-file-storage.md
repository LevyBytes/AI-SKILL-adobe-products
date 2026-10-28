# Specifying plugin data using Local File Storage

Use this API to reach folders that hold plugin data:

```js
// Import the required module from UXP for file system access
const uxp = require("uxp");
const fs = uxp.storage.localFileSystem;

// Example: Access the folder where plugin data can be stored
(async () => {
  try {
    // Get the data folder (persistent storage location)
    const folder = await fs.getDataFolder();

    // Example: Log the folder object or use it for further operations
    console.log("Data folder:", folder);

    // Perform additional actions with the folder, such as reading/writing files
    // const file = await folder.createFile('example.txt', { overwrite: true });
    // await file.write('This is an example content.');
  } catch (error) {
    console.error("Error accessing the folder:", error);
  }
})();
```
