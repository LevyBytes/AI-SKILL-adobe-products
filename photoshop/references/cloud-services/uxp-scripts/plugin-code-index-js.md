# Plugin Code (index.js)

```javascript
const { app } = require("photoshop");
const { entrypoints } = require("uxp");

entrypoints.setup({
  commands: {
    runAutomation: async () => {
      try {
        // Your automation code
        await app.activeDocument.flatten();
        console.log("Automation complete!");
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
});
```
