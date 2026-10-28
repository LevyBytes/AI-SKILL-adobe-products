# add

22.5

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md)>

Creates a document.

With no options, creates a 7 x 5 inch document at 300 pixels per inch.
That matches the "Default Photoshop Size" preset.

Providing an object with a 'preset' string parameter selects any other preset
installed with Photoshop or created by users.

You may also pass an object with one or more parameters. Missing parameters
fall back to these defaults: width 2100 pixels; height 1500 pixels;
resolution 300 pixels per inch; mode: @RGBColorMode; white fill;
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let newDoc1 = await app.documents.add();
let newDoc2 = await app.documents.add({
  width: 800,
  height: 600,
  resolution: 300,
  mode: "RGBColorMode",
  fill: "transparent",
});
let newDoc3 = await app.documents.add({ preset: "My Default Size 1" });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options?` | [_DocumentCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/documentcreateoptions.md) | @DocumentCreateOptions |
