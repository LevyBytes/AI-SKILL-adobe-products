# Clipboard, Css Styling, Debug

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Clipboard Operations; CSS Styling; Debugging Techniques.

## Clipboard Operations

Connect a plugin to the system clipboard so it can read and write text data.

UXP clipboard APIs allow a plugin to **read from** and **write to** the system clipboard, so users can copy, paste, and share content between the plugin and other applications. This guide explains `Clipboard` API usage through the [clipboard reference](uxp-data-transfers.md), permission declarations, and common use cases.

### System requirements

To avoid compatibility problems, confirm that the development environment meets these **minimum versions**:

- **Premiere v25.6**
- **UDT v2.2**
- **Manifest v5**

### Clipboard Security

UXP prevents plugins from reaching the system clipboard unless access is requested, which helps keep clipboard data from being read or changed unexpectedly. When a plugin has to read or write clipboard contents, declare the matching [clipboard permission](uxp-manifest.md) in `manifest.json`.

Select the permission tier that matches the operation:

| Permission | Access Level | Use When |
| --- | --- | --- |
| `"read"` | Read-only | Your plugin only needs to paste or read data |
| `"readAndWrite"` | Read and write access | Your plugin needs to copy and paste data |

Use the narrowest permission that still supports the workflow.

Later releases may prompt users to approve clipboard access. Read-only requests are likely to feel easier to approve unless the plugin's behavior clearly depends on writing clipboard data.

### Using the Clipboard API

Use `navigator.clipboard` for clipboard operations. It exposes two primary methods:

- **`setContent()`**: puts data onto the clipboard.
- **`getContent()`**: retrieves data from the clipboard.

These methods accept MIME-type objects: each key identifies a format such as `"text/plain"`, and each value holds the content for that format.

### Example: Writing to the Clipboard

This example copies text into the system clipboard.

### index.js

```js
// Copy formatted text to the clipboard âœ‚ï¸
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.setContent({
      "text/plain": text,
    });
    console.log("âœ… Text copied to clipboard");
  } catch (err) {
    console.error("âŒ Failed to copy to clipboard:", err);
  }
}

// Example usage
copyToClipboard("Welcome to UXP for Premiere!");
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "clipboard": "readAndWrite"
  }
  // ...
}
```

### Example: Reading from the Clipboard

Your plugin can also inspect content that the user copied from another app.

### index.js

```js
// Paste text from the clipboard ðŸ“‹
async function pasteFromClipboard() {
  try {
    const clipboardData = await navigator.clipboard.getContent();

    if (clipboardData["text/plain"]) {
      console.log(`Pasted text: ${clipboardData["text/plain"]}`);
      return clipboardData["text/plain"];
    } else {
      console.log("âš ï¸ No text data found on clipboard");
      return null;
    }
  } catch (err) {
    console.error("âŒ Failed to read from clipboard:", err);
  }
}

// Example usage
pasteFromClipboard();
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "clipboard": "read"
  }
  // ...
}
```

Because this sample only reads clipboard content, the manifest uses `"read"` rather than a write-capable permission. Keep requested access to the minimum level the plugin actually needs.

### Example: Copy and Paste Together

Some workflows need both clipboard directions, such as changing copied text before placing it back or moving data between a plugin and outside tools.

```js
// Transform clipboard text to uppercase
async function transformClipboardText() {
  try {
    // Read current clipboard content
    const data = await navigator.clipboard.getContent();

    if (data["text/plain"]) {
      const originalText = data["text/plain"];
      const transformedText = originalText.toUpperCase();

      // Write the transformed text back
      await navigator.clipboard.setContent({
        "text/plain": transformedText,
      });

      console.log(`âœ… Transformed: "${originalText}" â†’ "${transformedText}"`);
    } else {
      console.log("âš ï¸ No text found on clipboard");
    }
  } catch (err) {
    console.error("Failed to transform clipboard text:", err);
  }
}

// Example usage
transformClipboardText();
```

That combined read/write workflow requires `"readAndWrite"` in the manifest.

### Reference Material

- [`Clipboard`](uxp-data-transfers.md) API Reference.
- [Manifest Permissions](uxp-manifest.md).

### Summary

