# Add Modal Dialogs (part 2)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Singleton pattern for Modal Dialogs

// Static getter for singleton instance (optional, cleaner API)
static getInstance() {
if (!ModalDialog.#instance) {
ModalDialog.#instance = new ModalDialog();
}
return ModalDialog.#instance;
}

// Create and populate a dialog w/ HTML elements
// Assign to #dialog
// Uses the same pattern as styles: create once, reuse thereafter
async createDialog() {
// Add scoped styles to the head
// The conditional check ensures the styles are added only once
// to avoid duplicates when the dialog is opened multiple times
if (!document.querySelector("#modal-dialog-styles")) {
const styleEl = document.createElement("style");
styleEl.id = "modal-dialog-styles";
styleEl.textContent = (
await fetch("./fragments/styles.css").then((res) => res.text())
).trim();
document.head.appendChild(styleEl);
}

    // Same pattern for the dialog: create once, reuse thereafter
    if (!document.querySelector("#modal-dialog")) {
      this.#dialog = document.createElement("dialog");
      this.#dialog.id = "modal-dialog";
      // Add unique class for scoping the CSS
      this.#dialog.classList.add("modal-dialog");
      this.#dialog.innerHTML = (
        await fetch("./fragments/dialog.html").then((res) => res.text())
      ).trim();
      document.body.appendChild(this.#dialog);
    } else {
      // Reuse existing dialog
      this.#dialog = document.querySelector("#modal-dialog");
    }

}

// Populate w/ default values
// Attach event listeners (only once)
initDialog() {
const wField = this.#dialog.querySelector("#width");
const hField = this.#dialog.querySelector("#height");

    // Always reset to default values on each init
    wField.value = G.defaultValues.width.toString();
    hField.value = G.defaultValues.height.toString();

    // Attach event listeners only once; check the dialog element itself
    // since the dialog persists but new instances are created each time
    if (!this.#dialog.dataset.listenersAttached) {
      // Sanitize input for the textfields
      const sanitizeInput = (evt) => {
        /* ... */
      };
      wField.addEventListener("input", sanitizeInput);
      hField.addEventListener("input", sanitizeInput);

      // Validate and return params object if valid, null if invalid
      const validateAndGetParams = () => {
        const w = parseInt(wField.value);
        const h = parseInt(hField.value);
        if (
          isNaN(w) || isNaN(h) ||
          w < G.valueRange.min || w > G.valueRange.max ||
          h < G.valueRange.min || h > G.valueRange.max
        ) {
          return null;
        }
        return { width: w, height: h };
      };

      this.#dialog
        .querySelector("#okDialogBtn")
        .addEventListener("click", () => {
          const params = validateAndGetParams();
          if (params) {
            // Store validated params for use in #runRoutine
            this.#params = params;
            this.#dialog.close("ok");
          } else {
            // alert the user that the parameters are invalid
            alert("Invalid parameters");
          }
        });
      this.#dialog
        .querySelector("#cancelDialogBtn")
        .addEventListener("click", () => {
          this.#dialog.close("cancel");
        });

      this.#dialog.addEventListener("keydown", (evt) => {
        if (evt.key === "Enter") {
          const params = validateAndGetParams();
          if (params) {
            this.#params = params;
            this.#dialog.close("ok");
          }
        }
      });

      // Mark the dialog element itself as having listeners attached
      this.#dialog.dataset.listenersAttached = "true";
    }

}

async runDialog() {
const rv = await this.#dialog.uxpShowModal({
title: G.title,
resize: "none",
size: G.dialogSize,
});

    if (rv === "ok") {
      console.log("Dialog closed with OK");
      const res = await this.#runRoutine();
      if (res === true) return true;
      throw res; // bubble any routine error
    }

    if (rv === "cancel" || rv === "reasonCanceled") {
      throw "cancel";
    }

    throw "Dialog closed unexpectedly";

}

// Run whatever Host App DOM code is needed
// Has access to validated params via this.#params
async #runRoutine() {
console.log("Running PPro routine with params:", this.#params);
//... perform the (fictitious) routine using
// this.#params.width and this.#params.height
return true;
}

// Getter to access validated params (if needed by external code)
getParams() {
// Return a copy to prevent external mutation
return { ...this.#params };
}
}

