# Properties (part 3)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## ExportOptionsGIF — Properties

### ExportOptionsGIF.antiAliasing

exportOptionsGIF.antiAliasing

### Description

When true, Illustrator anti-aliases the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsGIF.artBoardClipping

exportOptionsGIF.artBoardClipping

### Description

When true, Illustrator clips the export at the art-board bounds.

Default: false.

### Type

Boolean.

### ExportOptionsGIF.colorCount

exportOptionsGIF.colorCount

### Description

Number of entries in the color table written for the export.

Range: 2 to 256.

Default: 128.

### Type

Number (long).

### ExportOptionsGIF.colorDither

exportOptionsGIF.colorDither

### Description

Selects the dithering method applied to export colors.

Default: ColorDitherMethod.DIFFUSION.

### Type

ColorDitherMethod

### ExportOptionsGIF.colorReduction

exportOptionsGIF.colorReduction

### Description

Selects the method for reducing the exported image's color count.

Default: ColorReductionMethod.SELECTIVE.

### Type

ColorReductionMethod

### ExportOptionsGIF.ditherPercent

exportOptionsGIF.ditherPercent

### Description

Sets the dither amount for exported-image colors; 100.0 represents 100%.

### Type

Number (long).

### ExportOptionsGIF.horizontalScale

exportOptionsGIF.horizontalScale

### Description

Horizontal scale applied to the exported image; 100.0 represents 100%.

Default: 100.0.

### Type

Number (double).

### ExportOptionsGIF.infoLossPercent

exportOptionsGIF.infoLossPercent

### Description

Permitted information-loss level during compression; 100.0 represents 100%.

### Type

Number (long).

### ExportOptionsGIF.interlaced

exportOptionsGIF.interlaced

### Description

When true, Illustrator writes the exported image as interlaced.

Default: false.

### Type

Boolean.

### ExportOptionsGIF.matte

exportOptionsGIF.matte

### Description

When true, Illustrator fills the art board matte with a color.

Default: true.

### Type

Boolean.

### ExportOptionsGIF.matteColor

exportOptionsGIF.matteColor

### Description

Color used for the art board matte.

Default: WHITE.

### Type

RGBColor

### ExportOptionsGIF.saveAsHTML

exportOptionsGIF.saveAsHTML

### Description

When true, Illustrator also writes an accompanying HTML file for the exported image.

Default: false.

### Type

Boolean.

### ExportOptionsGIF.transparency

exportOptionsGIF.transparency

### Description

When true, the exported image retains transparency.

Default: true.

### Type

Boolean.

### ExportOptionsGIF.typename

exportOptionsGIF.typename

### Description

Reports the class name for the referenced object.

### Type

String; read-only.

### ExportOptionsGIF.verticalScale

exportOptionsGIF.verticalScale

### Description

Vertical scale applied to the exported image; 100.0 represents 100%.

Default: 100.0.

### Type

Number (double).

### ExportOptionsGIF.webSnap

exportOptionsGIF.webSnap

### Description

Sets how strongly the color table shifts toward the web palette; 100 is the maximum.

Default: 0.

### Type

Number (long).

## ExportOptionsJPEG — Properties

### ExportOptionsJPEG.antiAliasing

exportOptionsJPEG.antiAliasing

### Description

When true, Illustrator anti-aliases the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsJPEG.artBoardClipping

exportOptionsJPEG.artBoardClipping

### Description

When true, Illustrator clips the export at the art-board bounds.

### Type

Boolean.

### ExportOptionsJPEG.blurAmount

exportOptionsJPEG.blurAmount

### Description

Blur strength applied during image export.

Range: 0.0 to 2.0.

Default: 0.0.

### Type

Number (double).

### ExportOptionsJPEG.horizontalScale

exportOptionsJPEG.horizontalScale

### Description

Horizontal scale applied to the exported image; 100.0 represents 100%.

Default: 100.0.

### Type

Number (double).

### ExportOptionsJPEG.matte

exportOptionsJPEG.matte

### Description

