# getLayerMask

Use this API from JavaScript to read the pixel data that represents a layer mask.

```javascript
const imageObj = await imaging.getLayerMask(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. If the number is absent or negative, the active document becomes the source.
  - `layerID` | Number - **_Required_**. Source layer id.
  - `kind` | String - Optional. Mask kind to return. The two choices are `"user"` and `"vector"`. The default value is `"user"`, meaning the pixel mask created by the "Add Layer Mask" button.
  - `sourceBounds` | Object - Optional. Rectangle to read pixels from. Without it, Photoshop returns pixels from the full mask. The object must describe a rectangle with these number properties:
    - `left`, `top`, `right`, and `bottom`
  - `targetSize` | Object - Optional. Requested dimensions for the returned image. If this value is absent, the returned size matches the requested region, so no returned-pixel scaling occurs. The object must contain one or more of these attributes:
    - `width` and `height`. When only one dimension is supplied, Photoshop scales the returned image data proportionally to satisfy that dimension.

Return value: `Promise<Object>`

The returned object includes these properties:

- `imageData` | [PhotoshopImageData](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#photoshopimagedata). A `PhotoshopImageData` instance holding the requested user-mask pixels. A user mask is a single-channel gray scale image.
- `sourceBounds` | Object. Actual bounds for the mask read.

Example - retrieve a layer user mask

```javascript
const { imaging, core } = require("photoshop");
async function getExampleLayerMask() {
    return core.executeAsModal(async () => {
        return await imaging.getLayerMask({
            documentID: 123,
            layerID: 5,
            kind: "user",
            sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
            targetSize: { height: 100 }
        });
    }, { commandName: "Layer pixel data" });
}
module.exports = { getExampleLayerMask };
```

Replace the example document/layer IDs with IDs in the open document. Supply a valid PhotoshopImageData object where required; dispose image data when your workflow is finished with it.
