# DocumentCreateOptions

Create documents by passing an object literal with any of the properties below to [Photoshop.createDocument](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/photoshop.md#createdocument).
For Typescript development, `DocumentCreateOptions` is available as a type.

```javascript
const options = { name: "Web mockup", preset: "Web Large" };
require("photoshop").app.createDocument(options);
```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| depth | _number_ | 8 | [8,16,32] | 22.5 | Document bit depth. |
| fill | [_DocumentFill_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#documentfill) | - | - | 22.5 | Document fill color. |
| fillColor | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | - | - | 23.0 | Custom document fill color. |
| height | _number_ | - | - | 22.5 | Height, in pixels. |
| mode | [_NewDocumentMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#newdocumentmode) | - | - | 22.5 | ImageMode value. |
| name | _string_ | - | - | 22.5 | Document name. |
| pixelScaleFactor | _number_ | - | - | 22.5 | Scale factor for pixels. |
| preset | _string_ | - | - | 22.5 | Preset. |
| presetJSON | _string_ | - | - | 22.5 | JSON preset supplied as a JSONified string. |
| profile | _string_ | - | - | 22.5 | Color profile selected by profile name. |
| resolution | _number_ | - | - | 22.5 | Image resolution. |
| width | _number_ | - | - | 22.5 | Width, in pixels. |
