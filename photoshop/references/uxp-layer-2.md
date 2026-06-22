# Layer (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Methods

| Name | Type | Description |
| --- | --- | --- |
| `generatorNumber` | _number_ | Whole-number generator count [1,999]. |
| `minimumWavelength` | _number_ | Lower wave-length bound [1,(maximum wave length - 1)] (whole number). |
| `maximumWavelength` | _number_ | Upper wave-length bound [(minimum wave length + 1),999] (whole number). |
| `minimumAmplitude` | _number_ | Lower amplitude bound [1,(maximum amplitude - 1)] (whole number). |
| `maximumAmplitude` | _number_ | Upper amplitude bound [(minimum amplitude + 1),999] (whole number). |
| `horizontalScale` | _number_ | Horizontal scale percentage [1,100] (whole number). |
| `verticalScale` | _number_ | Vertical scale percentage [1,100] (whole number). |
| `waveType` | [_WaveType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#wavetype) | Optional wave type. |
| `undefinedAreas` | [_UndefinedAreas_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#undefinedareas) | Optional handling for regions left blank by the distortion. |
| `randomSeed` | _number_ | Optional random seed. |

### applyZigZag

24.0

**async** : _Promise_`<void>`

Executes ZigZag.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Zigzag amount [-100,100]. |
| `ridges` | _number_ | Ridge count [0,20]. |
| `style` | [_ZigZagType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#zigzagtype) | Selected ZigZagType. |

### bringToFront

23.0

_void_

Moves the layer to the front of the current layer/group stack.

### clear

23.0

**async** : _Promise_`<void>`

Clears layer pixels without placing anything on the clipboard.
When there is no pixel selection, all pixels are selected and cleared.

### copy

23.0

**async** : _Promise_`<void>`

Copies this layer. The clipboard receives the result. If the optional
argument is true, a merged copy is made for all visible layers.

```javascript
await layer.copy(true);
await layer.copy();
```

### Parameters

| Name | Type |
| --- | --- |
| `merge?` | _boolean_ |

### cut

23.0

**async** : _Promise_`<void>`

Moves the layer contents to the clipboard; when no selection exists, all pixels are selected before cutting.

### delete

23.0

_void_

Deletes this layer object.

```javascript
const layers = document.layers;
layers && layers[0] && layers[0].delete();
```

### duplicate

23.0

**async** : _Promise_ <[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Creates a duplicate above the layer in the layer stack,
then returns the duplicate object.

```javascript
// duplicate a layer
const copyLayer = await layer.duplicate();

// extract to a new document
const exportDoc = psApp.documents[1];
const exportedLayer = await layer.duplicate(exportDoc);
```

### Parameters

| Name | Type |
| --- | --- |
| `relativeObject?` | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) \| [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) |
| `insertionLocation?` | [_ElementPlacement_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#elementplacement) |
| `name?` | _string_ |

### flip

23.0

**async** : _Promise_`<void>`

Flips the layer along one axis or both axes.

```javascript
// flip horizontally
await layer.flip(constants.FlipAxis.HORIZONTAL);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `axis` | [_FlipAxis_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#flipaxis) | Axis, or both axes, used for the layer flip. |

### link

23.0

[_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)[]

Links this layer with the target layer when they are not already linked,
then returns the linked-layer list.

```javascript
// link two layers together
const linkedLayers = strokes.link(fillLayer);
linkedLayers.forEach((layer) => console.log(layer.name)) > "strokes" > "fillLayer";
```

### Parameters

| Name | Type |
| --- | --- |
| `targetLayer` | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) |

### merge

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Merge behavior depends on the current selection. With multiple selected layers,
they merge together. With one selected layer, it merges into the layer below,
which must be a pixel layer. Afterward, the merged layer becomes active.

### move

23.0

_void_

Moves the layer relative to the layer passed in the parameters.
"placeAfter" positions the layer below relativeObject.
"placeBefore" positions the layer above relativeObject.
"placeInside" uses relativeObject as a group container.
`ElementPlacement.PLACEINSIDE` is only valid when `relativeObject.kind === LayerKind.group`

### Parameters

| Name | Type |
| --- | --- |
| `relativeObject` | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) |
| `insertLocation` | [_ElementPlacement_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#elementplacement) |

### rasterize

23.0

**async** : _Promise_`<void>`

Converts the targeted layer contents to rasterized pixels.

### Parameters

| Name | Type |
| --- | --- |
| `target` | [_RasterizeType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#rasterizetype) |

### rotate

23.0

**async** : _Promise_`<void>`

Rotates this layer.

```javascript
// rotate 90 deg counter clockwise
await layer.rotate(-90);

// rotate 90 deg clockwise relative to top left corner
let anchorPos = require("photoshop").constants.AnchorPosition;
await layer.rotate(90, anchorPos.TOPLEFT);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | _number_ \| AngleValue | Degrees used for the layer rotation |
| `anchor?` | [_AnchorPosition_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#anchorposition) | Anchor position used as the rotation point |
| `options?` | _object_ | - |
| `options.interpolation?` | [_InterpolationMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#interpolationmethod) | Interpolation method for image resampling |

### scale

23.0

**async** : _Promise_`<void>`

Scales this layer.

ExtendScript used the name `resize` for this operation.

```javascript
await layer.scale(80, 80);

// Scale the layer to be a quarter of the size relative to bottom left corner
let anchorPos = require("photoshop").constants.AnchorPosition;
await layer.scale(50, 50, anchorPos.BOTTOMLEFT);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | _number_ \| PercentValue | Numeric percentage for horizontal layer scaling |
| `height` | _number_ \| PercentValue | Numeric percentage for vertical layer scaling |
| `anchor?` | [_AnchorPosition_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#anchorposition) | Anchor position used as the transform origin |
| `options?` | _object_ | - |
| `options.interpolation?` | [_InterpolationMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#interpolationmethod) | Interpolation method for image resampling |

### sendToBack

23.0

_void_

Moves this layer to the bottom. When the bottom layer is the
background, the layer is placed just above that background.
Inside a group, it moves to the group's bottom.

### skew

23.0

**async** : _Promise_`<void>`

Applies skewing.

```javascript
// parellelogram shape
await layer.skew(-15, 0);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angleH` | _number_ \| AngleValue | Horizontal skew angle |
| `angleV` | _number_ \| AngleValue | Vertical skew angle |
| `options?` | _object_ | - |
| `options.interpolation?` | [_InterpolationMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#interpolationmethod) | - |

### translate

23.0

**async** : _Promise_`<void>`

Translates the layer.

```javascript
// Translate the layer to the left by 200px
await layer.translate(-200, 0);

// move the layer one height down
let xOffsetPct = { _unit: "percentUnit", _value: 0 };
let yOffsetPct = { _unit: "percentUnit", _value: 100 };
await layer.translate(xOffsetPct, yOffsetPct);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontal` | _number_ \| PercentValue \| PixelValue | Numeric pixel or percent offset for the layer horizontally |
| `vertical` | _number_ \| PercentValue \| PixelValue | Numeric pixel or percent offset for the layer vertically |

### unlink

23.0

**async** : _Promise_`<void>`

Removes any existing links from the layer.

```javascript
// detach layer from any existing links
await layer.unlink();
```

## See also

- [Unsupported](uxp-unsupported.md)
