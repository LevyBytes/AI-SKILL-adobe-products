# Properties (part 2)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Document — Properties

### Document.activeDataset

app.activeDocument.activeDataset

### Description

Refers to the dataset currently open.

### Type

Dataset

### Document.activeLayer

app.activeDocument.activeLayer

### Description

Refers to the document layer that is active.

### Type

Layer

### Document.activeView

app.activeDocument.activeView

### Description

Returns the document view now in use.

### Type

View; read-only.

### Document.artboards

app.activeDocument.artboards

### Description

Provides the document's complete artboard collection.

### Type

Artboards; read-only.

### Document.brushes

app.activeDocument.brushes

### Description

Provides the brush collection stored with the document.

### Type

Brushes; read-only.

### Document.characterStyles

app.activeDocument.characterStyles

### Description

Returns this document's character-style collection.

### Type

CharacterStyles; read-only.

### Document.compoundPathItems

app.activeDocument.compoundPathItems

### Description

Provides this document's stored compound path items.

### Type

CompoundPathItems; read-only.

### Document.cropBox

app.activeDocument.cropBox

### Description

Defines the output cropping-box boundary, or returns null when no value is assigned.

### Type

Array of 4 numbers.

### Document.cropStyle

app.activeDocument.cropStyle

### Description

Specifies the document cropping-box style.

### Type

CropOptions

### Document.dataSets

app.activeDocument.dataSets

### Description

Provides the datasets stored with the document.

### Type

Datasets; read-only.

### Document.defaultFillColor

app.activeDocument.defaultFillColor

### Description

Sets the fill color applied to new paths when defaultFilled is true.

### Type

Color

### Document.defaultFilled

app.activeDocument.defaultFilled

### Description

When true, newly created paths receive a fill.

### Type

Boolean.

### Document.defaultFillOverprint

app.activeDocument.defaultFillOverprint

### Description

When true, filled objects overprint underlying artwork by default.

### Type

Boolean.

### Document.defaultStrokeCap

app.activeDocument.defaultStrokeCap

### Description

Chooses the default line-cap style for paths created later.

### Type

StrokeCap

### Document.defaultStrokeColor

app.activeDocument.defaultStrokeColor

### Description

Sets the stroke color applied to new paths when default stroked is true.

### Type

Color

### Document.defaultStroked

app.activeDocument.defaultStroked

### Description

When true, newly created paths receive a stroke.

### Type

Boolean.

### Document.defaultStrokeDashes

app.activeDocument.defaultStrokeDashes

### Description

Defines the default dash and gap lengths for dashed strokes, beginning with the first dash, then the first gap, and continuing in sequence. Use an empty object, {}, to make the line solid.

### Type

Object.

### Document.defaultStrokeDashOffset

app.activeDocument.defaultStrokeDashOffset

### Description

Sets where new paths begin within the dash pattern.

### Type

Number (double).

### Document.defaultStrokeJoin

app.activeDocument.defaultStrokeJoin

### Description

Chooses the default join style for new paths.

### Type

StrokeJoin

### Document.defaultStrokeMiterLimit

app.activeDocument.defaultStrokeMiterLimit

### Description

For a default stroke join set to mitered, this value controls the point at which Illustrator changes the join to beveled (squared-off) by default.

A default miter limit of 4 switches the join from miter to bevel once the point length becomes four times the stroke weight.

Range: 1 to 500; a value of 1 specifies a bevel join.

### Type

Number (double).

### Document.defaultStrokeOverprint

app.activeDocument.defaultStrokeOverprint

### Description

When true, stroked objects overprint underlying artwork by default.

### Type

Boolean.

### Document.defaultStrokeWidth

app.activeDocument.defaultStrokeWidth

### Description

Sets the default stroke width for new paths.

### Type

Number (double).

### Document.documentColorSpace

app.activeDocument.documentColorSpace

### Description

Specifies the document color system.

### Type

DocumentColorSpace

### Document.fullName

app.activeDocument.fullName

### Description

Returns the document's associated file, including the file's full path.

### Type

File object; read-only.

### Document.geometricBounds

app.activeDocument.geometricBounds

### Description

Reports illustration bounds with object stroke widths excluded.

### Type

Array of 4 numbers; read-only.

### Document.gradients

app.activeDocument.gradients

### Description

Provides the gradients stored with the document.

### Type

Gradients; read-only.

