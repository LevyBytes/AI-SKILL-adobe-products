# Properties (part 9)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## PrinterInfo — Properties

### PrinterInfo.binaryPrintingSupport

printerInfo.binaryPrintingSupport

### Description

When true, binary printing is supported by the printer.

### Type

Boolean

### PrinterInfo.colorSupport

printerInfo.colorSupport

### Description

Printer capability for color output.

### Type

PrinterColorMode

### PrinterInfo.customPaperSupport

printerInfo.customPaperSupport

### Description

When true, the printer accepts custom paper sizes.

### Type

Boolean

### PrinterInfo.customPaperTransverseSupport

printerInfo.customPaperTransverseSupport

### Description

When true, custom paper transverse support is available on the printer.

### Type

Boolean

### PrinterInfo.deviceResolution

printerInfo.deviceResolution

### Description

Printer default resolution.

### Type

Number (double)

### PrinterInfo.inRIPSeparationSupport

printerInfo.inRIPSeparationSupport

### Description

When true, InRIP color separation is available for the printer.

### Type

Boolean

### PrinterInfo.maxDeviceResolution

printerInfo.maxDeviceResolution

### Description

Maximum device resolution for the printer.

### Type

Number (double)

### PrinterInfo.maxPaperHeight

printerInfo.maxPaperHeight

### Description

Maximum height allowed for custom paper.

### Type

Number (double)

### PrinterInfo.maxPaperHeightOffset

printerInfo.maxPaperHeightOffset

### Description

Maximum height offset allowed for custom paper.

### Type

Number (double)

### PrinterInfo.maxPaperWidth

printerInfo.maxPaperWidth

### Description

Maximum width allowed for custom paper.

### Type

Number (double)

### PrinterInfo.maxPaperWidthOffset

printerInfo.maxPaperWidthOffset

### Description

Maximum width offset allowed for custom paper.

### Type

Number (double)

### PrinterInfo.minPaperHeight

printerInfo.minPaperHeight

### Description

Minimum height allowed for custom paper.

### Type

Number (double)

### PrinterInfo.minPaperHeightOffset

printerInfo.minPaperHeightOffset

### Description

Minimum height offset allowed for custom paper.

### Type

Number (double)

### PrinterInfo.minPaperWidth

printerInfo.minPaperWidth

### Description

Minimum width allowed for custom paper.

### Type

Number (double)

### PrinterInfo.minPaperWidthOffset

printerInfo.minPaperWidthOffset

### Description

Minimum width offset allowed for custom paper.

### Type

Number (double)

### PrinterInfo.paperSizes

printerInfo.paperSizes

### Description

Supported paper sizes list.

### Type

Array of Paper

### PrinterInfo.postScriptLevel

printerInfo.postScriptLevel

### Description

PostScript Language level used by the printer.

### Type

PrinterPostScriptLevelEnum

### PrinterInfo.printerType

printerInfo.printerType

### Description

Printer type value.

### Type

PrinterTypeEnum

### PrinterInfo.typename

printerInfo.typename

### Description

Class name for this object.

### Type

String; read-only.

## PrintFlattenerOptions — Properties

printFlattenerOptions.clipComplexRegions

### Description

When true, complex regions are clipped.

Default: false

### Type

Boolean

### PrintFlattenerOptions.convertStrokesToOutlines

printFlattenerOptions.convertStrokesToOutlines

### Description

When true, every stroke is converted into an outline.

Default: false

### Type

Boolean

### PrintFlattenerOptions.convertTextToOutlines

printFlattenerOptions.convertTextToOutlines

### Description

When true, all text becomes vector paths while preserving the type's visual appearance.

Default: false

### Type

Boolean

### PrintFlattenerOptions.flatteningBalance

printFlattenerOptions.flatteningBalance

### Description

Balance value used for flattening.

Range: 0.0 to 100.0.

Default: 100.0

### Type

Number (long)

### PrintFlattenerOptions.gradientResolution

printFlattenerOptions.gradientResolution

### Description

Gradient detail specified as a dpi value.

