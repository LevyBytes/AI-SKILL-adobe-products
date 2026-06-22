# Properties (part 5)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Layer — Properties

### Layer.artworkKnockout

app.activeDocument.layers[index].artworkKnockout

### Description

Whether this object participates in knockout creation, and the knockout category when it does. This property cannot be set to KnockoutState.Unknown.

### Type

KnockoutState

### Layer.blendingMode

app.activeDocument.layers[index].blendingMode

### Description

Compositing mode applied to the object.

### Type

BlendModes

### Layer.color

app.activeDocument.layers[index].color

### Description

Selection mark color for the layer.

### Type

RGBColor

### Layer.compoundPathItems

app.activeDocument.layers[index].compoundPathItems

### Description

Child CompoundPathItems collection.

### Type

CompoundPathItems; read-only.

### Layer.dimPlacedImages

app.activeDocument.layers[index].dimPlacedImages

### Description

When true, placed images on the layer render with a dimmed appearance.

### Type

Boolean.

### Layer.graphItems

app.activeDocument.layers[index].graphItems

### Description

Child GraphItems collection.

### Type

GraphItems; read-only.

### Layer.groupItems

app.activeDocument.layers[index].groupItems

### Description

Child GroupItems collection.

### Type

GroupItems; read-only.

### Layer.hasSelectedArtwork

app.activeDocument.layers[index].hasSelectedArtwork

### Description

When true, at least one object is selected on the layer; assign false to clear the layer selection.

### Type

Boolean.

### Layer.isIsolated

app.activeDocument.layers[index].isIsolated

### Description

Isolation status for this object.

### Type

Boolean.

### Layer.layers

app.activeDocument.layers[index].layers

### Description

Nested Layers child collection.

### Type

Layers; read-only.

### Layer.legacyTextItems

app.activeDocument.layers[index].legacyTextItems

### Description

Child LegacyTextItems collection.

### Type

LegacyTextItems; read-only.

### Layer.locked

app.activeDocument.layers[index].locked

### Description

When true, the layer remains editable; assigning false locks it.

### Type

Boolean.

### Layer.meshItems

app.activeDocument.layers[index].meshItems

### Description

Child MeshItems collection.

### Type

MeshItems; read-only.

### Layer.name

app.activeDocument.layers[index].name

### Description

Name assigned to this layer.

### Type

String.

### Layer.nonNativeItems

app.activeDocument.layers[index].nonNativeItems

### Description

Associated non-native art items.

### Type

NonNativeItems

### Layer.opacity

app.activeDocument.layers[index].opacity

### Description

Layer opacity value.

Allowed span: 0.0 through 100.0.

### Type

Number (double).

### Layer.pageItems

app.activeDocument.layers[index].pageItems

### Description

PageItems child collection covering every art item class.

### Type

PageItems

### Layer.parent

app.activeDocument.layers[index].parent

### Description

Containing parent object.

### Type

Document or Layer; read-only.

### Layer.pathItems

app.activeDocument.layers[index].pathItems

### Description

Child PathItems collection.

### Type

PathItems; read-only.

### Layer.placedItems

app.activeDocument.layers[index].placedItems

### Description

Child PlacedItems collection.

### Type

PlacedItems; read-only.

### Layer.pluginItems

app.activeDocument.layers[index].pluginItems

### Description

Child PluginItems collection.

### Type

PluginItems; read-only.

### Layer.preview

app.activeDocument.layers[index].preview

### Description

Preview-mode display flag for the layer.

### Type

Boolean.

### Layer.printable

app.activeDocument.layers[index].printable

### Description

Print inclusion flag for the layer.

### Type

Boolean.

### Layer.rasterItems

app.activeDocument.layers[index].rasterItems

### Description

Child RasterItems collection.

### Type

RasterItems; read-only.

### Layer.sliced

app.activeDocument.layers[index].sliced

### Description

Slice status for the layer item.

Default: false.

### Type

Boolean.

### Layer.symbolItems

