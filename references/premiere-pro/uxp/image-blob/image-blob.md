# ImageBlob(arrayBuffer, options)

Blobs can produce URLs that are assigned to `src` on an `HTMLImageElement`. ImageBlob accepts image data encoded with standard compression formats such as PNG, JPG, JPEG ,etc.
ImageBlob extends that workflow to cover uncompressed image data.

For example, create ImageBlob by passing an arrayBuffer that holds each pixel's RGB values plus options metadata that explains how to interpret the arraybuffer.

ImageBlob supports these creation paths:

- standard image compression formats: supply an ArrayBuffer containing the `standard compression formats`; set options.type to the compression mimeType.
- uncompressed image: supply an ArrayBuffer of raw per-pixel data and the options required to interpret it; set option.type to "image/uncompressed".

[PhotoshopImageData](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/imaging/#photoshopimagedata-1) works with ImageBlob,
and a `PhotoshopImageData` object can be passed directly as options.

**Note: HostApp enablement controls ImageBlob support; Photoshop currently supports it.**

**Returns**: Instance of `ImageBlob` created from the supplied data  
**Throws**:

- `TypeError` if arrayBuffer is not an ArrayBuffer
- `Error` if height or width is omitted, or either value is < 0
- `Error` if the colorSpace value is unsupported
- `Error` if the componentSize value is unsupported
- `Error` if ByteLength does not match the size required by the supplied options
- `Error` if the PixelFormat value is unsupported

| Param | Type | Description |
| --- | --- | --- |
| arrayBuffer | `ArrayBuffer` | Image data stored in an ArrayBuffer |
| options | `Object` | Metadata for interpreting the supplied ArrayBuffer. For standard compression, options.type is required; for uncompressed image data, every value is required unless marked optional |
| options.type | `string` | mimeType for the provided imageData. Standard formats include "image/png", "image/jpg"; uncompressed data uses "image/uncompressed" |
| options.width | `number` | Image data width in pixels |
| options.height | `number` | Image data height in pixels |
| options.colorSpace | `string` | Color space, or mode, for the image data; allowed values are "RGB" or "Grayscale" |
| options.hasAlpha | `boolean` | True when the image contains an alpha channel |
| options.components | `number` | Component count per pixel. RGB uses 3, RGBA uses 4, and additional formats follow the same pattern |
| options.componentSize | `number` | Bits in each component. Supported values are 8 or 16 |
| options.pixelFormat | `string` | Component memory order inside each pixel. Values can be "RGB", "RGBA", or "Gray" |
| options.colorProfile | `string` | `[Optional]` - Color profile, or mode, for the image data. One possible value is "Adobe RGB (1998)" |

**Example**

Complete example files:

- [image-blob.html](../examples/image-blob/image-blob.html)
- [image-blob.js](../examples/image-blob/image-blob.js)

**Example**

```javascript
// Supply PhotoshopImageData from the host imaging API and an image element.
async function displayPhotoshopImage(photoshopImageObject, imageElement) {
  const pixels = await photoshopImageObject.getData();
  const data = pixels.buffer.slice(pixels.byteOffset,
    pixels.byteOffset + pixels.byteLength);
  const imageBlob = new ImageBlob(data, photoshopImageObject);
  const url = URL.createObjectURL(imageBlob);
  try {
    imageElement.src = url;
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  }
  // Call the returned cleanup only when the image URL is no longer needed.
  return function cleanup() { URL.revokeObjectURL(url); };
}
```
