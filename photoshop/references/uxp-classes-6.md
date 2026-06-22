# Subpathitem, Subpathitems, Textfont, Textfonts ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: SubPathItem; SubPathItems; Text Font; TextFonts; TextItem; WarpStyle.

## SubPathItem

A SubPathItem represents one subpath; multiple subpaths together form a [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md).

Call [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)() with [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md) objects to construct them. For each supplied [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md) object, the call makes a `SubPathItem`; it also produces a fresh [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) result representing all subpaths. Access the resulting objects through the [PathItem.subPathItems](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#subpathitems) collection.

- Read data for existing subpaths through the [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object. Its properties are read-only.
- Create subpaths with [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md); its properties are read-write.

_Added in Photoshop 23.3_

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| closed | _boolean_ | R | 23.3 | Closed-state flag for the path. |
| operation | [_ShapeOperation_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#shapeoperation) | R | 23.3 | Behavior for this `SubPathItem` when it intersects another. If the destination path already has a selection, this controls how the shapes combine. |
| parent | [_PathItem_](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) | R | 23.3 | Path that owns this subpath. |
| pathPoints | [_PathPoints_](https://raw.githubusercontent.com/ps-reference/classes/pathpoints.md) | R | 23.3 | [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) entries belonging to this `SubPathItem`. |
| typename | _string_ | R | 23.3 | Class name for the referenced object: _"SubPathItem"_. |

## SubPathItems

Collection containing [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) objects that compose a [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md). Retrieve it from the [PathItem.subPathItems](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#subpathitems) collection property.

- Create subpaths with [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md); its properties are writeable.
- Read data for existing subpaths through the [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object. Its properties are read-only.

### Indexable

â–ª [index: *number*]: [_SubPathItem_](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md)

Use this index signature to access the collection's guides.

- Create subpaths with [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md); its properties are writeable.
- Read data for existing subpaths through the [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object. Its properties are read-only.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.3 | Element count for this collection. |
| parent | [_PathItem_](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) | R | 23.3 | PathItem containing this SubPathItem. |

## Text Font

Represents a font available to Photoshop; [Photoshop.fonts](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md#fonts) exposes these objects.

```javascript
const arialMTFont = require("photoshop").app.fonts.getByName("ArialMT");
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| family | _string_ | R | 23.0 | Font family. |
| name | _string_ | R | 23.0 | Font name. |
| parent | [_Photoshop_](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md) | R | 23.0 | Containing application. |
| postScriptName | _string_ | R | 23.0 | Font's PostScript name. |
| style | _string_ | R | 23.0 | Font style. |
| typename | _string_ | R | 23.0 | Class name for the referenced object: _"TextFont"_. |

## TextFonts

TextFonts lists fonts installed on the computer. Each font appears as a [TextFont](https://raw.githubusercontent.com/ps-reference/classes/textfont.md) object. Access the collection via the [Photoshop.fonts](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md#fonts) property.

### Indexable

â–ª [index: *number*]: [_TextFont_](https://raw.githubusercontent.com/ps-reference/classes/textfont.md)

Use this index signature to access text fonts in the collection.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.0 | Total [TextFont](https://raw.githubusercontent.com/ps-reference/classes/textfont.md) entries held here. |
| parent | [_Photoshop_](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md) | R | 23.0 | Owning Photoshop application for this TextFonts collection. |
| typename | _string_ | R | 23.0 | Object-collection name: TextFonts. |

### Methods

### getByName

23.0

[_TextFont_](https://raw.githubusercontent.com/ps-reference/classes/textfont.md)

Returns the first font whose PostScript name matches `name`.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |

## TextItem

TextItem gathers the type-related properties for a Photoshop Text Layer.

```javascript
const app = require("photoshop").app;
const textItem = app.activeDocument.activeLayers[0].textItem;
```

A subset of TextItem properties and methods is available directly on the instance:

```javascript
textItem.contents; // "Lorem Ipsum"
textItem.contents = "Hello World";
textItem.isPointText; // true
await textItem.convertToParagraphText();
```

[TextItem](https://raw.githubusercontent.com/ps-reference/classes/textitem.md) uses [characterStyle](https://raw.githubusercontent.com/ps-reference/classes/textitem.md#characterstyle) for character-level controls and [paragraphStyle](https://raw.githubusercontent.com/ps-reference/classes/textitem.md#paragraphstyle) for paragraph-level controls.

```javascript
textItem.characterStyle.size; // 12
textItem.characterStyle.size = 24;
textItem.paragraphStyle.hyphenation; // true
```

The [warpStyle](https://raw.githubusercontent.com/ps-reference/classes/textitem.md#warpstyle) object is where the text layer's Warp-effect properties are grouped.

```javascript
textItem.warpStyle.style; // "arcLower"
```

For properties measured in pixels, the accepted value range can vary with document resolution. When that applies, the docs state the range with the phrase "for a 72ppi document".

Font size is one example:

```javascript
// Range: 0.01..1296â€”for a 72ppi document
textItem.characterStyle.size = 1000;
```

For a document at another resolution, calculate the matching range with this formula:

```javascript
newVal = (documentResolution / 72) * referenceVal;

// I.e., for a 300ppi document the maximum font size will be:
// (300 / 72) * 1296 = 5400px
```

When a value is assigned, Photoshop validates it internally. Values outside the allowed range produce a Range Error.

### Properties

### characterStyle

â€¢ **characterStyle**: [_CharacterStyle_](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md)

Holds properties for the Photoshop UI Character panel.

### paragraphStyle

â€¢ **paragraphStyle**: [_ParagraphStyle_](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md)

Holds properties for the Photoshop UI Paragraph panel.

### warpStyle

â€¢ **warpStyle**: [_WarpStyle_](https://raw.githubusercontent.com/ps-reference/classes/warpstyle.md)

Holds properties for the Warp Text dialog.

| Name | Type | Access | Default | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| contents | _string_ | R W | - | 24.1 | Layer text content. |
| isParagraphText | _boolean_ | R | - | 24.1 | True when the Text Layer is a "Paragraph Text": bounded text whose characters flow horizontally or vertically inside those limits. |
| isPointText | _boolean_ | R | - | 24.1 | True for a Text Layer using "Point Text": the click location in the image establishes the start of a single horizontal or vertical text line. |
| orientation | [_Orientation_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#orientation) | R W | HORIZONTAL | 24.1 | Direction of text. |
| parent | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) | R | - | 24.1 | Layer that owns this TextItem. |
| textClickPoint | _object_ | R W | - | 24.1 | Text insertion point in the document, represented as an `\{x, y}` object with pixel coordinates. |
| typename | _string_ | R | - | 24.1 | Typename. |

### Methods

### convertToParagraphText

24.1

_Promise_<[*TextItem*](https://raw.githubusercontent.com/ps-reference/classes/textitem.md)>

Change a Text Layer from Point Text into Paragraph Text.

### convertToPointText

24.1

_Promise_<[*TextItem*](https://raw.githubusercontent.com/ps-reference/classes/textitem.md)>

Change a Text Layer from Paragraph Text into Point Text.

### convertToShape

24.1

_Promise_`<void>`

Produce a Shape Layer from the Text Layer.

### createWorkPath

24.1

_Promise_`<void>`

Build a Work Path from the Text Layer.

## WarpStyle

Warp Text dialog settings are collected on this class.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| bend | _number_ | R W | - | -100..100 | 24.1 | Percentage value for warp bend. |
| direction | [_Direction_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#direction) | R W | HORIZONTAL | - | 24.1 | Direction used for the warp. |
| horizontalDistortion | _number_ | R W | - | -100..100 | 24.1 | Percentage value for horizontal warp distortion. |
| style | [_WarpStyle_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#warpstyle) | R W | NONE | - | 24.1 | Warp style applied to the text. |
| verticalDistortion | _number_ | R W | - | -100..100 | 24.1 | Percentage value for vertical warp distortion. |

### Methods

### reset

24.1

**async** : _Promise_`<void>`

Restore WarpStyle to its default values.
