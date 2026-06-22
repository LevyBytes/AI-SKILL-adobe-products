# Properties (part 7)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## PathItem — Properties

### PathItem.area

app.activeDocument.pathItems[index].area

### Description

Square-point measurement for the path.

A negative area indicates counterclockwise winding.

For self-intersecting paths, sub-areas may offset one another; the value can be zero even when the visible path appears to enclose space.

### Type

Number (double); read-only.

### PathItem.artworkKnockout

app.activeDocument.pathItems[index].artworkKnockout

### Description

Reports whether the object participates in knockout creation and which knockout type applies.

### Type

KnockoutState

### PathItem.blendingMode

app.activeDocument.pathItems[index].blendingMode

### Description

Blend mode applied while the object is composited.

### Type

BlendModes

### PathItem.clipping

app.activeDocument.pathItems[index].clipping

### Description

When true, Illustrator treats this path as the clipping path.

### Type

Boolean

### PathItem.closed

app.activeDocument.pathItems[index].closed

### Description

Closed-state flag for the path.

### Type

Boolean

### PathItem.controlBounds

app.activeDocument.pathItems[index].controlBounds

### Description

Bounds for the object including stroke width and control handles.

### Type

Array of 4 numbers; read-only.

### PathItem.editable

app.activeDocument.pathItems[index].editable

### Description

When true, the item can be edited.

### Type

Boolean; read-only.

### PathItem.evenodd

app.activeDocument.pathItems[index].evenodd

### Description

When true, Illustrator applies the even-odd rule to decide which regions are inside.

### Type

Boolean

### PathItem.fillColor

app.activeDocument.pathItems[index].fillColor

### Description

Color assigned to the path fill.

### Type

Color

### PathItem.filled

app.activeDocument.pathItems[index].filled

### Description

True indicates that the path has a fill.

### Type

Boolean

### PathItem.fillOverprint

app.activeDocument.pathItems[index].fillOverprint

### Description

When true, artwork below a filled object is overprinted.

### Type

Boolean

### PathItem.geometricBounds

app.activeDocument.pathItems[index].geometricBounds

### Description

Bounds calculated for geometry alone, excluding stroke thickness.

### Type

Array of 4 numbers; read-only.

### PathItem.guides

app.activeDocument.pathItems[index].guides

### Description

True marks this path for guide behavior.

### Type

Boolean

### PathItem.height

app.activeDocument.pathItems[index].height

### Description

Vertical extent for the item.

### Type

Number (double)

### PathItem.hidden

app.activeDocument.pathItems[index].hidden

### Description

The item is not displayed when true.

### Type

Boolean

### PathItem.isIsolated

app.activeDocument.pathItems[index].isIsolated

### Description

Isolation status is enabled when true.

### Type

Boolean

### PathItem.layer

app.activeDocument.pathItems[index].layer

### Description

Layer containing this item.

### Type

Layer; read-only.

### PathItem.left

app.activeDocument.pathItems[index].left

### Description

Left-side position for the item, in points, measured from the page's left edge.

### Type

Number (double)

### PathItem.length

app.activeDocument.pathItems[index].length

### Description

Path length expressed with point units.

### Type

Number (double)

### PathItem.locked

app.activeDocument.pathItems[index].locked

### Description

The item cannot be edited when true.

### Type

Boolean

### PathItem.name

app.activeDocument.pathItems[index].name

### Description

Name assigned to this item.

### Type

String

### PathItem.note

app.activeDocument.pathItems[index].note

### Description

Note text associated with this item.

### Type

String

### PathItem.opacity

app.activeDocument.pathItems[index].opacity

### Description

Opacity percentage setting.

Range: 0.0 to 100.0

### Type

Number (double)

### PathItem.parent

app.activeDocument.pathItems[index].parent

### Description

Owning parent.

### Type

Layer or GroupItem

### PathItem.pathPoints

app.activeDocument.pathItems[index].pathPoints

### Description

PathPoints collection held here.

### Type

PathPoints; read-only.

### PathItem.pixelAligned

app.activeDocument.pathItems[index].pixelAligned

### Description

true when this item aligns with pixel-grid coordinates.

### Type

Boolean

### PathItem.polarity

app.activeDocument.pathItems[index].polarity

### Description

Polarity setting for the path.

### Type

PolarityValues

### PathItem.position

