# Example: Platform-Specific Logic

Real plugins often branch on platform so they can choose the right paths, shortcuts, URL schemes, or native capabilities.

```js
const { host, shell } = require("uxp");
const os = require("os");

// Use platform-appropriate URL scheme ðŸ—ºï¸
async function openMapsLocation(address) {
  const IS_MAC = os.platform() === "darwin";
  let url;
  if (IS_MAC) {
    // Use Apple Maps on macOS
    url = `maps://?address=${encodeURIComponent(address)}`;
  } else {
    // Use Bing Maps on Windows
    url = `bingmaps:?q=${encodeURIComponent(address)}`;
  }

  try {
    await shell.openExternal(url, "Opening maps application");
    console.log(`âœ… Opened maps for: ${address}`);
  } catch (err) {
    console.error("Failed to open maps:", err);
  }
}

// Example usage
openMapsLocation("345 Park Ave, San Jose");
```
