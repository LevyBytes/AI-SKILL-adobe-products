# ImageBlob(arrayBuffer, options)

Use blobs when a URL is needed for the `src` value of an `HTMLImageElement`. Image data in standard compression formats such as PNG, JPG, JPEG ,etc. can be supplied to create one.
`ImageBlob` is a custom type that adds support for uncompressed image data.

e.g. create ImageBlob by providing an arrayBuffer with per-pixel RGB values plus options metadata that explains how to read that arraybuffer.

ImageBlob accepts input through these paths

- standard image compression formats: provide an ArrayBuffer for the `standard compression formats`; put the compression mimeType in options.type.
- uncompressed image: provide an ArrayBuffer holding raw per-pixel data plus interpretation options, with option.type set to "image/uncompressed".

[PhotoshopImageData](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/imaging/#photoshopimagedata-1) works with ImageBlob,
a `PhotoshopImageData` object can be supplied directly as options.

**Note: HostApp enablement controls ImageBlob support; Photoshop currently supports it.**

**Returns**: Instance of `ImageBlob` backed by the supplied data  
**Throws**:

- `TypeError` if arrayBuffer has any type other than ArrayBuffer
- `Error` if height or width is missing, or if either value is < 0
- `Error` if colorSpace is unsupported
- `Error` if componentSize is unsupported
- `Error` if ByteLength does not match the size required by the supplied options
- `Error` if PixelFormat is unsupported

| Param | Type | Description |
| --- | --- | --- |
| arrayBuffer | `ArrayBuffer` | image data stored in an ArrayBuffer |
| options | `Object` | metadata used to read the supplied ArrayBuffer. For standard compression, options.type is required; for uncompressed image data, every value is required except fields marked optional |
| options.type | `string` | mimeType for the imageData. Standard formats can use "image/png" or "image/jpg"; uncompressed input uses "image/uncompressed" |
| options.width | `number` | image-data width in pixels |
| options.height | `number` | image-data height in pixels |
| options.colorSpace | `string` | color space (or mode) for the image data; allowed values include "RGB" and "Grayscale" |
| options.hasAlpha | `boolean` | True when an alpha channel is present in the image |
| options.components | `number` | components per pixel count. RGB uses 3, RGBA uses 4, and other layouts follow the same pattern |
| options.componentSize | `number` | bits in each component; supported examples are 8 or 16 |
| options.pixelFormat | `string` | component order in pixel memory. Values can be "RGB", "RGBA", or "Gray" |
| options.colorProfile | `string` | `[Optional]` - color profile (or mode) for the image data; for example, "Adobe RGB (1998)" |

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
