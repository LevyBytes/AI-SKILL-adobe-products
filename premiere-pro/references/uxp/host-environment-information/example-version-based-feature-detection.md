# Example: Version-based Feature Detection

Parse the UXP or application version to turn features on only when the installed environment supports them, preventing failures on older setups.

```js
const { host, versions } = require("uxp");

// Check if UXP version supports a feature ðŸ”
function supportsAdvancedFeatures() {
  const uxpVersion = versions.uxp;

  // Parse version string (e.g., "8.1.0" -> 8.1)
  const majorMinor = parseFloat(uxpVersion.split(".").slice(0, 2).join("."));

  // Check if UXP is version 8.1 or higher
  return majorMinor >= 8.1;
}

// Conditionally enable features based on version
function initializePlugin() {
  console.log("Initializing plugin...");

  if (supportsAdvancedFeatures()) {
    console.log("âœ… Advanced features enabled (UXP 8.1+)");
    // Enable newer API usage
  } else {
    console.log("âš ï¸ Using legacy mode (UXP < 8.1)");
    // Provide fallback behavior
  }
}
```