app.activeDocument.layers[index].symbolItems

### Description

Child SymbolItems collection.

### Type

SymbolItems; read-only.

### Layer.textFrames

app.activeDocument.layers[index].textFrames

### Description

TextFrameItems child collection for text art.

### Type

TextFrameItems; read-only.

### Layer.typename

app.activeDocument.layers[index].typename

### Description

Referenced-object class identifier.

### Type

String; read-only.

### Layer.visible

app.activeDocument.layers[index].visible

### Description

Visibility flag for the layer.

### Type

Boolean.

### Layer.zOrderPosition

app.activeDocument.layers[index].zOrderPosition

### Description

Layer position within the document's layer stacking order.

### Type

Number (long); read-only.

## Layers — Properties

### Layers.length

app.activeDocument.layers.length

### Description

Collection object count.

### Type

Number; read-only.

### Layers.parent

app.activeDocument.layers.parent

### Description

Parent object for this collection.

### Type

Object; read-only.

### Layers.typename

app.activeDocument.layers.typename

### Description

Class identifier for the referenced object.

### Type

String; read-only.

## LegacyTextItem — Properties

### LegacyTextItem.artworkKnockout

legacyTextItems[index].artworkKnockout

### Description

Whether this object participates in knockout creation, and the knockout category when it does.

### Type

KnockoutState

### LegacyTextItem.blendingMode

legacyTextItems[index].blendingMode

### Description

Blend mode applied while compositing an object.

### Type

BlendModes

### LegacyTextItem.controlBounds

legacyTextItems[index].controlBounds

### Description

Bounds for the object, accounting for controls and stroke width.

### Type

Array of 4 numbers; read-only.

### LegacyTextItem.converted

legacyTextItems[index].converted

### Description

When true, the legacy text item has already been changed into a native TextFrameItem.

### Type

Boolean; read-only.

### LegacyTextItem.editable

legacyTextItems[index].editable

### Description

True indicates that this item can be edited.

### Type

Boolean; read-only.

### LegacyTextItem.geometricBounds

legacyTextItems[index].geometricBounds

### Description

Object bounds with stroke width excluded.

### Type

Array of 4 numbers; read-only.

### LegacyTextItem.height

legacyTextItems[index].height

### Description

Group item height value.

### Type

Number (double).

### LegacyTextItem.hidden

legacyTextItems[index].hidden

### Description

True indicates that this item is hidden.

### Type

Boolean.

### LegacyTextItem.isIsolated

legacyTextItems[index].isIsolated

### Description

True indicates that this object is isolated.

### Type

Boolean.

### LegacyTextItem.layer

legacyTextItems[index].layer

### Description

Layer that owns this item.

### Type

Layer; read-only.

### LegacyTextItem.left

legacyTextItems[index].left

### Description

Left-side position of the item, in points, measured from the page's left edge.

### Type

Number (double).

### LegacyTextItem.locked

legacyTextItems[index].locked

### Description

True indicates that this item is locked.

### Type

Boolean.

### LegacyTextItem.name

legacyTextItems[index].name

### Description

Name assigned to this item.

### Type

String.

### LegacyTextItem.note

legacyTextItems[index].note

### Description

Note value assigned to this item.

### Type

String.

### LegacyTextItem.opacity

legacyTextItems[index].opacity

### Description

Object opacity setting.

Allowed span: 0.0 through 100.0.

### Type

Number (double).

### LegacyTextItem.parent

legacyTextItems[index].parent

### Description

Parent object for this item.

### Type

Layer or GroupItem; read-only.

### LegacyTextItem.position

legacyTextItems[index].position

### Description

Top-left location of legacyTextItems[index], measured in points and formatted as [x, y]. Stroke weight is not included.

### Type

Array of 2 numbers.

### LegacyTextItem.selected

legacyTextItems[index].selected

### Description

True indicates that this item is selected.

### Type

Boolean.

### LegacyTextItem.sliced

legacyTextItems[index].sliced

### Description

True means the item is sliced.

