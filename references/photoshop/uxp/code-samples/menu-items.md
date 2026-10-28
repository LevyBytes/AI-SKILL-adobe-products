# Menu Items

For a plugin that automates a straightforward workflow, or where no user input is needed, define manifest entry points that expose commands. This style of plugin runs without a visible UI. A `"command"` entry point maps the menu click to the global-scope method in your plugin's JS file that Photoshop should invoke.

```json
{
  "entrypoints": [
    {
      "type": "command",
      "id": "writelayers",
      "label": {
        "default": "Export Top Layers..."
      }
    }
  ]
}
```

```javascript
async function writelayers() {
  // This method will be called by Photoshop when user clicks "Plugins > <Your Plugin> > Export Top Layers...
}
```

The [direct-action-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/direct-action-js-sample) demonstrates this pattern by collecting the top layers from the active document, asking the user for a save location, and exporting them into that folder.

With this approach, one plugin can contain several separate capabilities.
