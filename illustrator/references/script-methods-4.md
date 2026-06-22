# Methods (part 4)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## NonNativeItem — Methods

### NonNativeItem.duplicate()

nonNativeItems[index].duplicate([relativeObject] [,insertionLocation])

### Description

Duplicates the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Destination object for the duplicate |
| insertionLocation | ElementPlacement, optional | Insertion point for the element |

### Returns

NonNativeItem

### NonNativeItem.move()

nonNativeItems[index].move(relativeObject, insertionLocation)

### Description

Moves this object to the requested placement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that will contain the moved element |
| insertionLocation | ElementPlacement, optional | Destination placement for the element |

### Returns

NonNativeItem

### NonNativeItem.remove()

nonNativeItems[index].remove()

### Description

Removes this object.

### Returns

Nothing.

### NonNativeItem.removeAll()

nonNativeItems[index].removeAll()

### Description

Clears every element from the collection.

### Returns

Nothing.

### NonNativeItem.resize()

```
nonNativeItem.resize(
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

Applies scaling to the art item: scaleX controls horizontal scale, scaleY controls vertical scale, and 100.0 equals 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale value |
| scaleY | Number (double) | Vertical scale value |
| changePositions | Boolean, optional | Controls whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Controls whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Scale factor applied to line widths |
| scaleAbout | Transformation, optional | Anchor point used for the scaling operation |

### Returns

Nothing.

### NonNativeItem.rotate()

```
nonNativeItem.rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current rotation; positive angle values turn it counter-clockwise and negative values turn it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Amount of rotation to apply to the element |
| changePositions | Boolean, optional | Controls whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Controls whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used for the rotation operation |

### Returns

Nothing.

### NonNativeItem.transform()

