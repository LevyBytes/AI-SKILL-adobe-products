# Add Modal Dialogs (part 1)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Create a Modal Dialog for a Command interface or for extra UI launched from Panels.

## Overview

Modal dialogs are short-lived windows shown above the main application UI. They require the user to respond before normal work can continue. Panels can sit docked in Premiere's workspace, but **modal dialogs block interaction with the host application until dismissed**, which fits alerts, required decisions, input collection, and other focused interactions.

In UXP, modal dialogs commonly cover two situations:

1. **Command UIs**: Give command entrypoints an interface when they need input or need to show information without keeping a panel open.
2. **Panel dialogs**: Open supplemental UI from a panel for settings, detail views, or data entry while keeping the main panel uncluttered.

You'll work through how to:

- Build modal dialogs launched by command entrypoints
- Open modal dialogs from panel entrypoints
- Set dialog size and behavior
- Process entered values and dialog results

## Key Concepts

Modal dialogs use the plugin's existing HTML document, much like [multiple panels](uxp-tutorials-2.md). Unlike panel content, they **appear as floating windows** and must be closed before the user can work in Premiere again. That behavior suits focused flows such as setup wizards, confirmation prompts, and data-entry forms.

At the simplest level, a modal dialog is a `<dialog>` element in the HTML document opened through the `uxpShowModal()` method.

[Figure: Modal Dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-simple-modal.png)

This example opens a basic modal dialog from a button in the main panel.

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Open Modal Dialog</sp-heading>
    <sp-button id="openDialogBtn">Click</sp-button>

    <dialog>
      <sp-heading>👋 Hello Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content</sp-body>
    </dialog>
  </body>
</html>
```

### main.js

```javascript
const openDialogBtn = document.getElementById("openDialogBtn");
openDialogBtn.addEventListener("click", () => {
  const dialog = document.querySelector("dialog");
  dialog.uxpShowModal({
    // 👈
    title: "Demo Modal Dialog", // 👈
    resize: "none", // 👈
    size: { width: 300, height: 300 }, // 👈
  }); // 👈
});
```

### Modal Dialog creation properties

`uxpShowModal()` is **asynchronous**. It returns a Promise that resolves to the value supplied to `dialog.close()`, and it accepts an options object with these properties.

| Property | Type | Description |
| --- | --- | --- |
| **title** | string | Dialog title text |
| **titleVisibility** | `"show"` \| `"none"` | Controls title display |
| **resize** | `"none"` \| `"both"` \| `"horizontal"` \| `"vertical"` | Controls user resize directions |
| **size** | `{ width: number; height: number; }` | Initial dialog dimensions |
| **minSize** | `{ width: number; height: number; }` | Smallest permitted dimensions |
| **maxSize** | `{ width: number; height: number; }` | Largest permitted dimensions |

### Multiple Modal Dialogs

Because of how modal dialogs are built, your HTML document can contain **multiple `<dialog>` elements**. Give each one an `id` and open the selected dialog independently with `uxpShowModal()`.

[Figure: Multiple Modal Dialogs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-multiple-modals.png)

These dialogs come from the same Panel and are modal, so only one can be open at any given time.

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Open Modal Dialog</sp-heading>
    <sp-button-group>
      <sp-button id="openFirstDialogBtn">Open First Dialog</sp-button>
      <sp-button id="openSecondDialogBtn">Open Second Dialog</sp-button>
    </sp-button-group>

    <dialog id="modal1">
      <sp-heading>👋 Hello Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content 1</sp-body>
    </dialog>

    <dialog id="modal2">
      <sp-heading>👋 Hello Another Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content 2</sp-body>
    </dialog>
  </body>
</html>
```

### main.js

```javascript
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

documwent.querySelector("#openFirstDialogBtn").addEventListener("click", () => {
  modal1.uxpShowModal({
    /* ... options ... */
  });
});

document.querySelector("#openSecondDialogBtn").addEventListener("click", () => {
  modal2.uxpShowModal({
    /* ... options ... */
  });
});
```

You can also **chain modal dialogs** by opening one modal dialog from another. Add the needed UI controls and handlers to the dialog that starts the next one. In a chained flow, both dialogs are open together, but the first remains blocked until the second closes.

