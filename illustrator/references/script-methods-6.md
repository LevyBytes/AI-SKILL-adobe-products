# Methods (part 6)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## RasterItem — Methods

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Horizontal displacement |
| deltaY | Number (double), optional | Vertical displacement |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.

### RasterItem.zOrder()

app.activeDocument.rasterItems[index].zOrder(zOrderCmd)

### Description

Changes the art item's place within the stacking order for the parent group or layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Method used to rearrange stacking order |

### Returns

Nothing.

## RasterItems — Methods

### RasterItems.getByName()

app.activeDocument.rasterItems.getByName(name)

### Description

Returns the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name to retrieve |

### Returns

SymbolItem

### RasterItems.index()

app.activeDocument.rasterItems.index(itemKey)

### Description

Returns one collection element.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key supplied as String or Number |

### Returns

SymbolItem

### RasterItems.removeAll()

app.activeDocument.rasterItems.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## Spot — Methods

### Spot.getInternalColor()

app.activeDocument.spots[index].getInternalColor()

### Description

Retrieves a spot's internal color value.

### Returns

Color components.

### Spot.remove()

app.activeDocument.spots[index].remove()

### Description

Removes this object.

### Returns

Nothing.

## Spots — Methods

### Spots.add()

app.activeDocument.spots.add()

### Description

Creates another object in the collection.

### Returns

Spot

### Spots.getByName()

app.activeDocument.spots.getByName(name)

### Description

Returns the first collection item whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Spot

### Spots.index()

app.activeDocument.spots.index(itemKey)

### Description

Fetches a collection item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key of element to get |

### Returns

Spot

### Spots.removeAll()

app.activeDocument.spots.removeAll()

### Description

Removes every item in the collection.

### Returns

Nothing.

## Stories — Methods

### Stories.index()

stories.index(itemKey)

### Description

Fetches a collection item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Story

## Swatch — Methods

### Swatch.remove()

app.activeDocument.swatches[index].remove()

### Description

Removes this object.

### Returns

Nothing.

## Swatches — Methods

### Swatches.add()

app.activeDocument.swatches.add()

### Description

Creates one Swatch object.

### Returns

Swatch

### Swatches.getByName()

app.activeDocument.swatches.getByName(name)

### Description

Returns the first collection member whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Swatch

### Swatches.getSelected()

app.activeDocument.swatches.getSelected()

### Description

Returns whichever document swatches are currently selected.

### Returns

List of Swatch

### Swatches.index()

app.activeDocument.swatches.index(itemKey)

### Description

Retrieves a collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key of element to get |

### Returns

Swatch

### Swatches.removeAll()

app.activeDocument.swatches.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## SwatchGroup — Methods

### SwatchGroup.addSpot()

swatchGroup.addSpot(spot)

### Description

Places the supplied Spot in this group as a spot swatch.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| spot | Spot | Spot to add |

### Returns

Nothing.

### SwatchGroup.addSwatch()

swatchGroup.addSwatch(swatch)

### Description

Adds the supplied Swatch here.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| swatch | Swatch | Swatch to add |

### Returns

Nothing.

### SwatchGroup.getAllSwatches()

swatchGroup.getAllSwatches()

### Description

Returns every swatch held by this group as a list.

### Returns

List of Swatch

### SwatchGroup.remove()

swatchGroup.remove()

### Description

Removes this object.

### Returns

Nothing.

### SwatchGroup.removeAll()

swatchGroup.removeAll()

### Description

Clears every element from the collection.

### Returns

Nothing.

## SwatchGroups — Methods

### SwatchGroups.add()

swatchGroups.add()

### Description

Creates one swatch group.

### Returns

SwatchGroup

### SwatchGroups.getByName()

swatchGroups.getByName(name)

### Description

Returns the first collection member whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

SwatchGroup

### SwatchGroups.removeAll()

swatchGroups.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## SymbolItem — Methods

### SymbolItem.duplicate()

app.activeDocument.symbolItems[index].duplicate([relativeObject][, insertionLocation])

### Description

Makes a copy of the current selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object to duplicate to |
| insertionLocation | ElementPlacement, optional | Location to insert element |

### Returns

SymbolItem

### SymbolItem.move()

app.activeDocument.symbolItems[index].move(relativeObject, insertionLocation)

### Description

Moves the object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object to move element within |
| insertionLocation | ElementPlacement, optional | Location to move element to |

### Returns

SymbolItem

### SymbolItem.remove()

app.activeDocument.symbolItems[index].remove()

### Description

Removes the current item.

### Returns

Nothing.

