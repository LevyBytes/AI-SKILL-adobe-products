# encodeImageData

This API makes image data usable in UXP image elements. In the current UXP version, image-element assignment requires jpeg/base64 encoding.

```javascript
const dataImage = await imaging.encodeImageData(options);
```

- options | Object - Required
  Settings for the operation.
  - imageData | [PhotoshopImageData](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#photoshopimagedata) - **_Required_**. Pixel data value. The data `colorSpace` must be RGB.
  - base64 | Boolean - Optional. When supplied, the returned value is a base64-encoded string.

Return value: `Promise<Number[] | string>`

Example:

```javascript
const imageElement = document.createElement("img");

const jpegData = await imaging.encodeImageData({ imageData: imgObj.imageData, base64: true });

const dataUrl = "data:image/jpeg;base64," + jpegData;
imageElement.src = dataUrl;
document.body.appendChild(imageElement);
```