When true, Illustrator fills the art board matte with a color.

Default: true.

### Type

Boolean.

### ExportOptionsJPEG.matteColor

exportOptionsJPEG.matteColor

### Description

Color used for the art board matte.

Default: white.

### Type

RGBColor

### ExportOptionsJPEG.optimization

exportOptionsJPEG.optimization

### Description

When true, Illustrator optimizes the exported image for web viewing.

Default: true.

### Type

Boolean.

### ExportOptionsJPEG.qualitySetting

exportOptionsJPEG.qualitySetting

### Description

Quality value used for image export.

Range: 0 to 100.

Default: 30.

### Type

Number (long).

### ExportOptionsJPEG.saveAsHTML

exportOptionsJPEG.saveAsHTML

### Description

When true, Illustrator also writes an accompanying HTML file for the exported image.

Default: false.

### Type

Boolean.

### ExportOptionsJPEG.typename

exportOptionsJPEG.typename

### Description

Reports the class name for the referenced object.

### Type

String; read-only.

### ExportOptionsJPEG.verticalScale

exportOptionsJPEG.verticalScale

### Description

Vertical scale used for image export.

Range: 0.0 to 776.19.

Default: 100.0.

### Type

Number (double)

## ExportOptionsPhotoshop — Properties

### ExportOptionsPhotoshop.antiAliasing

exportOptionsPhotoshop.antiAliasing

### Description

When true, Illustrator anti-aliases the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsPhotoshop.artboardRange

exportOptionsPhotoshop.artboardRange

### Description

With saveMultipleArtboards set to true, this string chooses the artboard range for multi-asset extraction. An empty string exports all artboards.

Default: empty String.

### Type

String.

### ExportOptionsPhotoshop.editableText

exportOptionsPhotoshop.editableText

### Description

When true, Illustrator writes text objects into editable text layers.

Default: true.

### Type

Boolean.

### ExportOptionsPhotoshop.embedICCProfile

exportOptionsPhotoshop.embedICCProfile

### Description

When true, Illustrator embeds an ICC profile inside the file being exported.

Default: false.

### Type

Boolean.

### ExportOptionsPhotoshop.imageColorSpace

exportOptionsPhotoshop.imageColorSpace

### Description

Color space selected for the file being exported.

Default: ImageColorSpace.RGB.

### Type

ImageColorSpace

### ExportOptionsPhotoshop.maximumEditability

exportOptionsPhotoshop.maximumEditability

### Description

During export, keep as much original document structure as possible.

Default: true.

### Type

Boolean.

### ExportOptionsPhotoshop.resolution

exportOptionsPhotoshop.resolution

### Description

Export resolution, measured as dots per inch (dpi).

Range: 72.0 to 2400.0.

Default: 150.0.

### Type

Number (double).

### ExportOptionsPhotoshop.saveMultipleArtboards

exportOptionsPhotoshop.saveMultipleArtboards

### Description

When true, Illustrator saves every artboard or the specified artboard range.

Default: false.

### Type

Boolean.

### ExportOptionsPhotoshop.typename

exportOptionsPhotoshop.typename

### Description

Reports the class name for the referenced object.

### Type

String; read-only.

### ExportOptionsPhotoshop.warnings

exportOptionsPhotoshop.warnings

### Description

When true, export-setting conflicts display a warning dialog.

Default: true.

### Type

Boolean.

### ExportOptionsPhotoshop.writeLayers

exportOptionsPhotoshop.writeLayers

### Description

When true, Illustrator includes document layers in the exported document.

Default: true.

### Type

Boolean.

## ExportOptionsPNG24 — Properties

### ExportOptionsPNG24.antiAliasing

exportOptionsPNG24.antiAliasing

### Description

When true, Illustrator anti-aliases the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsPNG24.artBoardClipping

exportOptionsPNG24.artBoardClipping

### Description

When true, Illustrator clips the export at the art-board bounds.

Default: false.

### Type

Boolean.

### ExportOptionsPNG24.horizontalScale

exportOptionsPNG24.horizontalScale

### Description