const btn = document.querySelector("#openDialogBtn");
if (btn && !btn.dataset.listenerAttached) {
btn.addEventListener("click", async () => {
try {
// const modalDialog = new ModalDialog() // 👈 same 👇
const modalDialog = ModalDialog.getInstance();
await modalDialog.createDialog();
modalDialog.initDialog();
const res = await modalDialog.runDialog();
res;
} catch (error) {
console.error("Arrgh!", error);
}
});
// ✅ ensure we only wire the listener once
btn.dataset.listenerAttached = "true";
}

````

### fragments/dialog.html

```html

  <sp-heading size="S">Set sequence dimensions</sp-heading>
  <sp-divider size="L"></sp-divider>

    <sp-textfield id="width" type="number">
      <sp-label slot="label">Width</sp-label>
    </sp-textfield>
    <sp-textfield id="height" type="number">
      <sp-label slot="label">Height</sp-label>
    </sp-textfield>

  <sp-button-group>
    <sp-button variant="secondary" id="cancelDialogBtn">
      Cancel
    </sp-button>
    <sp-button variant="cta" id="okDialogBtn">
      OK
    </sp-button>
  </sp-button-group>

````

### fragments/styles.css

```css
/* Everything is scoped for the modal dialog only */
dialog.modal-dialog {
  padding: 0;
}

dialog.modal-dialog .wrapper {
  min-height: 100vh;
  overflow: hidden;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
}

dialog.modal-dialog .row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

dialog.modal-dialog .spaced {
  margin-bottom: 16px;
}

dialog.modal-dialog sp-textfield {
  display: flex;
  width: 92px;
  margin-bottom: 6px;
}

dialog.modal-dialog sp-button-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
```

### manifest.json

```json
{
  "id": "Test-modaldialog",
  "name": "Test-modaldialog",
  "shortname": "3pstarterplugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "requiredPermissions": { "localFileSystem": "request" },
  "featureFlags": { "enableAlerts": true },
  "entrypoints": [
    {
      "id": "starterpanel",
      "type": "panel",
      "minimumSize": { "width": 430, "height": 500 },
      "maximumSize": { "width": 2000, "height": 2000 },
      "preferredDockedSize": { "width": 230, "height": 300 },
      "preferredFloatingSize": { "width": 400, "height": 300 },
      "label": { "default": "PremierePro Modal Dialog" },
      "icons": [
        {
          "width": 23,
          "height": 23,
          "path": "icons/dark.png",
          "scale": [1, 2],
          "theme": ["darkest", "dark", "medium"]
        },
        {
          "width": 23,
          "height": 23,
          "path": "icons/light.png",
          "scale": [1, 2],
          "theme": ["lightest", "light"]
        }
      ]
    }
  ],
  "icons": [
    {
      "width": 48,
      "height": 48,
      "path": "icons/plugin-icon.png",
      "theme": ["darkest", "dark", "medium", "lightest", "light", "all"],
      "species": ["pluginList"],
      "scale": [1, 2]
    }
  ]
}
```

### Implementation Details

This example shows a fuller modal-dialog pattern that combines several best practices. The following sections explain each file and the reason for its structure.

### 1. The Panel UI: `index.html` and `style.css`

The panel itself stays deliberately small: it only has a heading and a button, matching the earlier examples.

### 2. The Manifest: `manifest.json`

The manifest follows the normal panel entrypoint shape, with one important addition: the `enableAlerts` feature flag, which is **required to use the `alert()` method** called by `initDialog()` when invalid input is detected.

### 3. Dialog UI files: `fragments/dialog.html` and `fragments/styles.css`

Markup for the dialog is stored under `fragments/`, a web-development-style layout that makes the dialog UI easier to move and maintain. The entire `dialog.html` content is wrapped in a `<div>` because `main.js` creates the `<dialog>` element dynamically.

Styles are scoped so they do not collide with panel styling. The `<dialog>` element gets a `modal-dialog` class, and the CSS targets descendants under that class. Without this, generic selectors such as `.wrapper` or `.row` could conflict between the panel and dialog.

### 4. The Core Logic: `main.js`

The main behavior is implemented in `main.js`. The next sections walk through it in pieces.

### Global Configuration Object

The `G` object keeps title, size, defaults, and validation bounds in one shared configuration place.

### Singleton Pattern

The Singleton pattern keeps the dialog class to **one instance for the whole plugin lifetime**. If the code created a new dialog every time, it could add duplicate DOM nodes and repeated event listeners, causing leaks and erratic behavior.

`static #instance` is **private to the class** because of the `#` prefix. When `new ModalDialog()` is called, the constructor returns the existing instance if one is already present. The `getInstance()` static method is a clearer entry point and is the **preferred way to get the singleton**.

