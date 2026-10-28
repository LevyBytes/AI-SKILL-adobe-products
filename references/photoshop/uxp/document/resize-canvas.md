# resizeCanvas

23.0

**async** : _Promise_`<void>`

Adjusts document canvas dimensions without scaling the image.
Use [resizeImage](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#resizeimage) when the image dimensions need scaling.

```javascript
// grow the canvas by 400px
const { width, height } = await app.activeDocument;
await document.resizeCanvas(width + 400, height + 400);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | _number_ | Target width, in pixels. |
| `height` | _number_ | Target height, in pixels. |
| `anchor?` | [_AnchorPosition_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#anchorposition) | Anchor point for resizing; by default, resizing is distributed equally across all sides. |
