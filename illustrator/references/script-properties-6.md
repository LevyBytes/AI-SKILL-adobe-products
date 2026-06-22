# Properties (part 6)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## OpenOptionsPhotoshop — Properties

### OpenOptionsPhotoshop.layerComp

openOptionsPhotoshop.layerComp

### Description

Names the layer comp to apply during document conversion.

### Type

String.

### OpenOptionsPhotoshop.preserveHiddenLayers

openOptionsPhotoshop.preserveHiddenLayers

### Description

When true, hidden layers are kept through conversion.

Default: false.

### Type

Boolean.

### OpenOptionsPhotoshop.preserveImageMaps

openOptionsPhotoshop.preserveImageMaps

### Description

When true, image maps remain available through conversion.

Default: true.

### Type

Boolean.

### OpenOptionsPhotoshop.preserveLayers

openOptionsPhotoshop.preserveLayers

### Description

When true, layers remain preserved through conversion.

Default: true.

### Type

Boolean.

### OpenOptionsPhotoshop.preserveSlices

openOptionsPhotoshop.preserveSlices

### Description

When true, slices are retained through conversion.

Default: true.

### Type

Boolean.

### OpenOptionsPhotoshop.typename

openOptionsPhotoshop.typename

### Description

Stores the object's class-name string.

### Type

String; read-only.

## PageItem — Properties

### PageItem.artworkKnockout

app.activeDocument.pageItems[index].artworkKnockout

### Description

Indicates whether this object participates in creating a knockout.

### Type

KnockoutState

### PageItem.blendingMode

app.activeDocument.pageItems[index].blendingMode

### Description

Defines this object's compositing mode. Illustrator considers the object composited once opacity drops below 100.0 (100%).

### Type

BlendModes

### PageItem.controlBounds

app.activeDocument.pageItems[index].controlBounds

### Description

Reports bounds expanded by strokes and control handles.

### Type

Rect; read-only.

### PageItem.editable

app.activeDocument.pageItems[index].editable

### Description

True means this page item can be edited.

### Type

Boolean; read-only.

### PageItem.geometricBounds

app.activeDocument.pageItems[index].geometricBounds

### Description

Gives this object's bounds with strokes excluded.

### Type

Array of 4 numbers; read-only.

### PageItem.height

app.activeDocument.pageItems[index].height

### Description

Height value derived from the page item's geometry.

Range: 0.0 to 16348.0.

### Type

Number (double).

### PageItem.hidden

app.activeDocument.pageItems[index].hidden

### Description

True hides this page item.

### Type

Boolean.

### PageItem.isIsolated

app.activeDocument.pageItems[index].isIsolated

### Description

True marks the object as isolated.

### Type

Boolean.

### PageItem.layer

app.activeDocument.pageItems[index].layer

### Description

Identifies the layer that contains this page item.

### Type

Layer; read-only.

### PageItem.left

app.activeDocument.pageItems[index].left

### Description

Art item's left coordinate.

### Type

Number (double).

### PageItem.locked

app.activeDocument.pageItems[index].locked

### Description

True locks this page item.

### Type

Boolean.

### PageItem.name

app.activeDocument.pageItems[index].name

### Description

Holds this page item's name.

### Type

String.

### PageItem.note

app.activeDocument.pageItems[index].note

### Description

Contains this item's note.

### Type

String.

### PageItem.opacity

app.activeDocument.pageItems[index].opacity

### Description

Controls this object's opacity, with 100.0 fully opaque and 0.0 fully transparent.

### Type

Number (double).

### PageItem.parent

app.activeDocument.pageItems[index].parent

### Description

References this object's owner.

### Type

Object; read-only.

### PageItem.pixelAligned

app.activeDocument.pageItems[index].pixelAligned

### Description

Returns true for pixel-grid alignment.

### Type

Boolean.

### PageItem.position

app.activeDocument.pageItems[index].position

### Description

Gives the item's top-left point in {x, y} format, with stroke weight excluded.

### Type

Array of 2 numbers.

### PageItem.selected

app.activeDocument.pageItems[index].selected

### Description

True marks this object as selected.

### Type

