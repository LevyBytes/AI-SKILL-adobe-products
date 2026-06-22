# Methods (part 5)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## PathItems — Methods

| Parameter | Type | Description |
| --- | --- | --- |
| centerX | Number (double), optional | Path centerX. Defaults to 200 pt. |
| centerY | Number (double), optional | Path centerY. Defaults to 300 pt. |
| radius | Number (double), optional | Path radius. Defaults to 50 pt. |
| innerRadius | Number (double), optional | Path inner radius. Defaults to 20 pt. |
| points | Number (long), optional | Point count. Defaults to 5 |
| reversed | Boolean, optional | Whether the path direction is reversed. Defaults to false |

### Returns

PathItem

## PathPoint — Methods

### PathPoint.remove()

app.activeDocument.pathItems[index].pathPoints[index].remove()

### Description

Deletes the referenced point from the path.

### Returns

Nothing.

## PathPoints — Methods

### PathPoints.add()

app.activeDocument.pathItems[index].pathPoints.add()

### Description

Creates an object and adds it to the collection.

### Returns

PathPoint

### PathPoints.index()

app.activeDocument.pathItems[index].pathPoints.index(itemKey)

### Description

Retrieves an element from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key supplied as a string or number |

### Returns

PathPoint

### PathPoints.removeAll()

app.activeDocument.pathItems[index].pathPoints.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## Pattern — Methods

### Pattern.remove()

app.activeDocument.patterns[index].remove()

### Description

Deletes the specified pattern from its document.

### Returns

Nothing.

### Pattern.toString()

app.activeDocument.patterns[index].toString()

### Description

Provides the type for the referenced object, and includes the object's name when one is available.

### Returns

String

## Patterns — Methods

### Patterns.add()

app.activeDocument.patterns.add()

### Description

Constructs another object in the collection.

### Returns

Pattern

### Patterns.getByName()

app.activeDocument.patterns.getByName(name)

### Description

Finds and returns the earliest collection item whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Pattern

### Patterns.index()

app.activeDocument.patterns.index(itemKey)

### Description

Retrieves one item from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Pattern

### Patterns.removeAll()

app.activeDocument.patterns.removeAll()

### Description

Removes every collection entry.

### Returns

Nothing.

## PlacedItem — Methods

### PlacedItem.duplicate()

app.activeDocument.placedItems[index].duplicate([relativeObject][, insertionLocation])

### Description

Makes another copy of the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Reference object for duplicate placement |
| insertionLocation | ElementPlacement, optional | ElementPlacement insertion point |

### Returns

PlacedItem

### PlacedItem.embed()

app.activeDocument.placedItems[index].embed()

### Description

Places this art directly in the document, converting it to art item objects as needed, then removes the PlacedItem.

### Returns

Nothing.

### PlacedItem.move()

app.activeDocument.placedItems[index].move(relativeObject, insertionLocation)

### Description

Moves the object to the requested placement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that contains or anchors the moved element |
| insertionLocation | ElementPlacement, optional | ElementPlacement destination for the moved element |

### Returns

PlacedItem

### PlacedItem.relink()

app.activeDocument.placedItems[index].relink(linkFile)

### Description

Connects the art object to the file that supplies its content.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| linkFile | File object | File object used as the new link |

### Returns

Nothing.

### PlacedItem.remove()

app.activeDocument.placedItems[index].remove()

### Description

Removes it.

### Returns

Nothing.

### PlacedItem.resize()

```
app.activeDocument.placedItems[index].resize(
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

Scales the art item; scaleX controls horizontal scale and scaleY controls vertical scale. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale factor |
| scaleY | Number (double) | Vertical scale factor |
| changePositions | Boolean, optional | Whether art object positions and orientations are transformed |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| scaleAbout | Transformation, optional | Anchor point used for the transformation |

### Returns

Nothing.

### PlacedItem.rotate()

```
app.activeDocument.placedItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Changes the art item's rotation from its current angle.

Positive angle values rotate the object counter-clockwise; negative values rotate it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are transformed |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used for rotation |

### Returns

Nothing.

### PlacedItem.trace

app.activeDocument.placedItems[index].trace()

### Description

Converts this object's raster art to vector art with the default options.

