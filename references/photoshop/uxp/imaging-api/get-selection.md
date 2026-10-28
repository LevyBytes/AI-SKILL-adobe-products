# getSelection

Use this API from JavaScript to retrieve the active selection as pixel data. Conceptually, this mirrors Quick Mask mode; reference: https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html.

```javascript
const imageObj = await imaging.getSelection(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. When it is omitted or set below zero, the active document supplies the selection.
  - `sourceBounds` | Object - Optional. Rectangle to read pixels from. If omitted, pixels from the whole selection are returned. The object must describe a rectangle with these number properties:
    - `left`, `top`, `right`, and `bottom`
  - `targetSize` | Object - Optional. Dimensions requested for the returned image. If this value is absent, the returned size matches the requested size, i.e. no returned-pixel scaling is done. The object must contain one or more of these attributes:
    - `width` and `height`. When only one dimension is supplied, Photoshop scales the returned image data proportionally to satisfy that dimension.

Return value: `Promise<Object>`

The returned object includes these properties:

- `imageData` | [PhotoshopImageData](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#photoshopimagedata). A `PhotoshopImageData` instance containing the selection.
- `sourceBounds` | Object. Actual bounds for the selection read.

Example - read selection pixels

```javascript
const imageObj = await imaging.getSelection({
  documentID: 123,
  sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
});
```
