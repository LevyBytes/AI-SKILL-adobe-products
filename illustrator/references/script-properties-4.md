# Properties (part 4)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## GraphItem — Properties

### GraphItem.artworkKnockout

app.activeDocument.graphItems[index].artworkKnockout

### Description

Indicates whether this object participates in creating a knockout and, when it does, which knockout type applies. KnockoutState.Unknown cannot be assigned to this value.

### Type

KnockoutState

### GraphItem.blendingMode

app.activeDocument.graphItems[index].blendingMode

### Description

Sets how the object composites.

### Type

BlendModes

### GraphItem.contentVariable

app.activeDocument.graphItems[index].contentVariable

### Description

References the attached content variable.

Before binding, you do not need to set the contentVariable type. Illustrator sets the type to GRAPH automatically.

### Type

Variable

### GraphItem.controlBounds

app.activeDocument.graphItems[index].controlBounds

### Description

References the attached content variable.

These bounds include the object's controls and stroke width.

### Type

Array of 4 numbers; read-only.

### GraphItem.editable

app.activeDocument.graphItems[index].editable

### Description

A true value means editing is allowed.

### Type

Boolean; read-only.

### GraphItem.geometricBounds

app.activeDocument.graphItems[index].geometricBounds

### Description

Stroke width is excluded from these bounds.

### Type

Array of 4 numbers; read-only.

### GraphItem.height

app.activeDocument.graphItems[index].height

### Description

Returns its height.

### Type

Number (double); read-only.

### GraphItem.hidden

app.activeDocument.graphItems[index].hidden

### Description

A true value hides this graph item.

### Type

Boolean.

### GraphItem.isIsolated

app.activeDocument.graphItems[index].isIsolated

### Description

A true value puts this object in isolation mode.

### Type

Boolean.

### GraphItem.layer

app.activeDocument.graphItems[index].layer

### Description

Points to its containing layer.

### Type

Layer; read-only.

### GraphItem.left

app.activeDocument.graphItems[index].left

### Description

Measures, in points, the graph item's left-edge offset from the page's left edge.

### Type

Number.

### GraphItem.locked

app.activeDocument.graphItems[index].locked

### Description

A true value locks it.

### Type

Boolean.

### GraphItem.name

app.activeDocument.graphItems[index].name

### Description

Holds its assigned name.

### Type

String.

### GraphItem.note

app.activeDocument.graphItems[index].note

### Description

Holds this item's note text.

### Type

String.

### GraphItem.opacity

app.activeDocument.graphItems[index].opacity

### Description

Sets opacity for the object; accepted values span 0.0 through 100.0.

### Type

Number (double)

### GraphItem.parent

app.activeDocument.graphItems[index].parent

### Description

Points to the parent container.

### Type

Layer or GroupItem

### GraphItem.position

app.activeDocument.graphItems[index].position

### Description

Returns [x, y] for the graphItem object's top-left point in points; the stroke weight is omitted.

### Type

Array of 2 numbers.

### GraphItem.selected

app.activeDocument.graphItems[index].selected

### Description

A true value marks this object as selected.

### Type

Boolean.

### GraphItem.sliced

app.activeDocument.graphItems[index].sliced

### Description

A true value marks slicing on.

Default: false.

### Type

Boolean.

### GraphItem.tags

app.activeDocument.graphItems[index].tags

### Description

Returns the stored tags.

### Type

Tags; read-only.

### GraphItem.top

app.activeDocument.graphItems[index].top

### Description

Measures, in points, the graph item's top offset from the page bottom.

### Type

Number (double).

### GraphItem.typename

app.activeDocument.graphItems[index].typename

### Description

Reports type information for it.

### Type

String; read-only.

### GraphItem.uRL

app.activeDocument.graphItems[index].uRL

### Description

Holds its Adobe URL tag value.

### Type

String.

### GraphItem.visibilityVariable

app.activeDocument.graphItems[index].visibilityVariable

### Description

References the attached visibility variable.

Before binding, you do not need to set the visibilityVariable type. Illustrator sets the type to VISIBILITY automatically.

### Type

Variable

### GraphItem.visibleBounds

app.activeDocument.graphItems[index].visibleBounds

### Description

Includes stroke width in these graph-item bounds.

### Type