### Document.graphicStyles

app.activeDocument.graphicStyles

### Description

Returns the graphic styles defined for this document.

### Type

GraphicStyles; read-only.

### Document.graphItems

app.activeDocument.graphItems

### Description

Provides the document's graph art items.

### Type

GraphItems; read-only.

### Document.groupItems

app.activeDocument.groupItems

### Description

Provides this document's stored group items.

### Type

GroupItems; read-only.

### Document.height

app.activeDocument.height

### Description

Returns the document height.

### Type

Number (double); read-only.

### Document.inkList

app.activeDocument.inkList

### Description

Returns this document's ink list.

### Type

Object; read-only.

### Document.kinsokuSet

app.activeDocument.kinsokuSet

### Description

Lists the Kinsoku characters that Japanese text may not place at a line start or line end.

### Type

Object; read-only.

### Document.layers

app.activeDocument.layers

### Description

Provides this document's stored layers.

### Type

Layers; read-only.

### Document.legacyTextItems

app.activeDocument.legacyTextItems

### Description

Provides this document's stored legacy text items.

### Type

LegacyTextItems; read-only.

### Document.meshItems

app.activeDocument.meshItems

### Description

Provides this document's stored mesh art items.

### Type

MeshItems; read-only.

### Document.mojikumiSet

app.activeDocument.mojikumiSet

### Description

Names the predefined Mojikumi sets that define spacing for Japanese text layout and composition.

### Type

Object; read-only.

### Document.name

app.activeDocument.name

### Description

Returns only the document name, not its full file path.

### Type

String; read-only.

### Document.nonNativeItems

app.activeDocument.nonNativeItems

### Description

Provides this document's non-native art items.

### Type

NonNativeItems; read-only.

### Document.outputResolution

app.activeDocument.outputResolution

### Description

Reports output resolution, expressed in dots per inch (dpi).

### Type

Number (double); read-only.

### Document.pageItems

app.activeDocument.pageItems

### Description

Provides this document's page items across all art item classes.

### Type

PageItems; read-only.

### Document.pageOrigin

app.activeDocument.pageOrigin

### Description

Stores the page zero-point without margins, measured against the page's overall dimensions.

### Type

Array of 2 numbers.

### Document.paragraphStyles

app.activeDocument.paragraphStyles

### Description

Returns this document's paragraph-style collection.

### Type

ParagraphStyles; read-only.

### Document.parent

app.activeDocument.parent

### Description

Refers to the Application that owns this document.

### Type

Application; read-only.

### Document.path

app.activeDocument.path

### Description

Returns the document's associated file, including the file's full path.

### Type

File object; read-only.

### Document.pathItems

app.activeDocument.pathItems

### Description

Provides this document's stored path items.

### Type

PathItems; read-only.

### Document.patterns

app.activeDocument.patterns

### Description

Provides this document's stored patterns.

### Type

Patterns; read-only.

### Document.placedItems

app.activeDocument.placedItems

### Description

Provides this document's stored placed items.

### Type

PlacedItems; read-only.

### Document.pluginItems

app.activeDocument.pluginItems

### Description

Provides this document's stored plug-in items.

### Type

PluginItems; read-only.

### Document.printTiles

app.activeDocument.printTiles

### Description

When true, the document prints in tiles.

### Type

Boolean; read-only.

### Document.rasterEffectSettings

app.activeDocument.rasterEffectSettings

### Description

Returns settings for document raster effects.

### Type

RasterEffectOptions; read-only.

### Document.rasterItems

app.activeDocument.rasterItems

### Description

Provides this document's stored raster items.

### Type

RasterItems; read-only.

### Document.rulerOrigin

app.activeDocument.rulerOrigin

### Description

Stores the ruler zero-point relative to the document's lower-left corner.

### Type

Array of 2 numbers.

### Document.rulerUnits

app.activeDocument.rulerUnits

### Description

Sets the rulers' default measurement units for the document.

### Type

RulerUnits; read-only.

### Document.saved

app.activeDocument.saved

### Description

When true, the document is unchanged since its most recent save.

### Type

Boolean.

### Document.selection

app.activeDocument.selection

### Description

Returns references to objects in the current document selection, or null when the selection is empty.

With an active insertion point inside a selected text art item's contents, the return value is a reference to that insertion point. When characters are selected inside a text art item's contents, Illustrator returns a reference to that text range instead.

### Type

