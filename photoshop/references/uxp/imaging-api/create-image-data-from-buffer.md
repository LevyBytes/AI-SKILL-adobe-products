# createImageDataFromBuffer

Use this API from JavaScript to construct arbitrary image data from an in-memory buffer.

```javascript
const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
```

- `imageData` | Typed array - **_Required_** | Image data input. Types accepted: `Uint8Array`, `Uint16Array`, and `FloatArray`. The array type determines the componentSize of the supplied data. See table above.
- options | Object - **_Required_**
  Settings for the operation.
  - `width` | Number - **_Required_**. Image width.
  - `height` | Number - **_Required_**. Image height.
  - `components` | Number - **_Required_**. Component count per pixel.
  - `chunky` | Boolean - Optional. Pixel-layout setting. See the discussion above. The default value is true.
  - `colorProfile` | String - Optional. Color profile associated with the image data. See the note near the beginning of this document about color profiles and 32 bit pixel data.
  - `colorSpace` | String - **_Required_**. Color space associated with the image data.
  - `fullRange` | Boolean - Optional. Applies only to 16 bit data. Set true when the supplied pixel data uses the full 16 bit range [0..65535]. Set false when the data uses the reduced range: [0..32768]. Default: false.

Return value: `Promise<PhotoshopImageData>`

The element count in `imageData` must equal: `width * height * components`.

Example:

```javascript
const width = 30;
const height = 40;
const components = 4; // RGBA
const componentCount = width * height;
const dataSize = componentCount * components;
const arrayBuffer = new Uint8Array(dataSize);

// Add some (chunky) data to the buffer
for (let i = 0; i < componentCount; i += components) {
  arrayBuffer[index] = 255; // red
  arrayBuffer[index + 1] = 0; // green
  arrayBuffer[index + 2] = 0; // blue
  arrayBuffer[index + 3] = 127; // alpha
}

const options = {
  width: width,
  height: height,
  components: components,
  colorProfile: "sRGB IEC61966-2.1",
  colorSpace: "RGB",
};
const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
```

Layer masks and document selections use image data with one grayscale component. For that kind of data, pass `components: 1`, `colorSpace: "Grayscale"` and `colorProfile: "Gray Gamma 2.2"` as in this example:

```javascript
const width = 30;
const height = 40;
const componentCount = width * height;
const arrayBuffer = new Uint8Array(componentCount);

for (let i = 0; i < componentCount; ++i) {
  arrayBuffer[i] = 127; // all set to the median value
}

const options = {
  width: width,
  height: height,
  components: 1, // masks are grayscale
  chunky: false,
  colorProfile: "Gray Gamma 2.2",
  colorSpace: "Grayscale",
};
const maskData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
```
