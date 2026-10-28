# Layer

Use `Layer` for a layer or group of layers; it belongs to a specific [Document](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/index.md#Document).

Lower a layer's opacity and move it in front:

```javascript
const app = require("photoshop").app;
const doc = app.activeDocument;
function bringActiveLayerToFront(executionContext) {
  const layer = doc.activeLayers[0];
  layer.opacity = layer.opacity - 10;
  layer.bringToFront();
}

await require("photoshop").core.executeAsModal(bringActiveLayerToFront);
```

Scale every layer with 'smaller' in its name:

```javascript
const app = require("photoshop").app;
const doc = app.activeDocument;
const layers = doc.layers;
async function scaleLayers(executionContext) {
  for (layer of layers) {
    if (layer.name.includes("smaller")) {
      await layer.scale(80, 80);
    }
  }
}

await require("photoshop").core.executeAsModal(scaleLayers);
```

A layer's `kind` property can be `GROUP` when it is a Group layer, meaning a layer or folder containing multiple layers. Use the `layers` property to reach a Group layer's contents, and use `parent` to move through the layer-list tree.

More `Layer` details are documented under [Layer](../layer/reference-index.md); collection-level material is in [Layers](../host-api/layers/reference-index.md).