app.activeDocument.pathItems[index].position

### Description

Top-left position of the pluginItem object, in points, written as [x, y]; stroke weight is excluded.

### Type

Array of 2 numbers; read-only.

### PathItem.resolution

app.activeDocument.pathItems[index].resolution

### Description

Path resolution, using dpi (dots-per-inch) units.

### Type

Number (double)

### PathItem.selected

app.activeDocument.pathItems[index].selected

### Description

True means the item currently has selection.

### Type

Boolean

### PathItem.selectedPathPoints

app.activeDocument.pathItems[index].selectedPathPoints

### Description

Selected PathPoint collection.

### Type

PathPoints; read-only.

### PathItem.sliced

app.activeDocument.pathItems[index].sliced

### Description

True sets slice status on the item.

Default: false

### Type

Boolean

### PathItem.strokeCap

app.activeDocument.pathItems[index].strokeCap

### Description

Line-cap style.

### Type

StrokeCap

### PathItem.strokeColor

app.activeDocument.pathItems[index].strokeColor

### Description

Stroke color applied to the path.

### Type

Color

### PathItem.stroked

app.activeDocument.pathItems[index].stroked

### Description

When true, Illustrator draws a stroke for the path.

### Type

Boolean

### PathItem.strokeDashes

app.activeDocument.pathItems[index].strokeDashes

### Description

Dash-length settings; assign an empty object, {}, to make the line solid.

### Type

Object

### PathItem.strokeDashOffset

app.activeDocument.pathItems[index].strokeDashOffset

### Description

Initial offset into the dash pattern where drawing begins.

### Type

Number (double)

### PathItem.strokeJoin

app.activeDocument.pathItems[index].strokeJoin

### Description

Joint style used by the path.

### Type

StrokeJoin

### PathItem.strokeMiterLimit

app.activeDocument.pathItems[index].strokeMiterLimit

### Description

For a mitered default stroke join, this property sets the threshold where Illustrator changes the join into a beveled, squared-off form. With the default miter limit of 4, the change from miter join to bevel join occurs when point length reaches four times the stroke weight. Set 1 to use beveling.

Range: 1 to 500.

Default: 4

### Type

Number (double)

### PathItem.strokeOverprint

app.activeDocument.pathItems[index].strokeOverprint

### Description

When true, artwork underneath a stroked object is overprinted.

### Type

Boolean

### PathItem.strokeWidth

app.activeDocument.pathItems[index].strokeWidth

### Description

Stroke width using point units.

### Type

Number (double)

### PathItem.tags

app.activeDocument.pathItems[index].tags

### Description

Tags collection attached here.

### Type

Tags; read-only.

### PathItem.top

app.activeDocument.pathItems[index].top

### Description

Top position of the item, in points, measured upward from the page bottom.

### Type

Number (double)

### PathItem.typename

app.activeDocument.pathItems[index].typename

### Description

Referenced object's class name.

### Type

String; read-only.

### PathItem.uRL

app.activeDocument.pathItems[index].uRL

### Description

Adobe URL tag value attached to the item.

### Type

String

### PathItem.visibilityVariable

app.activeDocument.pathItems[index].visibilityVariable

### Description

Linked visibility variable.

### Type

Variable

### PathItem.visibleBounds

app.activeDocument.pathItems[index].visibleBounds

### Description

Visible bounds for the item, with stroke width included.

### Type

Array of 4 numbers; read-only.

### PathItem.width

app.activeDocument.pathItems[index].width

### Description

Item width value.

### Type

Number (double)

### PathItem.wrapInside

app.activeDocument.pathItems[index].wrapInside

### Description

When true, the text frame object wraps within this object.

### Type

Boolean

### PathItem.wrapOffset

app.activeDocument.pathItems[index].wrapOffset

### Description

Offset used for text wrapping around the object.

### Type

Number (double)

### PathItem.wrapped

app.activeDocument.pathItems[index].wrapped

### Description

When true, this object affects wrapping for text frame objects; the text frame must sit above it.

### Type

Boolean

### PathItem.zOrderPosition

app.activeDocument.pathItems[index].zOrderPosition

### Description

Position of this item in the stacking order of its containing group or layer parent.

### Type

Number; read-only.

## PathItems — Properties

### PathItems.length

app.activeDocument.pathItems.length

### Description