Default: false.

### Type

Boolean.

### LegacyTextItem.tags

legacyTextItems[index].tags

### Description

Tags collection belonging to this item.

### Type

Tags; read-only.

### LegacyTextItem.top

legacyTextItems[index].top

### Description

Top position of the item, in points, measured from the page's bottom edge.

### Type

Number (double).

### LegacyTextItem.typename

legacyTextItems[index].typename

### Description

Referenced-object class identifier.

### Type

String; read-only.

### LegacyTextItem.uRL

legacyTextItems[index].uRL

### Description

Adobe URL tag value assigned to this item.

### Type

String.

### LegacyTextItem.visibilityVariable

legacyTextItems[index].visibilityVariable

### Description

Visibility variable linked to the item.

### Type

Variable

### LegacyTextItem.visibleBounds

legacyTextItems[index].visibleBounds

### Description

Visible item bounds with stroke width included.

### Type

Array of 4 numbers; read-only.

### LegacyTextItem.width

legacyTextItems[index].width

### Description

Width value for the item.

### Type

Number (double).

### LegacyTextItem.wrapInside

legacyTextItems[index].wrapInside

### Description

When true, the text frame object wraps inside this object.

### Type

Boolean.

### LegacyTextItem.wrapOffset

legacyTextItems[index].wrapOffset

### Description

Text-wrap offset for this object.

### Type

Number (double).

### LegacyTextItem.wrapped

legacyTextItems[index].wrapped

### Description

When true, text frame objects wrap around this object; the text frame must sit above the object.

### Type

Boolean.

### LegacyTextItem.zOrderPosition

legacyTextItems[index].zOrderPosition

### Description

Item position within the stacking order of the containing group or layer.

### Type

Number (long); read-only.

## LegacyTextItems — Properties

### LegacyTextItems.length

legacyTextItems.length

### Description

Count of items held by the collection.

### Type

Number; read-only.

### LegacyTextItems.parent

legacyTextItems.parent

### Description

Container that owns the object.

### Type

Object; read-only.

### LegacyTextItems.typename

legacyTextItems.typename

### Description

Class name reported for the object.

### Type

String; read-only.

## Lines — Properties

### Lines.length

lines.length

### Description

Count of items held by the collection.

### Type

Number; read-only.

### Lines.parent

lines.parent

### Description

Container that owns the object.

### Type

Object; read-only.

### Lines.typename

lines.typename

### Description

Class name reported for the object.

### Type

String; read-only.

## Matrix — Properties

### Matrix.mValueA

matrix.mValueA

### Description

Matrix value a.

### Type

Number (double).

### Matrix.mValueB

matrix.mValueB

### Description

Matrix value b.

### Type

Number (double).

### Matrix.mValueC

matrix.mValueC

### Description

Matrix value c.

### Type

Number (double).

### Matrix.mValueD

matrix.mValueD

### Description

Matrix value d.

### Type

Number (double).

### Matrix.mValueTX

matrix.mValueTX

### Description

Matrix value tx.

### Type

Number (double).

### Matrix.mValueTY

matrix.mValueTY

### Description

Matrix value ty.

### Type

Number (double).

### Matrix.typename

matrix.typename

### Description

Class name reported for the referenced object.

### Type

String; read-only.

## MeshItem — Properties

### MeshItem.artworkKnockout

app.activeDocument.meshItems[index].artworkKnockout

### Description

Indicates whether this object creates a knockout and, when it does, which knockout kind is used.

### Type

KnockoutState

### MeshItem.blendingMode

app.activeDocument.meshItems[index].blendingMode

### Description

Blend mode applied while an object is composited.

### Type

BlendModes

### MeshItem.controlBounds

app.activeDocument.meshItems[index].controlBounds

### Description

Bounds rectangle including both controls and stroke width.

### Type

Array of 4 numbers; read-only.

### MeshItem.editable

app.activeDocument.meshItems[index].editable

### Description

True when this item can be edited.

### Type

