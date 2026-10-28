# TextLayerCreateOptions

Create a text layer by passing an object literal with any property listed below to [Document.createTextLayer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#createtextlayer).
For Typescript development, `TextLayerCreateOptions` is available as a type.

Note: With the `position` option, the text layer's top-left corner depends on the properties in use.
A Text Tool click establishes the layer's bottom-left corner.
The `position` value here uses that bottom-left point.
Supplying `{x: 0, y: 0}` will probably place the new layer just above y of 0, so it may not show "on the canvas".
That behavior is why Photoshop defaults the position to the document center.

```javascript
const options = {
  name: "myTextLayer",
  contents: "Hello, World!",
  fontSize: 24,
  position: { x: 200, y: 300 },
};
await require("photoshop").app.activeDocument.createTextLayer(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Resulting item's blend mode. |
| color | [_LabelColors_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#labelcolors) | NONE | 22.5 | Resulting item's label color. |
| contents | _string_ | "Lorem Ipsum" | 24.2 | Initial string placed in the text layer. |
| fontName | _string_ | "MyriadPro-Regular" | 24.2 | PostScript font name used by the text layer. |
| fontSize | _number_ | 12px | 24.2 | Text layer font size, in pixels. |
| group | _boolean_ | false | 22.5 | Set true to make a clipping mask from the preceding layer. |
| ~~mode~~ | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Deprecated; prefer `blendMode` above because that setting takes precedence. |
| name | _string_ | - | 22.5 | Layer name. When omitted, Photoshop generates one using the template, "Layer #". |
| opacity | _number_ | 100 | 22.5 | Resulting item's opacity. |
| position | [_Position_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/position.md) | document center | 24.2 | Text-layer insertion coordinates, in pixels |
| textColor | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | black | 24.2 | Color assigned to the text layer. |