Array of 4 numbers; read-only.

### GraphItem.width

app.activeDocument.graphItems[index].width

### Description

Returns its width.

Range: 0.0 to 16348.0.

### Type

Number (double).

### GraphItem.wrapInside

app.activeDocument.graphItems[index].wrapInside

### Description

A true value causes text frame objects to wrap within the object.

### Type

Boolean.

### GraphItem.wrapOffset

app.activeDocument.graphItems[index].wrapOffset

### Description

Sets the offset for text wrapping around the object.

### Type

Number (double).

### GraphItem.wrapped

app.activeDocument.graphItems[index].wrapped

### Description

A true value wraps text frame objects around the object. (The text frame must be positioned above it.)

### Type

Boolean.

### GraphItem.zOrderPosition

app.activeDocument.graphItems[index].zOrderPosition

### Description

Reports this art item's stacking-order location inside its containing group or layer (parent).

### Type

Number (long).

## GraphItems — Properties

### GraphItems.length

app.activeDocument.graphItems.length

### Description

Reports how many objects the collection contains.

### Type

Number; read-only.

### GraphItems.parent

app.activeDocument.graphItems.parent

### Description

Returns the owner.

### Type

Object; read-only.

### GraphItems.typename

app.activeDocument.graphItems.typename

### Description

Reports the referenced object's class name.

### Type

String; read-only.

## GrayColor — Properties

### GrayColor.gray

grayColor.gray

### Description

The `gray` value controls the gray tint.

Range: 0.0 to 100.0; 0.0 maps to black and 100.0 maps to white.

### Type

Number (double).

### GrayColor.typename

grayColor.typename

### Description

Identifies the class name for the referenced object.

### Type

String; read-only.

## GroupItem — Properties

### GroupItem.artworkKnockout

app.activeDocument.groupItems[index].artworkKnockout

### Description

Reports whether the object participates in knockout creation and, when it does, the knockout kind.

### Type

KnockoutState

### GroupItem.blendingMode

app.activeDocument.groupItems[index].blendingMode

### Description

Blend mode applied while the object is composited.

### Type

BlendModes

### GroupItem.clipped

app.activeDocument.groupItems[index].clipped

### Description

True means the clipping mask clips the group.

### Type

Boolean.

### GroupItem.compoundPathItems

app.activeDocument.groupItems[index].compoundPathItems

### Description

Available CompoundPathItems.

### Type

CompoundPathItems; read-only.

### GroupItem.controlBounds

app.activeDocument.groupItems[index].controlBounds

### Description

Bounds expanded to account for controls and stroke width.

### Type

Array of 4 numbers; read-only.

### GroupItem.editable

app.activeDocument.groupItems[index].editable

### Description

True when the item can be edited.

### Type

Boolean; read-only.

### GroupItem.geometricBounds

app.activeDocument.groupItems[index].geometricBounds

### Description

Object bounds with stroke width excluded.

### Type

Array of 4 numbers; read-only.

### GroupItem.graphItems

app.activeDocument.groupItems[index].graphItems

### Description

Available GraphItems.

### Type

GraphItems; read-only.

### GroupItem.groupItems

app.activeDocument.groupItems[index].groupItems

### Description

Nested GroupItems collection.

### Type

GroupItems; read-only.

### GroupItem.height

app.activeDocument.groupItems[index].height

### Description

GroupItem height measurement.

### Type

Number (double).

### GroupItem.hidden

app.activeDocument.groupItems[index].hidden

### Description

A true value hides the GroupItem.

### Type

Boolean.

### GroupItem.isIsolated

app.activeDocument.groupItems[index].isIsolated

### Description

A true value marks the isolation state.

### Type

Boolean.

### GroupItem.layer

app.activeDocument.groupItems[index].layer

### Description

Owning Layer.

### Type

Layer; read-only.

### GroupItem.left

app.activeDocument.groupItems[index].left

### Description

Item left edge location, measured in points from the page's left side.

### Type

Number (double).

### GroupItem.legacyTextItems

app.activeDocument.groupItems[index].legacyTextItems

### Description

Available LegacyTextItems.

### Type

LegacyTextItems; read-only.

### GroupItem.locked

app.activeDocument.groupItems[index].locked

### Description