Range: 1.0 to 9600.0.

Default: 300.0

### Type

Number (double)

### PrintFlattenerOptions.overprint

printFlattenerOptions.overprint

### Description

Controls whether overprinting is preserved, removed, or simulated.

Default: PDFOverprint.PRESERVEPDFOVERPRINT

### Type

PDFOverprint

### PrintFlattenerOptions.rasterizationResolution

printFlattenerOptions.rasterizationResolution

### Description

Rasterization detail specified as a dpi value.

Range: 1.0 to 9600.0.

Default: 300.0

### Type

Number (double)

### PrintFlattenerOptions.typename

printFlattenerOptions.typename

### Description

Class name for this object.

### Type

String; read-only.

## PrintFontOptions — Properties

### PrintFontOptions.downloadFonts

printFontOptions.downloadFonts

### Description

Selects how fonts are downloaded for printing.

Default: PrintFontDownloadMode.DOWNLOADSUBSET

### Type

PrintFontDownloadMode

### PrintFontOptions.fontSubstitution

printFontOptions.fontSubstitution

### Description

Chooses the policy Illustrator uses when substituting fonts.

Default: FontSubstitutionPolicy.SUBSTITUTEOBLIQUE

### Type

FontSubstitutionPolicy

### PrintFontOptions.typename

printFontOptions.typename

### Description

Reports this object's class name.

### Type

String; read-only.

## PrintJobOptions — Properties

### PrintJobOptions.artboardRange

printJobOptions.artboardRange

### Description

Specifies which artboards print when printAllArtboards is false.

Default: 1-

### Type

String

### PrintJobOptions.bitmapResolution

printJobOptions.bitmapResolution

### Description

Sets the bitmap detail level. Minimum: 0.0.

Default: 0.0

### Type

Number (double)

### PrintJobOptions.collate

printJobOptions.collate

### Description

When true, printed pages are collated.

Default: false

### Type

Boolean

### PrintJobOptions.copies

printJobOptions.copies

### Description

Controls how many copies are printed. Minimum: 1.

Default: 1

### Type

Number (long)

### PrintJobOptions.designation

printJobOptions.designation

### Description

Chooses the layers or objects included in output.

Default: PrintArtworkDesignation.VISIBLEPRINTABLELAYERS

### Type

PrintArtworkDesignation

### PrintJobOptions.file

printJobOptions.file

### Description

Provides the destination file for printing.

### Type

File object

### PrintJobOptions.name

printJobOptions.name

### Description

Sets the name assigned to the print job.

### Type

String

### PrintJobOptions.printAllArtboards

printJobOptions.printAllArtboards

### Description

Indicates whether Illustrator prints every artboard.

Default: true

### Type

Boolean

### PrintJobOptions.printArea

printJobOptions.printArea

### Description

Selects the bounds used for printing.

Default: PrintingBounds.ARTBOARDBOUNDS

### Type

PrintingBounds

### PrintJobOptions.printAsBitmap

printJobOptions.printAsBitmap

### Description

When true, output is printed as a bitmap.

Default: false

### Type

Boolean

### PrintJobOptions.reversePages

printJobOptions.reversePages

### Description

When true, pages print from last to first.

Default: false

### Type

Boolean

### PrintJobOptions.typename

printJobOptions.typename

### Description

Read-only. Reports this object's class name.

### Type

String

## PrintOptions — Properties

### PrintOptions.colorManagementOptions

printOptions.colorManagementOptions

### Description

Holds the color management settings used for printing.

### Type

PrintColorManagementOptions

### PrintOptions.colorSeparationOptions

printOptions.colorSeparationOptions

### Description

Holds the color separation settings used for printing.

### Type

PrintColorSeparationOptions

### PrintOptions.coordinateOptions

printOptions.coordinateOptions

### Description

Holds the coordinate settings used for printing.

### Type

PrintCoordinateOptions

### PrintOptions.flattenerOptions

printOptions.flattenerOptions

### Description

Holds the flattener settings used for printing.

### Type

PrintFlattenerOptions

### PrintOptions.flattenerPreset

