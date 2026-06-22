# Properties (part 10)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Screen — Properties

### Screen.name

PPDFileList[index].PPDInfo.screenList[index].name

### Description

Name of the color separation screen.

### Type

String

### Screen.screenInfo

PPDFileList[index].PPDInfo.screenList[index].screenInfo

### Description

Information for the color separation screen.

### Type

ScreenInfo

### Screen.typename

PPDFileList[index].PPDInfo.screenList[index].typename

### Description

Referenced object's class name.

### Type

String; read-only.

## ScreenInfo — Properties

### ScreenInfo.angle

PPDFileList[index].PPDInfo.screenList[index].screenInfo.angle

### Description

Measurement for the screen angle, using degree units.

### Type

Number (double).

### ScreenInfo.defaultScreen

PPDFileList[index].PPDInfo.screenList[index].screenInfo.defaultScreen

### Description

True for the screen used by default.

### Type

Boolean.

### ScreenInfo.frequency

PPDFileList[index].PPDInfo.screenList[index].screenInfo.frequency

### Description

Frequency value for the screen.

### Type

Number (double).

### ScreenInfo.typename

PPDFileList[index].PPDInfo.screenList[index].screenInfo.typename

### Description

Referenced object's class name.

### Type

String; read-only.

## ScreenSpotFunction — Properties

### ScreenSpotFunction.name

PPDFileList[index].PPDInfo.screenSpotFunctionList[index].name

### Description

Name assigned to the color-separation screen spot function.

### Type

String

### ScreenSpotFunction.spotFunction

PPDFileList[index].PPDInfo.screenSpotFunctionList[index].spotFunction

### Description

PostScript command text that defines the spot function.

### Type

String

### ScreenSpotFunction.typename

PPDFileList[index].PPDInfo.screenSpotFunctionList[index].typename

### Description

Class name for the object being referenced.

### Type

String; read-only.

## Spot — Properties

### Spot.color

app.activeDocument.spots[index].color

### Description

Color payload assigned to the spot.

### Type

Color

### Spot.colorType

app.activeDocument.spots[index].colorType

### Description

ColorModel setting for the custom color definition.

### Type

ColorModel

### Spot.name

app.activeDocument.spots[index].name

### Description

Name of the spot color.

### Type

String

### Spot.parent

app.activeDocument.spots[index].parent

### Description

Owning document.

### Type

Document; read-only.

### Spot.spotKind

app.activeDocument.spots[index].spotKind

### Description

Spot color category: RGB, CMYK, or LAB. The value identifies which color kind the spot object stores.

### Type

SpotColorKind; read-only.

### Spot.typename

app.activeDocument.spots[index].typename

### Description

Class name for the object being referenced.

### Type

String; read-only.

## SpotColor — Properties

### SpotColor.spot

spotColor.spot

### Description

Reference to the spot color object that supplies the color definition.

### Type

Spot

### SpotColor.tint

spotColor.tint

### Description

Applied tint percentage.

Range: 0.0 to 100.0

### Type

Number (double)

### SpotColor.typename

spotColor.typename

### Description

Class name for the object being referenced.

### Type

String; read-only.

## Spots — Properties

### Spots.length

app.activeDocument.spots.length

### Description

Collection item count.

### Type

Number; read-only.

### Spots.parent

app.activeDocument.spots.parent

### Description

Container object for this collection.

### Type

Object; read-only.

### Spots.typename

app.activeDocument.spots.typename

### Description

Class name for the object.

### Type

String; read-only.

## Story — Properties

### Story.characters

story.characters

### Description

Every character in this story.

### Type

Characters; read-only.

### Story.insertionPoints

story.insertionPoints

### Description

Every insertion point in this story.

### Type

InsertionPoints; read-only.

### Story.length

story.length

### Description

Character count for the story.

### Type

Number (long); read-only.

### Story.lines

story.lines

### Description

Every line in this story.

### Type

Lines; read-only.

### Story.paragraphs

story.paragraphs

### Description

Every paragraph in this story.

### Type

Paragraphs; read-only.

### Story.parent

story.parent

### Description

Container object for this story.

### Type

Object; read-only.

### Story.textFrames

story.textFrames

### Description

Text frame items belonging to this story.

