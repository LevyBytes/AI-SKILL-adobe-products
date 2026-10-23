# Singleton pattern for Modal Dialogs

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

## Singleton pattern for Modal Dialogs

Complete singleton dialog example:

- [index.html](examples/sequence-dimensions-dialog/index.html)
- [styles.css](examples/sequence-dimensions-dialog/styles.css)
- [dialog.html](examples/sequence-dimensions-dialog/fragments/dialog.html)
- [styles.css](examples/sequence-dimensions-dialog/fragments/styles.css)
- [manifest.json](https://developer.adobe.com/premiere-pro/uxp/plugins/tutorials/add-modal-dialogs/)
- [settings.js](examples/sequence-dimensions-dialog/settings.js)
- [dialog-elements.js](examples/sequence-dimensions-dialog/dialog-elements.js)
- [dialog-input.js](examples/sequence-dimensions-dialog/dialog-input.js)
- [modal-dialog.js](https://developer.adobe.com/premiere-pro/uxp/plugins/tutorials/add-modal-dialogs/)
- [main.js](examples/sequence-dimensions-dialog/main.js)
