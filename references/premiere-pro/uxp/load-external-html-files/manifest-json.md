# manifest.json

```json
{
  "id": "Test-modaldialog",
  "name": "Test-modaldialog",
  "version": "1.0.0",
  "main": "main.js",
  "host": {
    "app": "premierepro",
    "minVersion": "25.6.0"
  },
  "manifestVersion": 5,
  "entrypoints": [
    {
      "id": "about-command",
      "type": "command",
      "label": "About..."
    }
  ],
  "icons": []
}
```

... icons ...

Relative to the [previous example](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/index.md#example-about-dialog), this version takes a little more setup to inject values. Template Literals can place data directly with `${}`, while an external HTML file requires `querySelector()` calls for the `<span>` placeholders before setting their values in code.

The `"main"` field in `manifest.json` still points to `"main.js"`, a JavaScript file, even though the dialog body comes from a separate `.html` file.

External files with `fetch()` and `require()`

In the [original About dialog example](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/index.md#example-about-dialog), `require()` imports `manifest.json` so `main.js` can read the plugin version. This is a useful way to access plugin metadata; more generally, `require()` works with local `.js` and `.json` plugin files.

For other file types, use `fetch()` or the `fs` methods from the [file system operations](../filesystem-operations/reference-index.md) tutorial.