Boolean.

### PageItem.sliced

app.activeDocument.pageItems[index].sliced

### Description

True preserves slices.

### Type

Boolean.

### PageItem.tags

app.activeDocument.pageItems[index].tags

### Description

Provides this page item's tag collection.

### Type

Tags

### PageItem.top

app.activeDocument.pageItems[index].top

### Description

Art item's top coordinate.

### Type

Number (double).

### PageItem.typename

app.activeDocument.pageItems[index].typename

### Description

Stores the object's class-name string.

### Type

String; read-only.

### PageItem.uRL

app.activeDocument.pageItems[index].uRL

### Description

Stores this page item's Adobe URL tag value.

### Type

String.

### PageItem.uuid

app.activeDocument.pageItems[index].uuid

Note

Illustrator 24.0. (CC2020) introduced this functionality.

### Description

Unique pageItem identifier.

### Type

String; read-only.

### PageItem.visibilityVariable

app.activeDocument.pageItems[index].visibilityVariable

### Description

References the variable controlling this page item path's visibility.

### Type

Variable

### PageItem.visibleBounds

app.activeDocument.pageItems[index].visibleBounds

### Description

Returns this object's visible bounds with illustration-object strokes included.

### Type

Array of 4 numbers; read-only.

### PageItem.width

app.activeDocument.pageItems[index].width

### Description

Width value derived from the page item's geometry.

Range: 0.0 to 16348.0.

### Type

Number (double).

### PageItem.wrapInside

app.activeDocument.pageItems[index].wrapInside

### Description

When true, this object contains the text frame object for wrapping.

### Type

Boolean.

### PageItem.wrapOffset

app.activeDocument.pageItems[index].wrapOffset

### Description

Specifies this object's text-wrap offset.

### Type

Number (double).

### PageItem.wrapped

app.activeDocument.pageItems[index].wrapped

### Description

When true, this object causes text frame objects to wrap around it; the text frame has to sit higher in the stacking order.

### Type

Boolean.

### PageItem.zOrderPosition

app.activeDocument.pageItems[index].zOrderPosition

### Description

Reports the art's drawing order inside its group or layer.

### Type

Number (long); read-only.

## PageItems — Properties

### PageItems.length

app.activeDocument.pageItems.length

### Description

Reports how many objects the collection contains.

### Type

Number; read-only.

### PageItems.parent

app.activeDocument.pageItems.parent

### Description

References this object's owner.

### Type

Object; read-only.

### PageItems.typename

app.activeDocument.pageItems.typename

### Description

Supplies the referenced object's class name.

### Type

String; read-only.

## Paper — Properties

### Paper.name

paper.name

### Description

Name assigned to the paper.

### Type

String.

### Paper.paperInfo

paper.paperInfo

### Description

Paper details associated with this object.

### Type

PaperInfo

### Paper.typename

paper.typename

### Description

Object class name.

### Type

String; read-only.

## PaperInfo — Properties

### PaperInfo.customPaper

printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.customPaper

### Description

A true value marks the paper as custom.

### Type

Boolean.

### PaperInfo.height

printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.height

### Description

Paper height, using point units.

### Type

Number (double).

### PaperInfo.imageableArea

printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.imageableArea

### Description

Area on the paper that can receive an image.

### Type

Array of 4 numbers.

### PaperInfo.typename

printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.typename

### Description

Object class name.

### Type

String; read-only.

### PaperInfo.width

printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo.width

### Description

Paper width, using point units.

### Type

Number (double).

## ParagraphAttributes — Properties

### ParagraphAttributes.autoLeadingAmount

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.autoLeadingAmount

### Description

Auto leading value in percent form.

### Type

Number (double).

### ParagraphAttributes.bunriKinshi

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.bunriKinshi

### Description

A true value enables BunriKinshi.

### Type

Boolean.

### ParagraphAttributes.burasagariType

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.burasagariType

### Description

Burasagari type setting.

### Type

BurasagariTypeEnum

### ParagraphAttributes.desiredGlyphScaling

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.desiredGlyphScaling

### Description

Preferred glyph scale, given as a percentage of the normal character width.