[Figure: add modal dialogs chained modals](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-chained-modals.png)

## Dialog Lifecycle and Event Handling

Call `close()` on the dialog element to dismiss a modal dialog from code. The method accepts an optional value, and that value is delivered to the caller of `uxpShowModal()` when its Promise resolves. Use it to return data or describe how the dialog ended.

### Example: Close a Modal Dialog and return a value

This example uses a modal dialog with two buttons: **OK** and **Cancel**. Either click dismisses the dialog and returns `"ok"` or `"cancel"` as appropriate.

[Figure: Modal Dialog - close event](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-close-event.png)

To receive that value, call `uxpShowModal()` with `await`; mark the button "click" event handler as `async` too.

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <sp-heading>Open Modal Dialog</sp-heading>
    <sp-button id="openDialogBtn">Click</sp-button>

    <dialog>
      <sp-heading>👋 Hello Modal Dialog!</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body>Modal body content</sp-body>
      <sp-button-group>
        <sp-button id="closeDialogBtn">OK</sp-button>
        <sp-button id="cancelDialogBtn">Cancel</sp-button>
      </sp-button-group>
    </dialog>
  </body>
</html>
```

### main.js

```javascript
// Modal Dialog reference
const mDialog = document.querySelector("dialog");

// Modal dialog buttons event handlers -----------------------
mDialog?.querySelector("#closeDialogBtn")?.addEventListener("click", (evt) => {
  mDialog.close("ok");
});
// Cancel button event handler on the modal dialog
mDialog?.querySelector("#cancelDialogBtn")?.addEventListener("click", (evt) => {
  mDialog.close("cancel");
});

// Open dialog button event handler -------------------------
document.querySelector("#openDialogBtn")?.addEventListener("click", async () => {
  console.log("Opening dialog");
  const res = await mDialog?.uxpShowModal({
    title: "Demo Modal Dialog",
    resize: "none",
    size: { width: 300, height: 300 },
  });
  console.log("Dialog closed with:", res); // 👈 "ok", "cancel", or
  // 👈 "reasonCanceled"!
});
```

Dialog dismissal

If the user closes the dialog with the **red dot** on Mac, the **X** button on Windows, or the **Esc** key, the `close()` method receives **`"reasonCanceled"`**. Handle that value so the plugin responds consistently.

## Modal Dialogs as Command UIs

For lightweight command interfaces, modal dialogs are useful after [`alert()`](uxp-html-dom.md), [`prompt()`](uxp-html-dom-2.md), and [`confirm()`](uxp-html-dom.md) are too limited. The next example creates an About dialog for a command.

[Figure: Modal Dialog - About dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-command-modal.png)

Such interfaces are usually small and show plugin details, copyright information, or similar metadata.

### Example: About dialog

### main.js

```javascript
const { entrypoints, host, versions } = require("uxp");
const manifest = require("./manifest.json");
const os = require("os");

