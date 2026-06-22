# Host Info, Html Elements, Html Events, Js Modules

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Host Environment Information; Creating HTML Elements; HTML Events and Listeners; Recipes; JavaScript Modules.

## Host Environment Information

Detect the user's operating system, application version, and UXP runtime.

UXP includes APIs for reading the **host environment** where a plugin is running, including operating system, application version, UXP runtime version, and user locale. Use this data when a plugin needs to adapt by platform, check feature support, or branch into platform-specific behavior.

### Available APIs

UXP has three primary modules for detecting the host environment:

| Module | Purpose | Key Properties |
| --- | --- | --- |
| [`host`](uxp.md) | Application and UI information | `name`, `version`, `uiLocale` |
| [`versions`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/versions/versions.md) | UXP runtime and plugin version | `uxp`, `plugin` |
| [`os`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/os/os.md) | Operating system information | `platform()`, `release()`, `arch()`, `cpus()`, `totalmem()`, `freemem()`, `homedir()` |

### Example: Basic Host Detection

This example writes environment details to the console.

### index.js

```js
const { host, versions } = require("uxp");
const os = require("os");

// Log host environment information ðŸ’»
function logHostInfo() {
  console.log("=== Host Environment ===");
  console.log(`OS: ${os.platform()} ${os.release()}`);
  console.log(`Application: ${host.name} v${host.version}`);
  console.log(`UXP Runtime: v${versions.uxp}`);
  console.log(`Plugin Version: v${versions.plugin}`);
  console.log(`UI Locale: ${host.uiLocale}`);
}
logHostInfo();
```

### Console Output

```text
=== Host Environment ===
OS: darwin 24.6.0
Application: premierepro v25.6.0
UXP Runtime: vuxp-8.1.0-local
Plugin Version: v1.0.0
UI Locale: en_US
```

Use `os.platform()` for reliable OS detection: it returns `"darwin"` on macOS and `"win32"` on Windows.

### Example: Platform-Specific Logic

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

### Example: Version-based Feature Detection

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

### Reference Material

- [`host` module](uxp.md): details about the host application and UI locale.
- [`versions` module](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/versions/versions.md): UXP runtime and plugin version values.
- [`os` module](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/os/os.md): data reported by the operating system.

### Summary

1. **Three Information Sources**: UXP exposes three modules for detecting host environment details:

   - **`host`**: application name, version, and locale values (`host.name`, `host.version`, `host.uiLocale`).
   - **`versions`**: UXP runtime version and plugin version (`versions.uxp`, `versions.plugin`).
   - **`os`**: operating-system data (`platform()`, `release()`, `arch()`, `cpus()`, `totalmem()`, `freemem()`, `homedir()`).

2. **Platform Detection**: Call `os.platform()` to identify the operating system:

   - Returns `"darwin"` for macOS and `"win32"` for Windows.
   - Use the value when selecting platform-specific file paths, keyboard shortcuts, URL schemes, or UI conventions.
   - Store the result in a constant to avoid repeating the call.

3. **Version Checking**: Feature detection can be implemented by parsing version strings:

   - Test UXP compatibility through `versions.uxp`.
   - Test host-application feature availability through `host.version`.
   - Include fallbacks or clear error messages whenever a version is unsupported.

## Creating HTML Elements

Build user interfaces using HTML markup or JavaScript DOM methods.

UXP supports two ways to construct UI: write the elements in HTML, or generate them at runtime with JavaScript. Panel plugins support both approaches, while Command plugins are limited to modal dialogs created from JavaScript.

### Example: Using HTML Markup

Put the UI structure in HTML and attach behavior from JavaScript.

### index.html

```html
<button id="showDialog">Show Dialog</button>

<dialog id="sampleDialog">
  <div>
    <h1>Hello! ðŸ‘‹</h1>
    <p>A dialog built using HTML tags</p>
  </div>
</dialog>
```

### index.js

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", () => {
  const dialog = document.getElementById("sampleDialog");
  dialog.show();

  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
});
```

### styles.css

```css
#sampleDialog > div {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;
  align-items: center;
  color: #ddd;
}

h1 {
  color: #fff;
}