Range: 50.0 to 200.0. At 100.0, character width remains unchanged.

### Type

Number (double).

### ParagraphAttributes.desiredLetterSpacing

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.desiredLetterSpacing

### Description

Preferred letter spacing, given as a percentage of normal kerning or tracking.

Range: -100.0 to 500.0. At 0, letters receive no added spacing. At 100.0, insertion equals one full space width for letter gaps.

### Type

Number (double).

### ParagraphAttributes.desiredWordSpacing

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.desiredWordSpacing

### Description

Preferred word spacing, given as a percentage of the font's normal space.

Range: 0.0 to 1000.0; at 100.00. Words receive no extra space.

### Type

Number (double).

### ParagraphAttributes.everyLineComposer

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.everyLineComposer

### Description

When true, composition uses the Every-line Composer. When false, it uses the Single-line Composer.

### Type

Boolean.

### ParagraphAttributes.firstLineIndent

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.firstLineIndent

### Description

Left indent, in points, for the first line.

### Type

Number (double).

### ParagraphAttributes.hyphenateCapitalizedWords

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenateCapitalizedWords

### Description

A true value permits hyphenation of capitalized words.

### Type

Boolean.

### ParagraphAttributes.hyphenation

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenation

### Description

A true value turns on paragraph hyphenation.

### Type

Boolean.

### ParagraphAttributes.hyphenationPreference

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenationPreference

### Description

Hyphenation preference scale, where 0 favors improved spacing and 1 favors fewer hyphens.

Range: 0.0 to 1.0.

### Type

Number (double).

### ParagraphAttributes.hyphenationZone

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.hyphenationZone

### Description

Distance in points from the paragraph's right edge that defines the line area where hyphenation cannot occur.

Note

Using 0 permits hyphenation everywhere. Applies only if ParagraphAttributes.everyLineComposer is false.

### Type

Number (double).

### ParagraphAttributes.justification

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.justification

### Description

Paragraph justification setting.

### Type

Justification

### ParagraphAttributes.kinsoku

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.kinsoku

### Description

Kinsoku Shori name.

### Type

String.

### ParagraphAttributes.kinsokuOrder

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.kinsokuOrder

### Description

Preferred Kinsoku ordering.

### Type

KinsokuOrderEnum

### ParagraphAttributes.kurikaeshiMojiShori

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.kurikaeshiMojiShori

### Description

A true value enables KurikaeshiMojiShori.

### Type

Boolean.

### ParagraphAttributes.leadingType

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.leadingType

### Description

Auto leading type setting.

### Type

AutoLeadingType

### ParagraphAttributes.leftIndent

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.leftIndent

### Description

Left margin indent, using point units.

### Type

Number (double).

### ParagraphAttributes.maximumConsecutiveHyphens

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumConsecutiveHyphens

### Description

Maximum run length for hyphenated lines.

### Type

Number (long).

### ParagraphAttributes.maximumGlyphScaling

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumGlyphScaling

### Description

Largest permitted glyph scale, given as a percentage of the normal character width.

Range: 50.0 to 200.0; at 100.0. Character width remains unchanged.

Note

Only justified paragraphs can use this setting.

### Type

Number (double).

### ParagraphAttributes.maximumLetterSpacing

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumLetterSpacing

### Description

Largest permitted letter spacing, given as a percentage of normal kerning or tracking.

Range: -100.0 to 500.0; at 0. Letters receive no added spacing. At 100.0, a full space width is inserted between letters.

Note

Only justified paragraphs can use this setting.

### Type

Number (double).

### ParagraphAttributes.maximumWordSpacing

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.maximumWordSpacing

### Description

Largest permitted word spacing, given as a percentage of the font's normal space.

Range: 0.0 to 1000.0; at 100.00. Words receive no extra space.

Note

Only justified paragraphs can use this setting.

### Type

Number (double).

### ParagraphAttributes.minimumAfterHyphen

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumAfterHyphen

### Description

Minimum post-hyphen character count.

### Type

Number (long).

### ParagraphAttributes.minimumBeforeHyphen

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumBeforeHyphen

### Description

