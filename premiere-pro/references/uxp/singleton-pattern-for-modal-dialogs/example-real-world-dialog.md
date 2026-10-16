# Example: real-world Dialog

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

Complete singleton dialog example:

- [index.html](../examples/sequence-dimensions-dialog/index.html)
- [styles.css](../examples/sequence-dimensions-dialog/styles.css)
- [dialog.html](../examples/sequence-dimensions-dialog/fragments/dialog.html)
- [styles.css](../examples/sequence-dimensions-dialog/fragments/styles.css)
- [manifest.json](../examples/sequence-dimensions-dialog/manifest.json)
- [settings.js](../examples/sequence-dimensions-dialog/settings.js)
- [dialog-elements.js](../examples/sequence-dimensions-dialog/dialog-elements.js)
- [dialog-input.js](../examples/sequence-dimensions-dialog/dialog-input.js)
- [modal-dialog.js](../examples/sequence-dimensions-dialog/modal-dialog.js)
- [main.js](../examples/sequence-dimensions-dialog/main.js)
