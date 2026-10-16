# createDocument

23.0

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md)>

Creates a new document.

With no options supplied, Photoshop creates a document of 7 x 5 inches at 300 pixels per inch.
That matches the "Default Photoshop Size" preset.

To choose any other preset installed with Photoshop or created by users, pass an object that includes a 'preset' string parameter.

You can also pass an object containing one or more parameters. Any omitted parameter falls back to: width 2100 pixels, height 1500 pixels,
resolution 300 pixels per inch, mode:
[RGB](../../enumerations/new-document-mode.md), and a fill of white with
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let defaultDoc = await app.createDocument({
  preset: "Default Photoshop Size",
});

let transparentDoc = await app.createDocument({
  width: 800,
  height: 600,
  resolution: 300,
  mode: "RGBColorMode",
  fill: "transparent",
});

const redColor = new SolidColor();
redColor.rgb.green = 0;
redColor.rgb.blue = 0;
let fillColorDoc = await app.createDocument({
  mode: "RGBColorMode",
  fillColor: redColor,
});
```

Updates: [(26.9)](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/changelog/index.md#photoshop-269-july-2025)

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `options` | [_DocumentCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/documentcreateoptions.md) | \{} | Object literal carrying the option values. |