1. **Clipboard Security**: Plugins begin without system clipboard access. Declare clipboard permissions explicitly in `manifest.json`:
   - Use `"read"` when the plugin only needs read-only behavior, such as pasting content.
   - Use `"readAndWrite"` for workflows that both copy and paste.
   - Request the least-powerful option so installation approval has less friction.
2. **Using the API**: Work with the clipboard through `navigator.clipboard`:
   - **`setContent()`**: places data on the clipboard with MIME type objects such as `{ "text/plain": "text" }`.
   - **`getContent()`**: returns clipboard data in an object organized by MIME type keys.
   - Put clipboard calls inside `try...catch` blocks and pair them with `await` so errors are handled correctly.

## CSS Styling

Apply presentation rules to a plugin UI with CSS classes, inline styles, or JavaScript.

For plugin interface styling, UXP accepts standard CSS. You can attach styles through **CSS classes**, write **inline styles**, or set them with **JavaScript**, depending on which pattern fits your workflow.

### Prerequisites

Before starting, verify that the development environment meets these version minimums:

- **Premiere v25.6** or higher
- **UDT v2.2** or higher
- **Manifest version v5** or higher

### Overview

For developers starting with UXP plugins, or moving over from native extensions, this overview shows the three common styling paths available in UXP. They line up with normal web development techniques, but it helps to see their UXP behavior before moving on to host-theme behavior.

### index.html

```html
<div class="green-background">
  <h1>Styled with CSS class</h1>
</div>

<div style="background-color: yellow;">
  <h1>Styled inline</h1>
</div>

<div id="exampleDiv">
  <h1>Styled with JavaScript</h1>
</div>
```

### index.js

```js
// Apply styles via JavaScript
const exampleDiv = document.getElementById("exampleDiv");
exampleDiv.style.backgroundColor = "orange";
```

### styles.css

```css
/* Define styles in a stylesheet */
.green-background {
  background-color: green;
}
```

### Theme Awareness

Premiere can expose theme state to a plugin so the UI can respond to the user's selected application theme: **Light**, **Dark**, or **Darkest**. In Premiere UXP plugins, `document` includes a `theme` property, and `theme.getCurrent()` returns the active theme as a string.

The same `theme` object also provides an `onUpdated` listener that fires after a user changes the application theme manually. Its callback can adjust plugin styling, such as swapping custom CSS classes for the updated selection.

### Example: Change styles on the fly

### index.html

```html
<body>
  <h4 id="plugin-heading">Application Info</h4>
  <div class="main-div">
    <div id="plugin-body"></div>
  </div>
  <footer>
    <button id="btnPopulate">Populate Application Info</button>
    <button id="clear-btn">Clear Application Info</button>
  </footer>
</body>
```

### index.js

```javascript
function updateTheme(theme) {
  panelBody = document.getElementById("plugin-body");
  panelHeading = document.getElementById("plugin-heading");

  // Change styles based on the new theme on the fly
  if (theme.includes("dark")) {
    panelBody.style.color = "#fff";
    panelHeading.style.color = "#fff";
  } else {
    panelBody.style.color = "#000";
    panelHeading.style.color = "#000";
  }
}

// Listen for theme changes
document.theme.onUpdated.addListener((theme) => {
  updateTheme(theme);
});

// Apply initial theme on load
const currentTheme = document.theme.getCurrent();
updateTheme(currentTheme);
```

### Example: Switch theme Classes

The next sample uses CSS custom properties, also called variables, to make theme switching efficient. `updateTheme()` assigns one class, either `theme-light` or `theme-dark`, to the `body` element. After the theme changes, the function removes the previous class and attaches the correct replacement.

With this pattern, the CSS cascade updates the whole plugin interface. In `styles.css`, theme-level variables such as `--heading-color`, `--body-color`, and `--border-color` hold the colors. Other rules read those values with `var(...)`, so changing the class on `body` lets all elements inherit the right colors without updating them one by one.

### index.html

```html
<body>
  <sp-heading>My Plugin</sp-heading>
  <div class="plugin-body">
    <sp-body>This is the main content area.</sp-body>
  </div>
</body>
```

### index.js

