# Step 3: Solve problem with consecutive executions

If you have already done some development, or clicked _"Rename Layers"_ more than once, the current implementation's flaw may be visible. The first click works, but later clicks append another percentage each time:

[Figure: A layer with the name "Layer 1 (60 %) (60 %) (60 %)"](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/getting-started/editing-the-document/layer-name-problem.png)

Replace the layer loop with this code:

```js
// [...]
app.activeDocument.layers.forEach((layer) => {
  // Regular Expression that searches for the layer's name
  // without a previously appended layer opacity.
  // Cf. https://regex101.com/r/iWF1Yw/1
  const regExp = /^(.*?)( \(\d+ %\))?$/;
  const baseName = layer.name.match(regExp)[1];
  layer.name = `${baseName} (${layer.opacity} %)`;
});
// [...]
```

Here, `baseName` is taken from `layer.name.match(regExp)[1]`; it is the layer name with any trailing percentage removed, so each rename starts from that base.