### SymbolItem.resize()

```
app.activeDocument.symbolItems[index].resize(
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

Uses scaleX as the horizontal factor and scaleY as the vertical factor when scaling the art item. 100.0 = 100%.

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

### SymbolItem.rotate()

```
app.activeDocument.symbolItems[index].rotate(
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

Positive angle values rotate the object counter-clockwise; negative values rotate it clockwise.

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

### SymbolItem.transform()

```
app.activeDocument.symbolItems[index].transform(
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
| transformationMatrix | Matrix | Transformation matrix to apply |
| changePositions | Boolean, optional | Whether to change Positions |
| changeFillPatterns | Boolean, optional | Whether to change Fill Patterns |
| changeFillGradients | Boolean, optional | Whether to change Fill Gradients |
| changeStrokePattern | Boolean, optional | Whether to change Stroke Pattern |
| changeLineWidths | Number (double), optional | The amount to scale line widths |
| transformAbout | Transformation, optional | The point to use as anchor, to transform about |

### Returns

Nothing.

### SymbolItem.translate()

```
app.activeDocument.symbolItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Repositions the art item from its current location; deltaX supplies horizontal movement and deltaY supplies vertical movement.

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

### SymbolItem.zOrder()

app.activeDocument.symbolItems[index].zOrder(zOrderCmd)

### Description

Changes the art item's place in the stacking order of the group or layer parent that contains this object.

### Parameters

## SymbolItems — Methods

### SymbolItems.add()

app.activeDocument.symbolItems.add(symbol)

### Description

Instantiates the supplied symbol.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| symbol | Symbol | Symbol to instance |

### Returns

SymbolItem

### SymbolItems.getByName()

app.activeDocument.symbolItems.getByName(name)

### Description

Returns the first collection member whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

SymbolItem

### SymbolItems.index()

app.activeDocument.symbolItems.index(itemKey)

### Description

Retrieves a collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

SymbolItem

### SymbolItems.removeAll()

app.activeDocument.symbolItems.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## Symbol — Methods

### Symbol.duplicate()

app.activeDocument.symbols[index].duplicate()

### Description

Produces a duplicate object.

### Returns

Symbol

### Symbol.remove()

app.activeDocument.symbols[index].remove()

### Description

Removes this object.

### Returns

Nothing.

## Symbols — Methods

### Symbols.add()

app.activeDocument.symbols.add(sourceArt[, registrationPoint])

### Description

Creates and returns a symbol object from the supplied source art item, which can be any of these:

- CompoundPathItems
- GroupItems
- MeshItems
- NonNativeItems
- PageItems
- PathItems
- RasterItems
- SymbolItems
- TextFrameItems

SymbolRegistrationPoint.SYMBOLCENTERPOINT is used as the registration point when none is supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceArt | PageItem | Source art to create symbol from |
| registrationPoint | SymbolRegistrationPoint, optional | Registration point to use |

### Returns

Symbol

### Symbols.getByName()

app.activeDocument.symbols.getByName(name)

### Description

Finds the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Symbol

### Symbols.index()

app.activeDocument.symbols.index(itemKey)

### Description

Fetches one collection item by key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Symbol

### Symbols.removeAll()

app.activeDocument.symbols.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## Tag — Methods

### Tag.remove()

app.activeDocument.selection[index].tags[index].remove()

### Description

Removes this object.

### Returns

Nothing.

## Tags — Methods

### Tags.add()

app.activeDocument.selection[index].tags.add()

### Description

Creates a fresh Tag.

### Returns

Tag

### Tags.getByName()

app.activeDocument.selection[index].tags.getByName(name)

### Description

Finds the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Tag

### Tags.index()

app.activeDocument.selection[index].tags.index(itemKey)

### Description

Fetches one collection item by key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Tag

### Tags.removeAll()

app.activeDocument.selection[index].tags.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## TextFonts — Methods

### TextFonts.getByName()

app.textFonts.getByName(name)

### Description

Returns the earliest collection item whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name to retrieve |

### Returns

TextFont

### TextFonts.index()

app.textFonts.index(itemKey)

### Description

Retrieves one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Lookup key as either a string or a number |

### Returns

TextFont

## TextFrameItem — Methods

### TextFrameItem.convertAreaObjectToPointObject()

app.activeDocument.textFrames[index].convertAreaObjectToPointObject()

### Description

Recasts area text as point text.

### Returns

TextFrameItem

### TextFrameItem.convertPointObjectToAreaObject()

app.activeDocument.textFrames[index].convertPointObjectToAreaObject()

### Description

Recasts point text as area text.

### Returns

TextFrameItem

### TextFrameItem.createOutline()

app.activeDocument.textFrames[index].createOutline()

### Description

Turns the frame's text content into outline artwork.

### Returns

GroupItem

### TextFrameItem.duplicate()

app.activeDocument.textFrames[index].duplicate([relativeObject] [,insertionLocation])

### Description

Makes a copy of the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Destination object for the duplicate |
| insertionLocation | ElementPlacement, optional | Placement point for insertion |

### Returns

TextRange

### TextFrameItem.move()

app.activeDocument.textFrames[index].move(relativeObject, insertionLocation)

### Description

Relocates this item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that will receive the item |
| insertionLocation | ElementPlacement, optional | Placement location for the move |

### Returns

TextRange

### TextFrameItem.remove()

app.activeDocument.textFrames[index].remove()

### Description

Removes this item.

### Returns

Nothing.

### TextFrameItem.resize()

```
app.activeDocument.textFrames[index].resize(
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

Resizes the art item by using scaleX for horizontal scaling and scaleY for vertical scaling. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Scaling factor along the horizontal axis |
| scaleY | Number (double) | Scaling factor along the vertical axis |
| changePositions | Boolean, optional | Whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| scaleAbout | Transformation, optional | Anchor point around which the transform is applied |

### Returns

Nothing.

### TextFrameItem.rotate()

```
app.activeDocument.textFrames[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current angle. Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation angle for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point around which the rotation is applied |

### Returns

Nothing.

### TextFrameItem.transform()

```
app.activeDocument.textFrames[index].transform(
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
| transformationMatrix | Matrix | Matrix used for the transformation |
| changePositions | Boolean, optional | Whether Positions are changed |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| transformAbout | Transformation, optional | Anchor point around which the transform is applied |

### Returns

Nothing.

### TextFrameItem.translate()

```
app.activeDocument.textFrames[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item from its current location, with deltaX supplying the horizontal offset and deltaY supplying the vertical offset.

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

### TextFrameItem.zOrder()

app.activeDocument.textFrames[index].zOrder(zOrderCmd)

### Description

Changes where the art item sits in the stacking order of its parent group or layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Method used to arrange stacking order |

### Returns

Nothing.

## TextFrameItems — Methods

### TextFrameItems.add()

app.activeDocument.textFrames.add()

### Description

Adds point text.

### Returns

TextFrameItem

### TextFrameItems.areaText()

app.activeDocument.textFrames.areaText(textPath[, orientation][, baseFrame][, postFix])

### Description

Builds area text.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| textPath | PathItem | Input path for the frame |
| orientation | TextOrientation, optional | Text orientation to apply |
| baseFrame | TextFrameItem, optional | Text frame used as the base |
| postFix | Boolean, optional | Whether the text frame is prefixed or postfixed |

### Returns

TextFrameItem

### TextFrameItems.getByName()

app.activeDocument.textFrames.getByName(name)

### Description

Returns the earliest collection item whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name to retrieve |

### Returns

TextFrameItem

### TextFrameItems.index()

app.activeDocument.textFrames.index(itemKey)

### Description

Retrieves one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Lookup key as either a string or a number |

### Returns

TextFrameItem

### TextFrameItems.pathText()

app.activeDocument.textFrames.pathText(textPath[,startTValue][,endTValue][, orientation][, baseFrame][, postFix])

### Description

Creates text that follows a path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| textPath | PathItem | Input path for the frame |
| startTValue | Number (double) | Initial path-position value for text |
| endTValue | Number (double) | Final path-position value for text |
| orientation | TextOrientation, optional | Text orientation to apply |
| baseFrame | TextFrameItem, optional | Text frame used as the base |
| postFix | Boolean, optional | Whether the text frame is prefixed or postfixed |

### Returns

TextFrameItem

### TextFrameItems.pointText()

app.activeDocument.textFrames.pointText(anchor[, orientation])

### Description

Builds point text.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| anchor | Array of 2 numbers | Anchor for the point text |
| orientation | TextOrientation, optional | Text orientation to apply |

### Returns

TextFrameItem

### TextFrameItems.removeAll()

app.activeDocument.textFrames.removeAll()

### Description

Removes every item in this collection.

### Returns

Nothing.

## TextPath — Methods

### TextPath.setEntirePath()

textPath.setEntirePath(pathPoints)

### Description

Replaces the path using the supplied pathPoints array.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pathPoints | Array of [x, y] coordinate pairs | Coordinates used for the replacement path |

### Returns

Nothing.
