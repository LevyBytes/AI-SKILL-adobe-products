# Methods (part 7)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## TextRange — Methods

### TextRange.changeCaseTo()

app.activeDocument.textFrames[index].textRange.changeCaseTo(type)

### Description

Changes text capitalization.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | CaseChangeType | Capitalization style to apply |

### Returns

Nothing

### TextRange.deSelect()

app.activeDocument.textFrames[index].textRange.deSelect()

### Description

Clears range selection.

### Returns

Nothing.

### TextRange.duplicate()

app.activeDocument.textFrames[index].textRange.duplicate([relativeObject][, insertionLocation])

### Description

Creates a copy of this object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object, optional | Destination object for the duplicate |
| insertionLocation | ElementPlacement, optional | Placement point for insertion |

### Returns

TextRange

### TextRange.getLocalCharOverridesJSON()

app.activeDocument.textFrames[index].textRange.getLocalCharOverridesJSON()

### Description

Returns character overrides as a json string.

### Returns

String

### TextRange.getLocalParaOverridesJSON()

app.activeDocument.textFrames[index].textRange.getLocalParaOverridesJSON()

### Description

Returns paragraph overrides as a json string.

### Returns

String

### TextRange.getParagraphLength()

app.activeDocument.textFrames[index].textRange.getParagraphLength()

### Description

Returns the length of the opening paragraph.

### Returns

Int32

### TextRange.getTextRunLength()

app.activeDocument.textFrames[index].textRange.getTextRunLength()

### Description

Returns the length of the opening text run.

### Returns

Int32

### TextRange.move()

app.activeDocument.textFrames[index].textRange.move(relativeObject, insertionLocation)

### Description

Relocates this item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| relativeObject | Object | Object that will receive the item |
| insertionLocation | ElementPlacement, optional | Placement location for the move |

### Returns

TextRange

### TextRange.remove()

app.activeDocument.textFrames[index].textRange.remove()

### Description

Removes this item.

### Returns

Nothing

### TextRange.select()

app.activeDocument.textFrames[index].textRange.select([addToDocument])

### Description

Applies selection to the range.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| addToDocument | Boolean, optional | Whether the current selection is extended or replaced |

### Returns

Nothing

## TextRanges — Methods

### TextRanges.index()

textRanges.index(itemKey)

### Description

Retrieves one collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

TextRange

### TextRanges.removeAll()

textRanges.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## TracingObject — Methods

### TracingObject.expandTracing()

tracingObject.expandTracing([viewed])

### Description

Expands the vector art as a new group item. In the document, that new GroupItem object takes the place of the PluginItem object.

By default, viewed is false; in that case, the new group includes only the tracing output, meaning the filled or stroked paths.

When viewed is true, the new group also keeps extra viewing-mode data, including items such as outlines and overlays.

This call deletes this object along with its related PluginItem object. Group-level attributes from the plug-in item move to the new group item's top level.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| viewed | Boolean, optional | todo |

### Returns

GroupItem

### TracingObject.releaseTracing()

tracingObject.releaseTracing()

### Description

Restores the document artwork to the original source raster art and removes the traced vector art. It returns the original object that initiated tracing, while deleting this object and its related PluginItem object.

### Parameters

### Returns

PlacedItem or RasterItem

## TracingOptions — Methods

### TracingOptions.loadFromPreset()

image.tracing.tracingOptions.loadFromPreset(parameter)

### Description

Loads options from a preset name in Application.tracingPresetList.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| presetName | String | Preset name to load |

### Returns

Boolean

### TracingOptions.storeToPreset()

image.tracing.tracingOptions.storeToPreset(parameter)

### Description

Stores this option set in the specified preset.

To overwrite, pass an Application.tracingPresetList name; to create one, pass a new name.

For an existing preset, the call overwrites an unlocked preset and returns true.

A locked preset makes the method return false.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| presetName | String | Preset name to save as |

### Returns

Boolean

## Variable — Methods

### Variable.remove()

app.activeDocument.variables[index].remove()

### Description

Deletes the variable from the variables collection.

### Returns

Nothing.

## Variables — Methods

### Variables.add()

app.activeDocument.variables.add()

### Description

Creates another variable in the collection.

### Returns

Variable

### Variables.getByName()

app.activeDocument.variables.getByName(name)

### Description

Returns the first collection element whose name matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name of element to get |

### Returns

Variable

### Variables.index()

app.activeDocument.variables.index(itemKey)

### Description

Retrieves one collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

Variable

### Variables.removeAll()

app.activeDocument.variables.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.

## Views — Methods

### Views.index()

app.activeDocument.views.index(itemKey)

### Description

Retrieves one collection member.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | String or number key |

### Returns

View

## Words — Methods

### Words.add()

app.activeDocument.textFrames[index].words.add(contents[, relativeObject][, inseertLocation])

### Description

Places a word in the current document at the requested position.

When no position is supplied, Illustrator inserts the word in the containing text frame after the active word range or cursor point.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Word being added |
| relativeObject | TextFrameItem, optional | Target object that receives the new item |
| insertionLocation | ElementPlacement, optional | Text insertion position |

### Returns

TextRange

### Words.addBefore()

app.activeDocument.textFrames[index].words.addBefore(contents)

### Description

Inserts a word before the active word range or cursor point.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Word being added |

### Returns

TextRange

### Words.index()

app.activeDocument.textFrames[index].words.index(itemKey)

### Description

Retrieves one collection element.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| itemKey | String, Number | Key supplied as a string or number |

### Returns

TextRange

### Words.removeAll()

app.activeDocument.textFrames[index].words.removeAll()

### Description

Removes every element from this collection.

### Returns

Nothing.
