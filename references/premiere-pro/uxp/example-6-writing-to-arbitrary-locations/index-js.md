# index.js

```js
const fs = require("fs");

async function exportToDesktop() {
  // Export data to the user's Desktop
  try {
    const exportData = "Exported data from plugin";

    // For macOS
    await fs.writeFile(
      "/Users/user/Desktop/export.txt", // ðŸ‘ˆ update with your user
      exportData,
      { encoding: "utf-8" },
    );
    // For Windows, use: "C:/Users/user/Desktop/export.txt"

    console.log("File exported to Desktop");
  } catch (e) {
    console.error("Failed to export file:", e);
  }
}

async function readFromDesktop() {
  // Read a file from the user's Desktop folder
  try {
    // For macOS
    const content = await fs.readFile(
      "/Users/user/Desktop/export.txt", // ðŸ‘ˆ update with your user
      "utf8",
    );
    // For Windows, use: "C:/Users/user/Desktop/export.txt"

    console.log("File content:", content);
  } catch (e) {
    console.error("Failed to read file:", e);
  }
}
```
