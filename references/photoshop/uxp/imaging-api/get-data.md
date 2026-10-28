# `getData`

`getData` returns pixel information from a `PhotoshopImageData` instance as a typed array. The return type is determined by the image `componentSize`.

| Component Size | Return type |
| --- | --- |
| 8 | Uint8Array |
| 16 | Uint16Array |
| 32 | Float32Array |

Pass an options argument to choose how data comes back. Options include:

- `chunky` | Boolean - Optional. When true, data comes back in chunky layout; when false, it comes back planar. Defaults to true.
- `fullRange` | Boolean - Optional. Applies only to 16 bit data. True returns 16 bit pixels across the full range [0..65535]; false uses Photoshop's reduced range [0..32768]. Defaults to false.

Return value: `Promise<Uint8Array | Uint16Array | FloatArray>`

Because the method is asynchronous, it returns a promise that resolves with the data type described above.

Example:

```javascript
const pixelData = await imageObj.imageData.getData();
```