### Type

TextFrameItems; read-only.

### Story.textRange

story.textRange

### Description

Text range represented by the story.

### Type

TextRange; read-only.

### Story.textRanges

story.textRanges

### Description

Every text range in the story.

### Type

TextRanges; read-only.

### Story.textSelection

story.textSelection

### Description

Currently selected text ranges.

### Type

Array of TextRange; read-only.

### Story.typename

story.typename

### Description

Class name for the object.

### Type

String; read-only.

### Story.words

story.words

### Description

Every word in the story.

### Type

Words; read-only.

## Stories — Properties

### Stories.length

stories.length

### Description

Count of items in the collection.

### Type

Number; read-only.

### Stories.parent

stories.parent

### Description

Container object for this collection.

### Type

Object; read-only.

### Stories.typename

stories.typename

### Description

Class name for the object being referenced.

### Type

String; read-only.

## Swatch — Properties

### Swatch.color

app.activeDocument.swatches[index].color

### Description

Color data assigned to this swatch.

### Type

Color

### Swatch.name

app.activeDocument.swatches[index].name

### Description

Name of the swatch.

### Type

String.

### Swatch.parent

app.activeDocument.swatches[index].parent

### Description

Containing document.

### Type

Document; read-only.

### Swatch.typename

app.activeDocument.swatches[index].typename

### Description

Class name for the object.

### Type

String; read-only.

## Swatches — Properties

### Swatches.length

app.activeDocument.swatches.length

### Description

Reports how many elements the collection contains.

### Type

Number; read-only.

### Swatches.parent

app.activeDocument.swatches.parent

### Description

Identifies the container for the object.

### Type

Object; read-only.

### Swatches.typename

app.activeDocument.swatches.typename

### Description

Provides the object's class name.

### Type

String; read-only.

## SwatchGroup — Properties

### SwatchGroup.name

swatchGroup.name

### Description

Stores the swatch group's name.

### Type

string

### SwatchGroup.parent

swatchGroup.parent

### Description

Shows the enclosing object for the swatch group.

### Type

Object; read-only.

### SwatchGroup.typename

swatchGroup.typename

### Description

Gives the referenced object's class name.

### Type

String; read-only

## SwatchGroups — Properties

### SwatchGroups.length

swatchGroups.length

### Description

Reports the collection's object count.

### Type

Number; read-only.

### SwatchGroups.parent

swatchGroups.parent

### Description

Identifies the container for the object.

### Type

Object; read-only.

### SwatchGroups.typename

swatchGroups.typename

### Description

Provides the object's class name.

### Type

String; read-only.

## SymbolItem — Properties

### SymbolItem.artworkKnockout

app.activeDocument.symbolItems[index].artworkKnockout

### Description

Specifies whether this object creates a knockout, and the knockout type when it does.

### Type

KnockoutState

### SymbolItem.blendingMode

app.activeDocument.symbolItems[index].blendingMode

### Description

Controls the blend mode for compositing the object.

### Type

BlendModes

### SymbolItem.controlBounds

app.activeDocument.symbolItems[index].controlBounds

### Description

Gives the object's bounds with controls included and stroke accounted for.

### Type

Array of 4 Numbers; read-only.

### SymbolItem.editable

app.activeDocument.symbolItems[index].editable

### Description

When true, the item can be edited.

### Type

Boolean; read-only.

### SymbolItem.geometricBounds

app.activeDocument.symbolItems[index].geometricBounds

### Description

Gives the object's bounds with stroke excluded.

### Type

Array of 4 Numbers; read-only.

### SymbolItem.height

app.activeDocument.symbolItems[index].height

### Description

Stores the group item's height.

### Type

Number (double)

### SymbolItem.hidden

app.activeDocument.symbolItems[index].hidden

### Description

A true value hides this item.

### Type

Boolean

### SymbolItem.isIsolated

app.activeDocument.symbolItems[index].isIsolated

### Description

A true value marks this object as isolated.

### Type

Boolean

### SymbolItem.layer

app.activeDocument.symbolItems[index].layer

### Description

Identifies the layer that contains this item.

### Type

Layer; read-only.

### SymbolItem.left

app.activeDocument.symbolItems[index].left

### Description