printOptions.flattenerPreset

### Description

Names the transparency flattener preset.

### Type

String

### PrintOptions.fontOptions

printOptions.fontOptions

### Description

Holds the font settings used for printing.

### Type

PrintFontOptions

### PrintOptions.jobOptions

printOptions.jobOptions

### Description

Holds the job-level settings used for printing.

### Type

PrintJobOptions

### PrintOptions.pageMarksOptions

printOptions.pageMarksOptions

### Description

Holds the page mark settings used for printing.

### Type

PrintPageMarksOptions

### PrintOptions.paperOptions

printOptions.paperOptions

### Description

Holds settings for the output paper.

### Type

PrintPaperOptions

### PrintOptions.postScriptOptions

printOptions.postScriptOptions

### Description

Holds the PostScript settings used for printing.

### Type

PrintPostScriptOptions

### PrintOptions.PPDName

printOptions.PPDName

### Description

Stores the PPD name.

### Type

String

### PrintOptions.printerName

printOptions.printerName

### Description

Stores the printer name.

### Type

String

### PrintOptions.printPreset

printOptions.printPreset

### Description

Identifies the print style.

### Type

String

## PrintPageMarksOptions — Properties

### PrintPageMarksOptions.bleedOffsetRect

printPageMarksOptions.bleedOffsetRect

### Description

Stores bleed offsets as a rectangle.

### Type

Array of 4 numbers

### PrintPageMarksOptions.colorBars

printPageMarksOptions.colorBars

### Description

When true, color bars are included in printed output.

Default: false

### Type

Boolean

### PrintPageMarksOptions.marksOffsetRect

printPageMarksOptions.marksOffsetRect

### Description

Stores the offset rectangle for page marks.

### Type

Array of 4 numbers

### PrintPageMarksOptions.pageInfoMarks

printPageMarksOptions.pageInfoMarks

### Description

When true, page information marks are printed.

Default: false

### Type

Boolean

### PrintPageMarksOptions.pageMarksType

printPageMarksOptions.pageMarksType

### Description

Selects the style used for page marks.

Default: PageMarksType.Roman

### Type

PageMarksTypes

### PrintPageMarksOptions.registrationMarks

printPageMarksOptions.registrationMarks

### Description

When true, registration marks are printed.

Default: false

### Type

Boolean

### PrintPageMarksOptions.trimMarks

printPageMarksOptions.trimMarks

### Description

When true, trim marks are printed.

Default: false

### Type

Boolean

### PrintPageMarksOptions.trimMarksWeight

printPageMarksOptions.trimMarksWeight

### Description

Sets trim mark stroke weight. Minimum: 0.0.

Default: 0.125

### Type

Number (double)

### PrintPageMarksOptions.typename

printPageMarksOptions.typename

### Description

Reports this object's class name.

### Type

String; read-only.

## PrintPaperOptions — Properties

### PrintPaperOptions.height

printPaperOptions.height

### Description

Sets the custom paper height in points.

Default: 0.0

### Type

Number (double)

### PrintPaperOptions.name

printPaperOptions.name

### Description

Stores the paper's name.

### Type

String

### PrintPaperOptions.offset

printPaperOptions.offset

### Description

Sets the custom paper offset in points.

Default: 0.0

### Type

Number (double)

### PrintPaperOptions.transverse

printPaperOptions.transverse

### Description

When true, the custom paper artwork is transversed by rotating it 90 degrees.

Default: false

### Type

Boolean

### PrintPaperOptions.typename

printPaperOptions.typename

### Description

Reports this object's class name.

### Type

String; read-only.

### PrintPaperOptions.width

printPaperOptions.width

### Description

Sets the custom paper width in points.

Default: 0.0

### Type

Number (double)

## PrintPostScriptOptions — Properties

### PrintPostScriptOptions.binaryPrinting

printPostScriptOptions.binaryPrinting

### Description

When true, printing uses binary mode.

Default: false

### Type

Boolean

### PrintPostScriptOptions.compatibleShading

printPostScriptOptions.compatibleShading

### Description