```
nonNativeItem.transform(
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

Applies a transformation matrix to the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix used for the transformation |
| changePositions | Boolean, optional | Controls whether Positions are changed |
| changeFillPatterns | Boolean, optional | Controls whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Controls whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Controls whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Scale factor applied to line widths |
| transformAbout | Transformation, optional | Anchor point used for the transform operation |

### Returns

Nothing.

### NonNativeItem.translate()

```
nonNativeItem.translate(
    [deltaX]
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item relative to where it currently sits, using deltaX for horizontal offset and deltaY for vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Horizontal offset value |
| deltaY | Number (double), optional | Vertical offset value |
| transformObjects | Boolean, optional | Controls whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Controls whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Controls whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Controls whether Stroke Patterns are transformed |

### Returns

Nothing.

### NonNativeItem.zOrder()

nonNativeItems[index].zOrder(zOrderCmd)

### Description

## NonNativeItems — Methods

### NonNativeItems.getByName()

nonNativeItems.getByName(name)

### Description

Returns the collection's first element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name used to find the element |

### Returns

NonNativeItem, SymbolItem

## PageItem — Methods

### PageItem.bringInPerspective()

app.activeDocument.pageItems[index].bringInPerspective(posX, posY, perspectiveGridPlane)

### Description

Places art object(s) onto a perspective grid at the specified position and grid plane.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| posX | Number | X coordinate where the art is placed |
| posY | Number | Y coordinate where the art is placed |
| perspectiveGridPlane | PerspectiveGridPlaneType | Perspective grid plane type selected for placement |

### Returns

Returns.

### PageItem.resize()

```
app.activeDocument.pageItems[index].resize(
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

Applies scaling to the art item: scaleX controls horizontal scale, scaleY controls vertical scale, and 100.0 equals 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale value |
| scaleY | Number (double) | Vertical scale value |
| changePositions | Boolean, optional | Controls whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Controls whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Scale factor applied to line widths |
| scaleAbout | Transformation, optional | Anchor point used for the scaling operation |

### Returns

Nothing.

### PageItem.rotate()

```
app.activeDocument.pageItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current rotation; positive angle values turn it counter-clockwise and negative values turn it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Amount of rotation to apply to the element |
| changePositions | Boolean, optional | Controls whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Controls whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used for the rotation operation |

### Returns

Nothing.

### PageItem.transform()

```
app.activeDocument.pageItems[index].transform(
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

Applies a transformation matrix to the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix used for the transformation |
| changePositions | Boolean, optional | Controls whether Positions are changed |
| changeFillPatterns | Boolean, optional | Controls whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Controls whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Controls whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Scale factor applied to line widths |
| transformAbout | Transformation, optional | Anchor point used for the transform operation |

### Returns

Nothing.

### PageItem.translate()

```
app.activeDocument.pageItems[index].translate(
    deltaX
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item relative to where it currently sits, using deltaX for horizontal offset and deltaY for vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Horizontal offset value |
| deltaY | Number (double), optional | Vertical offset value |
| transformObjects | Boolean, optional | Controls whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Controls whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Controls whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Controls whether Stroke Patterns are transformed |

### Returns

Nothing.

### PageItem.zOrder()

app.activeDocument.pageItems[index].zOrder(zOrderCmd)

### Description

Reorders the art item within the stacking order of the containing group or layer (parent).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Method used to arrange stacking order |

### Returns

Nothing.

## PageItems — Methods

### PageItems.getByName()

app.activeDocument.pageItems.getByName(name)

### Description

Returns the first collection member whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

PageItem

### PageItems.index()

app.activeDocument.pageItems.index(itemKey)

### Description

Returns a collection entry selected by itemKey.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

PageItem

### PageItems.removeAll()

app.activeDocument.pageItems.removeAll()

### Description

Removes every member of this collection.

### Returns

Nothing.

## Paragraphs — Methods

### Paragraphs.add()

app.activeDocument.textFrames[index].paragraphs.add(contents [,relativeObject] [,insertionLocation])

### Description

Creates a paragraph containing the supplied text at the requested position in the current document. When no location is supplied, the containing text frame receives it after the active selection or caret position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Text contents to add |
| relativeObject | TextFrameItem, optional | Object to add item to |
| insertionLocation | ElementPlacement, optional | Location to place text |

### Returns

TextRange

### Paragraphs.addBefore()

app.activeDocument.textFrames[index].paragraphs.addBefore(contents)

### Description

Creates a paragraph containing the supplied text ahead of the active selection or caret position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Text contents to add |

### Returns

TextRange

### Paragraphs.index()

app.activeDocument.textFrames[index].paragraphs.index(itemKey)

### Description

Returns a collection entry selected by itemKey.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

TextRange

### Paragraphs.removeAll()

app.activeDocument.textFrames[index].paragraphs.removeAll()

### Description

Removes every member of this collection.

### Returns

Nothing.

## ParagraphStyle — Methods

### ParagraphStyle.applyTo()

app.activeDocument.paragraphStyles[index].applyTo(textItem [,clearingOverrides])

### Description

Applies this paragraph style to the requested object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| textItem | Object | Paragraph item to apply style to |
| clearingOverrides | Boolean, optional | Whether to clear overrides |

### Returns

Nothing.

### ParagraphStyle.remove()

app.activeDocument.paragraphStyles[index].remove()

### Description

Removes the object.

### Returns

Nothing.

## ParagraphStyles — Methods

### ParagraphStyles.add()

app.activeDocument.paragraphStyles.add(name)

### Description

Builds a paragraph style with the supplied name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name used for lookup |

### Returns

ParagraphStyle

### ParagraphStyles.getByName()

app.activeDocument.paragraphStyles.getByName(name)

### Description

Returns the first collection member whose name matches the value supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name used for lookup |

### Returns

ParagraphStyle

### ParagraphStyles.index()

app.activeDocument.paragraphStyles.index(itemKey)

### Description

Retrieves a collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key supplied as a string or number |

### Returns

ParagraphStyle

### ParagraphStyles.removeAll()

app.activeDocument.paragraphStyles.removeAll()

### Description

Removes every member of the collection.

### Returns

Nothing.

## PathItem — Methods

### PathItem.duplicate()

app.activeDocument.pathItems[index].duplicate([relativeObject][, insertionLocation])

### Description

Creates another copy of the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object used as the duplication target |
| insertionLocation | ElementPlacement, optional | Placement enum for insertion |

### Returns

PathItem

### PathItem.move()

app.activeDocument.pathItems[index].move(relativeObject, insertionLocation)

### Description

Relocates the object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that receives the moved element |
| insertionLocation | ElementPlacement, optional | Destination location for the moved element |

### Returns

PathItem

### PathItem.remove()

app.activeDocument.pathItems[index].remove()

### Description

Deletes the current art item.

### Returns

Nothing.

### PathItem.resize()

```
app.activeDocument.pathItems[index].resize(
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

Scales the art item with scaleX as the horizontal factor and scaleY as the vertical factor. At 100.0, scaling is 100% of the original size.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale multiplier |
| scaleY | Number (double) | Vertical scale multiplier |
| changePositions | Boolean, optional | Controls whether art object positions and orientations change |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns transform |
| changeFillGradients | Boolean, optional | Controls whether fill gradients transform |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns transform |
| changeLineWidths | Number (double), optional | Line-width scaling amount |
| scaleAbout | Transformation, optional | Anchor used for the transformation |

### Returns

Nothing.

### PathItem.rotate()

```
app.activeDocument.pathItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current rotation.

A positive angle rotates the object counter-clockwise; a negative value rotates it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Controls whether art object positions and orientations change |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns transform |
| changeFillGradients | Boolean, optional | Controls whether fill gradients transform |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns transform |
| rotateAbout | Transformation, optional | Anchor used for the rotation |

### Returns

Nothing.

### PathItem.setEntirePath()

app.activeDocument.pathItems[index].setEntirePath(pathPoints)

### Description

Uses [x, y] coordinate-pair arrays to define the path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pathPoints | Array of [x, y] coordinate pairs | Point-coordinate array to assign |

### Returns

Nothing.

### PathItem.transform()

```
app.activeDocument.pathItems[index].transform(
    transformationMatrix
    [, changePositions]
    [, changeFillPatterns]
    [, changeFillGradients]
    [, changeStrokePattern]
    [, changeLineWidths]
    [, transformAbout]
)
```

### Description

Applies a transformation matrix to transform the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix applied for the transformation |
| changePositions | Boolean, optional | Controls whether Positions change |
| changeFillPatterns | Boolean, optional | Controls whether Fill Patterns change |
| changeFillGradients | Boolean, optional | Controls whether Fill Gradients change |
| changeStrokePattern | Boolean, optional | Controls whether Stroke Pattern changes |
| changeLineWidths | Number (double), optional | Line-width scaling amount |
| transformAbout | Transformation, optional | Anchor used for the transformation |

### Returns

Nothing.

### PathItem.translate()

```
app.activeDocument.pathItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item from its current position, using deltaX for horizontal offset and deltaY for vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Offset along the X axis |
| deltaY | Number (double), optional | Offset along the Y axis |
| transformObjects | Boolean, optional | Whether Objects should be transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns should be transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients should be transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns should be transformed |

### Returns

Nothing.

### PathItem.zOrder()

app.activeDocument.pathItems[index].zOrder(zOrderCmd)

### Description

Changes the art item's stacking-order position within the containing group or layer parent.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Method for arranging stacking order |

### Returns

Nothing.

## PathItems — Methods

### PathItems.add()

app.activeDocument.pathItems.add()

### Description

Creates an object and adds it to the collection.

### Returns

PathItem

### PathItems.ellipse()

```
app.activeDocument.pathItems.ellipse(
    [top = 100]
    [, left = 100]
    [, width = 50]
    [, height = 100]
    [, reversed = false]
    [, inscribed]
)
```

### Description

Creates a new pathItem shaped as an ellipse from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| top | Number (double), optional | Path top. Defaults to 100 pt. |
| left | Number (double), optional | Path left. Defaults to 100 pt. |
| width | Number (double), optional | Path width. Defaults to 50 pt. |
| height | Number (double), optional | Path height. Defaults to 100 pt. |
| reversed | Boolean, optional | Reverses the path direction when true; false by default |
| inscribed | Boolean, optional | Inscribes the path when true |

### Returns

PathItem

### PathItems.getByName()

app.activeDocument.pathItems.getByName(name)

### Description

Retrieves the first collection element matching the specified name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name used for lookup |

### Returns

PathItem

### PathItems.index()

app.activeDocument.pathItems.index(itemKey)

### Description

Retrieves an element from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key supplied as a string or number |

### Returns

PathItem

### PathItems.polygon()

```
app.activeDocument.pathItems.polygon(
    [centerX = 200]
    [, centerY = 300]
    [, radius = 50]
    [, sides = 8]
    [, reversed = false]
)
```

### Description

Creates a new pathItem shaped as a polygon from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| centerX | Number (double), optional | Path centerX. Defaults to 200 pt. |
| centerY | Number (double), optional | Path centerY. Defaults to 300 pt. |
| radius | Number (double), optional | Path radius. Defaults to 50 pt. |
| sides | Number (long), optional | Side count. Defaults to 8 |
| reversed | Boolean, optional | Reverses the path direction when true; false by default |

### Returns

PathItem

### PathItems.rectangle()

app.activeDocument.pathItems.rectangle(top, left, width, height[,reversed])

### Description

Creates a new pathItem shaped as a polygon from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| top | Number (double) | Path top |
| left | Number (double) | Path left |
| width | Number (double) | Path width |
| height | Number (double) | Path height |
| reversed | Boolean, optional | Reverses the path direction when true |

### Returns

PathItem

### PathItems.removeAll()

app.activeDocument.pathItems.removeAll()

### Description

Clears all entries.

### Returns

Nothing

### PathItems.roundedRectangle()

```
app.activeDocument.pathItems.roundedRectangle(
    top,
    left,
    width,
    height
    [,horizontalRadius = 15]
    [,verticalRadius = 20]
    [,reversed = false]
)
```

### Description

Creates a new pathItem in a rounded-corner rectangle shape from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| top | Number (double) | Path top |
| left | Number (double) | Path left |
| width | Number (double) | Path width |
| height | Number (double) | Path height |
| horizontalRadius | Number (double), optional | Rounded-corner horizontal radius. Defaults to 15 pt. |
| verticalRadius | Number (double), optional | Rounded-corner vertical radius. Defaults to 20 pt. |
| reversed | Boolean, optional | Reverses the path direction when true; false by default |

### Returns

PathItem

### PathItems.star()

```
app.activeDocument.pathItems.star(
    [centerX = 200]
    [, centerY = 300]
    [, radius = 50]
    [, innerRadius = 20]
    [, points = 5]
    [, reversed = false]
)
```

### Description

Creates a new path item shaped as a star from the parameters supplied.

### Parameters
