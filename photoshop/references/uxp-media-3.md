# Imaging

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Imaging API; Advanced.

## Imaging API

With the Imaging API, JavaScript can operate directly on image data from Photoshop documents.

The `imaging` sub-module under "photoshop" exposes these APIs. Access them with this code:

```javascript
const imaging = require("photoshop").imaging;
```

### Terminology and data types

Image data is stored as a collection of `pixels`. Each pixel holds the color information for one image point, consisting of one or more color-value components plus optional alpha information.

An RGB pixel with alpha has four components: "red", "green", "blue", and "alpha". Without alpha, an opaque RGB pixel has three components. Adding alpha as the fourth component produces RGBA.
An opaque gray scale pixel contains one component. Gray scale plus alpha uses two components.

To interpret pixel data correctly, Photoshop must know the color profile used for that data. `\"Adobe RGB (1998)\"` is one example profile. Photoshop performs color conversions when necessary. Call [getColorProfiles](uxp-classes-4.md) on the app object to retrieve available color profiles:

```javascript
const rgbProfiles = await require("photoshop").app.getColorProfiles("RGB");

const grayProfiles = await require("photoshop").app.getColorProfiles("Gray");
```

Lab data uses the "Lab D50" color profile.

For 32 bit images, Photoshop returns color profile names that include the description 'Linear Profile'. For example: `\"(Linear RGB Profile)\"`. Do not include that text when you specify a profile. If the document profile appears as `Adobe RGB (1998) (Linear RGB Profile)`, specify `Adobe RGB (1998)` for methods such as createImageDataFromBuffer.

Photoshop can store pixel information in memory in two layouts:

- `chunky`: Components for the same pixel sit next to one another in memory. With two opaque RGB pixels, pixel 1 followed by pixel 2, storage looks like: `[R1, G1, B1, R2, G2, B2]`.
- `planar`: Matching component types are grouped together in memory, so the components for one pixel may be separated. With two opaque RGB pixels, storage looks like: `[R1, R2, G1, G2, B1, B2]`.

JavaScript APIs default to the chunky format.

A `PhotoshopImageData` instance represents image data and exposes these methods and properties:

### _PhotoshopImageData_

