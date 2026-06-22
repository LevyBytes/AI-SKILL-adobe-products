# Methods (part 1)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Application — Methods

### Application.beep()

app.beep()

### Description

Notifies the user with an alert.

### Returns

Nothing.

### Application.concatenateMatrix()

app.concatenateMatrix(matrix, secondMatrix)

### Description

Combines two matrices.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | Primary matrix |
| secondMatrix | Matrix | Matrix to append |

### Returns

jsobjref/Matrix.

### Application.concatenateRotationMatrix()

app.concatenateRotationMatrix(matrix, angle)

### Description

Adds a rotation translation onto a transformation matrix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | Base matrix |
| angle | Number (double) | Rotation angle |

### Returns

jsobjref/Matrix.

### Application.concatenateScaleMatrix()

app.concatenateScaleMatrix(matrix[, scaleX][, scaleY])

### Description

Adds a scale translation onto a transformation matrix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | Base matrix |
| scaleX | Number (double), optional | X-axis scale |
| scaleY | Number (dobule), optional | Y-axis scale |

### Returns

Matrix

### Application.concatenateTranslationMatrix()

app.concatenateTranslationMatrix(matrix[, deltaX][, deltaY])

### Description

Adds a translation onto a transformation matrix.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | Base matrix |
| deltaX | Number (double), optional | Horizontal offset |
| deltaY | Number (dobule), optional | Vertical offset |

### Returns

Matrix

### Application.convertSampleColor()

```
app.convertSampleColor(
    sourceColorSpace,
    sourceColor,
    destColorSpace,
    colorConvertPurpose
    [, sourceHasAlpha]
    [, destHasAlpha]
)
```

### Description

Transforms sample-component color values from one color space into another.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceColorSpace | ImageColorSpace | Source color space |
| sourceColor | ColorComponents | Color value to convert |
| destColorSpace | ImageColorSpace | Destination color space |
| colorConvertPurpose | ColorConvertPurpose | Conversion purpose |
| sourceHasAlpha | Boolean, optional | Indicates whether alpha is present in the source |
| destHasAlpha | Boolean, optional | Indicates whether alpha is present in the destination |

### Returns

Array of ColorComponents

### Application.copy()

app.copy()

### Description

Places the current selection on the clipboard by copying it.

### Returns

Nothing.

### Application.cut()

app.cut()

### Description

Moves the current selection to the clipboard by cutting it.

### Returns

Nothing.

### Application.deleteWorkspace()

app.deleteWorkspace(workspaceName)

### Description

Removes a workspace that already exists.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| workspaceName | String | Workspace name to remove |

### Returns

Boolean

### Application.getIdentityMatrix()

app.getIdentityMatrix()

### Description

Provides an identity matrix.

### Returns

Matrix

### Application.getIsFileOpen()

app.getIsFileOpen(filePath)

Note

Illustrator XX.X (CC2017) introduced this functionality.

### Description

Reports whether `filePath` is currently open.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| filePath | String | File path to test |

### Returns

Boolean

### Application.getPPDFileInfo()

app.getPPDFileInfo(name)

### Description

Retrieves detailed file information for a specified PPD file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | File name whose information is requested |

### Returns

PPDFileInfo

### Application.getPresetFileOfType()

app.getPresetFileOfType(presetType)

### Description

Gives the full path to the application's default document profile for the requested preset type.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| presetType | DocumentPresetType | Preset type whose file should be returned |

### Returns

File object

### Application.getPresetSettings()

app.getPresetSettings(preset)

### Description

Reads tracing-option settings from the template identified by the supplied preset name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| preset | String | Preset name used to retrieve settings |

### Returns

DocumentPreset

### Application.getRotationMatrix()

app.getRotationMatrix([angle])

### Description

Creates a transformation matrix that contains one rotation.

Note

The value must be in degrees.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double), optional | Angle for the matrix |

### Returns

Matrix

### Example

Rotate the object counterclockwise by 30 degrees:

```
app.getRotationMatrix(30);
```

