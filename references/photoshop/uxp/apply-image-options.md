# ApplyImageOptions

Apply Image receives an object literal with the following properties through [Layer.applyImage](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md#applyimage).
For Typescript development, `ApplyImageOptions` is available as a type.

```javascript
const options = {
  source: {
    document: require("photoshop").app.documents[0],
    layer: require("photoshop").app.documents[0].layers[1],
    channel: require("photoshop").app.documents[0].channels[2],
  },
  blending: require("photoshop").constants.ApplyImageBlendMode.SCREEN,
};
await require("photoshop").app.activeDocument.layers[0].applyImage(options);
```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| blending | [_ApplyImageBlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#applyimageblendmode) | MULTIPLY | - | 24.5 | Blend mode for compositing the source onto the current layer. |
| mask | [_ApplyImageSource_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/applyimagesource.md) | - | - | 24.5 | Mask reference for Apply Image. |
| opacity | _number_ | 100 | 0..100 | 24.5 | Opacity applied during source compositing. |
| preserveTransparency | _boolean_ | false | - | 24.5 | Whether original transparency on the active layer is preserved. |
| source | [_ApplyImageSource_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/applyimagesource.md) | - | - | 24.5 | Input reference for Apply Image. |