entrypoints.setup({
  commands: {
    "about-command": async () => {
      // Create the dialog dynamically (or load from an HTML file)
      const dialog = document.createElement("dialog");
      dialog.innerHTML = `
        <sp-heading>Clip Mixer</sp-heading>
        <sp-divider size="L"></sp-divider>
        <sp-body>🙌 Thanks for using Clip Mixer v${manifest.version}!</sp-body>
        <sp-body><b>Application:</b> ${host.name} v${host.version} (${os.platform()})</sp-body>
        <sp-body><b>UXP Runtime:</b> ${versions.uxp} - <b>Plugin Version:</b> ${
          versions.plugin
        }</sp-body>
      `.trim();
      // ☝ trim is a safety measure to avoid whitespace issues

      document.body.appendChild(dialog);

      // Add styles programmatically using element.style
      dialog.style.color = "white";
      dialog.style.padding = "16px";
      dialog.querySelector("sp-divider").style.margin = "0 0 16px 0";
      dialog.querySelector("sp-heading").style.margin = "0 0 16px 0";

      // Show modal
      await dialog.uxpShowModal({
        title: "Command Modal Dialog",
        resize: "none",
        size: { width: 300, height: 200 },
      });
    },
  },
});
```

### manifest.json

```json
{
  "id": "Test-modaldialog",
  "name": "Test-modaldialog",
  "version": "1.0.0",
  "main": "main.js",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "entrypoints": [
    {
      "id": "about-command",
      "type": "command",
      "label": "About..."
    }
  ],
  "icons": [
    /* ... icons ... */
  ]
}
```

Here, `manifest.json` defines `about-command` in its `entrypoints` array, and `main.js` implements it with `entrypoints.setup()`. For a commands refresher, see [this guide](uxp-panels-and-commands.md); for implementation examples, see [this tutorial](uxp-tutorials.md).

The UI is assembled with JavaScript methods for the parent `<dialog>` and styling, while Template Literals keep the markup readable.

Trim Template Literals

When assigning Template Literals to `dialog.innerHTML`, call `trim()` to remove leading and trailing whitespace that could otherwise cause issues.

## Load external HTML files

You can keep code tidier by putting dialog HTML in a separate file. In UXP, use `fetch()` for this pattern, convert the response to text, and keep in mind that the calls are asynchronous. Building on the previous structure, the external HTML can be loaded and assigned to `dialog.innerHTML`.

### main.js

```javascript
const { entrypoints, host, versions } = require("uxp");
const manifest = require("./manifest.json");
const os = require("os");

entrypoints.setup({
  commands: {
    "about-command": async () => {
      // Load the HTML content from an external file
      // In this case, the _dialog.html file is located in the
      // same directory as the main.js file
      const dialogHtml = await fetch("./_dialog.html") // 👈
        .then((res) => res.text()); // 👈 handle the response as text
      console.log("About command");
      const dialog = document.createElement("dialog");
      dialog.innerHTML = dialogHtml.trim();
      // ...
      // Replace the placeholders with the actual values. It is the
      // equivalent of using Template Literals in the previous example
      dialog.querySelector("#version").textContent = manifest.version;
      dialog.querySelector("#app-name").textContent = host.name;
      dialog.querySelector("#app-version").textContent = host.version;
      dialog.querySelector("#platform").textContent = os.platform();
      dialog.querySelector("#uxp-version").textContent = versions.uxp;
      dialog.querySelector("#plugin-version").textContent = versions.plugin;
      // ...
      document.body.appendChild(dialog);
      // ...
      const result = await dialog.uxpShowModal({
        /* ... */
      });
    },
  },
});
```

### \_dialog.html

```html
<sp-heading>Clip Mixer</sp-heading>
<sp-divider size="L"></sp-divider>
<sp-body>🙌 Thanks for using Clip Mixer v<span id="version"></span>!</sp-body>
<sp-body
  ><b>Application:</b> <span id="app-name"></span> v<span id="app-version"></span> (<span
    id="platform"
  ></span
  >)</sp-body
>
<sp-body
  ><b>UXP Runtime:</b> <span id="uxp-version"></span> - <b>Plugin Version:</b>
  <span id="plugin-version"></span
></sp-body>
```

### manifest.json

```json
{
  "id": "Test-modaldialog",
  "name": "Test-modaldialog",
  "version": "1.0.0",
  "main": "main.js",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "entrypoints": [
    {
      "id": "about-command",
      "type": "command",
      "label": "About..."
    }
  ],
  "icons": [
    /* ... icons ... */
  ]
}
```

Relative to the [previous example](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/index.md#example-about-dialog), this version takes a little more setup to inject values. Template Literals can place data directly with `${}`, while an external HTML file requires `querySelector()` calls for the `<span>` placeholders before setting their values in code.

The `"main"` field in `manifest.json` still points to `"main.js"`, a JavaScript file, even though the dialog body comes from a separate `.html` file.

External files with `fetch()` and `require()`

In the [original About dialog example](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/index.md#example-about-dialog), `require()` imports `manifest.json` so `main.js` can read the plugin version. This is a useful way to access plugin metadata; more generally, `require()` works with local `.js` and `.json` plugin files.

For other file types, use `fetch()` or the `fs` methods from the [file system operations](uxp-filesystem-operations.md) tutorial.

## Singleton pattern for Modal Dialogs

For richer dialogs, use a Singleton pattern to keep the dialog UI and logic together. This separates creation, initialization, and execution while avoiding duplicate handlers when the script is evaluated again.

```javascript
class ModalDialog {
  // Singleton support
  static #instance;