Count of collection elements.

### Type

Number; read-only.

### PathItems.parent

app.activeDocument.pathItems.parent

### Description

Container object for this object.

### Type

Object; read-only.

### PathItems.typename

app.activeDocument.pathItems.typename

### Description

Object class name.

### Type

String; read-only.

## PathPoint — Properties

### PathPoint.anchor

app.activeDocument.pathItems[index].pathPoints[index].anchor

### Description

Anchor coordinates.

### Type

Array of 2 numbers

### PathPoint.leftDirection

app.activeDocument.pathItems[index].pathPoints[index].leftDirection

### Description

In-control handle coordinates.

### Type

Array of 2 numbers

### PathPoint.parent

app.activeDocument.pathItems[index].pathPoints[index].parent

### Description

Container PathItem.

### Type

PathItem; read-only.

### PathPoint.pointType

app.activeDocument.pathItems[index].pathPoints[index].pointType

### Description

Classification: curve or corner; any point may be treated as a corner.

Choosing corner constrains the left and right direction points to a straight line during UI edits.

### Type

PointType

### PathPoint.rightDirection

app.activeDocument.pathItems[index].pathPoints[index].rightDirection

### Description

Out-control handle coordinates.

### Type

Array of 2 numbers

### PathPoint.selected

app.activeDocument.pathItems[index].pathPoints[index].selected

### Description

Selection state for the point and, when applicable, selected components.

### Type

PathPointSelection

### PathPoint.typename

app.activeDocument.pathItems[index].pathPoints[index].typename

### Description

Class name for the referenced object.

### Type

String; read-only.

## PathPoints — Properties

### PathPoints.length

app.activeDocument.pathItems[index].pathPoints.length

### Description

Count of collection elements.

### Type

Number; read-only.

### PathPoints.parent

app.activeDocument.pathItems[index].pathPoints.parent

### Description

Container object for this object.

### Type

Object; read-only.

### PathPoints.typename

app.activeDocument.pathItems[index].pathPoints.typename

### Description

Object class name.

### Type

String; read-only.

## Pattern — Properties

### Pattern.name

app.activeDocument.patterns[index].name

### Description

Name assigned to the pattern.

### Type

String

### Pattern.parent

app.activeDocument.patterns[index].parent

### Description

Owning Document for the pattern.

### Type

Document; read-only.

### Pattern.typename

app.activeDocument.patterns[index].typename

### Description

Object class name reported for this instance.

### Type

String; read-only.

## Patterns — Properties

### Patterns.length

app.activeDocument.patterns.length

### Description

Collection item count.

### Type

Number; read-only.

### Patterns.parent

app.activeDocument.patterns.parent

### Description

Container object for this object.

### Type

Object; read-only.

### Patterns.typename

app.activeDocument.patterns.typename

### Description

Object class name reported by this object.

### Type

String; read-only.

## PatternColor — Properties

### PatternColor.matrix

patternColor.matrix

### Description

Extra transformation created by editing the path.

### Type

Matrix

### PatternColor.pattern

patternColor.pattern

### Description

Reference to the pattern object that supplies the pattern for this color definition.

### Type

Pattern

### PatternColor.reflect

patternColor.reflect

### Description

When true, Illustrator reflects the prototype before it fills.

Default: false

### Type

Boolean

### PatternColor.reflectAngle

patternColor.reflectAngle

### Description

Reflection axis value, measured in points.

Default: 0.0

### Type

Number (double)

### PatternColor.rotation

patternColor.rotation

### Description

Radians used to rotate the prototype pattern ahead of filling.

Default: 0.0

### Type

Number (double)

### PatternColor.scaleFactor

patternColor.scaleFactor

### Description

Scaling fraction for the prototype pattern before fill application, stored as a point with horizontal and vertical scaling percentages.

### Type

Array of 2 numbers

### PatternColor.shearAngle

patternColor.shearAngle

### Description

Radian angle used for the shear slant.

Default: 0.0

### Type

Number (double)

### PatternColor.shearAxis

patternColor.shearAxis

### Description

Axis, in points, relative to which shearing is applied.

Default: 0.0

### Type

Number (double)

### PatternColor.shiftAngle

patternColor.shiftAngle

### Description

Radian angle used to translate the unscaled prototype pattern prior to filling.

Default: 0.0

### Type