Use a negative value for a 30-degree clockwise rotation:

```
app.getRotationMatrix(-30);
```

### Application.getScaleMatrix()

app.getScaleMatrix([scaleX][, scaleY])

### Description

Creates a transformation matrix that contains one scale.

Note

The value must be a percentage.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double), optional | X scale used for the matrix |
| scaleY | Number (double), optional | Y scale used for the matrix |

### Returns

Matrix

### Example

Set the object's scale to 60% of the original size:

```
app.getScaleMatrix(60, 60);
```

Increase the object's bounds to twice their size:

```
app.getScaleMatrix(200, 200);
```

### Application.getScriptableHelpGroup()

app.getScriptableHelpGroup()

### Description

Retrieves the scriptable help group object for the app bar search widget.

### Returns

Variant

### Application.getTranslationMatrix()

app.getTranslationMatrix([deltaX][, deltaY])

### Description

Creates a transformation matrix that contains one translation.

Note

The value must be in points.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | X-axis delta |
| deltaY | Number (dobule), optional | Y-axis delta |

### Returns

Matrix

### Example

Move the object 100 pt. right and 200 pt. up:

```
app.getTranslationMatrix(100, 200);
```

Move the same objects in the opposite direction:

```
app.getTranslationMatrix(-100, -200);
```

### Application.invertMatrix()

app.invertMatrix(matrix)

### Description

Provides the matrix inverse.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | Matrix being inverted |

### Returns

Matrix

### Application.isEqualMatrix()

app.isEqualMatrix(matrix, secondMatrix)

### Description

Determines whether both matrix values match.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | First matrix to compare |
| secondMatrix | Matrix | Second matrix to compare |

### Returns

Boolean

### Application.isSingularMatrix()

app.isSingularMatrix(matrix)

### Description

Tests whether a matrix is singular and therefore not invertible.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| matrix | Matrix | Matrix to test |

### Returns

Boolean

### Application.loadColorSettings()

app.loadColorSettings(fileSpec)

### Description

Loads color settings from the specified file, or disables color management when the file is empty.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec | File object | File providing settings to load |

### Returns

Nothing.

### Application.open()

app.open(file[, documentColorSpace][, options])

### Description

Opens the requested document file.

Note

When a pre-Illustrator 9 document contains both RGB and CMYK colors and `documentColorSpace` is provided, Illustrator converts every color to that chosen color space.

When that parameter is omitted, Illustrator displays a dialog that lets the user choose the color space.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object | Document file to open |
| documentColorSpace | DocumentColorSpace, optional | Color space for the document |
| options | anything | todo |

### Returns

Document

### Application.paste()

app.paste()

### Description

Inserts the current clipboard contents into the current document.

### Returns

Nothing.

### Application.quit()

app.quit()

### Description

Exits Illustrator.

Note

If data is on the clipboard, Illustrator may display a prompt asking whether to save that data for use by other applications.

### Returns

Nothing.

### Application.redo()

app.redo()

### Description

Reapplies the transaction most recently undone.

### Returns

Nothing.

### Application.redraw()

app.redraw()

### Description

Makes Illustrator redraw all windows.

### Returns

Nothing.

### Application.resetWorkspace()

app.resetWorkspace()

### Description

Restores the current workspace to its default state.

### Returns

Boolean

### Application.saveWorkspace()

app.saveWorkspace(workspaceName)

### Description

Stores a new workspace.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| workspaceName | String | Name to use for the saved workspace |

### Returns

Boolean

### Application.sendScriptMessage()

app.sendScriptMessage(pluginName, messageSelector, inputString)

### Description

Sends a command message defined by a plug-in to that plug-in with the supplied input arguments, then returns the result string defined by the plug-in.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pluginName | String | Plug-in that receives the message |
| messageSelector | String | Message selector sent to the plugin |
| inputString | String | Data supplied to the command |

### Returns

String

### Application.showPresets()

app.showPresets(fileSpec)

### Description

