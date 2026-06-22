# Methods (part 2)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Document — Methods

### Document.activate()

app.activeDocument.activate()

### Description

Moves the document's first associated window to the foreground.

### Returns

Nothing.

### Document.arrange()

app.activeDocument.arrange([layoutStyle])

### Description

Uses layoutStyle to arrange multiple documents.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| layoutStyle | DocumentLayoutStyle, optional | The layout style to arrange documents in |

### Returns

Boolean.

### Document.close()

app.activeDocument.close([saveOptions])

### Description

Closes a document according to the supplied save options.

After closing a document, set that document reference to null so the script does not accidentally access a closed document.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| saveOptions | SaveOptions | Save options to close with |

### Returns

Nothing.

### Document.closeNoUI()

app.activeDocument.closeNoUI()

### Description

Closes the specified document that has no UI.

### Returns

Nothing.

### Document.convertCoordinate()

app.activeDocument.convertCoordinate(coordinate, source, destination)

### Description

Translates the supplied point between artboard and document coordinate systems and returns the point after conversion.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| coordinate | Point | Point to convert |
| source | CoordinateSystem | Source coordinate system |
| destination | CoordinateSystem | Destination coordinate system |

### Returns

Point.

### Document.exportFile()

app.activeDocument.exportFile(exportFile, exportFormat [,options])

### Description

Writes the document to the requested file through one of the predefined export formats. Illustrator appends the appropriate extension to the file name automatically, except for Photoshop documents, where the file specification must already include the PSD extension.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| exportFile | File object | File to save |
| exportFormat | ExportType | Export file format |
| options | Variable, optional | todo |

### Returns

Nothing.

### Document.exportPDFPreset()

app.activeDocument.exportPDFPreset(file)

### Description

Writes current PDF preset values to file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object | Preset file to export to |

### Returns

Nothing.

### Document.exportPerspectiveGridPreset()

app.activeDocument.exportPerspectiveGridPreset(file)

### Description

Writes current perspective grid preset values to file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object | Preset file to export to |

### Returns

Nothing.

### Document.exportPrintPreset()

app.activeDocument.exportPrintPreset(file)

### Description

Writes current print preset values to file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object | Preset file to export to |

### Returns

Nothing.

### Document.exportVariables()

app.activeDocument.exportVariables(fileSpec)

### Description

Stores datasets in an XML library; those datasets include variables plus the dynamic data tied to them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec | File object | XML Library file to export to |

### Returns

Nothing.

### Document.fitArtboardToSelectedArt()

app.activeDocument.fitArtboardToSelectedArt([index])

### Description

Uses the supplied index, defaulting to 0, to resize that artboard around the current selection. A successful call returns true.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Number (long), optional | Artboard index to resize |

### Returns

Boolean.

### Document.getPageItemFromUuid()

app.activeDocument.getPageItemFromUuid(uuid)

Note

Illustrator 24.0 (CC2020) introduced this functionality.

### Description

Retrieves the PageItem for the supplied Uuid.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uuid | String | uuid of item to fetch |

### Returns

PageItem.

### Document.getPerspectiveActivePlane()

app.activeDocument.getPerspectiveActivePlane()

### Description

Retrieves the active plane from the document's active perspective grid.

### Returns

PerspectiveGridPlaneType

### Document.hidePerspectiveGrid()

app.activeDocument.hidePerspectiveGrid()

### Description

Hides the document's current active grid. When no grid is visible, the method leaves the document unchanged.

A hidden grid produces a true return value.

### Returns

Boolean.

### Document.imageCapture()

app.activeDocument.imageCapture(imageFile [,clipBounds] [,options])

### Description

Captures artwork inside this document's clipping boundaries as raster data written to imageFile.

If the bounds parameter is not supplied, the full artwork is captured.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| imageFile File object | Image file to write to |  |
| clipBounds | Rect, optional | Clipping bounds |
| options | ImageCaptureOptions, optional | todo |

### Returns

Nothing.

### Document.importCharacterStyles()

app.activeDocument.importCharacterStyles(fileSpec)

### Description

Brings in Illustrator-file character styles.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec File object | File to load character styles from |  |

### Returns

Nothing.

### Document.importParagraphStyles()

app.activeDocument.importParagraphStyles(fileSpec)

### Description

Brings in Illustrator-file paragraph styles.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec | File object | File to load paragraph styles from |

### Returns

Nothing.

### Document.importPDFPreset()

app.activeDocument.importPDFPreset(fileSpec [, replacingPreset])

### Description

Brings in all PDF presets stored in fileSpec.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec | File object | File to load PDF presets from |
| replacingPreset | String, optional | Whether to replace existing presets |

### Returns

Nothing.

### Document.importPrintPreset()

app.activeDocument.importPrintPreset(printPreset, fileSpec)

### Description

Brings in printPreset from fileSpec.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| printPreset | String | Name of preset to load |
| fileSpec | File object | File to load print presets from |

