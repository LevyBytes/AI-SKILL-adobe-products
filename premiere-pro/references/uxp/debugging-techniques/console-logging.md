# Console Logging

Logging values to the console is the quickest debugging path. View the output from the console in UXP Developer Tool.

```js
// Basic logging
console.log("Plugin initialized"); // ðŸ’¡ General information
console.warn("This feature is deprecated"); // âš ï¸ Warnings (yellow)
console.error("Failed to load data"); // âŒ Errors (red)

// Log variables and objects
const user = { name: "Jane", role: "Editor" };
console.log("User data:", user);
// Logs: User data: { name: "Jane", role: "Editor" }

// Log multiple values using template literals
const width = 1920;
const height = 1080;
console.log(`Resolution: ${width}x${height}`); // Template literals for formatting
```