Boolean; read-only.

### MeshItem.geometricBounds

app.activeDocument.meshItems[index].geometricBounds

### Description

Object bounds with stroke width excluded.

### Type

Array of 4 numbers; read-only.

### MeshItem.height

app.activeDocument.meshItems[index].height

### Description

Group item height value.

### Type

Number (double).

### MeshItem.hidden

app.activeDocument.meshItems[index].hidden

### Description

Hidden-state flag for the item.

### Type

Boolean.

### MeshItem.isIsolated

app.activeDocument.meshItems[index].isIsolated

### Description

Isolation flag for the object.

### Type

Boolean.

### MeshItem.layer

app.activeDocument.meshItems[index].layer

### Description

Layer that contains this item.

### Type

Layer; read-only.

### MeshItem.left

app.activeDocument.meshItems[index].left

### Description

Left-side position for the item, in points, measured from the page's left edge.

### Type

Number (double).

### MeshItem.locked

app.activeDocument.meshItems[index].locked

### Description

Lock-state flag for the item.

### Type

Boolean.

### MeshItem.name

app.activeDocument.meshItems[index].name

### Description

Item name string.

### Type

String.

### MeshItem.note

app.activeDocument.meshItems[index].note

### Description

Item note string.

### Type

String.

### MeshItem.opacity

app.activeDocument.meshItems[index].opacity

### Description

Object opacity value.

Range: 0.0 to 100.0.

### Type

Number (double).

### MeshItem.parent

app.activeDocument.meshItems[index].parent

### Description

Owning parent reference.

### Type

Layer or GroupItem; read-only.

### MeshItem.position

app.activeDocument.meshItems[index].position

### Description

Position for the top-left corner of the MeshItem object, in points, expressed as [x, y].

Stroke weight is excluded.

### Type

Array of 2 numbers.

### MeshItem.selected

app.activeDocument.meshItems[index].selected

### Description

Selection flag for the item.

### Type

Boolean.

### MeshItem.sliced

app.activeDocument.meshItems[index].sliced

### Description

Slice-state flag for the item.

Default: false.

### Type

Boolean.

### MeshItem.tags

app.activeDocument.meshItems[index].tags

### Description

Stored tag collection.

### Type

Tags; read-only.

### MeshItem.top

app.activeDocument.meshItems[index].top

### Description

Top position for the item, in points, measured from the page bottom.

### Type

Number (double).

### MeshItem.typename

app.activeDocument.meshItems[index].typename

### Description

Class identifier reported here.

### Type

String; read-only.

### MeshItem.uRL

app.activeDocument.meshItems[index].uRL

### Description

Adobe URL tag value stored on the item.

### Type

String.

### MeshItem.visibilityVariable

app.activeDocument.meshItems[index].visibilityVariable

### Description

Item visibility variable binding.

### Type

Variable

### MeshItem.visibleBounds

app.activeDocument.meshItems[index].visibleBounds

### Description

Visible bounds with stroke width included.

### Type

Array of 4 numbers; read-only.

### MeshItem.width

app.activeDocument.meshItems[index].width

### Description

Item width value.

### Type

Number (double).

### MeshItem.wrapInside

app.activeDocument.meshItems[index].wrapInside

### Description

Text-frame wrap-inside flag for this mesh object.

### Type

Boolean.

### MeshItem.wrapOffset

app.activeDocument.meshItems[index].wrapOffset

### Description

Text-wrap offset value.

### Type

Number (double).

### MeshItem.wrapped

app.activeDocument.meshItems[index].wrapped

### Description

When enabled, text frame objects wrap around the mesh; keep the text frame higher in the stack than the object.

### Type

Boolean.

### MeshItem.zOrderPosition

app.activeDocument.meshItems[index].zOrderPosition

### Description

Stacking-order index for this item inside its containing group or layer.

### Type

Number (long); read-only.

## MeshItems — Properties

### MeshItems.length

app.activeDocument.meshItems.length

### Description

Collection object count.

### Type

