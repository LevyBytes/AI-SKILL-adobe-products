# Selection, Solidcolor, Subpathinfo

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Selection; Solid Color; Sub Path Info.

## Selection

Represents one or more selected areas in the document. With no active selection, `bounds` returns `null`. Pixel data underlies the selection, while 8-bit transparency can still be represented.

Pixel selections define where pixel filters act, or the source area used for histogram measurement.

```javascript
const { app, constants } = require("photoshop");
const doc = app.activeDocument;

await doc.selection.selectRectangle(
  { top: 50, left: 50, bottom: 100, right: 100 },
  constants.SelectionType.REPLACE,
);
doc.selection.bounds; // {{top: 50, left: 50, bottom: 100, right: 100}
doc.selection.solid; // true

await doc.selection.selectEllipse(
  { top: 50, left: 70, bottom: 140, right: 100 },
  constants.SelectionType.EXTEND,
);
doc.selection.bounds; // {top: 50, left: 50, bottom: 140, right: 100}
doc.selection.solid; // false
```

**Pixel selection while in Quick Mask Mode**:
After a user enters Quick Mask Mode, Photoshop temporarily represents the selection as a channel rather than the "marching ants" outline.
Scripting can create new pixel selections while Quick Mask Mode is active. When the user leaves Quick Mask Mode, the Quick Mask Channel becomes the active selection.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| bounds | [_Bounds_](https://raw.githubusercontent.com/ps-reference/objects/bounds.md) | R | 25.0 | Rectangle enclosing the full selection; it may extend beyond the canvas bounds. |
| docId | _number_ | R | 25.0 | Document ID associated with this Selection. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 25.0 | Document that owns this Selection. |
| solid | _boolean_ | R | 25.0 | True when the selection is exactly a rectangle and every pixel inside it is fully selected. If inspected as a channel, such as through Quick Mask Mode, it appears as an all-white rectangle; within its bounds, it is solid. |
| typename | _string_ | R | 25.0 | Referenced object class name: _"Selection"_. |

### Methods

### contract

25.0

**async** : _Promise_`<void>`

Shrink the selection by a specified amount.

If the amount to contract exceeds the radius of the selected area, the selected area disappears completely. When no other selected areas remain active, the document ends with no active selection.

```javascript
await doc.selection.contract(8);
```

UI Location: Select > Modify > Contract

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `by` | _number_ | - | Selection contraction distance in pixels (integer in the range 1..500). |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: contraction skips any selection portion that meets the canvas edge. |

### deselect

25.0

**async** : _Promise_`<void>`

Clear the current selection. Afterward, `bounds` returns `null`.

```javascript
await doc.selection.deselect();
```

UI Location: Select > Deselect

### expand

25.0

**async** : _Promise_`<void>`

Increase the selection outward by the requested pixel count.

```javascript
await doc.selection.expand(42);
```

UI Location: Select > Modify > Expand

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `by` | _number_ | - | Selection expansion distance in pixels (integer in the range 1..500). |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: expansion skips any selection portion that meets the canvas edge. |

### feather

25.0

**async** : _Promise_`<void>`

Apply feathering to the selection edges by the specified amount. The softened selection strength is easiest to inspect as a channel in Quick Mask Mode.
At high values, `.bounds` can return `null` because no selection remains.

```javascript
await doc.selection.feather(16);
```

UI Location: Select > Modify > Feather

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `by` | _number_ | - | Selection feathering distance (integer in the range 0.1..1000). |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: feathering skips any selection portion that meets the canvas edge. |

### grow

25.0

**async** : _Promise_`<void>`

Extend the selection to cover neighboring pixels accepted by the tolerance setting.

```javascript
await doc.selection.grow(32);
```

Unsupported modes: Bitmap, RGB 32 bits, Grayscale 32 bits

UI Location: Select > Grow

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `tolerance` | _number_ | - | Tolerance range (integer in the range 0..255) |
| `antiAlias` | _boolean_ | true | Use anti-aliasing when true |

### inverse

25.0

**async** : _Promise_`<void>`

Replace the active selection with its inverse. The new selection is cropped to the canvas bounds. If every canvas pixel is selected, `inverse` leaves no active selection. Artboard bounds are also ignored.

```javascript
await doc.selection.inverse();
```

UI Location: Select > Inverse

### load

25.0

**async** : _Promise_`<void>`

A [Channel](https://raw.githubusercontent.com/ps-reference/classes/channel.md) or [Layer](https://raw.githubusercontent.com/ps-reference/classes/layer.md) can supply the selection source. The Layer's pixel transparency supplies the selection values. Fully opaque pixels map to a full selection value.

```javascript
await doc.selection.load(doc.channels[3]); // first alpha channel in RGB document
```

UI Locations:

- Select > Load Selection...
- control/command + click on layer thumbnail
- control/command + click on channel thumbnail

_For path selection, use [PathItem.makeSelection](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#makeselection)_

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `from` | _ComponentChannel_ \| _AlphaChannel_ \| [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) | - | Channel or Layer source for the loaded selection; it may live in another document. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | - | Behavior to apply when a selection is already present. Default SelectionType.REPLACE |
| `invert` | _boolean_ | false | When true, reverse the loaded result |

### makeWorkPath

25.0

**async** : _Promise_<[*PathItem*](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)>

Build a work path from whichever selection is active.

```javascript
await doc.selection.makeWorkPath();
```

UI Location: Paths panel > Make work path icon

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `tolerance` | _number_ | 2 | Tolerance value from 0.5..10, expressed as a decimal; lower values give higher precision |

### resizeBoundary

25.0

**async** : _Promise_`<void>`

Scale only the selection, in percent. The active layer is not changed.

```javascript
await doc.selection.resizeBoundary(50, 50);
```

UI Location: Select > Transform Selection

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `horizontal` | _number_ | 100 | Horizontal percentage used to scale the selection (decimal) |
| `vertical` | _number_ | 100 | Vertical percentage used to scale the selection (decimal) |
| `anchor` | [_AnchorPosition_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#anchorposition) | - | Anchor position used as the scaling origin. Default: AnchorPosition.MIDDLECENTER |
| `interpolation` | [_InterpolationMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#interpolationmethod) | - | Resampling algorithm to apply. Default: InterpolationMethod.BICUBIC |

### rotateBoundary

25.0

**async** : _Promise_`<void>`

Rotate only the selection clockwise around the supplied anchor position. The active layer is not changed.

```javascript
await doc.selection.rotateBoundary(90, constants.AnchorPosition.MIDDLECENTER);
```

UI Location: Select > Transform Selection

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | _number_ | Decimal degree value from -180..180 for rotating the selection |
| `anchor` | [_AnchorPosition_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#anchorposition) | Anchor position used for rotation. Default: AnchorPosition.MIDDLECENTER |
| `interpolation` | [_InterpolationMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#interpolationmethod) | Resampling algorithm to apply. Default: InterpolationMethod.BICUBIC |

### save

25.0

**async** : _Promise_`<void>`

Create an Alpha Channel that stores the current selection.

```javascript
await doc.selection.save("My Selection");
```

UI Location: Select > Save Selection...

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `channelName?` | _string_ | Name for the created channel (Default: "Alpha 1", "Alpha 2", etc.) |

### saveTo

25.0

_Promise_`<void>`

Use an existing Alpha Channel as the destination for the selection; Component Channels cannot be destinations.

```javascript
// Stores the current selection into an existing alpha channel in RGB document
await doc.selection.saveTo(doc.channels[3]);

// Performing an intersection operation on an alpha channel in RGB document
await doc.selection.saveTo(doc.channels[3], SelectionType.INTERSECT);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `channel` | _AlphaChannel_ | Alpha channel targeted by the save operation. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |

### selectAll

25.0

**async** : _Promise_`<void>`

Select every pixel on the canvas.

When the document contains artboards, Photoshop selects all pixels on the artboard containing the active layer.

With active layers spanning multiple artboards, Photoshop creates one rectangular selection whose bounds wrap those layers.

If no artboard is active, every artboard is selected the same way.
(The resulting selection may not cover the whole canvas.)

```javascript
await doc.selection.selectAll();
```

UI Location: Select > All

### selectBorder

25.0

**async** : _Promise_`<void>`

Use the active selection's border to build a new selection. The new area matches a stroke drawn along that border at the supplied pixel width.
Canvas bounds do not constrain the result.

```javascript
await doc.selection.selectBorder(10);
```

UI Location: Select > Modify > Border...

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | _number_ | Border-selection width in pixels; valid integers are 1..200 |

### selectColumn

25.0

**async** : _Promise_`<void>`

Select one pixel column.

```javascript
await doc.selection.selectColumn(90);
```

UI Location: Toolbar > Single Column Marquee Tool

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `x` | _number_ | Column x coordinate in pixels (integer); keep it inside the document width. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |

### selectEllipse

25.0

**async** : _Promise_`<void>`

Select pixels inside an ellipse.

```javascript
await doc.selection.selectEllipse({ top: 0, left: 0, bottom: 100, right: 100 });
```

UI Location: Toolbar > Elliptical Marquee Tool

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `bounds` | [_Bounds_](https://raw.githubusercontent.com/ps-reference/objects/bounds.md) | - | Object containing \{top, left, bottom, right} values that defines the selection bounds. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | - | Behavior to use when a selection is already present. Default SelectionType.REPLACE |
| `feather` | _number_ | 0 | Feather radius for the selection in pixels (decimal in the range 0..1000) |
| `antiAlias` | _boolean_ | true | When true, Photoshop anti-aliases the selection edge |

### selectPolygon

25.0

**async** : _Promise_`<void>`

Select pixels inside a polygon.

```javascript
await doc.selection.selectPolygon([
  { x: 50, y: 10 },
  { x: 100, y: 90 },
  { x: 10, y: 40 },
]);
```

UI Location: Toolbar > Polygonal Lasso Tool

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `points` | \{ `x`: _number_ ; `y`: _number_ }[] | - | Array of point objects, each with \{x, y} properties. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | - | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |
| `feather` | _number_ | 0 | Feather radius for the selection in pixels (decimal in the range 0..1000) |
| `antiAlias` | _boolean_ | true | When true, Photoshop anti-aliases the selection edge |

### selectRectangle

25.0

**async** : _Promise_`<void>`

Select pixels inside a rectangle.

```javascript
await doc.selection.selectRectangle(
  { top: 0, left: 0, bottom: 100, right: 100 },
  Constants.SelectionType.REPLACE,
  10,
);
```

UI Location: Toolbar > Rectangular Marquee Tool

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `bounds` | [_Bounds_](https://raw.githubusercontent.com/ps-reference/objects/bounds.md) | - | Object containing \{top, left, bottom, right} values that defines the selection bounds. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | - | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |
| `feather` | _number_ | 0 | Feather radius for the selection in pixels (decimal in the range 0..1000) |
| `antiAlias` | _boolean_ | true | When true, Photoshop anti-aliases the selection edge |

### selectRow

25.0

**async** : _Promise_`<void>`

Select one pixel row.

```javascript
await doc.selection.selectRow(10);
```

UI Location: Toolbar > Single Row Marquee Tool

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `y` | _number_ | Row y coordinate in pixels (integer); keep it inside the document height. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |

### smooth

25.0

**async** : _Promise_`<void>`

Reduce uneven edges, sharp corners, and jagged lines in the selection. Smooth also removes isolated pixel groups smaller than the supplied radius. This helps clean stray pixels from color-based selections.

At high values, `.bounds` can return `null` because no selection remains.

```javascript
await doc.selection.smooth(32);
```

UI Location: Select > Modify > Smooth...

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `radius` | _number_ | - | Radius used for sampling, in pixels (integer in the range 1..500) |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: portions touching the canvas edge are not smoothed. |

### translateBoundary

25.0

**async** : _Promise_`<void>`

Move only the selection relative to its current position. The active layer is not changed.

```javascript
await doc.selection.translateBoundary(100, 600);
```

UI Location: Select > Transform Selection

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `deltaX` | _number_ | Horizontal distance to move the selection (decimal). |
| `deltaY` | _number_ | Vertical distance to move the selection (decimal). |

## Solid Color

Use SolidColor for a color value that can be expressed through any Photoshop color model.
Load SolidColor from Photoshop's app object:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
```

Reading from, or assigning to, one of the model-specific accessors switches that SolidColor instance's current model to that accessor's space. Photoshop performs the cross-space conversion internally, using the user's Color Settings.

The foreground color can be set to red like this:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const red = new SolidColor();
red.rgb.red = 255;
red.rgb.green = 0;
red.rgb.blue = 0;

app.foregroundColor = red;
```

The next example shows how the model changes while code touches different accessors:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const c = new SolidColor();
console.log(c.base.typename); // By default, this will be "RGBColor"

c.cmyk.cyan = 50; // Photoshop will convert the color to CMYK using Edit > Color Settings data
console.log(c.base.typename); // Now, the typename will be "CMYKColor"

c.rgb.green = 128; // Typename will change back to "RGBColor"
```

**_Fixes in Photoshop 24.2:_**

- _Adds range checks for every color mode and component, preventing invalid component values from being accepted._

### Constructors

### constructor

23.0

[_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md)

Default color values are white before assignment.

```
const SolidColor = require("photoshop").app.SolidColor;
const color = new SolidColor();
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `model?` | [_ColorModel_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#colormodel) | Initial color model. |

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| cmyk | [_CMYKColor_](https://raw.githubusercontent.com/ps-reference/colors/cmykcolor.md) | R W | 23.0 | CMYK-space view of the color. |
| gray | [_GrayColor_](https://raw.githubusercontent.com/ps-reference/colors/graycolor.md) | R W | 23.0 | Grayscale view of the color. |
| hsb | [_HSBColor_](https://raw.githubusercontent.com/ps-reference/colors/hsbcolor.md) | R W | 23.0 | HSB-space view of the color. |
| lab | [_LabColor_](https://raw.githubusercontent.com/ps-reference/colors/labcolor.md) | R W | 23.0 | LAB-space view of the color. |
| nearestWebColor | [_RGBColor_](https://raw.githubusercontent.com/ps-reference/colors/rgbcolor.md) | R | 23.0 | Closest color among the 216 web-safe RGB choices. |
| rgb | [_RGBColor_](https://raw.githubusercontent.com/ps-reference/colors/rgbcolor.md) | R W | 23.0 | RGB-space view of the color. |
| typename | _string_ | R | 24.2 | Class name for the referenced object: _"SolidColor"_. |

### Methods

### isEqual

23.0

_boolean_

Returns true when the target SolidColor is visually equivalent to `color`.

The comparison first converts both colors to Lab colorspace. It then averages, across the three channels, the normalized squared Euclidian-distance sum and tests that value against 3.5e-6.

Because color-space coverage and clamping differ, an RGB value that round-trips through CMYK may fail the visual-equality test.

### Parameters

| Name | Type |
| --- | --- |
| `color` | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) |

## Sub Path Info

This array holds [PathPointInfo](https://raw.githubusercontent.com/ps-reference/classes/pathpointinfo.md) entries for a straight or curved path segment and is used when building a [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md).

Provide an array of these objects to [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)(). The method creates one [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object for each `SubPathInfo` object, then returns a newly created [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) object representing the combined subpaths.

- Create subpaths with `SubPathInfo`; its properties are read-write.

- Read data for existing subpaths through the [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object. Its properties are read-only.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| closed | _boolean_ | R W | 23.3 | Whether the path encloses an area. |
| entireSubPath | [_PathPointInfo_](https://raw.githubusercontent.com/ps-reference/classes/pathpointinfo.md)[] | R W | 23.3 | Sub-path [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) object array. |
| operation | [_ShapeOperation_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#shapeoperation) | R W | 23.3 | Operation this subpath applies against other subpaths. When a destination path already has a selection, it controls shape combination. |
| typename | _string_ | R | 23.3 | Class name for the referenced object: _"SubPathInfo"_. |

## See also

- [Unsupported](uxp-unsupported.md)
