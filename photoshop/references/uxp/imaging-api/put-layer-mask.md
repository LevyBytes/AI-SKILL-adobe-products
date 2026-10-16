# putLayerMask

Use this API from JavaScript to edit a layer mask's pixels. Currently, only pixel masks can be edited. In the UI, these are called a "Layer Mask".

```javascript
await imaging.putLayerMask(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. If the number is absent or negative, the active document is used.
  - `layerID` | Number - **_Required_**. Target layer id.
  - `kind` | String - Optional. Mask kind to modify. At this time, `"user"` is the only accepted value. Default: `"user"`.
  - `imageData` | [PhotoshopImageData](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#photoshopimagedata) - **_Required_**. Mask data value. It must be single-component image data using the grayscale color model.
  - `replace` | Boolean - Optional. Determines how mask pixels are applied. When true, Photoshop discards the layer's existing mask before creating the new one. When false, the new image data is written into the layer's current mask. The default value is true.
  - `targetBounds` | Object - Optional. Location where the pixels are inserted. If omitted, insertion starts at `(0, 0)`. The object must include these values: `left`, `top`. (`width` and `height` dimension keys are ignored here.)
  - `commandName` | String - Optional. When supplied, Photoshop uses this name while creating a history panel entry.

Example:

```javascript
const { imaging, core } = require("photoshop");
async function putExampleLayerMask(grayImageData) {
    return core.executeAsModal(async () => {
        return await imaging.putLayerMask({
            layerID: 123,
            imageData: grayImageData
        });
    }, { commandName: "Layer pixel data" });
}
module.exports = { putExampleLayerMask };
```

Replace the example document/layer IDs with IDs in the open document. Supply a valid PhotoshopImageData object where required; dispose image data when your workflow is finished with it.