Number; read-only.

### MeshItems.parent

app.activeDocument.meshItems.parent

### Description

Owning parent reference.

### Type

Object; read-only.

### MeshItems.typename

app.activeDocument.meshItems.typename

### Description

Class identifier reported here.

### Type

String; read-only.

## NoColor — Properties

### NoColor.typename

noColor.typename

### Description

Stores the object's class-name string.

### Type

String; read-only.

## NonNativeItem — Properties

### NonNativeItem.artworkKnockout

nonNativeItems[index].artworkKnockout

### Description

Indicates whether this object participates in a knockout and which knockout mode applies.

### Type

KnockoutState

### NonNativeItem.blendingMode

nonNativeItems[index].blendingMode

### Description

Specifies the blending mode applied while the object is composited.

### Type

BlendModes

### NonNativeItem.controlBounds

nonNativeItems[index].controlBounds

### Description

Reports bounds expanded by strokes and control handles.

### Type

Array of 4 numbers; read-only.

### NonNativeItem.editable

nonNativeItems[index].editable

### Description

True means the item can be edited.

### Type

Boolean; read-only.

### NonNativeItem.geometricBounds

nonNativeItems[index].geometricBounds

### Description

Gives the object's bounds with strokes excluded.

### Type

Array of 4 numbers; read-only.

### NonNativeItem.height

nonNativeItems[index].height

### Description

Sets or reports the group item's height.

### Type

Number (double).

### NonNativeItem.hidden

nonNativeItems[index].hidden

### Description

True hides this item.

### Type

Boolean.

### NonNativeItem.isIsolated

nonNativeItems[index].isIsolated

### Description

True marks the object as isolated.

### Type

Boolean.

### NonNativeItem.layer

nonNativeItems[index].layer

### Description

Identifies the layer that contains this item.

### Type

Layer; read-only.

### NonNativeItem.left

nonNativeItems[index].left

### Description

Left-edge coordinate for the item, in points, measured from the page's left side.

### Type

Number (double).

### NonNativeItem.locked

nonNativeItems[index].locked

### Description

True locks this item.

### Type

Boolean.

### NonNativeItem.name

nonNativeItems[index].name

### Description

Holds this item's name.

### Type

String.

### NonNativeItem.note

nonNativeItems[index].note

### Description

Contains the note attached to this item.

### Type

String.

### NonNativeItem.opacity

nonNativeItems[index].opacity

### Description

Controls object opacity.

Range: 0.0 to 100.0.

### Type

Number (double).

### NonNativeItem.parent

nonNativeItems[index].parent

### Description

References this object's owner.

### Type

Document, Layer or GroupItem; read-only.

### NonNativeItem.position

nonNativeItems[index].position

### Description

Reports the top-left point, in [x, y] format, for the NonNativeItems[index] object; stroke weight is not included.

### Type

Array of 2 numbers.

### NonNativeItem.selected

nonNativeItems[index].selected

### Description

True marks this item as selected.

### Type

Boolean.

### NonNativeItem.sliced

nonNativeItems[index].sliced

### Description

True means the item is sliced.

Default: false.

### Type

Boolean.

### NonNativeItem.tags

nonNativeItems[index].tags

### Description

Provides the tags stored on this item.

### Type

Tags; read-only.

### NonNativeItem.top

nonNativeItems[index].top

### Description

Top-edge coordinate for the item, in points, measured from the page bottom.

### Type

Number (double).

### NonNativeItem.typename

nonNativeItems[index].typename

### Description

Supplies the referenced object's class name.

### Type

String; read-only.

### NonNativeItem.uRL

nonNativeItems[index].uRL

### Description

Stores the Adobe URL tag value attached to this item.

### Type

String.

### NonNativeItem.visibilityVariable

nonNativeItems[index].visibilityVariable

### Description

References the visibility variable linked to the item.

### Type

Variable

### NonNativeItem.visibleBounds

nonNativeItems[index].visibleBounds

### Description