  // Private state
  #dialog;
  #params; // (optional) store validated values collected from the UI

  // Enforce the singleton: return the existing instance if present
  constructor() {
    if (ModalDialog.#instance) return ModalDialog.#instance;
    ModalDialog.#instance = this;
  }
  // get (or lazily create) the singleton instance
  static getInstance() {
    if (!ModalDialog.#instance) ModalDialog.#instance = new ModalDialog();
    return ModalDialog.#instance;
  }

  // Build the dialog UI and assign to #dialog
  async createDialog() {
    /* ... */
  }

  // Set defaults and wire listeners
  initDialog() {
    /* ... */
  }

  // Show the dialog and return a Promise with the result
  async runDialog() {
    /* ... */
  }

  // Private: execute Host App DOM logic as needed
  async #runRoutine() {
    /* ... */
  }
}

// Example usage
try {
  const modalDialog = ModalDialog.getInstance();
  await modalDialog.createDialog();
  modalDialog.initDialog();
  const res = await modalDialog.runDialog();
  res;
} catch (error) {
  console.error("Argh!", error);
}
```

The members in the class serve these roles.

| Property/Method | Description |
| --- | --- |
| `static #instance` | Private static field that stores the **singleton instance** so the same dialog object is reused. |
| `#dialog` | Private **reference to the** `<dialog>` element used internally for modal show and close actions. |
| `#params` | Private **state container for validated values** collected from the UI, useful when routines need that data. |
| `constructor()` | **Enforces the singleton** by returning an existing instance when one has already been created. |
| `static getInstance()` | **Convenience accessor** that returns the singleton, creating it lazily when needed; prefer it over `new`. |
| `async createDialog()` | **Builds the dialog UI** and stores it in `#dialog`; call once, then reuse for later openings. |
| `initDialog()` | **Initializes** defaults and **attaching event listeners** such as button clicks, form changes, and focus/blur. |
| `async runDialog()` | **Displays the modal** and resolves after the dialog is closed. |
| `async #runRoutine()` | Private method to **run any Host App DOM code** with data gathered through the dialog. |

### Example: real-world Dialog

Here is a practical use of the Singleton pattern for a modal dialog opened from a Panel. The files are laid out like this:

```text
 📁 .                    Plugin root directory
 ├── 📂 fragments        Dialog-specific files
 │   ├── 📄 dialog.html  Modal dialog UI markup
 │   └── 🎨 styles.css   Dialog-specific styles
 ├── 📄 index.html       Main panel UI
 ├── 🎨 style.css        Main panel styles
 ├── ⚙️ main.js          Main panel and Dialog logic
 └── 📋 manifest.json    Plugin configuration
```

The tree uses **fragments** for the dialog markup and styles, keeping them separate from the panel and avoiding Template Literals or fully programmatic element creation in `main.js`.

[Figure: Modal Dialog - Singleton class](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-singleton-class.png)

This example dialog represents a fictional "Set sequence dimensions" tool that lets the user enter sequence width and height. Premiere API calls have been removed, while the control flow and UI remain close to a real implementation.

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <sp-heading>Open Modal Dialog</sp-heading>
    <sp-button id="openDialogBtn">Open Dialog (singleton)</sp-button>
  </body>
</html>
```

### styles.css

```css
body {
  color: white;
  padding: 16px;
}

sp-divider,
sp-heading {
  margin: 0 0 16px 0;
}
```

### main.js

```javascript
// Global constants for the dialog
const G = {
  version: "1.0.0",
  title: "Input required...",
  dialogSize: { width: 240, height: 150 },
  defaultValues: { width: 1920, height: 1080 },
  valueRange: { min: 320, max: 10240 },
};

class ModalDialog {
  static #instance; // Singleton instance
  #dialog;          // Reference to the dialog element
  // State container for validated values
  #params = { width: 0, height: 0 };

  constructor() {
    // Enforce singleton pattern
    if (ModalDialog.#instance) { return ModalDialog.#instance; }
    ModalDialog.#instance = this;
  }
```
