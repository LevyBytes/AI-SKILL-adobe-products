# Methods (part 3)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## GroupItem — Methods

### GroupItem.duplicate()

```
app.activeDocument.groupItems[index].duplicate(
    [relativeObject]
    [,insertionLocation]
)
```

### Description

Builds a duplicate from the selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object to duplicate to |
| insertionLocation | ElementPlacement, optional | Location to insert element |

### Returns

GroupItem

### GroupItem.move()

app.activeDocument.groupItems[index].move(relativeObject, insertionLocation)

### Description

Changes its placement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object to move element within |
| insertionLocation | ElementPlacement, optional | Location to move element to |

### Returns

GroupItem

### GroupItem.remove()

app.activeDocument.groupItems[index].remove()

### Description

Removes this object from the document.

### Returns

Nothing.

### GroupItem.resize()

```
app.activeDocument.groupItems[index].resize(
    scaleX,
    scaleY
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,scaleAbout]
)
```

### Description

Scales the art item using scaleX for horizontal scaling and scaleY for vertical scaling; 100.0 represents 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scaling factor |
| scaleY | Number (double) | Vertical scaling factor |
| changePositions | Boolean, optional | Whether to effect art object positions and orientations |
| changeFillPatterns | Boolean, optional | Whether to transform fill patterns |
| changeFillGradients | Boolean, optional | Whether to transform fill gradients |
| changeStrokePattern | Boolean, optional | Whether to transform stroke patterns |
| changeLineWidths | Number (double), optional | The amount to scale line widths |
| scaleAbout | Transformation, optional | The point to use as anchor, to transform about |

### Returns

Nothing.

### GroupItem.rotate()