Returns item bounds with visible strokes included.

### Type

Array of 4 numbers; read-only.

### NonNativeItem.width

nonNativeItems[index].width

### Description

Sets or reports this item's width.

### Type

Number (double).

### NonNativeItem.wrapInside

nonNativeItems[index].wrapInside

### Description

When true, wrapping places the non-native-item object inside this object.

### Type

Boolean.

### NonNativeItem.wrapOffset

nonNativeItems[index].wrapOffset

### Description

Specifies the offset used for text wrapping around this object.

### Type

Number (double).

### NonNativeItem.wrapped

nonNativeItems[index].wrapped

### Description

When true, non-native-item objects wrap around this object; the non-native-item object must be above it.

### Type

Boolean.

### NonNativeItem.zOrderPosition

nonNativeItems[index].zOrderPosition

### Description

Reports this item's stacking-order position inside its containing group or layer (parent).

### Type

Number; read-only.

## NonNativeItems — Properties

### NonNativeItems.length

nonNativeItems.length

### Description

Reports how many objects the collection contains.

### Type

Number; read-only.

### NonNativeItems.parent

nonNativeItems.parent

### Description

References this object's owner.

### Type

Object; read-only.

### NonNativeItems.typename

nonNativeItems.typename

### Description

Supplies the referenced object's class name.

### Type

String; read-only.

## OpenOptions — Properties

### OpenOptions.convertCropAreaToArboard

openOptions.convertCropAreaToArboard

### Description

Optional. When Illustrator CS4 or later opens a legacy document, this converts crop areas into artboards; false discards the crop areas.

Default: true.

### Type

Boolean.

### OpenOptions.convertTilesToArboard

openOptions.convertTilesToArboard

### Description

Optional. Legacy documents opened in Illustrator CS4 or later have their print tiles converted to artboards.

Default: false.

### Type

Boolean.

### OpenOptions.createArtboardWithArtworkBoundingBox

openOptions.createArtboardWithArtworkBoundingBox

### Description

Optional. While opening a legacy document in Illustrator CS4 or later, creates an artboard sized to the artwork's bounding box.

Default: false.

### Type

Boolean.

### OpenOptions.openAs

openOptions.openAs

### Description

Optional. Treats the file as an Illustrator library using the selected LibraryType.

Default: LibraryType.IllustratorArtwork.

### Type

LibraryType

### OpenOptions.preserveLegacyArtboard

openOptions.preserveLegacyArtboard

### Description

Optional. Keeps legacy artboards while Illustrator CS4 or later opens a legacy document.

Default: true.

### Type

Boolean.

### OpenOptions.updateLegacyGradientMesh

openOptions.updateLegacyGradientMesh

### Description

When true, legacy documents (pre-Illustrator CS4) keep spot colors inside gradient mesh objects.

Default: true.

### Type

Boolean.

### OpenOptions.updateLegacyText

openOptions.updateLegacyText

### Description

Optional. When true, legacy text items from earlier Illustrator versions are updated.

Default: false.

### Type

Boolean.

## OpenOptionsFreeHand — Properties

### OpenOptionsFreeHand.convertTextToOutlines

openOptionsFreeHand.convertTextToOutlines

### Description

When true, text is converted into vector paths while preserving the type's visual appearance.

Default: false.

### Type

Boolean.

### OpenOptionsFreeHand.importSinglePage

openOptionsFreeHand.importSinglePage

### Description

When true, only the page named by pageToOpen is imported.

Default: true.

### Type

Boolean.

### OpenOptionsFreeHand.pageToOpen

openOptionsFreeHand.pageToOpen

### Description

For multipage documents, identifies which page to import; requires importSinglePage == true.

### Type

Number (long).

### OpenOptionsFreeHand.parent

openOptionsFreeHand.parent

### Description

References this object's owner.

### Type

Object; read-only.

### OpenOptionsFreeHand.typename

openOptionsFreeHand.typename

### Description

Supplies the referenced object's class name.

### Type

String; read-only.
