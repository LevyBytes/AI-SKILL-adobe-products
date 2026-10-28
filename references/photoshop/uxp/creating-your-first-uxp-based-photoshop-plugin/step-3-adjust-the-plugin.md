# Step 3: Adjust the plugin

_This starter plugin technically works, but it still feels generic. Add a small customization so the output includes more information from each layer._

Open the [`Layer` class API Reference](../layer.md). That reference documents the properties and functions exposed on a layer object. Any property could be selected, but this tutorial uses the [`opacity: number` property](../layer.md).

Update `main.js` so the output includes that property:

```js
function showLayerNames() {
  // [...]
  const allLayerNames = allLayers.map((layer) => `${layer.name} (${layer.opacity} %)`);
  // [...]
}

// [...]
```

After saving `main.js`, reload the plugin so Photoshop runs the changed code. In the UXP Developer Tool, use _"••• > Reload"_.

Changes in `manifest.json` require a full plugin reload before they appear. For that full reload, use the UXP Developer Tool: choose _"Unload"_, then choose _"Load"_.

Another option is automatic reloading whenever files change. In UDT, run _"Watch"_ from the plugin actions menu to watch the plugin folder.

Return to Photoshop and click _"Populate Layers"_ again; the output now includes the selected property:

[Figure: A Photoshop panel showing a list of layers including their opacity and a button called "Populate Layers"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/creating-your-first-plugin/panel-with-opacity.png)

When the plugin panel is docked in a toolbar, the icon may also be missing. Fix that by updating the `"path"` field in `manifest.json` to the new icon filename. For example, `"path": "icons/dark.png",` points at this icon-file set:

[Figure: screenshot of a file structure. The folder icons contains two files: "dark@1x.png" and "dark@2x.png"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/creating-your-first-plugin/icon-file.png)