Array of objects.

### Document.showPlacedImages

app.activeDocument.showPlacedImages

### Description

When true, placed images are shown.

### Type

Boolean; read-only.

### Document.splitLongPaths

app.activeDocument.splitLongPaths

### Description

When true, Illustrator splits long paths during printing.

### Type

Boolean; read-only.

### Document.spots

app.activeDocument.spots

### Description

Provides this document's stored spot colors.

### Type

Spots; read-only.

### Document.stationery

app.activeDocument.stationery

### Description

When true, the file is treated as stationery.

### Type

Boolean; read-only.

### Document.stories

app.activeDocument.stories

### Description

Provides this document's story items.

### Type

Stories; read-only.

### Document.swatches

app.activeDocument.swatches

### Description

Provides this document's stored swatches.

### Type

Swatches; read-only.

### Document.swatchGroups

app.activeDocument.swatchGroups

### Description

Provides this document's stored swatch groups.

### Type

SwatchGroups; read-only.

### Document.symbolItems

app.activeDocument.symbolItems

### Description

Provides this document's art items that link to symbols.

### Type

SymbolItems; read-only.

### Document.symbols

app.activeDocument.symbols

### Description

Provides this document's stored symbols.

### Type

Symbols; read-only.

### Document.tags

app.activeDocument.tags

### Description

Provides this document's stored tags.

### Type

Tags; read-only.

### Document.textFrames

app.activeDocument.textFrames

### Description

Provides this document's stored text frames.

### Type

TextFrameItems; read-only.

### Document.tileFullPages

app.activeDocument.tileFullPages

### Description

When true, print output tiles whole pages for this document.

### Type

Boolean; read-only.

### Document.typename

app.activeDocument.typename

### Description

Gives the referenced object's class name.

### Type

String; read-only.

### Document.useDefaultScreen

app.activeDocument.useDefaultScreen

### Description

When true, printing uses the printer default screen.

### Type

Boolean; read-only.

### Document.variables

app.activeDocument.variables

### Description

Provides variables defined for this document.

### Type

Variables; read-only.

### Document.variablesLocked

app.activeDocument.variablesLocked

### Description

When true, variables are locked.

### Type

Boolean.

### Document.views

app.activeDocument.views

### Description

Provides views stored for this document.

### Type

Views; read-only.

### Document.visibleBounds

app.activeDocument.visibleBounds

### Description

Reports visible document bounds with stroke widths from illustration objects included.

### Type

Array of 4 numbers; read-only.

### Document.width

app.activeDocument.width

### Description

Returns document width.

### Type

Number (double); read-only.

### Document.XMPString

app.activeDocument.XMPString

### Description

Returns the XMP metadata packet attached to this document.

### Type

String.

## DocumentPreset — Properties

### DocumentPreset.artboardLayout

documentPreset.artboardLayout

### Description

Sets artboard arrangement for newly created documents.

Default: GridByRow.

### Type

DocumentArtboardLayout

### DocumentPreset.artboardRowsOrCols

documentPreset.artboardRowsOrCols

### Description

Sets the artboard row count for row layouts or column count for column layouts.

Range: 1 to (numArtboards - 1) or 1 for single row or column layouts.

Default: 1

### Type

Number (long).

### DocumentPreset.artboardSpacing

documentPreset.artboardSpacing

### Description

Sets artboard spacing for newly created documents.

Default: 20.0

### Type

Number (double).

### DocumentPreset.colorMode

documentPreset.colorMode

### Description

Sets color space for newly created documents.

### Type

DocumentColorSpace

### DocumentPreset.documentBleedLink

documentPreset.documentBleedLink

### Description

Controls whether document bleed values are linked.

### Type

Boolean.

### DocumentPreset.documentBleedOffsetRect

documentPreset.documentBleedOffsetRect

### Description

Defines the document bleed offset rectangle.

### Type

Rectangle.

### DocumentPreset.height

documentPreset.height

### Description

Sets the document height in points.

Default: 792.0

### Type

Number (double).

### DocumentPreset.numArtboards

documentPreset.numArtboards

### Description

Sets the artboard count for newly created documents.

Range: 1 to 100.

Default: 1.

### Type

Number (long).

### DocumentPreset.previewMode

documentPreset.previewMode

### Description

Sets preview mode for newly created documents.

### Type

DocumentPreviewMode

### DocumentPreset.rasterResolution

