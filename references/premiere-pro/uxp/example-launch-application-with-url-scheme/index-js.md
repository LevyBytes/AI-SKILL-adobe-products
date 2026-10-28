# index.js

```js
const { shell } = require("uxp");

// Open a website in the default browser ðŸŒ
async function openDocumentation() {
  try {
    const result = await shell.openExternal(
      "https://developer.adobe.com/",
      "Opening Adobe Developer documentation",
    );

    if (result === "") {
      console.log("âœ… Browser opened successfully");
    } else {
      console.error(`âŒ Failed to open browser: ${result}`);
    }
  } catch (err) {
    console.error("Error opening browser:", err);
  }
}

// Compose an email with pre-filled content ðŸ“§
async function sendFeedbackEmail() {
  try {
    const subject = encodeURIComponent("Plugin Feedback");
    const body = encodeURIComponent("I have feedback about your plugin...");

    const result = await shell.openExternal(
      `mailto:support@example.com?subject=${subject}&body=${body}`,
      "Opening mail client to send feedback",
    );

    if (result === "") {
      console.log("âœ… Mail client opened successfully");
    } else {
      console.error(`âŒ Failed to open mail client: ${result}`);
    }
  } catch (err) {
    console.error("Error opening mail client:", err);
  }
}

// Open Maps to a specific location ðŸ—ºï¸
async function openLocationInMaps() {
  try {
    // For macOS: use maps:// scheme
    const macResult = await shell.openExternal(
      "maps://?address=345+Park+Ave+San+Jose",
      "Opening Maps to Adobe office location",
    );

    // For Windows: use bingmaps: scheme
    // const winResult = await shell.openExternal(
    //   "bingmaps:?q=345+Park+Ave+San+Jose,+95110",
    //   "Opening Maps to Adobe office location"
    // );

    if (macResult === "") {
      console.log("âœ… Maps opened successfully");
    } else {
      console.error(`âŒ Failed to open Maps: ${macResult}`);
    }
  } catch (err) {
    console.error("Error opening Maps:", err);
  }
}
```