### Returns

Nothing.

### Document.importVariables()

app.activeDocument.importVariables(fileSpec)

### Description

Imports a library with datasets, variables, and the dynamic data attached to them. Existing variables and datasets are replaced by the import.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fileSpec | File object | File to import variables from |

### Returns

Nothing.

### Document.print()

app.activeDocument.print([options])

### Description

Sends the document to print.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| options | PrintOptions, optional | todo |

### Returns

Nothing.

### Document.rasterize()

app.activeDocument.rasterize(sourceArt [, clipBounds] [, options])

### Description

Converts the source art(s) to raster form within the specified clip bounds. Rasterization disposes of the source art(s).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceArt | Variable | Source art to rasterize |
| clipBounds | Rect, optional | Clipping bounds |
| options | RasterizeOptions, optional | todo |

### Returns

RasterItem

### Document.rearrangeArboards()

app.activeDocument.rearrangeArboards([artboardLayout] [, artboardRowsOrCols] [, artboardSpacing] [, artboardMoveArtwork])

### Description

Reorders document artboards. Every argument can be omitted.

For layout style, the default is DocumentArtboard Layout.GridByRow.

For the chosen layout style, the second argument supplies a row or column count. Valid values are 1..docNumArtboards-1; single row/column layouts use 1 by default.

Spacing is measured in pixels and defaults to 20.

When the final argument is true, which is the default, artboards move together with their artwork.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artboardLayout | DocumentArtboardLayout, optional | Artboard layout |
| artboardRowsOrCols | Integer, optional | Number of rows or columns |
| artboardSpacing | Number, optional | Number of pixels for spacing |
| artboardMoveArtwork | Boolean, optional | Whether to move artwork with the artboards |

### Returns

Boolean.

### Document.save()

app.activeDocument.save()

### Description

Stores the document at its current location.

### Returns

Nothing.

### Document.saveAs()

app.activeDocument.saveAs(saveIn [, options])

### Description

Writes the document as Illustrator, EPS, or PDF data at saveIn.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| saveIn | File object | File to save the document as |
| options | SaveOptions, optional | Save options to close with |

### Returns

Nothing.

### Document.saveNoUI()

app.activeDocument.saveNoUI(saveIn)

### Description

Writes the non-UI document to saveIn.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| saveIn | File object | File to save the document as |

### Returns

Nothing.

### Document.selectObjectsOnActiveArtboard()

app.activeDocument.selectObjectsOnActiveArtboard()

### Description

Selects objects on the active artboard and reports success with true.

### Returns

Boolean.

### Document.setActivePlane()

app.activeDocument.setActivePlane(gridPlane)

### Description

Sets which plane is active in the document's active perspective grid; true reports a successful call.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| gridPlane | PerspectiveGridPlaneType | Grid plane type |

### Returns

Boolean.

### Document.selectPerspectivePreset()

app.activeDocument.selectPerspectivePreset(gridType, presetName)

### Description

Chooses a predefined preset for the current document's grid; true reports a successful call.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| gridType | PerspectiveGridType | Grid type |
| presetName | String | Preset name to select |

### Returns

Boolean.

### Document.showPerspectiveGrid()

app.activeDocument.showPerspectiveGrid()

### Description

Displays the document's active grid, or the default grid when no grid is active. A successful call returns true.

### Returns

Boolean.

### Document.windowCapture()

app.activeDocument.windowCapture(imageFile, windowSize)

### Description

Captures the current document window as a TIFF written to imageFile.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| imageFile | File object | Image file to save as |
| windowSize | Array of 2 numbers | Window size |

### Returns

Nothing.

## Documents — Methods

### Documents.add()

```
app.documents.add(
    [documentColorSpace]
    [, width]
    [, height]
    [, numArtBoards]
    [, artboardLayout]
    [, artboardSpacing]
    [, artboardRowsOrCols]
)
```

### Description

Creates a document with optional arguments and returns its Document reference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| documentColorSpace | DocumentColorSpace, optional | Color space of document |
| width | Number (double), optional | Width of document to add |
| height | Number (double), optional | Height of document to add |
| numArtBoards | Number (long), optional | Number of artboards to create |
| artboardLayout | DocumentArtboardLayout, optional | Artboard layout |
| artboardSpacing | Number, optional | Number of pixels for spacing |
| artboardRowsOrCols | Integer, optional | Number of rows or columns |

### Returns

Document

### Documents.addDocument()

app.documents.addDocument(startupPreset[, presetSettings][, showOptionsDialog])

### Description

Creates a document from the preset, applies any supplied setting overrides, and returns its Document reference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| startupPreset | String | Startup preset to use |
| presetSettings | DocumentPreset, optional | Preset document template |
| showOptionsDialog | Boolean, optional | Whether to show options dialog |

### Returns

Document

### Documents.addDocumentNoUI()

app.documents.addDocumentNoUI(startupPreset)