Minimum pre-hyphen character count.

### Type

Number (long).

### ParagraphAttributes.minimumGlyphScaling

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumGlyphScaling

### Description

Smallest permitted glyph scale, given as a percentage of the normal character width.

Range: 50.0 to 200.0. At 100.0, character width remains unchanged.

Note

Only justified paragraphs can use this setting.

### Type

Number (double).

### ParagraphAttributes.minimumHyphenatedWordSize

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumHyphenatedWordSize

### Description

Smallest word length allowed for hyphenation.

### Type

Number (long).

### ParagraphAttributes.minimumLetterSpacing

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumLetterSpacing

### Description

Smallest permitted letter spacing, given as a percentage of normal kerning or tracking. Range: -100.0 to 500.0; at 0. Letters receive no added spacing. At 100.0, a full space width is inserted between letters.

Note

Only justified paragraphs can use this setting.

### Type

Number (double).

### ParagraphAttributes.minimumWordSpacing

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.minimumWordSpacing

### Description

Smallest permitted word spacing, given as a percentage of the font's normal space.

Range: 0.0 to 1000.0; at 100.00. Words receive no extra space.

Note

Only justified paragraphs can use this setting.

### Type

Number (double).

### ParagraphAttributes.mojikumi

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.mojikumi

### Description

Mojikumi name.

### Type

String.

### ParagraphAttributes.parent

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.parent

### Description

Containing object reference.

### Type

Object; read-only.

### ParagraphAttributes.rightIndent

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.rightIndent

### Description

Right margin indent, using point units.

### Type

Number (double).

### ParagraphAttributes.romanHanging

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.romanHanging

### Description

A true value enables Roman hanging punctuation.

### Type

Boolean.

### ParagraphAttributes.singleWordJustification

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.singleWordJustification

### Description

Justification setting used for a single word.

### Type

Justification

### ParagraphAttributes.spaceAfter

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.spaceAfter

### Description

Paragraph spacing after, using point units.

### Type

Number (double).

### ParagraphAttributes.spaceBefore

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.spaceBefore

### Description

Paragraph spacing before, using point units.

### Type

Number (double).

### ParagraphAttributes.tabStops

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops

### Description

Settings for tab stops.

### Type

TabStopInfo

### ParagraphAttributes.typename

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.typename

### Description

Object class name.

### Type

String; read-only.

## Paragraphs — Properties

### Paragraphs.length

app.activeDocument.textFrames[index].paragraphs.length

### Description

Collection object count.

### Type

Number; read-only.

### Paragraphs.parent

app.activeDocument.textFrames[index].paragraphs.parent

### Description

Containing parent object.

### Type

Object; read-only.

### Paragraphs.typename

app.activeDocument.textFrames[index].paragraphs.typename

### Description

Class name of the referenced object.

### Type

String; read-only.

## ParagraphStyle — Properties

### ParagraphStyle.characterAttributes

app.activeDocument.paragraphStyles[index].characterAttributes

### Description

Character properties assigned to that range of text.

### Type

CharacterAttributes; read-only.

### ParagraphStyle.name

app.activeDocument.paragraphStyles[index].name

### Description

Name of the paragraph style.

### Type

String.

### ParagraphStyle.paragraphAttributes

app.activeDocument.paragraphStyles[index].paragraphAttributes

### Description

Paragraph properties assigned to that range of text.

### Type

CharacterAttributes; read-only.

### ParagraphStyle.parent

app.activeDocument.paragraphStyles[index].parent

### Description

Containing object reference.

### Type

Object; read-only.

### ParagraphStyle.typename

app.activeDocument.paragraphStyles[index].typename

### Description

Object class name.

### Type

String; read-only.

## ParagraphStyles — Properties

### ParagraphStyles.length

app.activeDocument.paragraphStyles.length

### Description

Collection element count.

### Type

Number; read-only.

### ParagraphStyles.parent

app.activeDocument.paragraphStyles.parent

### Description

Containing object reference.

### Type

Object; read-only.

### ParagraphStyles.typename

app.activeDocument.paragraphStyles.typename

### Description

Object class name.

### Type

String; read-only.
