# Properties (part 11)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## TextPath — Properties

### TextPath.area

textPath.area

### Description

Gives this path's area in square points. A negative area means the winding direction is counterclockwise.

Self-intersecting paths may include sub-areas that offset one another, so the reported value can be zero even when an apparent area is visible.

### Type

Number (double); read-only.

### TextPath.blendingMode

textPath.blendingMode

### Description

Specifies the blend mode applied while compositing an object.

### Type

BlendModes

### TextPath.clipping

textPath.clipping

### Description

When true, this path is intended for clipping path use.

### Type

Boolean

### TextPath.closed

textPath.closed

### Description

When true, the path is closed.

### Type

Boolean

### TextPath.editable

textPath.editable

### Description

Read-only. When true, this item can be edited.

### Type

Boolean

### TextPath.evenodd

textPath.evenodd

### Description

When true, insideness is calculated with the even-odd rule.

### Type

Boolean

### TextPath.fillColor

textPath.fillColor

### Description

Sets the path's fill color.

### Type

Color

### TextPath.filled

textPath.filled

### Description

When true, the path is filled.

### Type

Boolean

### TextPath.fillOverprint

textPath.fillOverprint

### Description

When true, artwork under a filled object is overprinted.

### Type

Boolean

### TextPath.guides

textPath.guides

### Description

When true, this path acts as a guide object.

### Type

Boolean

### TextPath.height

textPath.height

### Description

Stores the group item's height.

### Type

Number (double)

### TextPath.left

textPath.left

### Description

Gives the item's left-edge position in points, measured from the page's left edge.

### Type

Number (double)

### TextPath.note

textPath.note

### Description

Stores notes for the path.

### Type

String

### TextPath.opacity

textPath.opacity

### Description

Sets the object's opacity.

Range: 0.0 to 100.0

### Type

Number (double)

### TextPath.parent

textPath.parent

### Description

Read-only. Identifies the object that contains this item.

### Type

Layer or GroupItem

### TextPath.pathPoints

textPath.pathPoints

### Description

Read-only. Provides the path points included in this path item.

### Type

PathPoints

### TextPath.polarity

textPath.polarity

### Description

Stores the path polarity.

### Type

PolarityValues

### TextPath.position

textPath.position

### Description

Gives the top-left corner position of the textPathItem object in [x, y] point coordinates. Stroke weight is excluded.

### Type

Array of 2 numbers

### TextPath.resolution

textPath.resolution

### Description

Stores path resolution, expressed as dpi.

### Type

Number (double)

### TextPath.selectedPathPoints

textPath.selectedPathPoints

### Description

Read-only. Provides every selected path point in the path.

### Type

PathPoints

### TextPath.strokeCap

textPath.strokeCap

### Description

Sets the line cap style.

### Type

StrokeCap

### TextPath.strokeColor

textPath.strokeColor

### Description

Sets the path's stroke color.

### Type

Color

### TextPath.stroked

textPath.stroked

### Description

When true, the path is stroked.

### Type

Boolean

### TextPath.strokeDashes

textPath.strokeDashes

### Description

Defines dash lengths. Use an empty object, {}, to make the line solid.

### Type

Object

### TextPath.strokeDashOffset

textPath.strokeDashOffset

### Description

Sets the initial distance into the dash pattern where drawing begins.

### Type

Number (double)

### TextPath.strokeJoin

textPath.strokeJoin

### Description

Sets the path's joint style.

### Type

StrokeJoin

### TextPath.strokeMiterLimit

textPath.strokeMiterLimit

### Description

For a default mitered stroke join, this value determines the threshold where Illustrator switches to the default beveled, squared-off join. At the default miter limit of 4, the switch from miter to bevel happens once the point length is four times the stroke weight. A value of 1 selects beveling.

Range: 1 to 500.

Default: 4

### Type

Number (double)

### TextPath.strokeOverprint

textPath.strokeOverprint

### Description

When true, artwork under a stroked object is overprinted.

### Type

Boolean

### TextPath.strokeWidth

textPath.strokeWidth

### Description

Sets stroke width.

### Type

Number (double)

### TextPath.top

textPath.top

### Description

Gives the item's top-edge position in points, measured from the page bottom.

### Type

Number (double)

