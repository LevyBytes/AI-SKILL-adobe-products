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

Here, `manifest.json` defines `about-command` in its `entrypoints` array, and `main.js` implements it with `entrypoints.setup()`. For a commands refresher, see [this guide](../panels-and-commands/reference-index.md); for implementation examples, see [this tutorial](../add-a-command-entrypoint/reference-index.md).

The UI is assembled with JavaScript methods for the parent `<dialog>` and styling, while Template Literals keep the markup readable.

Trim Template Literals

When assigning Template Literals to `dialog.innerHTML`, call `trim()` to remove leading and trailing whitespace that could otherwise cause issues.
