# GroupLayerCreateOptions

To create a layer group, pass an object literal containing any property listed below to [Document.createLayerGroup](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#createlayergroup).
For Typescript development, `GroupLayerCreateOptions` is available as a type.

```javascript
const options = { name: "myGroup", opacity: 50 };
await require("photoshop").app.activeDocument.createLayerGroup(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Resulting item's blend mode. |
| color | [_LabelColors_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#labelcolors) | NONE | 22.5 | Resulting item's label color. |
| fromLayers | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) \| [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)[] | - | 22.5 | Layer or layer list used to populate the group. |
| group | _boolean_ | false | 22.5 | Set true to make a clipping mask from the preceding layer. |
| ~~mode~~ | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | NORMAL | 22.5 | Deprecated; prefer `blendMode` above because that setting takes precedence. |
| name | _string_ | - | 22.5 | Layer group name. When omitted, Photoshop generates one using the template, "Group #". |
| opacity | _number_ | 100 | 22.5 | Resulting item's opacity. |