When true, gradient and gradient mesh printing remains compatible with PostScript Level 1.

Default: false

### Type

Boolean

### PrintPostScriptOptions.forceContinuousTone

printPostScriptOptions.forceContinuousTone

### Description

When true, continuous tone output is forced.

Default: false

### Type

Boolean

### PrintPostScriptOptions.imageCompression

printPostScriptOptions.imageCompression

### Description

Selects which image compression is applied.

Default: PostScriptImageCompressionType.IMAGECOMPRESSIONNONE

### Type

PostScriptImageCompressionType

### PrintPostScriptOptions.negativePrinting

printPostScriptOptions.negativePrinting

### Description

When true, output prints in negative mode.

Default: false

### Type

Boolean

### PrintPostScriptOptions.postScriptLevel

printPostScriptOptions.postScriptLevel

### Description

Chooses which PostScript level is used.

Default: PrinterPostScriptLevelEnum.LEVEL2

### Type

PrinterPostScriptLevelEnum

### PrintPostScriptOptions.shadingResolution

printPostScriptOptions.shadingResolution

### Description

Controls detail for shaded output.

Range: 1.0 to 9600.0

Default: 300.0

### Type

Number (double)

### PrintPostScriptOptions.typename

printPostScriptOptions.typename

### Description

Read-only. Reports this object's class name.

### Type

String

## RasterEffectOptions — Properties

### RasterEffectOptions.antiAliasing

rasterEffectOptions.antiAliasing

### Description

When true, the image is antialiased.

Default: false

### Type

Boolean

### RasterEffectOptions.clippingMask

rasterEffectOptions.clippingMask

### Description

When true, Illustrator creates a clipping mask for the image.

Default: false

### Type

Boolean

### RasterEffectOptions.colorModel

rasterEffectOptions.colorModel

### Description

Selects the color model used for rasterization.

Default: RasterizationColorModel.DEFAULTCOLORMODEL

### Type

RasterizationColorModel

### RasterEffectOptions.convertSpotColors

rasterEffectOptions.convertSpotColors

### Description

When true, image output converts all spot colors to process colors.

Default: false

### Type

Boolean

### RasterEffectOptions.padding

rasterEffectOptions.padding

### Description

Adds a specified amount of white space, in points, around the rasterized object.

Default: .0

### Type

Number (double)

### RasterEffectOptions.resolution

rasterEffectOptions.resolution

### Description

Controls rasterization density, measured in dots-per-inch units.

Range: 72.0 to 2400.0.

Default: 300.0

### Type

Number (double)

### RasterEffectOptions.transparency

rasterEffectOptions.transparency

### Description

When true, the image uses transparency.

Default: false

### Type

Boolean

## RasterItem — Properties

### RasterItem.artworkKnockout

app.activeDocument.rasterItems[index].artworkKnockout

### Description

Reports whether the object participates in knockout creation and identifies the knockout kind when applicable.

### Type

KnockoutState

### RasterItem.bitsPerChannel

app.activeDocument.rasterItems[index].bitsPerChannel

### Description

Per-channel bit depth.

### Type

Number (long); read-only.

### RasterItem.blendingMode

app.activeDocument.rasterItems[index].blendingMode

### Description

Blend mode applied as the object is composited.

### Type

BlendModes

### RasterItem.boundingBox

app.activeDocument.rasterItems[index].boundingBox

### Description

Dimensions for placed artwork before transforms are considered.

### Type

Array of 4 numbers

### RasterItem.channels

app.activeDocument.rasterItems[index].channels

### Description

Channel count for the raster art.

### Type

Number (long); read-only.

### RasterItem.colorants

app.activeDocument.rasterItems[index].colorants

### Description

Colorant names present in the raster artwork.

### Type

Array of string; read-only.

### RasterItem.colorizedGrayscale

app.activeDocument.rasterItems[index].colorizedGrayscale

### Description

True for grayscale raster artwork that has been colorized.

### Type

Boolean; read-only.

### RasterItem.contentVariable

app.activeDocument.rasterItems[index].contentVariable

### Description

