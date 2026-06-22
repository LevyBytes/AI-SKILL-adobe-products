# Layercomp, Layercomps, Layers, Paragraphstyle ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: LayerComp; LayerComps; Layers; ParagraphStyle; PathItem; PathItems; PathPoint; Path Point Info; PathPoints.

## LayerComp

One layer comp in the document is represented by this object.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| appearance | _boolean_ | R W | 24.0 | True makes the layer comp store layer appearance settings (layer style). |
| childComp | _boolean_ | R W | 24.0 | True records the Properties panel selection for Smart Object layer comps. |
| comment | _string_ | R W | 24.0 | Layer comp description. |
| docId | _number_ | R | 24.0 | Document ID associated with this layer comp. |
| id | _number_ | R | 24.0 | batchPlay can identify the layer comp by combining this layer comp ID with its document ID while the document or layer comp remains valid. |
| name | _string_ | R W | 24.0 | Layer comp name. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 24.0 | Document that owns this layer comp |
| position | _boolean_ | R W | 24.0 | True makes the layer comp store layer positions. |
| selected | _boolean_ | R | 24.0 | If true, the Layer Comps panel currently selects this layer comp. Note: selection is separate from whether the layer comp has been applied to the document. |
| typename | _string_ | R | 24.0 | Class name for the referenced LayerComp object |
| visibility | _boolean_ | R W | 24.0 | True makes the layer comp store layer visibilities. |

### Methods

### apply

24.0

**async** : _Promise_`<void>`

Updates the document with this comp state.

### duplicate

24.0

**async** : _Promise_<[*LayerComp*](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md)>

Creates another layer comp with the same settings.

### recapture

24.0

**async** : _Promise_`<void>`

Refreshes the layer states recorded for this layer comp.

Without arguments, recapture covers all layers and every property this layer comp supports.

```javascript
app.activeDocument.layerComps[0].recapture();
```

### remove

24.0

**async** : _Promise_`<void>`

Removes this object.

### resetLayerComp

24.0

**async** : _Promise_`<void>`

Restores the layer comp state to match the document state.

## LayerComps

Use `LayerComps` as a collection that supports array-style access to a document's Layer Comps.

