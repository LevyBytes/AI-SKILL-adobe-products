# PixelLayerCreateOptions

Create a pixel layer by passing an object literal with any property listed below to [Document.createLayer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#createlayer).
For Typescript development, `PixelLayerCreateOptions` is available as a type.

```javascript
const options = { name: "myLayer", opacity: 80, blendMode: constants.BlendMode.COLORDODGE };
await require("photoshop").app.activeDocument.createLayer(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Resulting item's blend mode. |
| color | [_LabelColors_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#labelcolors) | NONE | 22.5 | Resulting item's label color. |
| fillNeutral | _boolean_ | false | 22.5 | Whether Photoshop fills the layer with a neutral color while applying Blend Mode. |
| group | _boolean_ | false | 22.5 | Set true to make a clipping mask from the preceding layer. |
| ~~mode~~ | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Deprecated; prefer `blendMode` above because that setting takes precedence. |
| name | _string_ | - | 22.5 | Layer name. When omitted, Photoshop generates one using the template, "Layer #". |
| opacity | _number_ | 100 | 22.5 | Resulting item's opacity. |