documentPreset.rasterResolution

### Description

Sets new-document raster resolution.

### Type

DocumentRasterResolution

### DocumentPreset.title

documentPreset.title

### Description

Sets the document title.

### Type

String.

### DocumentPreset.transparencyGrid

documentPreset.transparencyGrid

### Description

Sets transparency grid color for newly created documents.

### Type

DocumentTransparencyGrid

### DocumentPreset.typename

documentPreset.typename

### Description

Gives the referenced object's class name.

### Type

String; read-only.

### DocumentPreset.units

documentPreset.units

### Description

Sets ruler units for newly created documents.

### Type

RulerUnits

### DocumentPreset.width

documentPreset.width

### Description

Sets the document width in points.

Default: 612.0

### Type

Number (double).

## Documents — Properties

### Documents.length

app.documents.length

### Description

Reports how many objects the collection contains.

### Type

Number; read-only.

### Documents.parent

app.documents.parent

### Description

Returns this object's parent.

### Type

Object; read-only.

### Documents.typename

app.documents.typename

### Description

Gives the referenced object's class name.

### Type

String; read-only.

## EPSSaveOptions — Properties

### EPSSaveOptions.artboardRange

epsSaveOptions.artboardRange

### Description

When saveMultipleArtboards is true, this value controls multi-asset extraction by specifying the artboard range. An empty string extracts every artboard.

Default: empty string

### Type

String.

### EPSSaveOptions.cmykPostScript

epsSaveOptions.cmykPostScript

### Description

When true, CMYK PostScript is used.

### Type

Boolean.

### EPSSaveOptions.compatibility

epsSaveOptions.compatibility

### Description

Chooses the EPS file format version for saving.

Default: Compatibility.ILLUSTRATOR1719.

### Type

Compatibility

### EPSSaveOptions.compatibleGradientPrinting

epsSaveOptions.compatibleGradientPrinting

### Description

When true, Illustrator creates a raster item from the gradient or gradient mesh so PostScript Level 2 printers can output the object.

Default: false.

### Type

Boolean.

### EPSSaveOptions.embedAllFonts

epsSaveOptions.embedAllFonts

### Description

When true, the saved output embeds every document font for version 7 or later files.

Default: false.

### Type

Boolean.

### EPSSaveOptions.embedLinkedFiles

epsSaveOptions.embedLinkedFiles

### Description

When true, linked image files are included in the saved document.

### Type

Boolean.

### EPSSaveOptions.flattenOuput

epsSaveOptions.flattenOuput

### Description

Controls transparency flattening for file formats earlier than Illustrator 9.

### Type

OutputFlattening

### EPSSaveOptions.includeDocumentThumbnails

epsSaveOptions.includeDocumentThumbnails

### Description

When true, the EPS artwork includes a thumbnail image.

### Type

Boolean.

### EPSSaveOptions.overprint

epsSaveOptions.overprint

### Description

Controls whether overprint is preserved, discarded, or simulated.

Default: PDFOverprint.PRESERVEPDFOVERPRINT.

### Type

PDFOverprint

### EPSSaveOptions.postScript

epsSaveOptions.postScript

### Description

Selects the PostScript Language Level; Level 1 is valid for file format version 8 or earlier.

Default: EPSPostScriptLevelEnum.LEVEL2.

### Type

EPSPostScriptLevelEnum

### EPSSaveOptions.preview

epsSaveOptions.preview

### Description

Sets the EPS preview image format.

### Type

EPSPreview

### EPSSaveOptions.saveMultipleArtboards

epsSaveOptions.saveMultipleArtboards

### Description

When true, Illustrator saves either all artboards or a specified artboard range.

Default: false.

### Type

Boolean.

### EPSSaveOptions.typename

epsSaveOptions.typename

### Description

Gives the referenced object's class name.

### Type

String; read-only.

## ExportOptionsFlash — Properties

### ExportOptionsFlash.artClipping

exportOptionsFlash.artClipping

### Description

Controls the clipping bounds Illustrator uses for exported artwork.

Default: ArtClippingOption.OUTPUTARTBOUNDS.

### Type

ArtClippingOption

### ExportOptionsFlash.artboardRange

exportOptionsFlash.artboardRange

### Description

When saveMultipleArtboards is true, this value tells multi-asset extraction which artboards to export. Use an empty string to export every artboard.

Default: empty String.

### Type

String.