A true value locks the GroupItem.

### Type

Boolean.

### GroupItem.meshItems

app.activeDocument.groupItems[index].meshItems

### Description

Available MeshItems.

### Type

MeshItems; read-only.

### GroupItem.name

app.activeDocument.groupItems[index].name

### Description

Assigned GroupItem name.

### Type

String.

### GroupItem.nonNativeItems

app.activeDocument.groupItems[index].nonNativeItems

### Description

Available NonNativeItems.

### Type

NonNativeItems

### GroupItem.note

app.activeDocument.groupItems[index].note

### Description

Note text attached here.

### Type

String.

### GroupItem.opacity

app.activeDocument.groupItems[index].opacity

### Description

Object opacity value.

Range: 0.0 to 100.0.

### Type

Number (double).

### GroupItem.pageItems

app.activeDocument.groupItems[index].pageItems

### Description

PageItems collection for this group, spanning all art item classes.

### Type

PageItems; read-only.

### GroupItem.parent

app.activeDocument.groupItems[index].parent

### Description

Parent container reference.

### Type

Layer or GroupItem; read-only.

### GroupItem.pathItems

app.activeDocument.groupItems[index].pathItems

### Description

Available PathItems.

### Type

PathItems; read-only.

### GroupItem.placedItems

app.activeDocument.groupItems[index].placedItems

### Description

Available PlacedItems.

### Type

PlacedItems; read-only.

### GroupItem.pluginItems

app.activeDocument.groupItems[index].pluginItems

### Description

Available PluginItems.

### Type

PluginItems; read-only.

### GroupItem.position

app.activeDocument.groupItems[index].position

### Description

Top-left groupItem location, in points, using [x, y]; stroke weight is excluded.

### Type

Array of 2 numbers.

### GroupItem.rasterItems

app.activeDocument.groupItems[index].rasterItems

### Description

Available RasterItems.

### Type

RasterItems; read-only.

### GroupItem.selected

app.activeDocument.groupItems[index].selected

### Description

A true value selects the GroupItem.

### Type

Boolean.

### GroupItem.sliced

app.activeDocument.groupItems[index].sliced

### Description

A true value marks slicing for the item.

Default: false.

### Type

Boolean.

### GroupItem.symbolItems

app.activeDocument.groupItems[index].symbolItems

### Description

Available SymbolItems.

### Type

SymbolItems; read-only.

### GroupItem.tags

app.activeDocument.groupItems[index].tags

### Description

Available Tags.

### Type

Tags; read-only.

### GroupItem.textFrames

app.activeDocument.groupItems[index].textFrames

### Description

Available TextFrameItems.

### Type

TextFrameItems; read-only.

### GroupItem.top

app.activeDocument.groupItems[index].top

### Description

Top edge location in points from the page bottom.

### Type

Number (double).

### GroupItem.typename

app.activeDocument.groupItems[index].typename

### Description

Referenced object class name.

### Type

String; read-only.

### GroupItem.uRL

app.activeDocument.groupItems[index].uRL

### Description

Stored value for the group's Adobe URL tag.

### Type

String.

### GroupItem.visibilityVariable

app.activeDocument.groupItems[index].visibilityVariable

### Description

Bound visibility variable.

### Type

Variable

### GroupItem.visibleBounds

app.activeDocument.groupItems[index].visibleBounds

### Description

GroupItem visible bounds with stroke width included.

### Type

Array of 4 numbers; read-only.

### GroupItem.width

app.activeDocument.groupItems[index].width

### Description

GroupItem width measurement.

### Type

Number (double).

### GroupItem.wrapInside

app.activeDocument.groupItems[index].wrapInside

### Description

A true value wraps the text frame object inside it.

### Type

Boolean.

### GroupItem.wrapOffset

app.activeDocument.groupItems[index].wrapOffset

### Description

Text-wrap offset value.

### Type

Number (double).

### GroupItem.wrapped

app.activeDocument.groupItems[index].wrapped

### Description

A true value enables wrapping text frame objects around the object; place the text frame above it.

### Type

Boolean.

### GroupItem.zOrderPosition

app.activeDocument.groupItems[index].zOrderPosition

### Description

Stacking-order index for the group object within its parent group or layer.

### Type

Number (long).

## GroupItems — Properties