Gives the left edge position for the item in points, measured from the page's left side.

### Type

Number (double)

### SymbolItem.locked

app.activeDocument.symbolItems[index].locked

### Description

A true value locks this item.

### Type

Boolean

### SymbolItem.name

app.activeDocument.symbolItems[index].name

### Description

Stores this item's name.

### Type

String

### SymbolItem.note

app.activeDocument.symbolItems[index].note

### Description

Holds this item's note text.

### Type

String

### SymbolItem.opacity

app.activeDocument.symbolItems[index].opacity

### Description

Sets the object's opacity.

Range: 0.0 to 100.0

### Type

Number (double)

### SymbolItem.parent

app.activeDocument.symbolItems[index].parent

### Description

Indicates the parent object for this item.

### Type

Layer or GroupItem; read-only.

### SymbolItem.position

app.activeDocument.symbolItems[index].position

### Description

Gives the symbolItem object's top-left corner as [x, y], in points. Stroke weight is excluded.

### Type

Array of 2 Numbers

### SymbolItem.selected

app.activeDocument.symbolItems[index].selected

### Description

A true value selects this item.

### Type

Boolean

### SymbolItem.sliced

app.activeDocument.symbolItems[index].sliced

### Description

A true value marks the item as sliced.

Default: false

### Type

Boolean

### SymbolItem.symbol

app.activeDocument.symbolItems[index].symbol

### Description

Identifies the source Symbol for this symbolItem.

### Type

Symbol

### SymbolItem.tags

app.activeDocument.symbolItems[index].tags

### Description

Lists this item's tags.

### Type

Tags; read-only.

### SymbolItem.top

app.activeDocument.symbolItems[index].top

### Description

Gives the item's top position in points, measured from the page bottom.

### Type

Number (double)

### SymbolItem.typename

app.activeDocument.symbolItems[index].typename

### Description

Gives the referenced object's class name.

### Type

String; read-only.

### SymbolItem.uRL

app.activeDocument.symbolItems[index].uRL

### Description

Holds this item's Adobe URL tag value.

### Type

String

### SymbolItem.visibilityVariable

app.activeDocument.symbolItems[index].visibilityVariable

### Description

Gives the item's bound visibility variable.

### Type

Variable

### SymbolItem.visibleBounds

app.activeDocument.symbolItems[index].visibleBounds

### Description

Reports the item's visible bounds with stroke width included.

### Type

Array of 4 Numbers; read-only.

### SymbolItem.width

app.activeDocument.symbolItems[index].width

### Description

Stores the item's width.

### Type

Number (double)

### SymbolItem.wrapInside

app.activeDocument.symbolItems[index].wrapInside

### Description

When true, the text frame object wraps within this object.

### Type

Boolean

### SymbolItem.wrapOffset

app.activeDocument.symbolItems[index].wrapOffset

### Description

Sets the offset for wrapping text around the object.

### Type

Number (double)

### SymbolItem.wrapped

app.activeDocument.symbolItems[index].wrapped

### Description

When true, text frame objects wrap around this object; the text frame must sit above it.

### Type

Boolean

### SymbolItem.zOrderPosition

app.activeDocument.symbolItems[index].zOrderPosition

### Description

Gives this item's location in the stacking order of its containing group or layer parent.

### Type

Number; read-only.

## SymbolItems — Properties

### SymbolItems.length

app.activeDocument.symbolItems.length

### Description

Reports how many elements the collection contains.

### Type

Number; read-only.

### SymbolItems.parent

app.activeDocument.symbolItems.parent

### Description

Identifies the container for the object.

### Type

Object; read-only.

### SymbolItems.typename

app.activeDocument.symbolItems.typename

### Description

Provides the object's class name.

### Type

String; read-only.

## Symbol — Properties

### Symbol.name

app.activeDocument.symbols[index].name

### Description

Stores the name assigned to the symbol.

### Type

String.

### Symbol.parent

app.activeDocument.symbols[index].parent

### Description

References this symbol's owning container.

### Type

Object; read-only.

### Symbol.typename

app.activeDocument.symbols[index].typename

### Description

Reports the object's class name.

### Type

String; read-only.

## Symbols — Properties

### Symbols.length

app.activeDocument.symbols.length

### Description