### TextPath.typename

textPath.typename

### Description

Read-only. Provides the class name for the object being referenced.

### Type

String

### TextPath.width

textPath.width

### Description

Stores the item width.

### Type

Number (double)

## TextRange — Properties

### TextRange.characterAttributes

app.activeDocument.textFrames[index].textRange.characterAttributes

### Description

Provides character-level formatting attributes.

### Type

CharacterAttributes; read-only.

### TextRange.characterOffset

app.activeDocument.textFrames[index].textRange.characterOffset

### Description

Gives the first character's offset.

### Type

Number (long)

### TextRange.characters

app.activeDocument.textFrames[index].textRange.characters

### Description

Lists every character contained here.

### Type

Characters; read-only.

### TextRange.characterStyles

app.activeDocument.textFrames[index].textRange.characterStyles

### Description

Lists each referenced character style.

### Type

CharacterStyles; read-only.

### TextRange.contents

app.activeDocument.textFrames[index].textRange.contents

### Description

Contains the string content.

### Type

String

### TextRange.end

app.activeDocument.textFrames[index].textRange.end

### Description

Gives the ending index.

### Type

Int32

### TextRange.insertionPoints

app.activeDocument.textFrames[index].textRange.insertionPoints

### Description

Lists every insertion point contained here.

### Type

InsertionPoints; read-only.

### TextRange.kerning

app.activeDocument.textFrames[index].textRange.kerning

### Description

Controls spacing between two characters, measured in thousandths of an em. Use an integral value.

### Type

Number (long)

### TextRange.length

app.activeDocument.textFrames[index].textRange.length

### Description

Reports character count. Minimum: 0

### Type

Number (long)

### TextRange.lines

app.activeDocument.textFrames[index].textRange.lines

### Description

Lists every line contained here.

### Type

Lines; read-only.

### TextRange.paragraphAttributes

app.activeDocument.textFrames[index].textRange.paragraphAttributes

### Description

Provides paragraph-level formatting attributes.

### Type

ParagraphAttributes; read-only.

### TextRange.paragraphs

app.activeDocument.textFrames[index].textRange.paragraphs

### Description

Lists every paragraph contained here.

### Type

Paragraphs; read-only.

### TextRange.paragraphStyles

app.activeDocument.textFrames[index].textRange.paragraphStyles

### Description

Lists each referenced paragraph style.

### Type

ParagraphStyles; read-only.

### TextRange.parent

app.activeDocument.textFrames[index].textRange.parent

### Description

References the container that owns this object.

### Type

TextRange; read-only.

### TextRange.start

app.activeDocument.textFrames[index].textRange.start

### Description

Gives the starting index.

### Type

Int32

### TextRange.story

app.activeDocument.textFrames[index].textRange.story

### Description

References the story associated with this text range.

### Type

Story; read-only.

### TextRange.textRanges

app.activeDocument.textFrames[index].textRange.textRanges

### Description

Lists nested ranges contained here.

### Type

TextRanges; read-only.

### TextRange.textSelection

app.activeDocument.textFrames[index].textRange.textSelection

### Description

Contains the selected ranges within this object.

### Type

Array of TextRange; read-only.

### TextRange.typename

app.activeDocument.textFrames[index].textRange.typename

### Description

Provides the object's class name.

### Type

String; read-only.

### TextRange.words

app.activeDocument.textFrames[index].textRange.words

### Description

Lists every contained word.

### Type

Words; read-only.

## TextRanges — Properties

### TextRanges.length

textRanges.length

### Description

Count of entries held by this collection.

### Type

Number; read-only.

### TextRanges.parent

textRanges.parent

### Description

Container object that owns this object.

### Type

Object; read-only.

### TextRanges.typename

textRanges.typename

### Description

Class-name string for the referenced object.

### Type

String; read-only.

## TracingObject — Properties

### TracingObject.anchorCount

tracingObject.anchorCount

### Description

Anchor total reported for the trace output.

### Type

Number (long); read-only.

### TracingObject.areaCount

tracingObject.areaCount

### Description

Area total reported for the trace output.

### Type

Number (long); read-only.

### TracingObject.imageResolution

tracingObject.imageResolution

### Description

Source-image resolution in ppi.

### Type

Number (real); read-only.