### GroupItems.length

app.activeDocument.groupItems.length

### Description

Collection object count.

### Type

Number; read-only.

### GroupItems.parent

app.activeDocument.groupItems.parent

### Description

Parent object for this collection.

### Type

Object; read-only.

### GroupItems.typename

app.activeDocument.groupItems.typename

### Description

Class name for the referenced object.

### Type

String; read-only.

## IllustratorSaveOptions — Properties

### IllustratorSaveOptions.artboardRange

illustratorSaveOptions.artboardRange

### Description

When saveMultipleArtboards is true (Illustrator 13 or earlier only), this property defines which artboards are included for multi-asset extraction. Use an empty string to extract every artboard.

Default: empty String.

### Type

String.

### IllustratorSaveOptions.compatibility

illustratorSaveOptions.compatibility

### Description

Sets the Illustrator file-format version to create.

Default: Compatibility.ILLUSTRATOR19.

### Type

Compatibility

### IllustratorSaveOptions.compressed

illustratorSaveOptions.compressed

Note

Introduced in Illustrator version 10.

### Description

True saves the file in compressed form.

Default: true.

### Type

Boolean.

### IllustratorSaveOptions.embedICCProfile

illustratorSaveOptions.embedICCProfile

Note

Introduced in Illustrator version 9.

### Description

A true value embeds the document's ICC profile into the output file.

Default: false.

### Type

Boolean.

### IllustratorSaveOptions.embedLinkedFiles

illustratorSaveOptions.embedLinkedFiles

Note

Introduced in Illustrator version 7.

### Description

A true value embeds linked image files into the output file.

Default: false.

### Type

Boolean.

### IllustratorSaveOptions.flattenOutput

illustratorSaveOptions.flattenOutput

Note

Introduced in Illustrator version 9.

### Description

Specifies transparency flattening behavior when writing older formats.

Default: OutputFlattening.PRESERVEAPPEARANCE.

### Type

OutputFlattening

### IllustratorSaveOptions.fontSubsetThreshold

illustratorSaveOptions.fontSubsetThreshold

Note

Introduced in Illustrator version 9.

### Description

Subsets fonts when the document uses less than this percentage of their characters.

Range: 0.0 to 100.0.

Default: 100.0.

### Type

Number (double).

### IllustratorSaveOptions.pdfCompatible

illustratorSaveOptions.pdfCompatible

Note

Introduced in Illustrator version 10.

### Description

A true value makes the saved output PDF compatible.

Default: true.

### Type

Boolean.

### IllustratorSaveOptions.saveMultipleArtboards

illustratorSaveOptions.saveMultipleArtboards

### Description

A true value saves all artboards or a chosen artboard range. This setting applies to Illustrator 13 and earlier.

### Type

Boolean.

### IllustratorSaveOptions.typename

illustratorSaveOptions.typename

### Description

Class name for the referenced object.

### Type

String; read-only.

## ImageCaptureOptions — Properties

### ImageCaptureOptions.antiAliasing

imageCaptureOptions.antiAliasing

### Description

True applies anti-aliasing to the image result.

Default: false.

### Type

Boolean

### ImageCaptureOptions.matte

imageCaptureOptions.matte

### Description

True mattes the artboard with a color.

Default: false.

### Type

Boolean

### ImageCaptureOptions.matteColor

imageCaptureOptions.matteColor

### Description

Artboard matte color.

Default: white.

### Type

RGBColor

### ImageCaptureOptions.resolution

imageCaptureOptions.resolution

### Description

Captured image resolution in points-per-inch (PPI).

Allowed values: [72.0 ... 2400.0].

Default: 150.

### Type

Number (double).

### ImageCaptureOptions.transparency

imageCaptureOptions.transparency

### Description

True makes the image result transparent.

Default: false.

### Type

Boolean.

### ImageCaptureOptions.typename

imageCaptureOptions.typename

### Description

Class name for the referenced object.

### Type

String; read-only.

## Ink — Properties

### Ink.inkInfo

app.activeDocument.inkLisk[index].inkInfo

### Description

InkInfo associated with the ink.

### Type

InkInfo

### Ink.name

app.activeDocument.inkLisk[index].name

### Description

Name assigned to the ink.

### Type

String.