```
app.activeDocument.groupItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Applies rotation relative to the current rotation. Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | The angle amount to rotate the element |
| changePositions | Boolean, optional | Whether to effect art object positions and orientations |
| changeFillPatterns | Boolean, optional | Whether to transform fill patterns |
| changeFillGradients | Boolean, optional | Whether to transform fill gradients |
| changeStrokePattern | Boolean, optional | Whether to transform stroke patterns |
| rotateAbout | Transformation, optional | The point to use as anchor, to transform about |

### Returns

Nothing.

### GroupItem.transform()

```
app.activeDocument.groupItems[index].transform(
    transformationMatrix
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,transformAbout]
)
```

### Description

Uses transformationMatrix to transform the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Transformation matrix to apply |
| changePositions | Boolean, optional | Whether to change Positions |
| changeFillPatterns | Boolean, optional | Whether to change Fill Patterns |
| changeFillGradients | Boolean, optional | Whether to change Fill Gradients |
| changeStrokePattern | Boolean, optional | Whether to change Stroke Pattern |
| changeLineWidths | Number (double), optional | The amount to scale line widths |
| transformAbout | Transformation, optional | The point to use as anchor, to transform about |

### Returns

Nothing.

### GroupItem.translate()

```
app.activeDocument.groupItems[index].translate(
    [deltaX]
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art relative to current position: deltaX controls horizontal movement, and deltaY controls vertical movement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Horizontal offset |
| deltaY | Number (double), optional | Vertical offset |
| transformObjects | Boolean, optional | Whether to transform Objects |
| transformFillPatterns | Boolean, optional | Whether to transform Fill Patterns |
| transformFillGradients | Boolean, optional | Whether to transform Fill Gradients |
| transformStrokePatterns | Boolean, optional | Whether to transform Stroke Patterns |

### Returns

Nothing.

### GroupItem.zOrder()

app.activeDocument.groupItems[index].zOrder(zOrderCmd)

### Description

Places the art item within the stacking order of the parent group or layer.

### Parameters

## GroupItems — Methods

### GroupItems.add()

app.activeDocument.groupItems.add()

### Description

Adds a new GroupItem.

### Returns

GroupItem

### GroupItems.createFromFile()

app.activeDocument.groupItems.createFromFile(imageFile)

### Description

Places an external vector art file into the document as a group item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| imageFile | File object | Vector art file to place |

### Returns

GroupItem

### GroupItems.getByName()

app.activeDocument.groupItems.getByName(name)

### Description

Returns the collection's first element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

GroupItem

### GroupItems.index()

app.activeDocument.groupItems.index(itemKey)

### Description

Retrieves a collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

GroupItem

### GroupItems.removeAll()

app.activeDocument.groupItems.removeAll()

### Description

Clears this collection.

### Returns

Nothing.

## InsertionPoints — Methods

### InsertionPoints.index()

app.activeDocument.textFrames[index].insertionPoints.index(itemKey)

### Description

Retrieves one collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

InsertionPoint

## Layer — Methods

### Layer.move()

app.activeDocument.layers[index].move(relativeObject, insertionLocation)

### Description

Performs a move operation.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object to move element within |
| insertionLocation | ElementPlacement, optional | Location to move element to |

### Returns

Layer

### Layer.remove()

app.activeDocument.layers[index].remove()

### Description

Removes the layer instance.

### Returns

Nothing.

### Layer.zOrder()

app.activeDocument.layers[index].zOrder(ZOrderCmd)

### Description

Changes this layer's placement within the stacking order of its parent layer or document.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Stacking order arrangement method |

### Returns

Nothing.

## Layers — Methods

### Layers.add()

app.activeDocument.layers.add()

### Description

Adds a layer to the document.

### Returns

Layer

### Layers.getByName()

app.activeDocument.layers.getByName(name)

### Description

Returns the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Layer

### Layers.index()

app.activeDocument.layers.index(itemKey)

### Description

Retrieves one collection element.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Layer

### Layers.removeAll()

app.activeDocument.layers.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## LegacyTextItem — Methods

### LegacyTextItem.convertToNative()

legacyTextItems[index].convertToNative()

### Description

Changes the legacy text item into a text frame, then removes the source legacy text.

### Returns

GroupItem

### LegacyTextItem.duplicate()

```
legacyTextItems[index].duplicate(
    [relativeObject]
    [,insertionLocation]
)
```

### Description

Builds another instance from the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object that receives the duplicate |
| insertionLocation | ElementPlacement, optional | ElementPlacement value for where the element is inserted |

### Returns

LegacyTextItem

### LegacyTextItem.move()

legacyTextItems[index].move(relativeObject, insertionLocation)

### Description

Places the object elsewhere.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that the moved element is placed within |
| insertionLocation | ElementPlacement, optional | ElementPlacement value for the element's new location |

### Returns

LegacyTextItem

### LegacyTextItem.remove()

legacyTextItems[index].remove()

### Description

Removes the item.

### Returns

Nothing.

### LegacyTextItem.resize()

```
legacyTextItem.resize(
    scaleX,
    scaleY
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,scaleAbout]
)
```

### Description

Resizes the art item using scaleX for horizontal scale and scaleY for vertical scale. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale multiplier |
| scaleY | Number (double) | Vertical scale multiplier |
| changePositions | Boolean, optional | Whether art object positions and orientations are also affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount applied when scaling line widths |
| scaleAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.

### LegacyTextItem.rotate()

```
legacyTextItem.rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Applies a rotation to the art item from its current rotation. Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are also affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.

### LegacyTextItem.transform()

```
legacyTextItem.transform(
    transformationMatrix
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,transformAbout]
)
```

### Description

Applies a transformation matrix to modify the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Transformation matrix used for the operation |
| changePositions | Boolean, optional | Whether Positions are changed |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Amount applied when scaling line widths |
| transformAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.

### LegacyTextItem.translate()

```
legacyTextItem.translate(
    [deltaX]
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item from its current position, using deltaX as the horizontal offset and deltaY as the vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Offset along the horizontal axis |
| deltaY | Number (double), optional | Offset along the vertical axis |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.

### LegacyTextItem.zOrder()

legacyTextItems[index].zOrder(zOrderCmd)

### Description

Sets where this art item sits in the parent group or layer stacking order.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Method that determines the stacking-order change |

### Returns

Nothing.

## LegacyTextItems — Methods

### LegacyTextItems.convertToNative()

legacyTextItems.convertToNative()

### Description

Converts every legacy text item into text frames, removes the original legacy text items, and returns true when the operation succeeds.

### Returns

Boolean.

### LegacyTextItems.getByName()

legacyTextItems.getByName(name)

### Description

Returns the first collection element whose name matches the specified value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of the element to return |

### Returns

LegacyTextItem

### LegacyTextItems.index()

legacyTextItems.index(itemKey)

### Description

Retrieves the item identified by itemKey.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Lookup key value |

### Returns

LegacyTextItem

### LegacyTextItems.removeAll()

legacyTextItems.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## Lines — Methods

### Lines.index()

lines.index(itemKey)

### Description

Retrieves the item identified by itemKey.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Lookup key value |

### Returns

TextRange

### Lines.removeAll()

lines.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## MeshItem — Methods

### MeshItem.duplicate()

app.activeDocument.meshItems[index].duplicate([relativeObject] [,insertionLocation])

### Description

Builds another instance from the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object that receives the duplicate |
| insertionLocation | ElementPlacement, optional | ElementPlacement value for where the element is inserted |

### Returns

MeshItem

### MeshItem.move()

app.activeDocument.meshItems[index].move(relativeObject, insertionLocation)

### Description

Places the object elsewhere.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that the moved element is placed within |
| insertionLocation | ElementPlacement, optional | ElementPlacement value for the element's new location |

### Returns

MeshItem

### MeshItem.remove()

app.activeDocument.meshItems[index].move()

### Description

Removes the item.

### Returns

Nothing.

### MeshItem.resize()

```
app.activeDocument.meshItems[index].resize(
    scaleX,
    scaleY
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,scaleAbout]
)
```

### Description

Resizes the art item using scaleX for horizontal scale and scaleY for vertical scale. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale multiplier |
| scaleY | Number (double) | Vertical scale multiplier |
| changePositions | Boolean, optional | Whether art object positions and orientations are also affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount applied when scaling line widths |
| scaleAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.

### MeshItem.rotate()

```
app.activeDocument.meshItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Applies a rotation to the art item from its current rotation. Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are also affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.

### MeshItem.transform()

```
app.activeDocument.meshItems[index].transform(
    transformationMatrix
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,transformAbout]
)
```

### Description

Applies a transformation matrix to modify the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Transformation matrix used for the operation |
| changePositions | Boolean, optional | Whether Positions are changed |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Amount applied when scaling line widths |
| transformAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.

### MeshItem.translate()

```
app.activeDocument.meshItems[index].translate(
    [deltaX]
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item from its current position, using deltaX as the horizontal offset and deltaY as the vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Offset along the horizontal axis |
| deltaY | Number (double), optional | Offset along the vertical axis |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.

### MeshItem.zOrder()

app.activeDocument.meshItems[index].zOrder(zOrderCmd)

### Description

Sets where this art item sits in the parent group or layer stacking order.

### Parameters

## MeshItems — Methods

### MeshItems.getByName()

app.activeDocument.meshItems.getByName(name)

### Description

Returns the first collection element whose name matches the specified value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of the element to return |

### Returns

MeshItem

### MeshItems.index()

app.activeDocument.meshItems.index(itemKey)

### Description

Retrieves the item identified by itemKey.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Lookup key value |

### Returns

MeshItem

### MeshItems.removeAll()

app.activeDocument.meshItems.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.