Reach the collection through the [Document.layerComps](https://raw.githubusercontent.com/ps-reference/classes/document.md#layercomps) property. This example adds a Layer Comp:

```javascript
const comp = await app.activeDocument.layerComps.add();
```

### Indexable

▪ [index: *number*]: [_LayerComp_](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md)

Use this indexer to retrieve a Layer Comp from the collection.

Reach the collection through the [Document.layerComps](https://raw.githubusercontent.com/ps-reference/classes/document.md#layercomps) property. This example adds a Layer Comp:

```javascript
const comp = await app.activeDocument.layerComps.add();
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 24.0 | Collection element count for [LayerComp](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md) entries |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 24.0 | Document that owns this Layer comp collection |
| typename | _string_ | R | 24.0 | Object collection name: LayerComps |

### Methods

### add

24.0

_Promise_<[*LayerComp*](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md)>

Appends a Layer Comp to the document collection. Without `options`, the recorded state includes visibility only.

Note: The command fails for a flat document, meaning one that has a single Background layer and nothing else.

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `options` | [_LayerCompCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/layercompcreateoptions.md) | \{} | Optional object literal whose key/value pairs follow [LayerCompCreateOptions](https://raw.githubusercontent.com/ps-reference/objects/createoptions/layercompcreateoptions.md) `javascript const options = {    name: "mockup",   comment: "First attempt",   visibility: true,   position: true  }; await require('photoshop').app.activeDocument.layerComps.add(options); ` |

### getAllByName

24.0

[_LayerComp_](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md)[]

Returns every Layer Comp with the requested name.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |

### removeAll

24.0

_Promise_`<void>`

Empties this collection of all Layer Comps.

## Layers

Use `Layers` as the document-layer collection: it provides array-style access to the application's layer list for a document, and it also retains familiar ExtendScript methods such as `getByName`.

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach((h) => console.log(h.name));
```

### Indexable

▪ [index: *number*]: [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)

Use this indexer to retrieve a layer from the collection.

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach((h) => console.log(h.name));
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 22.5 | Collection element count for [Layer](https://raw.githubusercontent.com/ps-reference/classes/layer.md) entries. |
| typename | _string_ | R | 22.5 | Object collection name: Layers. |

### Methods

### add

22.5

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/ps-reference/classes/layer.md)>

Adds another layer to the document.

```javascript
let newDoc1 = await app.activeDocument.layers.add();
```

### getByName

22.5

[_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md)

Returns the first layer whose name matches `name`.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |

## ParagraphStyle

Paragraph panel settings in the Photoshop UI are stored by the `ParagraphStyle` class.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| features | [_TypeInterfaceFeatures_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#typeinterfacefeatures) | R W | [DEFAULT](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.TypeInterfaceFeatures) | - | 24.1 | Paragraph UI features that should be shown. |
| firstLineIndent | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel space applied to the first-line indent of paragraphs. |
| hyphenation | _boolean_ | R W | false | - | 24.1 | Set true to enable hyphenation during word wrap. hyphenationFeatures provides detailed controls. |
| hyphenationFeatures | [_HyphenationProperties_](https://raw.githubusercontent.com/ps-reference/objects/options/hyphenationproperties.md) | R W | - | - | 24.1 | Property values used when Photoshop computes hyphenation. |
| justification | [_Justification_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#justification) | R W | [LEFT](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.Justification) | - | 24.1 | Paragraph justification setting. |
| justificationFeatures | [_JustificationProperties_](https://raw.githubusercontent.com/ps-reference/objects/options/justificationproperties.md) | R W | - | - | 24.1 | Property values used when Photoshop computes justification. |
| kashidaWidth | [_KashidaWidthType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#kashidawidthtype) | R W | [MEDIUM](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.KashidaWidthType) | - | 24.1 | Kashida (tatweel) character width |
| kinsoku | [_Kinsoku_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#kinsoku) | R W | [NONE](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.Kinsoku) | - | 24.1 | Japanese text line-breaking rules (Kinsoku Shori) |
| layoutMode | [_ParagraphLayout_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#paragraphlayout) | R W | [WORLD](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.ParagraphLayout) | - | 24.1 | Paragraph layout mode. |
| leftIndent | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel space used to indent text from the left. |
| mojikumi | [_Mojikumi_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#mojikumi) | R W | [NONE](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.Mojikumi) | - | 24.1 | Japanese-text spacing among punctuation, symbols, numbers, and other character classes. |
| rightIndent | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel space used to indent text from the right. |
| spaceAfter | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel spacing applied after each paragraph. |
| spaceBefore | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel spacing applied before each paragraph. |

### Methods

### reset

24.1

**async** : _Promise_`<void>`

Returns the paragraph style to its default values.

## PathItem

Use `PathItem` for a path or drawing object, including shape outlines and straight or curved lines. Sub paths define its geometry.

Find it under the [Document.pathItems](https://raw.githubusercontent.com/ps-reference/classes/document.md#pathitems) property. Example: select a path item by name.

```javascript
const currentPathItem = app.activeDocument.pathItems.getByName("myPath");
currentPathItem.select();
```

Create these objects by passing a set of SubPathInfo objects to the [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)() method. For each [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md) object, the method creates a [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object, then returns a new [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) object that represents the combined-subpath path.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| docId | _number_ | R | 23.3 | Document ID associated with this pathItem. |
| id | _number_ | R | 23.3 | Identifier for batchPlay operations. Together with the document ID, this pathItem ID can represent the pathItem while the document remains open. |
| kind | [_PathKind_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#pathkind) | R W | 23.3 | Specific path kind. |
| name | _string_ | R W | 23.3 | This path's name |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 23.3 | Document containing the path. |
| subPathItems | [_SubPathItems_](https://raw.githubusercontent.com/ps-reference/classes/subpathitems.md) | R | 23.3 | [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md)s contained by this path. |
| typename | _string_ | R | 23.3 | Referenced object class name: _"PathItem"_. |

### Methods

### deselect

23.3

_Promise_`<void>`

Clears selection on this `pathItem` object.

### duplicate

23.3

_Promise_<[*PathItem*](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)>

Creates and returns a duplicate `pathItem` object using the new name.

### Parameters

| Name | Type |
| --- | --- |
| `name?` | _string_ |

### fillPath

23.3

_Promise_`<void>`

Paints the area enclosed by this path.

Treat `opacity` as a percentage in the `[0.0 ... 100.0]` range.

Measure `feather` in pixels within the `[0.0 ... 250.0]` range.

When `wholePath` is true, the fill uses all subpaths.

### Parameters

| Name | Type | Default value |
| --- | --- | --- |
| `fillColor?` | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | - |
| `mode?` | [_ColorBlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#colorblendmode) | - |
| `opacity` | _number_ | 100.0 |
| `preserveTransparency` | _boolean_ | false |
| `feather` | _number_ | 0.0 |
| `wholePath` | _boolean_ | true |
| `antiAlias` | _boolean_ | true |

### makeClippingPath

23.3

_Promise_`<void>`

Sets this path as the clipping path for this document.

`flatness` controls how a PostScript printer approximates path curves.

### Parameters

| Name | Type |
| --- | --- |
| `flatness?` | _number_ |

### makeSelection

23.3

_Promise_`<void>`

Creates a selection whose boundary follows this path.

`feather` uses pixels in the range [0.0...250.0]

`operation` defaults to `SelectionType.REPLACE`

### Parameters

| Name | Type |
| --- | --- |
| `feather?` | _number_ |
| `antiAlias?` | _boolean_ |
| `operation?` | [_SelectionType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#selectiontype) |

### remove

23.3

_Promise_`<void>`

Removes this object.

### select

23.3

_Promise_`<void>`

Sets this `PathItem` object as active or selected.

### strokePath

23.3

_Promise_`<void>`

Uses the specified tool to stroke the path.

`tool` is optional; the default is `ToolType.PENCIL`.

`simulatePressure` defaults to false.

When the tool is `ToolType.CLONESTAMP` or `ToolType.HEALINGBRUSH`, provide `sourceOrigin` as an object with x and y properties (in pixels) to identify the stroke source location. `sourceLayer` is optional; when omitted, the active document layer is used.

### Parameters

| Name | Type | Default value |
| --- | --- | --- |
| `tool` | [_ToolType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#tooltype) | - |
| `simulatePressure` | _boolean_ | false |
| `sourceOrigin?` | _object_ | - |
| `sourceOrigin.x` | _number_ | - |
| `sourceOrigin.y` | _number_ | - |
| `sourceLayer?` | [_Layer_](https://raw.githubusercontent.com/ps-reference/classes/layer.md) | - |

## PathItems

This collection contains the document's [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) objects.

The [Document.pathItems](https://raw.githubusercontent.com/ps-reference/classes/document.md#pathitems) collection property exposes it. For path creation, [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md) and [PathPointInfo](https://raw.githubusercontent.com/ps-reference/classes/pathpointinfo.md) provide data consumed by the [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)() method.

### Indexable

▪ [index: *number*]: [_PathItem_](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)

Use this indexer to retrieve a path from the collection.

The [Document.pathItems](https://raw.githubusercontent.com/ps-reference/classes/document.md#pathitems) collection property exposes it. For path creation, [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md) and [PathPointInfo](https://raw.githubusercontent.com/ps-reference/classes/pathpointinfo.md) provide data consumed by the [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)() method.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.3 | Collection object count for [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) entries. |
| parent | Document | R | 23.3 | Document that owns this PathItem collection. |

### Methods

### add

23.3

[_PathItem_](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)

Creates a new path item object and inserts it into this collection.

For every [SubPathInfo](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md) object supplied in `entirePath`, a new [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object is created; the returned [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md) stores those objects in its [PathItem.subPathItems](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#subpathitems) collection.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |
| `entirePath` | [_SubPathInfo_](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md)[] |

### getByName

23.3

[_PathItem_](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)

Returns the first PathItem with the supplied name.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | _string_ | Name being searched for |

### removeAll

23.3

_void_

Deletes every path in this collection.

## PathPoint

`PathPoint` represents the anchor endpoint and control-handle endpoints for one path segment. The anchor point, left-direction point, and right-direction point are each arrays of X and Y coordinates.

- Read existing segment point data with the `PathPoint` object. Its properties are read-only. The [SubPathItem.pathPoints](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md#pathpoints) property exposes [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) objects.

- Create path points by passing [PathPointInfo](https://raw.githubusercontent.com/ps-reference/classes/pathpointinfo.md) data to [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)(). The properties are writeable.

For paths made of straight segments, all three point coordinates match. Curved segments use different coordinates. The anchor point's offset from the left or right direction points determines the curve arc. The left direction point bends the curve "outward" or makes it convex; the right direction point bends the curve "inward" or makes it concave.

_Added in Photoshop 23.3_

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| anchor | _number_[] | R | 23.3 | Curve anchor coordinates stored as `[horizontal, vertical]`. |
| kind | [_PointKind_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#pointkind) | R | 23.3 | Role this point has in the containing path segment, either corner or smooth. |
| leftDirection | _number_[] | R | 23.3 | Left-direction endpoint location ('in' position), stored as `[horizontal, vertical]`. |
| parent | [_SubPathItem_](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) | R | 23.3 | SubPath object that contains this point. |
| rightDirection | _number_[] | R | 23.3 | Right-direction endpoint location ('out' position), stored as `[horizontal, vertical]`. |
| typename | _string_ | R | 23.3 | Referenced object class name: _"PathPoint"_. |

## Path Point Info

Create a [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) with this object; the point represents both the anchor and the control-handle endpoints for one path segment.
The anchor point, left-direction point, and right-direction point are each arrays that hold X and Y position coordinates.

- Create these objects with the JavaScript `new` operator, then place them in [SubPathInfo.entireSubPath](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md#entiresubpath)
  before you use that object to make a path item through [PathItems.add](https://raw.githubusercontent.com/ps-reference/classes/pathitems.md#add)()

- After creation, the [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) object holds the resulting [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) objects. Query the [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) object
  when you need details about points that define existing path segments. Its properties are read-only.

For straight path segments, all three points share identical coordinates. Curved segments use different coordinate values. The offset between the anchor point and either the left or right direction point sets the curve arc. The left direction point bends the curve outward, making it convex; the right direction point bends it inward, making it concave.

### PathPointInfo sample script

```typescript
function drawLine(doc: Document, start: number[], stop: number[]) {
  const startPoint = new PathPointInfo();
  startPoint.anchor = start;
  startPoint.leftDirection = start;
  startPoint.rightDirection = start;
  startPoint.kind = Constants.PointKind.CORNERPOINT;

  const stopPoint = new PathPointInfo();
  stopPoint.anchor = stop;
  stopPoint.leftDirection = stop;
  stopPoint.rightDirection = stop;
  stopPoint.kind = Constants.PointKind.CORNERPOINT;

  const spi = new SubPathInfo();
  spi.closed = false;
  spi.operation = Constants.ShapeOperation.SHAPEXOR;
  spi.entireSubPath = [startPoint, stopPoint];

  const line = doc.pathItems.add("Line", [spi]);
  line.strokePath(Constants.ToolType.PENCIL);
  line.remove();
}

drawLine(app.activeDocument, [100, 100], [200, 200]);
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| anchor | _number_[] | R W | 23.3 | X and Y coordinate pair for the curve anchor. |
| kind | [_PointKind_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#pointkind) | R W | 23.3 | Indicates whether this point acts as a corner or smooth point inside the containing path segment. |
| leftDirection | _number_[] | R W | 23.3 | Coordinates for the left-direction endpoint, the 'in' position. |
| rightDirection | _number_[] | R W | 23.3 | Coordinates for the right-direction endpoint, the 'out' position. |
| typename | _string_ | R | 23.3 | Referenced object class name: _"PathPointInfo"_. |

## PathPoints

In [SubPathItem.pathPoints](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md#pathpoints), this collection stores the [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) objects that describe a subpath.

### Indexable

▪ [index: *number*]: [_PathPoint_](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md)

Retrieves a guide from the collection by numeric index.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.3 | Count of entries in this collection. |
| parent | [_SubPathItem_](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md) | R | 23.3 | Containing SubPathItem for this PathPoints collection. |