### Ink.typename

app.activeDocument.inkLisk[index].typename

### Description

Identifies the object's class.

### Type

String; read-only.

## InkInfo — Properties

### InkInfo.angle

app.activeDocument.inkList[index].inkInfo.angle

### Description

Screen angle value for this ink, measured by degree.

Allowed span: -360 through 360.

### Type

Number (double).

### InkInfo.customColor

app.activeDocument.inkList[index].inkInfo.customColor

### Description

Custom ink color value.

### Type

Color

### InkInfo.density

app.activeDocument.inkList[index].inkInfo.density

### Description

Neutral density for the ink. Lower limit: 0.0 inclusive.

### Type

Number (double).

### InkInfo.dotShape

app.activeDocument.inkList[index].inkInfo.dotShape

### Description

Name used for the dot shape.

### Type

String.

### InkInfo.frequency

app.activeDocument.inkList[index].inkInfo.frequency

### Description

Frequency value for the ink.

Allowed span: 0.0 through 1000.0.

### Type

Number (double).

### InkInfo.kind

app.activeDocument.inkList[index].inkInfo.kind

### Description

Classification of the ink.

### Type

InkType

### InkInfo.printingStatus

app.activeDocument.inkList[index].inkInfo.printingStatus

### Description

Current print state for the ink.

### Type

InkPrintStatus

### InkInfo.trapping

app.activeDocument.inkList[index].inkInfo.trapping

### Description

Trap classification for the ink.

### Type

TrappingType

### InkInfo.trappingOrder

app.activeDocument.inkList[index].inkInfo.trappingOrder

### Description

Ink trap order.

Allowed CMYK span: 1 through 4.

### Type

Number (long).

### InkInfo.typename

app.activeDocument.inkList[index].inkInfo.typename

### Description

Object class identifier.

### Type

String; read-only.

## InsertionPoint — Properties

### InsertionPoint.characters

app.activeDocument.textFrames[index].insertionPoints[index].characters

### Description

Character entries at this position.

### Type

Characters; read-only.

### InsertionPoint.lines

app.activeDocument.textFrames[index].insertionPoints[index].lines

### Description

Line entries at this position.

### Type

Lines; read-only.

### InsertionPoint.paragraphs

app.activeDocument.textFrames[index].insertionPoints[index].paragraphs

### Description

Paragraph entries at this position.

### Type

Paragraphs; read-only.

### InsertionPoint.parent

app.activeDocument.textFrames[index].insertionPoints[index].parent

### Description

Container for this object.

### Type

TextRange; read-only.

### InsertionPoint.story

app.activeDocument.textFrames[index].insertionPoints[index].story

### Description

Story object linked to this position.

### Type

Story; read-only.

### InsertionPoint.textRanges

app.activeDocument.textFrames[index].insertionPoints[index].textRanges

### Description

Full text content exposed through TextRanges.

### Type

TextRanges; read-only.

### InsertionPoint.typename

app.activeDocument.textFrames[index].insertionPoints[index].typename

### Description

Object class identifier.

### Type

String; read-only.

### InsertionPoint.words

app.activeDocument.textFrames[index].insertionPoints[index].words

### Description

Word entries at this position.

### Type

Words; read-only.

## InsertionPoints — Properties

### InsertionPoints.length

app.activeDocument.textFrames[index].insertionPoints.length

### Description

Collection element count.

### Type

Number; read-only.

### InsertionPoints.parent

app.activeDocument.textFrames[index].insertionPoints.parent

### Description

Container object for this set.

### Type

Object; read-only.

### InsertionPoints.typename

app.activeDocument.textFrames[index].insertionPoints.typename

### Description

Runtime class identifier for this set.

### Type

String; read-only.

## LabColor — Properties

### LabColor.a

labColor.a

### Description

Channel value for a (red-green). Allowed span: -128.0 through 128.0.

Default value: 0.0.

### Type

Number (double).

### LabColor.b

labColor.b

### Description

Channel value for b (yellow-blue). Allowed span: -128.0 through 128.0.

Default value: 0.0.

### Type

Number (double).

### LabColor.l

labColor.l

### Description

Channel value for l (lightness). Allowed span: -128.0 through 128.0.

Default value: 0.0.

### Type

Number (double).
