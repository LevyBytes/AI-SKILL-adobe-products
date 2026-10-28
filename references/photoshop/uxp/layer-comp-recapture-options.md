# LayerCompRecaptureOptions

Build an object literal from any supported property and pass it to [LayerComp.recapture](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layercomp.md#recapture).
For Typescript work, `LayerCompRecaptureOptions` is available as the type.

```javascript
const options = { visibility: true, position: true };
await require("photoshop").app.activeDocument.layerComps.add(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| appearance | _boolean_ | false | 24.0 | Refresh the saved layer effects state. |
| childComp | _boolean_ | false | 24.0 | Refresh saved states for Layer Comps inside Smart Objects recorded in the layers. |
| position | _boolean_ | false | 24.0 | Refresh the saved layer position state. |
| visibility | _boolean_ | false | 24.0 | Refresh the saved layer visibility state. |