```javascript
function updateTheme(theme) {
  // Apply theme to body element only - CSS variables will handle the rest
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(theme.includes("dark") ? "theme-dark" : "theme-light");
}

// Listen for theme changes
document.theme.onUpdated.addListener((theme) => {
  updateTheme(theme);
});

// Apply initial theme on load
const currentTheme = document.theme.getCurrent(); // Returns "light", "dark", or "darkest"
updateTheme(currentTheme);
```

### styles.css

```css
/* Theme CSS Variables */
body.theme-light {
  --heading-color: #2c2c2c;
  --body-color: #4a4a4a;
  --border-color: #40548e;
}

body.theme-dark {
  --heading-color: #f5f5f5;
  --body-color: #e0e0e0;
  --border-color: #97ace6;
}

body {
  padding: 0 16px;
}

.plugin-body {
  margin-top: 5px;
  padding: 16px;
  overflow: scroll;
  height: 300px;
  border-radius: 4px;
  border: 2px solid var(--border-color);
}

sp-heading {
  padding: 16px 20px;
  margin: 0 0 12px 0;
  font-size: 18px;
  color: var(--heading-color);
}

sp-body {
  padding: 20px;
  margin: 0;
  line-height: 1.6;
  font-size: 14px;
  color: var(--body-color);
}
```

[Figure: Theme Awareness](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/recipes/css-styling/img/css-styling-class-example.png)

### UXP CSS Variables

Other Creative Cloud applications expose Spectrum CSS variables covered in the [Photoshop UXP theme-awareness guide](https://developer.adobe.com/photoshop/uxp/2022/guides/theme-awareness/#built-in-theme-colors), including `--uxp-host-text-color`; Premiere does not support them yet. Support is planned for a later release.

### Important Considerations

UXP is not a browser

UXP implements only part of CSS. CSS Grid Layout, for example, is unavailable. For the full supported-property set, consult the [CSS reference](uxp-reference-css.md).

### CSS Preprocessors

Only standard CSS is interpreted by UXP. To use preprocessors such as **Sass** or **SCSS**, transpile them into CSS before the plugin is bundled. That setup depends on build tools such as Webpack and slightly changes the [plugin debugging process](uxp-udt-deep-dive.md).

### Prefer Spectrum for consistency

When practical, build UI elements with [Spectrum](uxp-user-interfaces.md). Spectrum is Adobe's design system, so it helps plugin controls match the visual language used across Adobe applications.

### Reference Material

- [CSS Reference](uxp-reference-css.md): complete list of supported CSS properties.
- [Spectrum Web Components](uxp-api-2.md) Reference.

## Debugging Techniques

Use console messages and dialog methods for quick plugin debugging.

The [UXP Developer Tool](uxp-udt-deep-dive.md) provides full debugging support, including breakpoints and Chrome DevTools. For fast troubleshooting while developing, the simpler techniques below can still be useful.

### Console Logging

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

### Dialog-based Debugging

For spot checks that should appear in the UI instead of the console, use dialog methods to show values or request input.

Premiere does not fully support `alert()`, `confirm()`, and `prompt()` yet; a later release will address those methods.

Requires Manifest configuration

Before using [`alert()`](uxp-html-dom.md), [`confirm()`](uxp-html-dom.md), or [`prompt()`](uxp-html-dom-2.md), turn on the `enableAlerts` feature flag in [`manifest.json`](uxp-manifest.md).

### index.js

```js
// Simple alert dialog
alert("Plugin loaded successfully");

// Confirmation dialog
const confirmed = confirm("Do you want to continue?");
if (confirmed) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

// Prompt dialog for user input
const userName = prompt("Enter your name:", "Default Name");
console.log(`User entered: ${userName}`);
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "featureFlags": {
    "enableAlerts": true
  }
  // ...
}
```

### Using UXP Developer Tool

For full debugging with UXP Developer Tool, consult the [plugin workflow guide](uxp-udt-deep-dive.md).

### Reference Material

- [`alert()`](uxp-html-dom.md): display simple alert dialogs.
- [`confirm()`](uxp-html-dom.md): display confirmation dialogs.
- [`prompt()`](uxp-html-dom-2.md): prompt users for input.
