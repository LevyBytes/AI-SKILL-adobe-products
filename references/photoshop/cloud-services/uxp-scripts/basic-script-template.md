# Basic Script Template

```javascript
// Import required modules
const { app } = require("photoshop");
const { storage } = require("uxp").storage;
const fs = require("fs");

// Main async function
async function main() {
  try {
    // Your Photoshop automation code here
    console.log("Document name:", app.activeDocument.name);

    // Perform operations
    await app.activeDocument.flatten();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Execute main function
main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
```