Illustrator moves the raster art into a plug-in group's source art, then builds filled paths, stroked paths, or both so the result approximates the original image.

It creates and returns a PluginItem linked to TracingObject.

### Returns

PluginItem

### PlacedItem.transform()

```
app.activeDocument.placedItems[index].transform(
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

Applies a transformation matrix to the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix applied for the transformation |
| changePositions | Boolean, optional | Whether Positions change |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns change |
| changeFillGradients | Boolean, optional | Whether Fill Gradients change |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern changes |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| transformAbout | Transformation, optional | Anchor point used for the transformation |

### Returns

Nothing.

### PlacedItem.translate()

```
app.activeDocument.placedItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item relative to where it is now; deltaX gives x-axis movement and deltaY gives y-axis movement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | X-axis offset |
| deltaY | Number (double), optional | Y-axis offset |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.

### PlacedItem.zOrder()

app.activeDocument.placedItems[index].zOrder(zOrderCmd)

### Description

Changes the art item's place in the stacking order of the parent group or layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Method used for stacking-order arrangement |

### Returns

Nothing.

## PlacedItems — Methods

### PlacedItems.add()

app.activeDocument.placedItems.add()

### Description

Creates a new object.

Use this method to add new art to a document. After add() returns the placedItem object, set its file property to associate the artwork file. See PlacedItem.

### Returns

PlacedItem

### PlacedItems.getByName()

app.activeDocument.placedItems.getByName(name)

### Description

Returns the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name to retrieve |

### Returns

PlacedItem

### PlacedItems.index()

app.activeDocument.placedItems.index(itemKey)

### Description

Retrieves one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key value supplied as String or Number |

### Returns

PlacedItem

### PlacedItems.removeAll()

app.activeDocument.placedItems.removeAll()

### Description

Removes every element in the collection.

### Returns

Nothing.

## PluginItem — Methods

### PluginItem.duplicate()

app.activeDocument.pluginItems[index].duplicate([relativeObject][, insertionLocation])

### Description

Makes another copy of the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Reference object for duplicate placement |
| insertionLocation | ElementPlacement, optional | ElementPlacement insertion point |

### Returns

PluginItem

### PluginItem.move()

app.activeDocument.pluginItems[index].move(relativeObject, insertionLocation)

### Description

Moves the object to the requested placement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that contains or anchors the moved element |
| insertionLocation | ElementPlacement, optional | ElementPlacement destination for the moved element |

### Returns

PluginItem

### PluginItem.remove()

app.activeDocument.pluginItems[index].remove()

### Description

Removes it.

### Returns

Nothing.

### PluginItem.resize()

```
app.activeDocument.pluginItems[index].resize(
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

Scales the art item; scaleX controls horizontal scale and scaleY controls vertical scale. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale factor |
| scaleY | Number (double) | Vertical scale factor |
| changePositions | Boolean, optional | Whether art object positions and orientations are transformed |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| scaleAbout | Transformation, optional | Anchor point used for the transformation |

### Returns

Nothing.

### PluginItem.rotate()

```
app.activeDocument.pluginItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Changes the art item's rotation from its current angle.

Positive angle values rotate the object counter-clockwise; negative values rotate it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are transformed |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used for rotation |

### Returns

Nothing.

### PluginItem.transform()

```
app.activeDocument.pluginItems[index].transform(
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

Applies a transformation matrix to the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix applied for the transformation |
| changePositions | Boolean, optional | Whether Positions change |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns change |
| changeFillGradients | Boolean, optional | Whether Fill Gradients change |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern changes |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| transformAbout | Transformation, optional | Anchor point used for the transformation |

### Returns

Nothing.

### PluginItem.translate()

```
app.activeDocument.pluginItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item relative to where it is now; deltaX gives x-axis movement and deltaY gives y-axis movement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | X-axis offset |
| deltaY | Number (double), optional | Y-axis offset |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.

### PluginItem.zOrder()

app.activeDocument.pluginItems[index].zOrder(zOrderCmd)

### Description

Changes the art item's place in the stacking order of the parent group or layer.

### Parameters

## PluginItems — Methods

### PluginItems.getByName()

app.activeDocument.pluginItems.getByName(name)

### Description

Returns the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name to retrieve |

### Returns

PluginItem

### PluginItems.index()