Variable linked to the item's content.

### Type

Variable

### RasterItem.controlBounds

app.activeDocument.rasterItems[index].controlBounds

### Description

Object boundary values with controls and stroke width included.

### Type

Array of 4 numbers; read-only.

### RasterItem.editable

app.activeDocument.rasterItems[index].editable

### Description

True when this item can be edited.

### Type

Boolean; read-only.

### RasterItem.embedded

app.activeDocument.rasterItems[index].embedded

### Description

True when the raster art item resides embedded within the illustration.

### Type

Boolean

### RasterItem.file

app.activeDocument.rasterItems[index].file

### Description

Artwork's backing file.

### Type

File object; read-only.

### RasterItem.geometricBounds

app.activeDocument.rasterItems[index].geometricBounds

### Description

Object boundary values before stroke width is considered.

### Type

Array of 4 numbers; read-only.

### RasterItem.height

app.activeDocument.rasterItems[index].height

### Description

Height measurement for this entry.

### Type

Number (double)

### RasterItem.hidden

app.activeDocument.rasterItems[index].hidden

### Description

A true value hides this item.

### Type

Boolean

### RasterItem.imageColorSpace

app.activeDocument.rasterItems[index].imageColorSpace

### Description

Color-space setting for this bitmap artwork.

### Type

ImageColorSpace; read-only.

### RasterItem.isIsolated

app.activeDocument.rasterItems[index].isIsolated

### Description

True when isolation mode applies to the object.

### Type

Boolean

### RasterItem.layer

app.activeDocument.rasterItems[index].layer

### Description

Layer that owns this item.

### Type

Layer; read-only.

### RasterItem.left

app.activeDocument.rasterItems[index].left

### Description

Left-edge coordinate for the item, in points, measured from the page's left side.

### Type

Number (double)

### RasterItem.locked

app.activeDocument.rasterItems[index].locked

### Description

A true value locks this item.

### Type

Boolean

### RasterItem.matrix

app.activeDocument.rasterItems[index].matrix

### Description

Matrix used for the artwork's placement transform.

### Type

Matrix

### RasterItem.name

app.activeDocument.rasterItems[index].name

### Description

Item name.

### Type

String

### RasterItem.note

app.activeDocument.rasterItems[index].note

### Description

Note text stored on the item.

### Type

String

### RasterItem.opacity

app.activeDocument.rasterItems[index].opacity

### Description

Object opacity.

Range: 0.0 to 100.0

### Type

Number (double)

### RasterItem.overprint

app.activeDocument.rasterItems[index].overprint

### Description

True when the raster artwork overprints.

### Type

Boolean

### RasterItem.parent

app.activeDocument.rasterItems[index].parent

### Description

Object that contains this one.

### Type

Layer or GroupItem

### RasterItem.position

app.activeDocument.rasterItems[index].position

### Description

Top-left rasterItem coordinate in [x, y] form, measured in points; stroke weight is omitted.

### Type

Array of 2 numbers; read-only.

### RasterItem.selected

app.activeDocument.rasterItems[index].selected

### Description

True for an item currently selected.

### Type

Boolean

### RasterItem.sliced

app.activeDocument.rasterItems[index].sliced

### Description

True when slicing is enabled for the item.

Default: false

### Type

Boolean

### RasterItem.status

app.activeDocument.rasterItems[index].status

### Description

Linked-image status.

### Type

RasterLinkState

### RasterItem.tags

app.activeDocument.rasterItems[index].tags

### Description

Associated tag collection.

### Type

Tags; read-only.

### RasterItem.top

app.activeDocument.rasterItems[index].top

### Description

Top-edge coordinate for the item, in points, measured upward from the page bottom.

### Type

Number (double)

### RasterItem.transparent

app.activeDocument.rasterItems[index].transparent

### Description

True when the raster artwork has transparency.

### Type

Boolean; read-only.

### RasterItem.typename

app.activeDocument.rasterItems[index].typename

### Description

Referenced object's class name.

### Type

String; read-only.

### RasterItem.uRL

