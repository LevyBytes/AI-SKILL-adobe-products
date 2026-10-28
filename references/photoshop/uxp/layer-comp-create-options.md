# LayerCompCreateOptions

Supply an object literal with any of the properties below to [LayerComps.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layercomps.md#add).
For Typescript development, `LayerCompCreateOptions` is available as a type.

```javascript
const options = { name: "mockup", comment: "First attempt", visibility: true };
await require("photoshop").app.activeDocument.layerComps.add(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| appearance | _boolean_ | false | 24.0 | Captures the layers' effects state. |
| childComp | _boolean_ | false | 24.0 | Records Layer Comps found within Smart Objects on recorded layers. |
| comment | _string_ | null | 24.0 | Comment shown in the Layer Comp Options dialog. |
| name | _string_ | - | 24.0 | Name displayed in the Layer Comps panel. When omitted, Photoshop generates one from the template, "Layer Comp #". |
| position | _boolean_ | true | 24.0 | Records layer position state. |
| visibility | _boolean_ | false | 24.0 | Records layer visibility state. |