Horizontal scale used for image export; 100.0 represents 100%.

Default: 100.0.

### Type

Number (double).

### ExportOptionsPNG24.matte

exportOptionsPNG24.matte

### Description

When true, Illustrator mattes the art board with a color.

Default: true.

### Type

Boolean.

### ExportOptionsPNG24.matteColor

exportOptionsPNG24.matteColor

### Description

Color used for the art board matte.

Default: white.

### Type

RGBColor

### ExportOptionsPNG24.saveAsHTML

exportOptionsPNG24.saveAsHTML

### Description

When true, Illustrator also writes an accompanying HTML file for the exported image.

Default: false.

### Type

Boolean.

### ExportOptionsPNG24.transparency

exportOptionsPNG24.transparency

### Description

When true, Illustrator uses transparency in the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsPNG24.typename

exportOptionsPNG24.typename

### Description

Reports the class name for the referenced object.

### Type

String; read-only.

### ExportOptionsPNG24.verticalScale

exportOptionsPNG24.verticalScale

### Description

Vertical scaling used for image export, where 100.0 equals 100.

Default: 100.0.

### Type

Number (double).

## ExportOptionsPNG8 — Properties

### ExportOptionsPNG8.antiAliasing

exportOptionsPNG8.antiAliasing

### Description

When true, Illustrator anti-aliases the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsPNG8.artBoardClipping

exportOptionsPNG8.artBoardClipping

### Description

When true, Illustrator clips the export at the art-board bounds.

Default: false.

### Type

Boolean.

### ExportOptionsPNG8.colorCount

exportOptionsPNG8.colorCount

### Description

Number of entries in the color table written for the export.

Range: 2 to 256.

Default: 128.

### Type

Number (long).

### ExportOptionsPNG8.colorDither

exportOptionsPNG8.colorDither

### Description

Selects the dithering method applied to export colors.

Default: ColorDitherMethod.Diffusion.

### Type

ColorDitherMethod

### ExportOptionsPNG8.colorReduction

exportOptionsPNG8.colorReduction

### Description

Selects the method for reducing the exported image's color count.

Default: ColorReductionMethod.SELECTIVE.

### Type

ColorReductionMethod

### ExportOptionsPNG8.ditherPercent

exportOptionsPNG8.ditherPercent

### Description

Sets the color dither amount as a percentage; 100.0 represents 100%.

Range: 0 to 100.

Default: 88.

### Type

Number (long).

### ExportOptionsPNG8.horizontalScale

exportOptionsPNG8.horizontalScale

### Description

Horizontal scale used for image export; 100.0 represents 100%.

Default: 100.0.

### Type

Number (double).

### ExportOptionsPNG8.interlaced

exportOptionsPNG8.interlaced

### Description

When true, Illustrator writes the exported image as interlaced.

Default: false.

### Type

Boolean.

### ExportOptionsPNG8.matte

exportOptionsPNG8.matte

### Description

When true, Illustrator fills the art board matte with a color.

Default: true.

### Type

Boolean.

### ExportOptionsPNG8.matteColor

exportOptionsPNG8.matteColor

### Description

Color used for the art board matte.

Default: white.

### Type

RGBColor

### ExportOptionsPNG8.saveAsHTML

exportOptionsPNG8.saveAsHTML

### Description

When true, Illustrator also writes an accompanying HTML file for the exported image.

Default: false.

### Type

Boolean.

### ExportOptionsPNG8.transparency

exportOptionsPNG8.transparency

### Description

When true, Illustrator uses transparency in the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsPNG8.typename

exportOptionsPNG8.typename

### Description

Reports the class name for the referenced object.

### Type

String; read-only.

### ExportOptionsPNG8.verticalScale

exportOptionsPNG8.verticalScale

### Description

Vertical scaling used for image export, where 100.0 equals 100.

Default: 100.0.

### Type

Number (double).

### ExportOptionsPNG8.webSnap

exportOptionsPNG8.webSnap

### Description

Sets how far the color table shifts toward the web palette; 100 is the maximum.

