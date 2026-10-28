# getPixels

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
