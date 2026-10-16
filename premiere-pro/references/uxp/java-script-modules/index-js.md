# index.js

```js
// Import the entire module object
const utils = require("./utils.js");
const result = utils.multiply(3, 2); // returns 6

// Or use destructuring to import specific functions
const { multiply, getAnswer } = require("./utils.js");
const answer = getAnswer(); // returns 42
```

### index.js

```js
// Import from subdirectories
const { calculate } = require("./lib/calculations.js");
const { createButton } = require("./components/ui-elements.js");
```

Path Requirements

In UXP, `require()` resolves relative paths and does not look through global paths. Include the full relative route from the current file to the module you need, including the `.js` extension.

### Example

This example shows a plugin divided into modules, with each file responsible for a different part of the feature:

### index.js

```js
const { entrypoints } = require("uxp");
const { processVideo } = require("./lib/video-processor.js");
const { showNotification } = require("./lib/ui-helpers.js");

entrypoints.setup({
  commands: {
    processCommand: async () => {
      try {
        await processVideo();
        showNotification("Video processing completed!");
      } catch (error) {
        showNotification("Error: " + error.message);
      }
    },
  },
});
```