### Description

Builds a document in noninteractive UI mode.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| startupPreset | String | Startup preset to use |

### Returns

Document

### Documents.getByName()

app.documents.getByName(name)

### Description

Finds the earliest collection member whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Document

### Documents.index()

app.documents.index(itemKey)

### Description

Retrieves one collection item by key.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Document

## Gradient — Methods

### Gradient.remove()

app.activeDocument.gradients[index].remove()

### Description

Deletes the referenced object from the document.

### Returns

Nothing.

## Gradients — Methods

### Gradients.add()

app.activeDocument.gradients.add()

### Description

Creates a Gradient object.

### Returns

Gradient

### Gradients.getByName()

app.activeDocument.gradients.getByName(name)

### Description

Returns the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Gradient

### Gradients.index()

app.activeDocument.gradients.index(itemKey)

### Description

Returns a collection element.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Gradient

### Gradients.removeAll()

app.activeDocument.gradients.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## GradientStop — Methods

### GradientStop.remove()

app.activeDocument.gradients[index].gradientStops[index].remove()

### Description

Deletes the current item.

### Returns

Nothing.

## GradientStops — Methods

### GradientStops.add()

app.activeDocument.gradients[index].gradientStops.add()

### Description

Adds a fresh collection member.

### Returns

GradientStop

### GradientStops.getByName()

app.activeDocument.gradients[index].gradientStops.getByName(name)

### Description

Returns the earliest collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

GradientStop

### GradientStops.index()

app.activeDocument.gradients[index].gradientStops.index(itemKey)

### Description

Retrieves one member from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

GradientStop

### GradientStops.removeAll()

app.activeDocument.gradients[index].gradientStops.removeAll()

### Description

Clears every object from this collection.

### Returns

Nothing.

## GraphicStyle — Methods

### GraphicStyle.applyTo()

app.activeDocument.graphicStyles[index].applyTo(artItem)

### Description

Targets the supplied art item with this art style.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artItem | PageItem | Target art item |

### Returns

Nothing.

### GraphicStyle.mergeTo()

app.activeDocument.graphicStyles[index].mergeTo(artItem)

### Description

Adds this art style into the supplied art item's existing style set.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artItem | PageItem | Target art item |

### Returns

Nothing.

### GraphicStyle.remove()

app.activeDocument.graphicStyles[index].remove()

### Description

Deletes the current item.

### Returns

Nothing.

## GraphicStyles — Methods

### GraphicStyles.getByName()

app.activeDocument.graphicStyles.getByName(name)

### Description

Returns the earliest collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

GraphicStyle

### GraphicStyles.index()

app.activeDocument.graphicStyles.index(itemKey)

### Description

Retrieves one member from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

GraphicStyle

### GraphicStyles.removeAll()

app.activeDocument.graphicStyles.removeAll()

### Description

Removes every element from the referenced collection.

### Returns

Nothing.

## GraphItem — Methods

### GraphItem.duplicate()

app.activeDocument.graphItems[index].duplicate([relativeObject] [,insertionLocation])

### Description

Makes one copy from the selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Object to duplicate to |
| insertionLocation | ElementPlacement, optional | Location to insert element |

### Returns

GraphItem

### GraphItem.move()

app.activeDocument.graphItems[index].move(relativeObject, insertionLocation)

### Description

Moves the object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object to move element within |
| insertionLocation | ElementPlacement, optional | Location to move element to |

### Returns

GraphItem

### GraphItem.remove()

app.activeDocument.graphItems[index].remove()

### Description

Deletes the current item.

### Returns

Nothing.

### GraphItem.resize()

```
app.activeDocument.graphItems[index].resize(
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

For the art item, scaleX controls horizontal scale and scaleY controls vertical scale. 100.0 = 100%.

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

### GraphItem.rotate()

```
app.activeDocument.graphItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Uses the angle value to rotate the art item from its current orientation. Positive values turn counter-clockwise, and negative values turn clockwise.

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

### GraphItem.transform()

```
app.activeDocument.graphItems[index].transform(
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

Uses the supplied Matrix value to transform the art item.

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

### GraphItem.translate()

```
app.activeDocument.graphItems[index].translate(
    [deltaX]
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item from its current position; deltaX supplies horizontal movement and deltaY supplies vertical movement.

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

### GraphItem.zOrder()

app.activeDocument.graphItems[index].zOrder(zOrderCmd)

### Description

Changes the art item's stacking-order position within its parent group or layer.

### Parameters

## GraphItems — Methods

### GraphItems.getByName()

app.activeDocument.graphItems.getByName(name)

### Description

Returns the earliest collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

GraphItems

### GraphItems.index()

app.activeDocument.graphItems.index(itemKey)

### Description

Retrieves one member from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

GraphItem

### GraphItems.removeAll()

app.activeDocument.graphItems.removeAll()

### Description

Deletes every element in the collection.

### Returns

Nothing.
