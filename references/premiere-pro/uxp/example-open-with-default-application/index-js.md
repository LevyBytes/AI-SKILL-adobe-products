# index.js

```js
const { shell } = require("uxp");

// Open a PDF file in the default PDF reader ðŸ“„
async function openPDFFile() {
  try {
    // For macOS
    const result = await shell.openPath(
      "/Users/user/Desktop/report.pdf", // ðŸ‘ˆ update with your path
      "Opening project report for review",
    );
    // For Windows, use: "C:\\Users\\user\\Desktop\\report.pdf"

    if (result === "") {
      console.log("âœ… File opened successfully");
    } else {
      console.error(`âŒ Failed to open file: ${result}`);
    }
  } catch (err) {
    console.error("Error opening file:", err);
  }
}

// Open a folder in Finder/Explorer ðŸ“
async function openProjectFolder() {
  // ðŸ‘‡ Must have an empty string "" to allow opening folders
  // in the Manifest requiredPermissions.launchProcess.extensions array
  try {
    // For macOS
    const result = await shell.openPath("/Users/user/Documents/Projects", "Opening project folder");
    // For Windows, use: "C:\\Users\\user\\Documents\\Projects"

    if (result === "") {
      console.log("âœ… Folder opened successfully");
    } else {
      console.error(`âŒ Failed to open folder: ${result}`);
    }
  } catch (err) {
    console.error("Error opening folder:", err);
  }
}
```