Reports the collection size.

### Type

Number; read-only.

### Symbols.parent

app.activeDocument.symbols.parent

### Description

References the container for this object.

### Type

Object; read-only.

### Symbols.typename

app.activeDocument.symbols.typename

### Description

Reports the object's class name.

### Type

String; read-only.

## TabStopInfo — Properties

### TabStopInfo.alignment

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.alignment

### Description

Controls alignment for text at that location.

Default: Left

### Type

TabStopAlignment

### TabStopInfo.decimalCharacter

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.decimalCharacter

### Description

Specifies the decimal marker character.

Default: .

### Type

String

### TabStopInfo.leader

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.leader

### Description

Stores the dot glyph used for leader fill.

### Type

String

### TabStopInfo.position

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.position

### Description

Gives the tab stop location using point units.

Default: 0.0

### Type

Number (double)

### TabStopInfo.typename

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.typename

### Description

Reports the object's class name.

### Type

String; read-only.

## Tag — Properties

### Tag.name

app.activeDocument.selection[index].tags[index].name

### Description

Stores the name of the tag.

### Type

String; read-only.

### Tag.parent

app.activeDocument.selection[index].tags[index].parent

### Description

References this tag's owning object.

### Type

Object; read-only.

### Tag.typename

app.activeDocument.selection[index].tags[index].typename

### Description

Reports the object's class name.

### Type

String; read-only.

### Tag.value

app.activeDocument.selection[index].tags[index].value

### Description

Contains the data value saved on this tag.

### Type

String; read-only.

## Tags — Properties

### Tags.length

app.activeDocument.selection[index].tags.length

### Description

Reports the collection size.

### Type

Number; read-only.

### Tags.parent

app.activeDocument.selection[index].tags.parent

### Description

References the container for this object.

### Type

Object; read-only.

### Tags.typename

app.activeDocument.selection[index].tags.typename

### Description

Identifies the class name for the referenced object.

### Type

String; read-only.

## TextFont — Properties

### TextFont.family

app.textFonts[index].family

### Description

Gives the family label for the font.

### Type

String; read-only.

### TextFont.name

app.textFonts[index].name

### Description

Contains the complete font name.

### Type

String; read-only.

### TextFont.parent

app.textFonts[index].parent

### Description

References the container for this object.

### Type

Object; read-only.

### TextFont.style

app.textFonts[index].style

### Description

Contains the style name of the font.

### Type

String; read-only.

### TextFont.typename

app.textFonts[index].typename

### Description

Reports the object's class name.

### Type

String; read-only.

## TextFonts — Properties

### TextFonts.length

app.textFonts.length

### Description

Reports how many items the collection contains.

### Type

Number; read-only.

### TextFonts.parent

app.textFonts.parent

### Description

References the container that owns this object.

### Type

Object; read-only.

### TextFonts.typename

app.textFonts.typename

### Description

Provides the class name for the object being referenced.

### Type

String; read-only.

## TextFrameItem — Properties

### TextFrameItem.anchor

app.activeDocument.textFrames[index].anchor

### Description

For point text, this gives the anchor point position where the baseline begins.

### Type

Array of 2 numbers

### TextFrameItem.antialias

app.activeDocument.textFrames[index].antialias

### Description

Specifies which anti-aliasing style is applied to the text.

### Type

TextAntialias

### TextFrameItem.characters

app.activeDocument.textFrames[index].characters

### Description

Represents every character contained by the frame.

### Type

Characters; read-only.

### TextFrameItem.columnCount

app.activeDocument.textFrames[index].columnCount

### Description

For area text, stores the number of columns in the frame.

### Type

Number (long)

### TextFrameItem.columnGutter

app.activeDocument.textFrames[index].columnGutter

### Description

For area text, stores the spacing between columns in the frame.

### Type

Number (double)

### TextFrameItem.contents

app.activeDocument.textFrames[index].contents

### Description

Contains the frame's string value.

### Type

String

### TextFrameItem.contentVariable

app.activeDocument.textFrames[index].contentVariable

### Description

Identifies the content variable attached to the item.

### Type

Variable

### TextFrameItem.endTValue

app.activeDocument.textFrames[index].endTValue

### Description

