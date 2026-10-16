# CalculationsOptions

Run [Document.calculations](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#calculations) with an object literal containing the following properties.
For Typescript development, `CalculationsOptions` is available as a type.

```javascript
const { app, constants, core } = require("photoshop");
async function calculateChannel() {
    return core.executeAsModal(async () => {
        const doc = app.activeDocument;
        const options = {
            source1: {
                document: doc,
                layer: doc.layers[0],
                channel: constants.CalculationsChannel.GRAY,
                invert: true
            },
            source2: {
                document: doc,
                layer: constants.CalculationsLayer.MERGED,
                channel: doc.channels[2]
            },
            blending: constants.CalculationsBlendMode.DARKEN,
            opacity: 50,
            result: constants.CalculationsResult.NEWCHANNEL
        };
        return await doc.calculations(options);
    }, { commandName: "Calculate channel" });
}
module.exports = { calculateChannel };
```

Requires an open document with a first layer and at least three channels; the example uses the documented Calculations enums. Await calculateChannel().

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| blending | [_CalculationsBlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#calculationsblendmode) | MULTIPLY | - | 24.5 | Combines "Source 1" and "Source 2" with this blend mode; "Source 1" is drawn on top. |
| mask | [_CalculationsSource_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | Calculations mask reference. |
| opacity | _number_ | 100 | 0..100 | 24.5 | Merge opacity for "Source 1". |
| result | [_CalculationsResult_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#calculationsresult) | - | - | 24.5 | Output destination for Calculations. |
| source1 | [_CalculationsSource_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | Input reference for "Source 1"; that source is placed on top. |
| source2 | [_CalculationsSource_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | Input reference for "Source 2". |