Number (double)

### PatternColor.shiftDistance

patternColor.shiftDistance

### Description

Point distance used to translate the unscaled prototype pattern prior to filling.

Default: 0.0

### Type

Number (double)

### PatternColor.typename

patternColor.typename

### Description

Class name reported for the referenced object.

### Type

String; read-only.

## PDFFileOptions — Properties

### PDFFileOptions.pageToOpen

app.preferences.PDFFileOptions.pageToOpen

### Description

Page number selected for opening a multipage document.

Default: 1

### Type

Number (long)

### PDFFileOptions.parent

app.preferences.PDFFileOptions.parent

### Description

Container object for this object.

### Type

Object; read-only.

### PDFFileOptions.pDFCropToBox

app.preferences.PDFFileOptions.pDFCropToBox

### Description

Box choice used while placing a multipage document.

Default: PDFBoxType.PDFMediaBox

### Type

PDFBoxType

### PDFFileOptions.typename

app.preferences.PDFFileOptions.typename

### Description

Class name reported by this object.

### Type

String; read-only.

## PDFSaveOptions — Properties

### PDFSaveOptions.acrobatLayers

pDFSaveOptions.acrobatLayers

### Description

Optional. Builds Acrobat® layers from top-level layers. Limited to Acrobat 6.

Default: false

### Type

Boolean

### PDFSaveOptions.artboardRange

pDFSaveOptions.artboardRange

### Description

Optional. For multi-asset extraction, this value selects the artboard range. Use an empty string to extract all the artboards.

Default: empty string

### Type

String

### PDFSaveOptions.bleedLink

pDFSaveOptions.bleedLink

### Description

Optional. Links the 4 bleed values together.

Default: true

### Type

Boolean

### PDFSaveOptions.bleedOffsetRect

pDFSaveOptions.bleedOffsetRect

### Description

Rectangle defining the bleed offset.

### Type

Array of 4 numbers

### PDFSaveOptions.colorBars

pDFSaveOptions.colorBars

### Description

Optional. Adds color bars.

Default: false

### Type

Boolean

### PDFSaveOptions.colorCompression

pDFSaveOptions.colorCompression

### Description

Optional. Sets the color bitmap compression type.

Default: CompressionQuality.None

### Type

CompressionQuality

### PDFSaveOptions.colorConversionID

pDFSaveOptions.colorConversionID

### Description

Optional. Chooses how PDF color conversion is handled.

Default: ColorConversion.None

### Type

ColorConversion

### PDFSaveOptions.colorDestinationID

pDFSaveOptions.colorDestinationID

### Description

Optional. Sets the destination used by color conversion.

Default: ColorDestination.None

### Type

ColorDestination

### PDFSaveOptions.colorDownsampling

pDFSaveOptions.colorDownsampling

### Description

Optional. Color downsampling resolution in dots per inch (dpi); 0 disables downsampling.

Default: 150.0

### Type

Number (double)

### PDFSaveOptions.colorDownsamplingImageThreshold

pDFSaveOptions.colorDownsamplingImageThreshold

### Description

Optional. Images above this resolution are downsampled.

Default: 225.0

### Type

Number (double)

### PDFSaveOptions.colorDownsamplingMethod

pDFSaveOptions.colorDownsamplingMethod

### Description

Optional. Chooses the resampling method for color bitmap images.

Default: DownsampleMethod.NODOWNSAMPLE

### Type

DownsampleMethod

### PDFSaveOptions.colorProfileID

pDFSaveOptions.colorProfileID

### Description

Optional. Chooses the color profile to embed.

Default: ColorProfile.None

### Type

ColorProfile

### PDFSaveOptions.colorTileSize

pDFSaveOptions.colorTileSize

### Description

Optional. Tile size for JPEG2000 compression.

Default: 256

### Type

Number (long)

### PDFSaveOptions.compatibility

pDFSaveOptions.compatibility

### Description

Optional. Acrobat file-format version created for the PDF.

Default: PDFCompatibility.Acrobat5

### Type

PDFCompatibility

### PDFSaveOptions.compressArt

pDFSaveOptions.compressArt

### Description

Optional. When true, compresses line art and text.

Default: true

### Type

Boolean

### PDFSaveOptions.documentPassword

pDFSaveOptions.documentPassword

### Description

Optional. Password string used for document opening.