### ExportOptionsFlash.backgroundColor

exportOptionsFlash.backgroundColor

### Description

Sets the background color for Flash frames in the export.

### Type

RGBColor

### ExportOptionsFlash.backgroundLayers

exportOptionsFlash.backgroundLayers

### Description

Names the layers that become the export's static Flash-frame background.

### Type

Array of Layers

### ExportOptionsFlash.blendAnimation

exportOptionsFlash.blendAnimation

### Description

Chooses how blended objects are animated.

Default: BlendAnimationType.NOBLENDANIMATION.

### Type

BlendAnimationType

### ExportOptionsFlash.compressed

exportOptionsFlash.compressed

### Description

When true, Illustrator writes the exported file with compression enabled.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.convertTextToOutlines

exportOptionsFlash.convertTextToOutlines

### Description

When true, Illustrator turns every text object into vector paths so type keeps the same look across Flash players.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.curveQuality

exportOptionsFlash.curveQuality

### Description

Controls how much curve detail is written.

Default: 7.

### Type

Number (long).

### ExportOptionsFlash.exportAllSymbols

exportOptionsFlash.exportAllSymbols

### Description

When true, Illustrator exports every symbol currently available in the palette.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.exportStyle

exportOptionsFlash.exportStyle

### Description

Selects the Flash structure used for the exported data.

Default: FlashExportStyle.ASFLASHFILE.

### Type

FlashExportStyle

### ExportOptionsFlash.exportVersion

exportOptionsFlash.exportVersion

### Description

Sets the SWF version written to disk.

Default: FlashExportVersion.FlashVersion9.

### Type

FlashExportVersion

### ExportOptionsFlash.frameRate

exportOptionsFlash.frameRate

### Description

Sets playback speed in fps.

Range: 0.01-120.0.

Default: 12.0.

### Type

Number (double).

### ExportOptionsFlash.ignoreTextKerning

exportOptionsFlash.ignoreTextKerning

### Description

When true, text-object kerning data is omitted.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.imageFormat

exportOptionsFlash.imageFormat

### Description

Chooses the compression format for images inside the exported Flash file.

Default: FlashImageFormat.LOSSLESS.

### Type

FlashImageFormat

### ExportOptionsFlash.includeMetadata

exportOptionsFlash.includeMetadata

### Description

When true, the SWF includes a minimal set of XMP metadata.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.jpegMethod

exportOptionsFlash.jpegMethod

### Description

Chooses which JPEG method is used.

Default: FlashJPEGMethod.Standard.

### Type

FlashJPEGMethod

### ExportOptionsFlash.jpegQuality

exportOptionsFlash.jpegQuality

### Description

JPEG compression quality level. Range 1 to 10.

Default: 3.

### Type

Number (long).

### ExportOptionsFlash.layerOrder

exportOptionsFlash.layerOrder

### Description

Determines the sequence for converting layers into Flash frames.

Default: LayerOrderType.BOTTOMUP.

### Type

LayerOrderType

### ExportOptionsFlash.looping

exportOptionsFlash.looping

### Description

When true, the Flash file loops during playback.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.playbackAccess

exportOptionsFlash.playbackAccess

### Description

Sets the permission tier assigned to the SWF export.

Default: FlashPlaybackSecurity.PlaybackLocal.

### Type

FlashPlaybackSecurity

### ExportOptionsFlash.preserveAppearance

exportOptionsFlash.preserveAppearance

### Description

When true, Illustrator prioritizes appearance preservation. When false, it favors editability.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.readOnly

exportOptionsFlash.readOnly

### Description

When true, Illustrator writes the export as a read-only file.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.replacing

exportOptionsFlash.replacing

### Description

Determines whether an existing same-named file may be overwritten.

Default: SaveOptions.PROMPTTOSAVECHANGES.

### Type

SaveOptions

### ExportOptionsFlash.resolution

exportOptionsFlash.resolution

### Description

Pixel density for the export, measured as ppi.

Range: 72-2400.

Default: 72.

### Type

Number (double).

### ExportOptionsFlash.saveMultipleArtboards

exportOptionsFlash.saveMultipleArtboards

### Description

When true, Illustrator saves every artboard or the specified artboard range.

Default: false.

### Type

Boolean.

### ExportOptionsFlash.typename

exportOptionsFlash.typename

### Description

Reports the class name for the referenced object.

### Type

String; read-only.