Default: 0.

### Type

Number (long).

## ExportOptionsSVG — Properties

### ExportOptionsSVG.artboardRange

exportOptionsSVG.artboardRange

### Description

When saveMultipleArtboards is true, this value selects which artboards are written during export. Supply a comma-delimited list of artboard names., or use the empty string to write every artboard.

Default: empty String.

### Type

String.

### ExportOptionsSVG.compressed

exportOptionsSVG.compressed

### Description

When true, compression is applied to the exported file.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.coordinatePrecision

exportOptionsSVG.coordinatePrecision

### Description

Controls decimal places used by element coordinates.

Range: 1 to 7.

Default: 3.

### Type

Number (long)

### ExportOptionsSVG.cssProperties

exportOptionsSVG.cssProperties

### Description

Sets how document CSS properties are represented in the output.

Default: SVGCSSPropertyLocation.STYLEATTRIBUTES.

### Type

SVGCSSPropertyLocation

### ExportOptionsSVG.documentEncoding

exportOptionsSVG.documentEncoding

### Description

Chooses the encoding used for text from the document.

Default: SVGDocumentEncoding.ASCII.

### Type

SVGDocumentEncoding

### ExportOptionsSVG.DTD

exportOptionsSVG.DTD

### Description

Specifies the SVG version that the file must match.

Default: SVGDTDVersion.`SVG1_1`.

### Type

SVGDTDVersion

### ExportOptionsSVG.embedRasterImages

exportOptionsSVG.embedRasterImages

### Description

When true, export embeds the document's raster images.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.fontSubsetting

exportOptionsSVG.fontSubsetting

### Description

Selects the font glyph set written during export.

Default: SVGFontSubsetting.ALLGLYPHS.

### Type

SVGFontSubsetting

### ExportOptionsSVG.fontType

exportOptionsSVG.fontType

### Description

Defines the font type written during export.

Default: SVGFontType.CEFFONT.

### Type

SVGFontType

### ExportOptionsSVG.includeFileInfo

exportOptionsSVG.includeFileInfo

### Description

When true, export stores file information.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.includeUnusedStyles

exportOptionsSVG.includeUnusedStyles

### Description

When true, export also writes unused styles.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.includeVariablesAndDatasets

exportOptionsSVG.includeVariablesAndDatasets

### Description

When true, export stores variables and datasets.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.optimizeForSVGViewer

exportOptionsSVG.optimizeForSVGViewer

### Description

When true, SVG Viewer optimization is applied to the output.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.preserveEditability

exportOptionsSVG.preserveEditability

### Description

When true, Illustrator editability is retained while the document is exported.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.saveMultipleArtboards

exportOptionsSVG.saveMultipleArtboards

### Description

When true, export writes the artboards identified by artboardRange.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.slices

exportOptionsSVG.slices

### Description

When true, slice data is written out with the file.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.sVGAutoKerning

exportOptionsSVG.sVGAutoKerning

### Description

When true, the file may use SVG automatic kerning.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.sVGTextOnPath

exportOptionsSVG.sVGTextOnPath

### Description

When true, the file may use the SVG text-on-path construct.

Default: false.

### Type

Boolean.

### ExportOptionsSVG.typename

exportOptionsSVG.typename

### Description

The referenced object reports this class name.

### Type

String; read-only.

## ExportOptionsTIFF — Properties

### ExportOptionsTIFF.antiAliasing

exportOptionsTIFF.antiAliasing

### Description

When true, anti-aliasing is applied to the exported image.

Default: true.

### Type

Boolean.

### ExportOptionsTIFF.artboardRange

exportOptionsTIFF.artboardRange

### Description

When saveMultipleArtboards is true, multi-asset extraction uses this value to choose the artboard range. Use an empty string to extract every artboard.

Default: empty String.

### Type

String.

### ExportOptionsTIFF.byteOrder

exportOptionsTIFF.byteOrder

### Description

Sets the byte order used in the new file.

### Type

TIFFByteOrder

### ExportOptionsTIFF.imageColorSpace