`#dialog` keeps the actual `<dialog>` DOM element. `#params` stores validated user-entered width and height after OK is clicked. Both fields are private because external code does not need direct access.

### `createDialog()`

`createDialog()` constructs the dialog UI, and it is `async` because it loads external files through `fetch()`. Before creating new elements, it checks the DOM with `document.querySelector()`. That check matters for correctness and performance because the DOM should not accumulate duplicate copies of the dialog.

The method inserts CSS into a `<style>` element under `<head>`. It gives that style element the `id` `#modal-dialog-styles` so later calls can detect it and skip another injection. The dialog receives the `id` `modal-dialog` and the `class` `modal-dialog`: the ID supports unique lookup, while the class scopes CSS selectors such as `dialog.modal-dialog` in `styles.css`.

When the dialog already exists, the `else` branch reuses it by storing the existing DOM reference.

### `initDialog()`

After the dialog has been created in the DOM, `initDialog()` applies defaults and connects handlers. It has two main phases:

1. **State reset**.
2. **Event listener attachment**.

The reset phase runs every time `initDialog()` is called, restoring the input fields to their default values so each opening starts from a clean state. The listener phase is protected by a conditional. It uses HTML5 `data-*` attributes to record whether the handlers have already been installed. When they are missing, the method attaches them and sets the marker to `"true"`, preventing duplicated listeners across repeated openings.

Several helper functions and event handlers appear in this section:

- **`sanitizeInput()`**: A placeholder where production code would filter bad characters or format typing input.
- **`validateAndGetParams()`**: Checks the user's values and returns validated data or `null` on failure. It parses the strings as integers and rejects `NaN`, which occurs when non-numeric text is entered.
- **OK button handler**: On click, it calls `validateAndGetParams()`. With valid input, it stores the values in `this.#params` for later use and closes with `"ok"`. With invalid input, it shows an alert. Validation should never fail silently because that leaves the user without feedback.
- **Cancel button handler**: Closes the dialog with `"cancel"`.
- **Enter key handler**: Adds **keyboard accessibility** so pressing Enter can submit the dialog instead of requiring an OK click.

The Enter handler leaves the dialog open when input is invalid. That is intentional: Enter should not submit bad values, so the user must either correct them or cancel explicitly.

### `runDialog()`

`runDialog()` displays the dialog and processes the result. It awaits `uxpShowModal()`, so execution pauses until dismissal. The return value, `rv`, is the value passed to `dialog.close()` by a handler: `"ok"`, `"cancel"`, or `"reasonCanceled"` when the user uses the title bar or Esc key.

This method treats cancellation as an exception path. If the user cancels, it throws `"cancel"` so callers must handle that case in a `catch` block. When the dialog returns OK, it calls the private `#runRoutine()` method to perform the work, such as Premiere API calls.

### `#runRoutine()`

This private method is where **any Host Application DOM operations** would run using the collected parameters. The call is error-aware: returning `true` signals success, while any other return value is thrown again by `runDialog()` so the caller can handle it. That layering reports failures from validation, cancellation, or routine execution.

### `getParams()`

The last method exposes the dialog's stored state in a controlled way. Since `#params` is private, outside code cannot read it directly. `getParams()` returns a shallow copy with the spread operator `...`, giving callers a read-only snapshot and preventing accidental or intentional mutation of the internal state.

## Summary

Modal dialogs are temporary blocking windows that require a response before the user resumes work in Premiere, making them useful for decisions, forms, and alerts.

**Key Concepts:**

1. **Basic structure**: A modal dialog is a `<dialog>` HTML element opened with `uxpShowModal()`, which returns a Promise resolved when the dialog closes.
2. **Two primary use cases**:
   - **Command UIs**: Supply UI for command entrypoints without keeping panels around.
   - **Panel dialogs**: Launch extra UI from panels to collect input or present information.
3. **Multiple and chained dialogs**: A panel can launch several independent modal dialogs, with only one open at a time, and a dialog can open another dialog in a chained flow.
4. **Dialog lifecycle**: Use `dialog.close(value)` to dismiss a dialog and return data to the caller. Handle `"reasonCanceled"` when a user closes by title bar control or Esc.
5. **Best practices**: For larger dialogs, use the Singleton pattern to avoid duplicate DOM nodes and handlers. Load external HTML with `fetch()` and scope CSS to prevent style collisions.