app.activeDocument.rasterItems[index].uRL

### Description

Adobe URL tag value stored on the item.

### Type

String

### RasterItem.visibilityVariable

app.activeDocument.rasterItems[index].visibilityVariable

### Description

Variable linked to the item's visibility.

### Type

Variable

### RasterItem.visibleBounds

app.activeDocument.rasterItems[index].visibleBounds

### Description

Visible item boundary values with stroke width included.

### Type

Array of 4 numbers; read-only.

### RasterItem.width

app.activeDocument.rasterItems[index].width

### Description

Item width.

### Type

Number (double)

### RasterItem.wrapInside

app.activeDocument.rasterItems[index].wrapInside

### Description

True for text wrapping routed within the object.

### Type

Boolean

### RasterItem.wrapOffset

app.activeDocument.rasterItems[index].wrapOffset

### Description

Offset used while wrapping text around this object.

### Type

Number (double)

### RasterItem.wrapped

### Description

True to route text frame wrapping around this object; the text frame has to be higher in the stack.

### Type

Boolean

### RasterItem.zOrderPosition

app.activeDocument.rasterItems[index].zOrderPosition

### Description

Position this item occupies in the stacking order of its containing group or layer (parent).

### Type

Number; read-only.

## RasterItems — Properties

### RasterItems.length

app.activeDocument.rasterItems.length

### Description

Element count in this collection.

### Type

Number; read-only.

### RasterItems.parent

app.activeDocument.rasterItems.parent

### Description

Container object for this collection.

### Type

Object; read-only.

### RasterItems.typename

app.activeDocument.rasterItems.typename

### Description

Object class name.

### Type

String; read-only.

## RasterizeOptions — Properties

### RasterizeOptions.antiAliasingMethod

rasterizeOptions.antiAliasingMethod

### Description

Antialiasing method category to use.

Default: AntiAliasingMethod.ARTOPTIMIZED

### Type

AntiAliasingMethod

### RasterizeOptions.backgroundBlack

rasterizeOptions.backgroundBlack

### Description

True rasterizes against a black background rather than white.

Default: false

### Type

Boolean

### RasterizeOptions.clippingMask

rasterizeOptions.clippingMask

### Description

True creates a clipping mask for the image.

Default: false

### Type

Boolean

### RasterizeOptions.colorModel

rasterizeOptions.colorModel

### Description

Color model used for rasterization.

Default: RasterizationColorModel.DEFAULTCOLORMODEL

### Type

RasterizationColorModel

### RasterizeOptions.convertSpotColors

rasterizeOptions.convertSpotColors

### Description

True changes image spot colors into process colors.

Default: false

### Type

Boolean

### RasterizeOptions.convertTextToOutlines

rasterizeOptions.convertTextToOutlines

### Description

True outlines every text object before rasterizing.

Default: false

### Type

Boolean

### RasterizeOptions.includeLayers

rasterizeOptions.includeLayers

### Description

True folds layer attributes, such as opacity and blend mode, into the resulting image.

Default: false

### Type

Boolean

### RasterizeOptions.padding

rasterizeOptions.padding

### Description

Padding, measured in points, placed around the object as rasterization runs.

Default: .0

### Type

Number (double)

### RasterizeOptions.resolution

rasterizeOptions.resolution

### Description

Output density for rasterization, in dpi.

Range: 72.0 to 2400.0.

Default: 300.0

### Type

Number (double)

### RasterizeOptions.transparency

rasterizeOptions.transparency

### Description

True makes the image use transparency.

Default: false

### Type

Boolean

## RGBColor — Properties

### RGBColor.blue

rgbColor.blue

### Description

Blue component.

Range: 0.0 to 255.0.

### Type

Number (double).

### RGBColor.green

rgbColor.green

### Description

Green component.

Range: 0.0 to 255.0.

### Type

Number (double).

### RGBColor.red

rgbColor.red

### Description

Red component.

Range: 0.0 to 255.0.

### Type

Number (double).

### RGBColor.typename

rgbColor.typename

### Description

Referenced object's class name.

### Type

String; read-only.