exportOptionsTIFF.imageColorSpace

### Description

Defines the exported file's color space.

Default: ImageColorSpace.RGB.

### Type

ImageColorSpace

### ExportOptionsTIFF.lZWCompression

exportOptionsTIFF.lZWCompression

Note

This property previously appeared incorrectly as "IZWCompression" (with a capital "I") instead of "lzwCompression" (with a lowercase "L"). The lowercase-"L" spelling is the correct one, and the documentation now reflects that.

### Description

When true, IZW compression is used for the new file.

### Type

Boolean.

### ExportOptionsTIFF.resolution

exportOptionsTIFF.resolution

### Description

Sets output resolution in dpi (dots per inch).

Range: 72.0 to 2400.0.

Default: 150.0.

### Type

Number (double).

### ExportOptionsTIFF.saveMultipleArtboards

exportOptionsTIFF.saveMultipleArtboards

### Description

When true, Illustrator saves either all artboards or the specified range.

Default: false.

### Type

Number (double).

## FXGSaveOptions — Properties

### FXGSaveOptions.artboardRange

fxgSaveOptions.artboardRange

### Description

When saveMultipleArtboards is true, multi-asset extraction uses this value to identify the artboard range. An empty string extracts every artboard.

Default: empty String.

### Type

String.

### FXGSaveOptions.blendsPolicy

fxgSaveOptions.blendsPolicy

### Description

Sets the FXG policy for expanding blends.

Default: BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS.

### Type

BlendsExpandPolicy

### FXGSaveOptions.downsampleLinkedImages

fxgSaveOptions.downsampleLinkedImages

### Description

When true, linked images are reduced to 72 dpi.

Default: false.

### Type

Boolean.

### FXGSaveOptions.filtersPolicy

fxgSaveOptions.filtersPolicy

### Description

Sets the FXG policy for keeping filters.

Default: FiltersPreservePolicy.KEEPFILTERSEDITABLE.

### Type

FiltersPreservePolicy

### FXGSaveOptions.gradientsPolicy

fxgSaveOptions.gradientsPolicy

### Description

Sets the FXG policy for retaining gradients.

Default: GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS.

### Type

GradientsPreservePolicy

### FXGSaveOptions.includeUnusedSymbols

fxgSaveOptions.includeUnusedSymbols

### Description

When true, Illustrator also writes unused symbols.

Default: false.

### Type

Boolean.

### FXGSaveOptions.preserveEditingCapabilities

fxgSaveOptions.preserveEditingCapabilities

### Description

When true, FXG editing capabilities are retained.

Default: true.

### Type

Boolean.

### FXGSaveOptions.saveMultipleArtboards

fxgSaveOptions.saveMultipleArtboards

### Description

When true, the save includes every artboard or a selected artboard range.

Default: false.

### Type

Boolean.

### FXGSaveOptions.textPolicy

fxgSaveOptions.textPolicy

### Description

Sets the FXG policy for retaining text.

Default: TextPreservePolicy.AUTOMATICALLYCONVERTTEXT.

### Type

TextPreservePolicy

### FXGSaveOptions.version

fxgSaveOptions.version

### Description

Chooses the FXG file format version to create. Default FXGVersion.VERSION2PT0.

### Type

FXGVersion

## Gradient — Properties

### Gradient.gradientStops

gradient.gradientStops

### Description

This gradient's stop collection.

### Type

GradientStops; read-only.

### Gradient.name

gradient.name

### Description

The name assigned to the gradient.

### Type

String.

### Gradient.parent

gradient.parent

### Description

The containing document for this gradient.

### Type

Document; read-only.

### Gradient.type

gradient.type

### Description

Identifies whether the gradient is radial or linear.

### Type

GradientType

### Gradient.typename

gradient.typename

### Description

The referenced object reports this class name.

### Type

String; read-only.

## GradientColor — Properties

### GradientColor.angle

gradientColor.angle

### Description

Stores the vector angle, measured in degrees, for the gradient.

Default: 0.0.

Warning