#sampleDialog > div > p {
  margin-top: 30px;
}
```

[Figure: Sample dialog created with HTML markup](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/html-elements/img/html-elements-dialog-html.png)

### Example: Using JavaScript Only

Use JavaScript DOM methods to create the elements and apply their styles.

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <button id="showDialog">Show Dialog</button>
  </body>
</html>
```

### index.js

```js
const showDialogBtn = document.getElementById("showDialog");
showDialogBtn.addEventListener("click", () => {
  // Create dialog element
  const dialog = document.createElement("dialog");

  // Create container
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.height = "300px";
  div.style.width = "400px";
  div.style.alignItems = "center";
  div.style.color = "#DDD"; // Apply UXP host text color

  // Create header
  const header = document.createElement("h1");
  header.textContent = "Hello! ðŸ‘‹";
  header.style.color = "#FFF";
  div.appendChild(header);

  // Create paragraph
  const para = document.createElement("p");
  para.textContent = "A dialog built dynamically with JavaScript";
  para.style.marginTop = "30px";
  div.appendChild(para);

  // Assemble and show
  dialog.appendChild(div);
  document.body.appendChild(dialog);
  dialog.showModal();

  dialog.addEventListener("cancel", () => {
    console.log("Dialog dismissed");
  });
});
```

[Figure: Sample dialog created with JavaScript](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/html-elements/img/html-elements-dialog-js.png)

### Creating Spectrum Components

`document.createElement()` can also create Spectrum UI elements dynamically:

```js
// Create a Spectrum button
const button = document.createElement("sp-button");
button.textContent = "Click me";
button.setAttribute("variant", "cta");
document.body.appendChild(button);
```

This works for **Spectrum Widgets** (`sp-*` elements). **Spectrum Web Components** must instead be declared in HTML markup.

### Reference Material

- [HTMLDialogElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-dialog-element.md): dialog API surface.
- [HTML Elements](uxp-global-members-2.md): all HTML elements that UXP supports.
- [Spectrum Web Components](uxp-api-2.md): Adobe component library for UI work.

## HTML Events and Listeners

Use JavaScript event listeners or inline event handlers to respond to user actions.

For interactions such as clicks, changed input values, and keyboard activity, UXP works with standard HTML events. Attach handlers from **JavaScript** when possible, which is recommended, or place **inline event handlers** in HTML when the plugin has the extra permission that approach requires.

### Example: JavaScript Event Listeners (Recommended)

The preferred pattern is to wire events from JavaScript, either with `addEventListener()` or by setting an event handler property.

### index.html

```html
<button id="firstButton">Click me</button> <button id="secondButton">Click me too</button>
```

### index.js

```js
// Method 1: addEventListener (recommended)
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", handleClick);

// Method 2: Event handler property
const secondButton = document.getElementById("secondButton");
secondButton.onclick = handleClick;

function handleClick(event) {
  console.log(`Button clicked: ${event.target.id}`);
}
```

Choose `addEventListener()` when you want more control over handling, including support for more than one listener on the same element.

### Example: Inline Event Handlers

Inline attributes in HTML can call event handlers, but that style needs a manifest opt-in.

### index.html

```html
<button id="thirdButton" onclick="handleClick(event)">Click me</button>
```

### index.js

```js
function handleClick(event) {
  console.log(`Button clicked: ${event.target.id}`);
}
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "allowCodeGenerationFromStrings": true
  }
  // ...
}
```

Security consideration

With `allowCodeGenerationFromStrings`, code may be executed from string content, so the permission can raise security exposure. Enable it only when your plugin design truly depends on inline event handlers.

### Common Event Types

Standard HTML events are available in UXP:

| Event Type | Fires When | Common Use Cases |
| --- | --- | --- |
| `click` | Element is clicked | Buttons, links, interactive elements |
| `input` | Input value changes | Text fields, sliders, checkboxes |
| `change` | Input value changes and loses focus | Dropdowns, file inputs |
| `submit` | Form is submitted | Forms |
| `keydown` | Key is pressed | Keyboard shortcuts |
| `keyup` | Key is released | Text input validation |
| `focus` | Element receives focus | Input fields |
| `blur` | Element loses focus | Input validation |

### Working with Spectrum Components

Spectrum Web Components use the same listener pattern:

```js
// Spectrum button
const button = document.querySelector("sp-button");
button.addEventListener("click", () => {
  console.log("Spectrum button clicked");
});

// Spectrum slider
const slider = document.querySelector("sp-slider");
slider.addEventListener("input", (event) => {
  console.log(`Slider value: ${event.target.value}`);
});
```