app.activeDocument.pluginItems.index(itemKey)

### Description

Retrieves one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key value supplied as String or Number |

### Returns

PluginItem

### PluginItems.removeAll()

app.activeDocument.pluginItems.removeAll()

### Description

Removes every element in the collection.

### Returns

Nothing.

## Preferences — Methods

### Preferences.getBooleanPreference

app.preferences.getBooleanPreference(key)

### Description

Returns the Boolean setting stored for the supplied application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |

### Returns

Boolean

### Preferences.getIntegerPreference

app.preferences.getIntegerPreference(key)

### Description

Returns the Integer setting stored for the supplied application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |

### Returns

Integer

### Preferences.getRealPreference

app.preferences.getRealPreference(key)

### Description

Returns the Real-number setting stored for the supplied application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |

### Returns

Real

### Preferences.getStringPreference

app.preferences.getStringPreference(key)

### Description

Returns the String setting stored for the supplied application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |

### Returns

String

### Preferences.removePreference

app.preferences.removePreference(key)

### Description

Removes the specified application preference entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |

### Returns

Nothing.

### Preferences.setBooleanPreference

app.preferences.setBooleanPreference(key, value)

### Description

Stores a Boolean value for the specified application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |
| value | Boolean | Value to set |

### Returns

Nothing.

### Preferences.setIntegerPreference

app.preferences.setIntegerPreference(key, value)

### Description

Stores an Integer value for the specified application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |
| value | Integer | Value to set |

### Returns

Nothing.

### Preferences.setRealPreference

app.preferences.setRealPreference(key, value)

### Description

Stores a Real-number value for the specified application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |
| value | Double | Value to set |

### Returns

Nothing.

### Preferences.setStringPreference

app.preferences.setStringPreference(key, value)

### Description

Stores a String value for the specified application preference key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| key | String | Pref key of value to get |
| value | String | Value to set |

### Returns

Nothing.

## RasterItem — Methods

### RasterItem.colorize()

app.activeDocument.rasterItems[index].colorize(rasterizeColor)

### Description

Applies a CMYK or RGB Color to colorize the raster item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| rasterizeColor | Color | CMYK or RGB Color used for rasterization |

### Returns

Nothing.

### RasterItem.duplicate()

app.activeDocument.rasterItems[index].duplicate([relativeObject][, insertionLocation])

### Description

Makes a copy of the selected object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object used as the duplication reference |
| insertionLocation | ElementPlacement, optional | Element insertion location |

### Returns

RasterItem

### RasterItem.move()

app.activeDocument.rasterItems[index].move(relativeObject, insertionLocation)

### Description

Moves this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that receives the moved element |
| insertionLocation | ElementPlacement, optional | Destination placement for the element |

### Returns

RasterItem

### RasterItem.remove()

app.activeDocument.rasterItems[index].remove()

### Description

Removes the current item.

### Returns

Nothing.

### RasterItem.resize()

```
app.activeDocument.rasterItems[index].resize(
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

Scales the art item; scaleX controls horizontal scaling and scaleY controls vertical scaling. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale factor |
| scaleY | Number (double) | Vertical scale factor |
| changePositions | Boolean, optional | Whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| scaleAbout | Transformation, optional | Anchor point for the transformation |

### Returns

Nothing.

### RasterItem.rotate()

```
app.activeDocument.rasterItems[index].rotate(
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

Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Angle amount used to rotate the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point for the transformation |

### Returns

Nothing.

### RasterItem.trace()

app.activeDocument.rasterItems[index].trace()

### Description

Changes this object's raster art into vector art with default options.

The raster art becomes source art inside a plug-in group, then converts to a group of filled and/or stroked paths resembling the original image.

The method returns a PluginItem linked with a TracingObject.

### Returns

PluginItem

### RasterItem.transform()

```
app.activeDocument.rasterItems[index].transform(
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
| transformationMatrix | Matrix | Matrix applied as the transformation |
| changePositions | Boolean, optional | Whether Positions are changed |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| transformAbout | Transformation, optional | Anchor point for the transformation |

### Returns

Nothing.

### RasterItem.translate()

```
app.activeDocument.rasterItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Repositions the art item from its current location; deltaX supplies the horizontal offset and deltaY supplies the vertical offset.

### Parameters