Setting the angle has no effect. This appears to be a bug dating to 2008 and still observed through 29.3.1.

### Type

Number (double).

### GradientColor.gradient

gradientColor.gradient

### Description

Gradient object used as the definition source.

### Type

Gradient

### GradientColor.hiliteAngle

gradientColor.hiliteAngle

### Description

Stores the highlight vector angle, measured in degrees, for the gradient.

### Type

Number (double).

### GradientColor.hiliteLength

gradientColor.hiliteLength

### Description

Stores the highlight vector length for the gradient.

### Type

Number (double).

### GradientColor.length

gradientColor.length

### Description

Stores the gradient vector length.

### Type

Number (double).

### GradientColor.matrix

gradientColor.matrix

### Description

Provides an extra transformation matrix for changing the gradient path.

### Type

Matrix.

### GradientColor.origin

gradientColor.origin

### Description

Defines the gradient vector origin, the center point of this color's gradient.

### Type

Array of 2 numbers.

### GradientColor.typename

gradientColor.typename

### Description

The referenced object reports this class name.

### Type

String; read-only.

## Gradients — Properties

### Gradients.length

app.activeDocument.gradients.length

### Description

The collection's object count.

### Type

Number; read-only.

### Gradients.parent

app.activeDocument.gradients.parent

### Description

Object that owns this Gradients collection.

### Type

Object; read-only.

### Gradients.typename

app.activeDocument.gradients.typename

### Description

The referenced object reports this class name.

### Type

String; read-only.

## GradientStop — Properties

### GradientStop.color

app.activeDocument.gradients[index].gradientStops[index].color

### Description

Color value used by this stop.

### Type

Color

### GradientStop.midPoint

app.activeDocument.gradients[index].gradientStops[index].midPoint

### Description

The midpoint key value, expressed in percent across 13.0 to 87.0.

### Type

Number (double).

### GradientStop.opacity

app.activeDocument.gradients[index].gradientStops[index].opacity

### Description

Opacity setting for this stop.

Range: 0.0 to 100.0

### Type

Number (double).

### GradientStop.parent

app.activeDocument.gradients[index].gradientStops[index].parent

### Description

Owning Gradient for this stop.

### Type

Gradient; read-only.

### GradientStop.rampPoint

app.activeDocument.gradients[index].gradientStops[index].rampPoint

### Description

The color's blend position within 0.0 to 100.0, with 100.0 representing 100%.

### Type

Number (double).

### GradientStop.typename

app.activeDocument.gradients[index].gradientStops[index].typename

### Description

The referenced object reports this class name.

### Type

String; read-only.

## GradientStops — Properties

### GradientStops.length

app.activeDocument.gradients[index].gradientStops.length

### Description

Reports how many objects the collection contains.

### Type

Number; read-only.

### GradientStops.parent

app.activeDocument.gradients[index].gradientStops.parent

### Description

Returns the owner.

### Type

Object; read-only.

### GradientStops.typename

app.activeDocument.gradients[index].gradientStops.typename

### Description

Reports the referenced object's class name.

### Type

String; read-only.

## GraphicStyle — Properties

### GraphicStyle.name

app.activeDocument.graphicStyles[index].name

### Description

Specifies the name assigned to the graphic style.

### Type

String.

### GraphicStyle.parent

app.activeDocument.graphicStyles[index].parent

### Description

Identifies the containing document.

### Type

Document; read-only.

### GraphicStyle.typename

app.activeDocument.graphicStyles[index].typename

### Description

Reports the referenced object's class name.

### Type

String; read-only.

## GraphicStyles — Properties

### GraphicStyles.length

app.activeDocument.graphicStyles.length

### Description

Reports how many graphic styles the document contains.

### Type

Number; read-only.

### GraphicStyles.parent

app.activeDocument.graphicStyles.parent

### Description

Identifies the owner document for the collection.

### Type

Document; read-only.

### GraphicStyles.typename

app.activeDocument.graphicStyles.typename

### Description

Reports the referenced object's class name.

### Type

String; read-only.