Default: no string

### Type

String

### PDFSaveOptions.enableAccess

pDFSaveOptions.enableAccess

### Description

Optional. When true, enables 128-bit access.

Default: true

### Type

Boolean

### PDFSaveOptions.enableCopy

pDFSaveOptions.enableCopy

### Description

Optional. When true, enables 128-bit text copying.

Default: true

### Type

Boolean

### PDFSaveOptions.enableCopyAccess

pDFSaveOptions.enableCopyAccess

### Description

Optional. When true, allows copying and access under 40-bit security.

Default: true

### Type

Boolean

### PDFSaveOptions.enablePlainText

pDFSaveOptions.enablePlainText

### Description

Optional. When true, enables 128-bit plaintext metadata. Works only with Acrobat 6.

Default: false

### Type

Boolean

### PDFSaveOptions.flattenerOptions

pDFSaveOptions.flattenerOptions

### Description

Optional. Print flattener option settings.

### Type

PrintFlattenerOptions

### PDFSaveOptions.flattenerPreset

pDFSaveOptions.flattenerPreset

### Description

Optional. Name of the transparency flattener preset.

### Type

String.

### PDFSaveOptions.fontSubsetThreshold

pDFSaveOptions.fontSubsetThreshold

### Description

Optional. When document usage includes less than this percentage of a font's characters, include a subset of that font. Applies to Illustrator 9 file format.

Range: 0.0 to 100.0.

Default: 100.0

### Type

Number (double)

### PDFSaveOptions.generateThumbnails

pDFSaveOptions.generateThumbnails

### Description

Optional. When true, saved files include thumbnail images.

Default: true

### Type

Boolean

### PDFSaveOptions.grayscaleCompression

pDFSaveOptions.grayscaleCompression

### Description

Optional. Sets grayscale bitmap compression quality.

Default: CompressionQuality.None

### Type

CompressionQuality

### PDFSaveOptions.grayscaleDownsampling

pDFSaveOptions.grayscaleDownsampling

### Description

Optional. Downsampling resolution in dots per inch (dpi); 0 disables downsampling.

Default: 150.0

### Type

Number (double)

### PDFSaveOptions.grayscaleDownsamplingImageThreshold

pDFSaveOptions.grayscaleDownsamplingImageThreshold

### Description

Optional. Images above this resolution are downsampled.

Default: 225.0

### Type

Number (double)

### PDFSaveOptions.grayscaleDownsamplingMethod

pDFSaveOptions.grayscaleDownsamplingMethod

### Description

Optional. Chooses the resampling method for grayscale bitmap images.

Default: DownSampleMethod.NODOWNSAMPLE

### Type

DownsampleMethod

### PDFSaveOptions.grayscaleTileSize

pDFSaveOptions.grayscaleTileSize

### Description

Optional. Tile size for JPEG2000 compression.

Default: 256

### Type

Number (long)

### PDFSaveOptions.monochromeCompression

pDFSaveOptions.monochromeCompression

### Description

Optional. Sets the monochrome bitmap compression type.

Default: MonochromeCompression.None

### Type

MonochromeCompression

### PDFSaveOptions.monochromeDownsampling

pDFSaveOptions.monochromeDownsampling

### Description

Optional. Downsampling resolution in dots per inch (dpi); 0 disables downsampling.

Default: 300

### Type

Number (double)

### PDFSaveOptions.monochromeDownsamplingImageThreshold

pDFSaveOptions.monochromeDownsamplingImageThreshold

### Description

Optional. Images above this resolution are downsampled.

Default: 450.0

### Type

Number (double)

### PDFSaveOptions.monochromeDownsamplingMethod

pDFSaveOptions.monochromeDownsamplingMethod

### Description

Optional. Chooses the resampling method for monochrome bitmap images.

Default: DownSampleMethod.NODOWNSAMPLE

### Type

DownsampleMethod

### PDFSaveOptions.offset

pDFSaveOptions.offset

### Description

Optional. Point offset used with the custom paper setting.

Default: 0.0

### Type

Number (double)

### PDFSaveOptions.optimization

pDFSaveOptions.optimization

### Description

Optional. When true, optimizes the PDF document for fast web display.

Default: false

### Type

Boolean

### PDFSaveOptions.outputCondition

pDFSaveOptions.outputCondition

### Description
