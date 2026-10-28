# Developing Script files

According to the [general documentation for UXP Scripting](how-uxp-scripting-works/reference-index.md), script files run in a context that closely matches UXP plugins. The main job remains controlling Photoshop.

With the [UXP Photoshop DOM API](uxp-index.md), a script file such as [cloudy.psjs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/cloudy.psjs) can perform these steps:

1. Make a new file.
2. Add a new layer.
3. Fill it with the foreground color.
4. Change the layer name.
5. Apply the Clouds filter.
6. Put the layer in a group.

```javascript
const app = require("photoshop").app;
app.documents.add();
app.activeDocument.createLayer({ name: "not descriptive name" });
require("photoshop").action.batchPlay(
  [{ _obj: "fill", using: { _enum: "fillContents", _value: "foregroundColor" } }],
  {},
);
app.activeDocument.layers[0].applyClouds();
app.activeDocument.layers[0].name = "cloudy";
app.activeDocument.createLayerGroup({ fromLayers: app.activeDocument.layers[0] });
```

_The leading blank line matters; the UDT screenshot shows why._

One of those steps uses `batchPlay`. The [at-length description](batch-play/reference-index.md) explains why that route is needed and breaks down the situation.
