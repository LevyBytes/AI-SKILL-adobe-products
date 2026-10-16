# calculations

24.5

**async** : _Promise_<void \| [_Channel_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channel.md) \| [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md)>

With the Calculations command, source channels can be blended across one or more images. The blended output can target a new image, a new channel, or a selection in the active image.

Runs Image > Calculations on the document. For more information and examples, see the [CalculationsOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/calculationsoptions.md)
object.

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

Known issue: calculations currently works only when exactly one unlocked pixel layer is selected.
Later versions should remove layer requirements because this operation cannot output into a layer.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `calculationsOptions` | [_CalculationsOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/calculationsoptions.md) | Options object supplied to calculations. |