### Reference Material

- [HTML Events](uxp-global-members-2.md): full inventory of supported events.
- [Manifest Permissions](uxp-manifest.md): summary of the available permissions.

## Recipes

Common UXP patterns shown through practical code examples.

For content specific to **UXP Plugins**, see [Plugins >Tutorials section](uxp-tutorials-2.md).

### General UXP recipes

[Filesystem Operations](uxp-filesystem-operations.md)

Work with files and folders from UXP plugins, including reading, writing, management, and permission requirements.

[Network Operations](uxp-recipes-3.md)

Connect a UXP plugin to online resources: fetch data, talk to APIs, and create WebSocket connections.

[Launch External Processes](uxp-external-process.md)

Start applications or open files from a plugin when a workflow needs to reach outside Premiere.

[Clipboard Operations](uxp-recipes.md)

Add system clipboard support so a plugin can read and write text.

[Host Environment Information](uxp-recipes-2.md)

Identify the user's operating system, host application version, and UXP runtime.

### Language Basics

[CSS Styling](uxp-recipes.md)

Apply CSS classes, inline styles, or JavaScript to style a plugin UI.

[Creating HTML Elements](uxp-recipes-2.md)

Create user interfaces with HTML markup or JavaScript DOM APIs.

[HTML Events and Listeners](uxp-recipes-2.md)

Respond to user actions by using JavaScript event listeners or inline event handlers.

[Debugging Techniques](uxp-recipes.md)

Debug a plugin quickly with console logging and dialog methods.

[JavaScript Modules](uxp-recipes-2.md)

Structure plugin code across several JavaScript files by using modules.

### Other resources

For Plugin-specific development walkthroughs, use the [Tutorials section](uxp-tutorials-2.md).

## JavaScript Modules

Organize plugin code across multiple JavaScript files by using modules.

### Overview

UXP plugins can use modular JavaScript, so related code can be split into separate files for cleaner structure and easier maintenance. For larger plugins, putting distinct functionality in separate modules makes the project easier to reuse and navigate.

For modules, UXP follows CommonJS: import with `require()` statements and export functionality through `module.exports`.

### Implementation

### Exporting Modules

In a module file, expose functions, objects, or variables to other files with `module.exports`:

### utils.js

```js
// Export individual functions
function multiply(a, b) {
  return a * b;
}

function getAnswer() {
  return 42;
}

// Export an object containing all functions
module.exports = {
  multiply,
  getAnswer,
};
```

### Importing Modules

Bring modules into the main file, or into another module, by calling `require()`:

### index.js

```js
// Import the entire module object
const utils = require("./utils.js");
const result = utils.multiply(3, 2); // returns 6

// Or use destructuring to import specific functions
const { multiply, getAnswer } = require("./utils.js");
const answer = getAnswer(); // returns 42
```

### Directory Structure

Relative paths also let you keep modules inside subdirectories:

```text
my-plugin/
â”œâ”€â”€ index.js
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ calculations.js
â”‚   â””â”€â”€ helpers.js
â””â”€â”€ components/
    â””â”€â”€ ui-elements.js
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

### lib/video-processor.js

```js
async function processVideo() {
  // Video processing logic here
  console.log("Processing video...");
  // Simulate async operation
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function getVideoInfo() {
  // Return video information
  return { duration: 120, format: "mp4" };
}

module.exports = {
  processVideo,
  getVideoInfo,
};
```

### lib/ui-helpers.js

```js
function showNotification(message) {
  console.log(`Notification: ${message}`);
  // Additional UI notification logic
}

function createProgressBar() {
  // Progress bar creation logic
  return document.createElement("progress");
}

module.exports = {
  showNotification,
  createProgressBar,
};
```

### Summary

In UXP plugins, JavaScript modules help maintainability by splitting behavior into multiple files instead of keeping all functionality together.

**Key Concepts:**

1. **Module exports**: expose functions, objects, or variables from a module file with `module.exports`.
2. **Module imports**: bring modules into other files by using `require()` with relative paths.
3. **Directory structure**: use relative paths to place modules in subdirectories and keep the project better organized.
4. **Path requirements**: include the full relative path and the `.js` extension because UXP does not search global paths.