### TracingObject.parent

tracingObject.parent

### Description

Container object that owns this object.

### Type

Object; read-only.

### TracingObject.pathCount

tracingObject.pathCount

### Description

Path total reported for the trace output.

### Type

Number (long); read-only.

### TracingObject.sourceArt

tracingObject.sourceArt

### Description

Source raster art used to produce the related plug-in group of vector art.

### Type

PlacedItem or RasterItem

### TracingObject.tracingOptions

tracingObject.tracingOptions

### Description

Settings applied while converting raster artwork into vector art.

### Type

TracingOptions

### TracingObject.typename

tracingObject.typename

### Description

Class-name string for this object.

### Type

String; read-only.

### TracingObject.usedColorCount

tracingObject.usedColorCount

### Description

Color count used by the trace output.

### Type

Number (long); read-only.

## TracingOptions — Properties

### TracingOptions.cornerAngle

image.tracing.tracingOptions.cornerAngle

### Description

Corner-detection sharpness, measured in degrees for a turn in the original image, for paths generated by tracing.

Range: 0 to 180

### Type

Number (double)

### TracingOptions.fills

image.tracing.tracingOptions.fills

### Description

When true, tracing creates fills; fills and strokes cannot both be false.

### Type

Boolean

### TracingOptions.ignoreWhite

image.tracing.tracingOptions.ignoreWhite

### Description

When true, white fill color is skipped.

### Type

Boolean

### TracingOptions.livePaintOutput

image.tracing.tracingOptions.livePaintOutput

### Description

When true, the output becomes LivePaint art. When false, classic art is produced instead.

Note

Set this value only while preparing for a later expand operation. Keeping a tracing on the artboard with this property set to true may cause unexpected application behavior.

### Type

Boolean

### TracingOptions.maxColors

image.tracing.tracingOptions.maxColors

### Description

Upper limit on colors available to automatic palette generation.

Only TracingModeType.TRACINGMODECOLOR and TracingModeType.TRACINGMODEGRAY modes use this value.

Range: 2 to 256

### Type

Number (long)

### TracingOptions.maxStrokeWeight

image.tracing.tracingOptions.maxStrokeWeight

### Description

Maximum stroke weight applied with strokes enabled.

Range: 0.01 to 100.0

### Type

Number (double)

### TracingOptions.minArea

image.tracing.tracingOptions.minArea

### Description

Minimum traced feature size, measured in square pixels.

For example, with 4, tracing includes a feature that is 2 pixels wide by 2 pixels high.

### Type

Number (long)

### TracingOptions.minStrokeLength

image.tracing.tracingOptions.minStrokeLength

### Description

Shortest original-image feature length, in pixels, eligible for stroking with strokes enabled.

Features below that size are left out.

Range: 0.0 to 200.0.

Default: 20.0

### Type

Number (double)

### TracingOptions.outputToSwatches

image.tracing.tracingOptions.outputToSwatches

### Description

When true, the trace output creates named colors (swatches) for every new color it generates.

Only TracingModeType.TRACINGMODECOLOR and TracingModeType.TRACINGMODEGRAY modes use this value.

### Type

Boolean

### TracingOptions.palette

image.tracing.tracingOptions.palette

### Description

Tracing uses the palette named here. Supply the empty string to choose the automatic palette.

Only TracingModeType.TRACINGMODECOLOR and TracingModeType.TRACINGMODEGRAY modes use this value.

### Type

String

### TracingOptions.parent

image.tracing.tracingOptions.parent

### Description

Container object that owns this object.

### Type

Object; read-only.

### TracingOptions.pathFitting

image.tracing.tracingOptions.pathFitting

### Description

Controls how far traced shapes may deviate from the source pixel shape. Smaller values make the path fit more tightly.

Larger values loosen the fit.

Range: 0.0 to 10.0

### Type

Number (double)

### TracingOptions.preprocessBlur

image.tracing.tracingOptions.preprocessBlur

### Description

Preprocessing blur amount, in pixels. This blur can suppress tiny artifacts and soften rough trace edges.

Range: 0.0 to 2.0

### Type

Number (double)

### TracingOptions.preset

image.tracing.tracingOptions.preset

### Description

Preset file name for this option set.

### Type

String; read-only.