Retrieves presets from the file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec | File object | File to read presets from |

### Returns

PrintPresetList

### Application.switchWorkspace()

app.switchWorkspace(workspaceName)

### Description

Changes to the specified workspace.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| workspaceName | String | Workspace name to switch to |

### Returns

Boolean

### Application.translatePlaceholderText()

app.translatePlaceholderText(text)

### Description

Converts placeholder text into regular text, allowing Unicode points to be entered as hex values.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | Text string to translate |

### Returns

String

### Application.undo()

app.undo()

### Description

Reverses the most recent transaction.

### Returns

Nothing.

## Artboard — Methods

### Artboard.remove()

artboard.remove()

### Description

Removes this artboard object. The final artboard in a document cannot be removed.

### Returns

Nothing.

## Artboards — Methods

### Artboards.add()

artboards.add(artboardRect)

### Description

Adds an Artboard object to the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artboardRect | Rect | Artboard dimensions |

### Returns

Artboard

### Artboards.getActiveArtboardIndex()

artboards.getActiveArtboardIndex()

### Description

Looks up where the active artboard sits within the document artboard list.

It uses indexing that starts at 0.

### Returns

Number (long)

### Artboards.getByName()

artboards.getByName(name)

### Description

Returns the first collection entry whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Artboard

### Artboards.insert()

artboards.insert(artboardRect, index)

### Description

Builds an Artboard object and places it into the list at the supplied index.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artboardRect | Rect | Artboard dimensions |
| index | Number (long) | Index to insert artboard at |

### Returns

Nothing.

### Artboards.remove()

artboards.remove(index)

### Description

Removes the artboard at the requested position. A document must retain at least one artboard.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Number (long) | Index of artboard to remove |

### Returns

Nothing.

### Artboards.setActiveArtboardIndex()

artboards.setActiveArtboardIndex(index)

### Description

Switches activation to the requested artboard and makes that item current when iteration proceeds.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Number (long) | Index of artboard to set active |

### Returns

Nothing.

## Brush — Methods

### Brush.applyTo()

app.activeDocument.brushes[index].applyTo(artItem)

### Description

Applies this brush to the supplied PageItem.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artItem | PageItem | Art item to apply brush to |

### Returns

Nothing.

## Brushes — Methods

### Brushes.getByName()

app.activeDocument.brushes.getByName(name)

### Description

Returns the first collection entry whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Brush

### Brushes.index()

app.activeDocument.brushes.index(itemKey)

### Description

Returns one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Brush

## Characters — Methods

### Characters.add()

app.activeDocument.textFrames[index].contents.add(contents[,relativeObject][,insertionLocation])

### Description

Adds one new character with the supplied text at the requested place in the current document.

Without an explicit location, insertion happens after the active selection or insertion point inside the containing text frame.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Text contents to add |
| relativeObject | TextFrameItem, optional | Object to add item to |
| insertionLocation | ElementPlacement, optional | Location to place text |

### Returns

TextRange

### Characters.addBefore()

app.activeDocument.textFrames[index].contents.addBefore(contents)

### Description

Inserts a character before the selected text.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Text contents to add |

### Returns

TextRange

### Characters.index()

app.activeDocument.textFrames[index].contents.index(itemKey)

### Description

Returns one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

TextRange

### Characters.removeAll()

app.activeDocument.textFrames[index].contents.removeAll()

### Description

Removes every element from the collection.

### Returns

Nothing.

## CharacterStyle — Methods

### CharacterStyle.applyTo()

characterStyle.applyTo(textItem [,clearingOverrides])

### Description

Applies this CharacterStyle across the supplied text item set.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| textItem | Object | Text item to apply style to |
| clearingOverrides | Boolean, optional | Whether to clear overrides |

### Returns

Nothing

### CharacterStyle.remove()

characterStyle.remove()

### Description

Removes the object.

### Returns

Nothing.

## CharacterStyles — Methods

### CharacterStyles.add()

add(name)

### Description

Builds a character style using the supplied name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name to create |

