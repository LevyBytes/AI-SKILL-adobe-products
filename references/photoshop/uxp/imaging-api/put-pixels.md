# putPixels

Use this API from JavaScript to modify layer pixels. The write can cover every pixel in the layer or only a selected region.

```javascript
await imaging.putPixels(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. When it is omitted or set below zero, the active document is used.
  - `layerID` | Number - **_Required_**. Target layer id. The target layer must be a pixel layer.
  - `imageData` | [PhotoshopImageData](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#photoshopimagedata) - **_Required_**. Pixel data value to write.
  - `replace` | Boolean - Optional. Controls how pixels are merged into the layer. When true, existing layer pixels are removed before the new pixels are added. When false, the new pixels are combined with the layer's current pixel content. The default value is true.
  - `targetBounds` | Object - Optional. Insertion region for the pixels. If omitted, pixels are placed at the document origin `(0, 0)`. The object must include these values: `left`, `top`. (`width` and `height` dimension keys are ignored.)
  - `commandName` | String - Optional. When supplied, Photoshop uses this name while creating a history panel entry.

Example:

```javascript
const { imaging, core } = require("photoshop");
async function putExamplePixels(imageData) {
    return core.executeAsModal(async () => {
        return await imaging.putPixels({
            layerID: 123,
            imageData: imageData
        });
    }, { commandName: "Layer pixel data" });
}
module.exports = { putExamplePixels };
```

Replace the example document/layer IDs with IDs in the open document. Supply a valid PhotoshopImageData object where required; dispose image data when your workflow is finished with it.