### TracingOptions.resample

image.tracing.tracingOptions.resample

### Description

When true, tracing resamples; presets do not store this setting.

Placed or linked raster source art always forces this value to true.

### Type

Boolean

### TracingOptions.resampleResolution

image.tracing.tracingOptions.resampleResolution

### Description

Resampling resolution, expressed in pixels per inch (ppi).

Lower values speed up tracing; presets do not store this setting.

### Type

Number (double)

### TracingOptions.strokes

image.tracing.tracingOptions.strokes

### Description

When true, tracing creates strokes; fills and strokes cannot both be false.

Only TracingModeType.TRACINGMODEBLACKANDWHITE mode uses this value.

### Type

Boolean

### TracingOptions.threshold

image.tracing.tracingOptions.threshold

### Description

Black-and-white tracing threshold. Any pixel whose grayscale value exceeds this value becomes black.

Only TracingModeType.TRACINGMODEBLACKANDWHITE mode uses this value.

Range: 0 to 255

### Type

Number (long)

### TracingOptions.tracingMode

image.tracing.tracingOptions.tracingMode

### Description

Selected tracing color mode.

### Type

TracingModeType

### TracingOptions.typename

image.tracing.tracingOptions.typename

### Description

Read-only class-name string for this object.

### Type

String

### TracingOptions.viewRaster

image.tracing.tracingOptions.viewRaster

### Description

Raster-image preview view; presets do not store this setting.

### Type

ViewRasterType

### TracingOptions.viewVector

image.tracing.tracingOptions.viewVector

### Description

Vector-result preview view; presets do not store this setting.

### Type

ViewVectorType

## Variable — Properties

### Variable.kind

app.activeDocument.variables[index].kind

### Description

Type assigned to the variable.

### Type

VariableKind

### Variable.name

app.activeDocument.variables[index].name

### Description

Variable name.

### Type

string

### Variable.pageItems

app.activeDocument.variables[index].pageItems

### Description

Artwork linked to this Variable object.

### Type

PageItems; read-only

### Variable.parent

app.activeDocument.variables[index].parent

### Description

Read-only parent object for this Variable.

### Type

Object

### Variable.typename

app.activeDocument.variables[index].typename

### Description

Class-name string for the referenced object.

### Type

String; read-only

## Variables — Properties

### Variables.length

app.activeDocument.variables.length

### Description

Document variable count

### Type

Number; read-only.

### Variables.parent

app.activeDocument.variables.parent

### Description

Owner object for the variables collection

### Type

Object; read-only.

### Variables.typename

app.activeDocument.variables.typename

### Description

Class-name string for this reference.

### Type

String; read-only.

## View — Properties

### View.bounds

app.activeDocument.views[index].bounds

### Description

Against the current document bounds, reports the read-only view rectangle.

### Type

Array of 4 Numbers

### View.centerPoint

app.activeDocument.views[index].centerPoint

### Description

Against the current document bounds, reports the view center point.

### Type

Array of 2 Numbers

### View.parent

app.activeDocument.views[index].parent

### Description

Read-only document that owns the view.

### Type

Document

### View.screenMode

app.activeDocument.views[index].screenMode

### Description

Assigned display mode.

### Type

ScreenMode

### View.typename

app.activeDocument.views[index].typename

### Description

Read-only class-name string for this reference.

### Type

String

### View.zoom

app.activeDocument.views[index].zoom

### Description

View zoom factor; 100.0 corresponds to 100%.

### Type

Number (double)

## Views — Properties

### Views.length

app.activeDocument.views.length

### Description

Collection object count

### Type

Number; read-only.

### Views.parent

app.activeDocument.views.parent

### Description

Parent object for this Views object.

### Type

Object; read-only.

### Views.typename

app.activeDocument.views.typename

### Description

Class-name string for this reference.

### Type

String; read-only.

## Words — Properties

### Words.length

app.activeDocument.textFrames[index].words.length

### Description

How many objects the collection contains.

### Type

Number; read-only.

### Words.parent

app.activeDocument.textFrames[index].words.parent

### Description

The object that owns this object.

### Type

Object; read-only.

### Words.typename

app.activeDocument.textFrames[index].words.typename

### Description

Class name for the object being referenced.

### Type

String; read-only.