### Returns

CharacterStyle

### CharacterStyles.getByName()

getByName(name)

### Description

Returns the earliest collection entry whose name matches the value supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

CharacterStyle

### CharacterStyles.index()

index(itemKey)

### Description

Fetches one collection entry.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

CharacterStyle

### CharacterStyles.removeAll()

removeAll()

### Description

Removes every element held by this collection.

### Returns

Nothing.

## CompoundPathItem — Methods

### CompoundPathItem.duplicate()

app.activeDocument.activeLayer.compoundPathItems[index].duplicate([relativeObject][,insertionLocation])

### Description

Duplicates the selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object to duplicate to |
| insertionLocation | ElementPlacement, optional | Location to insert element |

### Returns

CompoundPathItem

### CompoundPathItem.move()

app.activeDocument.activeLayer.compoundPathItems[index].move(relativeObject, insertionLocation)

### Description

Changes its position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object to move element within |
| insertionLocation | ElementPlacement, optional | Location to move element to |

### Returns

Nothing.

### CompoundPathItem.remove()

app.activeDocument.activeLayer.compoundPathItems[index].remove()

### Description

Removes the current item.

### Returns

Nothing.

### CompoundPathItem.resize()

```
app.activeDocument.activeLayer.compoundPathItems[index].resize(
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

Scales the art item with scaleX controlling horizontal size and scaleY controlling vertical size. 100.0 = 100%.

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

### CompoundPathItem.rotate()

```
app.activeDocument.activeLayer.compoundPathItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current rotation; positive angle values rotate counter-clockwise, and negative values rotate clockwise.

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

### compoundPathItem.transform()

```
app.activeDocument.activeLayer.compoundPathItems[index].transform(
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

### CompoundPathItem.translate()

```
app.activeDocument.activeLayer.compoundPathItems[index].translate(
    deltaX
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item from its current location, using deltaX for side-to-side movement and deltaY for vertical movement.

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

### CompoundPathItem.zOrder()

app.activeDocument.activeLayer.compoundPathItems[index].zOrder(zOrderCmd)

### Description

Places the art item within the stacking order of the group or layer parent that contains this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| zOrderCmd | ZOrderMethod | Stacking order arrangement method |

### Returns

Nothing.

## CompoundPathItems — Methods

### CompoundPathItems.add()

app.activeDocument.activeLayer.compoundPathItems.add()

### Description

Adds a CompoundPathItem to the collection.

### Returns

CompoundPathItem

### CompoundPathItems.getByName()

app.activeDocument.activeLayer.compoundPathItems.getByName(name)

### Description

Returns the first collection element whose name matches the specified value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

CompoundPathItem

### CompoundPathItems.index()

app.activeDocument.activeLayer.compoundPathItems.index(itemKey)

### Description

Fetches a collection element.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

CompoundPathItem

### CompoundPathItems.removeAll()

app.activeDocument.activeLayer.compoundPathItems.removeAll()

### Description

Removes all elements stored in this collection.

### Returns

Nothing.

## Dataset — Methods

### Dataset.display()

app.activeDocument.dataSets[index].display()

### Description

Shows the dataset.

### Returns

Nothing.

### Dataset.remove()

app.activeDocument.dataSets[index].remove()

### Description

Removes this object.

### Returns

Nothing.

### Dataset.update()

app.activeDocument.dataSets[index].update()

### Description

Refreshes the dataset.

### Returns

Nothing.

## Datasets — Methods

### Datasets.add()

app.activeDocument.dataSets.add()

### Description

Builds and returns another dataset object.

### Returns

Dataset

### Datasets.getByName()

app.activeDocument.dataSets.getByName(name)

### Description

Finds the earliest collection member whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Dataset

### Datasets.index()

app.activeDocument.dataSets.index(itemKey)

### Description

Retrieves one collection item by key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Dataset

### Datasets.removeAll()

app.activeDocument.dataSets.removeAll()

### Description

Deletes every item held by the collection.

### Returns

Nothing.
