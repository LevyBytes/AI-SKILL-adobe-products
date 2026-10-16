# Step 2: Run the plugin

Open Adobe Photoshop and create a sample document that the plugin can use.

To launch the plugin inside Photoshop, use the _"•••"_ button at the right side of the plugin row in the UDT and choose _"Load"_. Photoshop loads the plugin and opens its panel automatically.

The _quick-layers-starter_ template starts with a panel containing a _"Populate Layers"_ button. Pressing it fills a panel area with layer names:

[Figure: A Photoshop panel with a list of layer names and a button called "Populate Layers"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/creating-your-first-plugin/panel-base.png)

Now look at the pieces that run behind that plugin.

In `manifest.json`, the `"main"` field points at `index.html`:

```json
{
  "id": "my.first.plugin",
  "name": "My first plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": [],
  "manifestVersion": 4,
  "entrypoints": [
    {
      "type": "panel",
      "id": "vanilla",
      "icons": [],
      "label": {
        "default": "Starter Panel"
      }
    }
  ],
  "icons": []
}
```

...

[...]

[...]

[...]

Photoshop reads that setting and loads the referenced `index.html` file. That file defines the panel UI:

```html
<!doctype html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <style>
    /* [...] */
  </style>
  <body>
    <sp-heading>Layers</sp-heading>
    <sp-body id="layers"> No layers </sp-body>
    <footer>
      <sp-button id="btnPopulate">Populate Layers</sp-button>
    </footer>
  </body>
</html>
```

The same `index.html` file then loads `index.js`.

Although the markup resembles ordinary HTML, UXP is not a browser; it supports only a [subset of HTML/CSS/JS features](https://raw.githubusercontent.com/src/pages/uxp-api/reference-html/General/Unsupported%20Elements.md). The custom tags `<sp-heading>`, `<sp-body>`, and `<sp-button>` are also visible in the sample. These [Spectrum UXP components](../spectrum-uxp-reference.md) implement the Spectrum Design system so plugin panels fit naturally into the Photoshop UI.

In `index.js`, a `click` listener is attached to the _"Populate
Layers"_ button. The listener calls APIs documented under [Photoshop API](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/) and writes the layer names into `<sp-body id="layers" />`:

```js
function showLayerNames() {
  const app = window.require("photoshop").app;
  const allLayers = app.activeDocument.layers;
  const allLayerNames = allLayers.map((layer) => layer.name);
  const sortedNames = allLayerNames.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  document.getElementById("layers").innerHTML = `
      <ul>${sortedNames.map((name) => `<li>${name}</li>`).join("")}</ul>`;
}

document.getElementById("btnPopulate").addEventListener("click", showLayerNames);
```

Use `window.require()` to import API modules; in this example, the imported module is `require('photoshop')`.