| Name | Type | Description |
| --- | --- | --- |
| width | Number | Width of the image data, in pixels. |
| height | Number | Height of the image data, in pixels. |
| colorSpace | String | Image data color space or mode; valid values include `\"RGB\"`, `\"Grayscale\"`, `\"Lab\"`. |
| colorProfile | String | Image data color profile, such as `\"sRGB IEC61966-2.1\"`. An empty value makes Photoshop use the target document profile. |
| hasAlpha | Boolean | True when the image data contains an alpha channel. |
| components | Number | Component count per pixel; RGB uses 3, RGBA uses 4, and other formats follow their component counts. |
| componentSize | Number | Bit count for each component; allowed values are 8, 16, or 32. |
| pixelFormat | String | Component memory order within a pixel. Possible values include `\"RGB\"`, `\"RGBA\"`, `\"Grayscale\"`, `\"GrayscaleAlpha\"`, `\"LAB\"`, or `\"LABAlpha\"`. |
| isChunky | Boolean | True when the image data uses the chunky internal format. |
| type | String | Contained-data type. Supported value at present: "image/uncompressed". |
| getData | Method | [See documentation below.](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getdata) |
| dispose | Method | [See documentation below.](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#dispose) |

Bounds in the Imaging API include the left and top coordinates through, but not including, the right and bottom coordinates. For example, `{left: 0, top: 0, right: 10, bottom: 10}` selects ten pixels, 0 through 9, in each direction and excludes pixels at location 10. You may provide height and width instead of right and bottom, which can make code clearer: `{left: 0, top: 0, width: 10, height: 10}`.

Pixel component ranges depend on `componentSize`.

| Component Size | Value range | Comments |
| --- | --- | --- |
| 8 | 0..255 |  |
| 16 | 0..32768 |  |
| 32 | 0..1+ | High dynamic range images can contain component values below 0 or greater than 1.0 |

JavaScript cannot explicitly create `PhotoshopImageData` instances; Imaging API methods return them.

- [getPixels](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getpixels)
- [getLayerMask](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getlayermask)
- [getSelection](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#getselection)
- [createImageDataFromBuffer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#createimagedatafrombuffer)

### Performance considerations

Photoshop images may be very large, so JavaScript needs to manage image data carefully.
Heavy JavaScript memory use can trigger UDT debugger console warnings like these:

```
Plugin memory usage increased to: 600MB.
Plugin exceeds memory limit. Currently used memory 600.
```

Large pixel data affects API usage in several ways.

First, every Imaging API method that returns pixels is asynchronous. That is necessary because querying or changing pixel data can involve disk I/O.

Request the smallest target area that satisfies the task. A small target size lets Photoshop optimize source-region retrieval and, when needed, document compositing.

After finishing with image data, call `dispose` on the `PhotoshopImageData` instance. This lets Photoshop release memory immediately instead of waiting for JavaScript garbage collection.

Color-space or color-profile conversion can take noticeable time. When possible, use the same color space and color profile as the document you are working on.

### APIs

### PhotoshopImageData

### `getData`

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

### `dispose`

This synchronous method releases the image data it contains. Calling it reduces memory use sooner than waiting for the JavaScript garbage collector.

```javascript
const imageData = await imaging.createImageDataFromBuffer(arrayBuffer, options);
// perhaps a putPixels call
imageData.dispose();
```

### getPixels

This API lets JavaScript retrieve pixel data from a Photoshop document. It can request pixels from a single layer or from the complete document composite.

```javascript
const imageObj = await imaging.getPixels(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. When it is omitted or set below zero, the active document supplies the pixels.
  - `layerID` | Number - Optional. Source layer id. Without this value, the API reads from the document composite image.
  - `historyStateID` | Number - Optional. History state id used as the thumbnail source. Omit it to use the document's current state. Use this option when pixels are needed from an earlier document state.
  - `sourceBounds` | Object - Optional. Rectangle to read pixels from. If it is absent, the request covers the whole layer or document. Photoshop clips the supplied bounds to the area that actually contains pixel data, and the returned `sourceBounds` reports that clipped area. Describe the rectangle with one of these numeric property groups:
    - `left`, `top`, `right`, and `bottom`
    - `left`, `top`, `width`, and `height`
  - `targetSize` | Object - Optional. Scales the returned image to requested dimensions. For thumbnail output, pass a much smaller `targetSize`. Without this option, `sourceBounds` alone determines the returned buffer dimensions as described above. The object must include at least one of these attributes. When only one dimension is supplied, Photoshop scales the image data proportionally to satisfy that dimension.
    - `width`
    - `height`
  - `colorSpace` | String - Optional. Color space requested for the returned pixels. When omitted, Photoshop converts using the source document's color space.
  - `colorProfile` | String - Optional. Color profile name to apply to the returned pixels. If it is omitted, the profile chosen depends on the requested color space:
    - When the requested color space is the same as the source document's color space, the returned data keeps the source document color profile.
    - When the requested color space differs from the source document's color space, Photoshop uses the working color profile for that color space during conversion.
  - `componentSize` | Number - Optional. Requested `componentSize` for the returned image data. If this property is absent, Photoshop uses the source pixel data's `componentSize`. Accepted values are: -1 (for using the source document's depth), 8 , 16, or 32.
  - `applyAlpha` | Boolean - Optional. Set true to matte RGBA pixels onto white and return RGB. The returned imageData property will not include an alpha channel. Pixel-empty areas are still trimmed; see `sourceBounds` above.

Return value: `Promise<Object>`

The returned object includes these properties:

- `imageData` | [PhotoshopImageData](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/imaging.md#photoshopimagedata). A `PhotoshopImageData` instance containing the returned pixel data.
- `sourceBounds` | Object. Bounds actually used to obtain pixels (see the pyramid-level note below).
- `level` | Number. Pyramid level used for the pixel read.

Note: the image data's `components` property is based on whether the pixel source includes an alpha channel; RGBA, for example, uses 4.

When `targetSize` is smaller than the requested region, Photoshop scales the resulting image data down. During scaling, Photoshop can read from a smaller cached copy of the image canvas, called a pyramid level. The _"Performance Cache Levels"_ preference controls how many pyramid levels a document can have. Reading from a cache level can greatly improve performance. The returned `level` states which cache level was used. Level 0 means the full-resolution canvas. Level 1 means a cache at half the full-resolution size, with later levels continuing that pattern. Returned `sourceBounds` are expressed relative to the source cache level bounds, not the full-resolution bounds.

Valid `sourceBounds` values are determined by the pixel source. For a composite image, `(0, 0)` is the origin, and the source document DOM object's `width` and `height` properties provide the size. A pixel layer may use an origin other than `(0, 0)`. To find a layer's valid pixel area, call `boundsNoEffects` on the DOM object for that source layer.

Example - build a 100-pixel-tall thumbnail from part of the target document.

```javascript
const thumbnail = await imaging.getPixels({
  sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
  targetSize: { height: 100 },
});
```

### putPixels

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
await imaging.putPixels({
    layerID: 123
    imageData: imageData
});
```

### getLayerMask

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
const imageObj = await imaging.getLayerMask({
    documentID: 123,
    layerID: 5,
    kind: "user"
    sourceBounds: { left: 0, top: 0, right: 300, bottom: 300 },
    targetSize: { height: 100 }
});
```

### putLayerMask

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
await imaging.putLayerMask({
    layerID: 123
    imageData: grayImageData
});
```

### getSelection

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

### putSelection

Use this API from JavaScript to update the selection itself from a supplied pixel-data representation. Conceptually, this mirrors leaving Quick Mask mode; reference: https://helpx.adobe.com/photoshop/using/create-temporary-quick-mask.html.

```javascript
await imaging.putSelection(options);
```

- options | Object - **_Required_**
  Settings for the operation.
  - `documentID` | Number - Optional. Source document id. When it is omitted or set below zero, the active document is used.
  - `replace` | Boolean - Optional. Determines how the selection changes. When true, Photoshop removes the existing document selection before creating the new one. When false, the new image data is added to the current document selection. The default value is true.
  - `targetBounds` | Object - Optional. Location where the selection is inserted. If omitted, selection pixels begin at `(0, 0)`. The object must include these values: `left`, `top`. (`width` and `height` dimension keys are ignored here.)
  - `commandName` | String - Optional. When supplied, Photoshop uses this name while creating a history panel entry.

Example:

```javascript
await imaging.putSelection({ imageData: grayImageData });
```

### createImageDataFromBuffer

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

### encodeImageData

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

### Sample files

To try most of the APIs above, use the linked resources below; [how to load](uxp-guides-2.md) covers loading an existing plugin, and [UXP JavaScript file](uxp-uxpscripting.md) documents (.psjs) scripts.

- ### UXP plugin - [imaging-test](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/imaging-test.zip)
- ### UXP script - [imaging.psjs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/imaging.psjs)
- ### UXP script with dialog - [imaging_dialog.psjs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/imaging_dialog.psjs)

## Advanced

The material here covers advanced topics that can help while building a Photoshop UXP plugin or script.
