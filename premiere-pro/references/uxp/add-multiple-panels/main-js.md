# main.js

```javascript
const { entrypoints, pluginManager } = require("uxp");

// Get reference to the second panel container
const secondPanel = document.querySelector("#second-panel");

// Fetch the second panel's HTML file and inject the content into the DOM
fetch("./second-panel.html") // 👈
  // Convert the response to text                         // 👈
  .then((response) => response.text()) // 👈
  // Set the content of the second panel container        // 👈
  .then((html) => {
    // 👈
    secondPanel.innerHTML = html; // 👈
    // Add event listeners for the second panel here      // 👈
    // or any other JavaScript code you need              // 👈
    // ...                                                // 👈
  }); // 👈

let PLUGIN_ID;
entrypoints.setup({
  /* ... */
});

// Everything else is the same as in the previous example...
```