For path text, gives the ending text position as a value relative to the path segments.

### Type

Number (double)

### TextFrameItem.flowLinksHorizontally

app.activeDocument.textFrames[index].flowLinksHorizontally

### Description

When true, area text moves through linked frames horizontally before other flow directions.

### Type

Boolean

### TextFrameItem.insertionPoints

app.activeDocument.textFrames[index].insertionPoints

### Description

Provides every insertion point available in this range.

### Type

InsertionPoints; read-only.

### TextFrameItem.kind

app.activeDocument.textFrames[index].kind

### Description

Indicates whether the text frame item is area, path, or point text.

### Type

TextType; read-only.

### TextFrameItem.lines

app.activeDocument.textFrames[index].lines

### Description

Exposes the frame's line collection.

### Type

Lines; read-only.

### TextFrameItem.matrix

app.activeDocument.textFrames[index].matrix

### Description

Holds this text frame's transformation matrix.

### Type

Matrix; read-only.

### TextFrameItem.nextFrame

app.activeDocument.textFrames[index].nextFrame

### Description

Points to the linked text frame that comes after this one.

### Type

TextFrameItem

### TextFrameItem.opticalAlignment

app.activeDocument.textFrames[index].opticalAlignment

### Description

When true, optical alignment is enabled.

### Type

Boolean

### TextFrameItem.orientation

app.activeDocument.textFrames[index].orientation

### Description

Sets the direction/orientation used by the text.

### Type

TextOrientation

### TextFrameItem.paragraphs

app.activeDocument.textFrames[index].paragraphs

### Description

Exposes the frame's paragraph collection.

### Type

Paragraphs; read-only.

### TextFrameItem.parent

app.activeDocument.textFrames[index].parent

### Description

Identifies the object that contains this item.

### Type

Layer or GroupItem; read-only.

### TextFrameItem.previousFrame

app.activeDocument.textFrames[index].previousFrame

### Description

Points to the linked text frame that comes before this one.

### Type

TextFrameItem

### TextFrameItem.rowCount

app.activeDocument.textFrames[index].rowCount

### Description

For area text, stores how many rows the text frame uses.

### Type

Number (long)

### TextFrameItem.rowGutter

app.activeDocument.textFrames[index].rowGutter

### Description

For area text, stores the spacing between rows in the text frame.

### Type

Number (double)

### TextFrameItem.spacing

app.activeDocument.textFrames[index].spacing

### Description

Stores the spacing amount.

### Type

Number (double)

### TextFrameItem.startTValue

app.activeDocument.textFrames[index].startTValue

### Description

For path text, gives the starting text position as a value relative to the path segments.

### Type

Number (double)

### TextFrameItem.story

app.activeDocument.textFrames[index].story

### Description

References the story associated with this text frame.

### Type

Story; read-only.

### TextFrameItem.textPath

app.activeDocument.textFrames[index].textPath

### Description

References the path item tied to the text frame. Note: usable only for area-text or path-text kinds.

### Type

TextPath

### TextFrameItem.textRange

app.activeDocument.textFrames[index].textRange

### Description

Returns the frame's TextRange.

### Type

TextRange; read-only.

### TextFrameItem.textRanges

app.activeDocument.textFrames[index].textRanges

### Description

Exposes every TextRange in the frame.

### Type

TextRanges; read-only.

### TextFrameItem.textSelection

app.activeDocument.textFrames[index].textSelection

### Description

Contains selected ranges for the frame.

### Type

Array of TextRange; read-only.

### TextFrameItem.typename

app.activeDocument.textFrames[index].typename

### Description

Provides the class name for the object being referenced.

### Type

String; read-only.

### TextFrameItem.words

app.activeDocument.textFrames[index].words

### Description

Exposes all words contained in this text frame.

### Type

Words; read-only.

## TextFrameItems — Properties

### TextFrameItems.length

app.activeDocument.textFrames.length

### Description

Reports how many items the collection contains.

### Type

Number; read-only.

### TextFrameItems.parent

app.activeDocument.textFrames.parent

### Description

References the container that owns this object.

### Type

Object; read-only.

### TextFrameItems.typename

app.activeDocument.textFrames.typename

### Description

Provides the class name for the object being referenced.

### Type

String; read-only.
