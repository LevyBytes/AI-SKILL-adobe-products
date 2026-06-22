# Document (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Methods

Pastes clipboard contents into the document. When the optional argument is
true and a selection exists, the paste target is that selection.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `intoSelection?` | _boolean_ | Whether an active selection should be used as the paste target. |

### rasterizeAllLayers

23.0

**async** : _Promise_`<void>`

Converts every layer to a pixel layer.

### resizeCanvas

23.0

**async** : _Promise_`<void>`

Adjusts document canvas dimensions without scaling the image.
Use [resizeImage](https://raw.githubusercontent.com/ps-reference/classes/document.md#resizeimage) when the image dimensions need scaling.

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
| `anchor?` | [_AnchorPosition_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#anchorposition) | Anchor point for resizing; by default, resizing is distributed equally across all sides. |

### resizeImage

23.0

**async** : _Promise_`<void>`

Scales image dimensions to reach the target pixel values.

```javascript
await document.resizeImage(800, 600);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width?` | _number_ | Target width (pixels). |
| `height?` | _number_ | Target height (pixels). |
| `resolution?` | _number_ | Resolution value, expressed as ppi. |
| `resampleMethod?` | [_ResampleMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#resamplemethod) | Interpolation method used while resizing the image. |
| `amount?` | _number_ | Noise amount used with preserve details, from 0..100. |

### revealAll

23.0

**async** : _Promise_`<void>`

Expands the document so clipped sections become visible.

### rotate

23.0

**async** : _Promise_`<void>`

Rotates the image clockwise by the supplied angle and expands the canvas when needed. (formerly rotateCanvas)

### Parameters

| Name | Type |
| --- | --- |
| `angles` | _number_ |

### sampleColor

24.0

**async** : _Promise_<[_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) \| [_NoColor_](https://raw.githubusercontent.com/ps-reference/colors/nocolor.md)>

Samples the document at the supplied position and returns a SolidColor object.

```javascript
let col = await app.activeDocument.sampleColor({ x: 100, y: 100 });
console.log(col.rgb);
// {
//    red: 233,
//    green: 179,
//    blue: 135,
//    hexValue: "E9B387"
// }
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | _object_ | Point to sample, `{x: number, y: number}`. |
| `position.x` | _number_ | X coordinate (pixels). |
| `position.y` | _number_ | Y coordinate (pixels). |

### save

23.0

**async** : _Promise_`<void>`

Saves the document. If the file has never been saved to disk,
the user is shown a Save dialog.

```javascript
// To save a document in the current location
document.save();

// Shows the save dialog
unsavedDocument.save();
```

### splitChannels

23.0

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/ps-reference/classes/document.md)[]>

Breaks the document into separate one-channel documents.

### suspendHistory

23.0

_Promise_`<void>`

Creates one history state covering everything performed
in the callback for this document only. All document changes should
be made inside that callback.

Note: changes made to another document are not captured
in the same history state.

The callback receives a SuspendHistoryContext object
that provides the current document in `document`.

For additional details and advanced context, see [`core.executeAsModal`](uxp-executeasmodal.md)
API; `suspendHistory` is a simple wrapper for it.

```javascript
app.activeDocument.suspendHistory(async (context) => {
  // context.document below is, in this case, `app.activeDocument`
  context.document.activeLayers[0].name = "Changed name";
});
```

### Parameters

| Name | Type |
| --- | --- |
| `callback` | (`e`: SuspendHistoryContext) => _void_ |
| `historyStateName` | _string_ |

### trap

23.0

**async** : _Promise_`<void>`

Applies trapping to a CMYK document.

Valid only when [Document.mode](https://raw.githubusercontent.com/ps-reference/classes/document.md#mode) is `Constants.DocumentMode.CMYK`

### Parameters

| Name | Type |
| --- | --- |
| `width` | _number_ |

### trim

23.0

**async** : _Promise_`<void>`

Removes surrounding image area according to the supplied pixel type.
By default, every image side is included.
Individual sides can optionally be excluded.

```javascript
//  trim transparent pixels from only the bottom of the image
app.activeDocument.trim(constants.TrimType.TRANSPARENT, false, false, true, false);
```

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `trimType` | [_TrimType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#trimtype) | - | Uses the top left pixel color by default; |
| `top` | _boolean_ | true |  |
| `left` | _boolean_ | true |  |
| `bottom` | _boolean_ | true |  |
| `right` | _boolean_ | true |  |
