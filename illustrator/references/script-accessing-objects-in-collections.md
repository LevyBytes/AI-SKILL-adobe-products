# Accessing Objects In Collections, Obtaining Objects From Collections, Working With Enumeration Values, Scripting Constants ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Accessing objects in collections; Obtaining objects from collections; Working with enumeration values; Scripting Constants; AlternateGlyphsForm; AntiAliasingMethod; ArtClippingOption; AutoKernType; AutoLeadingType; BaselineDirectionType; BlendAnimationType; BlendModes; BlendsExpandPolicy; BurasagariTypeEnum; CaseChangeType; ColorConversion; ColorConvertPurpose; ColorDestination.

## Accessing objects in collections

### Accessing and referencing objects — Accessing objects in collections

Open documents and the objects inside a document are grouped into collection objects for each object type. A collection object stores an array of objects addressable by index or by name. The collection object's name is the plural version of the object name; for example, document objects are held in documents.

This script sample retrieves every graphic style object in the graphic styles collection, meaning every graphic style available to the active document:

```
var myStyles = app.activeDocument.graphicStyles;
```

JavaScript numeric collection references are zero-based, so the first collection object uses index [0].

Usually, adding an object to a collection does not change existing JavaScript index numbers. One exception applies: documents[0 is always the active or frontmost document.

To reach the first style in a graphic styles collection, use either the earlier variable or the containment hierarchy reference to that collection:

```
var firstStyle = myStyles[0];
```

```
var firstStyle = app.activeDocument.graphicStyles[0];
```

Each of these statements stores the first graphic style's name from the collection in a variable.

```
var styleName = myStyles[0].name

var styleName = firstStyle.name

var styleName = app.activeDocument.graphicStyles[0].name
```

Use the length property to retrieve the total object count in a collection:

```
alert ( myStyles.length );
```

The final graphic style in the collection has index myStyles.length - 1, with -1 needed because indexing begins at 0 while the length property counts from 1:

```
var lastStyle = myStyles[ myStyles.length - 1 ];
```

An expression used for an index value is placed inside square brackets ( [] ) and quotes.

When an object's name is known, access it from the collection by placing that name in square brackets; for example:

```
var getStyle = myStyles["Ice Type"];
```

Every collection entry is an object of the intended type, and its properties are available through the collection. For example, use the name property to retrieve an object's name:

```
var styleName = app.activeDocument.graphicStyles[0].name;
```

Apply lastStyle to the document's first pageItem with its applyTo() method:

```
lastStyle.applyTo( app.activeDocument.pageItems[0] );
```

## Obtaining objects from collections

### Accessing and referencing objects — Obtaining objects from collections

In most cases, a script gets a reference to a particular object by moving through the containment hierarchy. This example stores a reference to the first PathItem in the active document's second layer in the myPath variable:

```
Set myPath = appRef.ActiveDocument.Layers(2).PathItems(1)
```

These scripts show object references made through a document:

```
Set documentRef = appRef.ActiveDocument

Set pageItemRef = documentRef.PageItems(1)
```

Because the next script refers to a layer, pageItemRef is not guaranteed to point at the same object as in the preceding script:

```
Set documentRef = appRef.ActiveDocument
Set pageItemRef = documentRef.Layers(1).PageItems(1)
```

For object collections, VBScript indexing begins at 1. VBScript can still let you choose whether arrays begin at index 1 or index 0. To learn how to set the array index origin, see a VBScript textbook or tutorial.

## Working with enumeration values

In VBScript, properties backed by enumeration values are assigned with numbers instead of text constants.

For instance, TextFrame object's Orientation property controls whether content in a text frame runs horizontally or vertically. That property uses the aiTextOrientation enumeration, whose available values are aiHorizontal and aiVertical.

Use either source below to look up numeric enumeration values:

- In your scripting editor, open the object browser. See Viewing the VBScript object model.
- Adobe lllustrator CC 2017 Scripting Reference: VBScript. In the book's final "Enumerations" chapter, each constant is followed directly by its numeral value. This table excerpt illustrates the format:

| Enumeration type | Values | What it means |
| --- | --- | --- |
| AiTextOrientation | aiHorizontal = 0 aiVertical = 1 | Controls whether text in a text frame is oriented horizontally or vertically |

This sample sets the text orientation to vertical:

```
Set appRef = CreateObject ("Illustrator.Application")
Set docRef = appRef.Documents.Add
Set textRef = docRef.TextFrames.Add
textRef.Contents = "This is some text content."
textRef.Left = 50
textRef.Top = 700
textRef.Orientation = 1
```

A common scripting convention is to add the text constant in a comment after the numeric value, as shown here:

```
textRef.Orientation = 1 ' aiVertical
```

## Scripting Constants

This chapter covers the enumerations that Illustrator JavaScript properties and methods use.

## AlternateGlyphsForm

### Scripting Constants — AlternateGlyphsForm

AlternateGlyphsForm specifies the alternate glyph form used for text.

| Value | Description |
| --- | --- |
| AlternateGlyphsForm.DEFAULTFORM | Defaultform |
| AlternateGlyphsForm.TRADITIONAL | Traditional |
| AlternateGlyphsForm.EXPERT | Expert |
| AlternateGlyphsForm.JIS78FORM | JIS78FORM |
| AlternateGlyphsForm.JIS83FORM | JIS83FORM |
| AlternateGlyphsForm.HALFWIDTH | Half Width |
| AlternateGlyphsForm.THIRDWIDTH | Third Width |
| AlternateGlyphsForm.QUARTERWIDTH | Quarter Width |
| AlternateGlyphsForm.FULLWIDTH | Full Width |
| AlternateGlyphsForm.PROPORTIONALWIDTH | Proportional Width |
| AlternateGlyphsForm.JIS90FORM | JIS90FORM |
| AlternateGlyphsForm.JIS04FORM | JIS04FORM |

### Example

```
textRef.textRange.characters[i].characterAttributes.alternateGlyphs == AlternateGlyphsForm.DEFAULTFORM;
textRef.textRange.characters[i].characterAttributes.alternateGlyphs == AlternateGlyphsForm.FULLWIDTH
```

## AntiAliasingMethod

### Scripting Constants — AntiAliasingMethod

AntiAliasingMethod identifies the antialiasing approach used for rasterization.

| Value | Description |
| --- | --- |
| AntiAliasingMethod.None | Does not apply antialiasing. |
| AntiAliasingMethod.ARTOPTIMIZED | Optimizes output for artwork. |
| AntiAliasingMethod.TYPEOPTIMIZED | Optimizes output for type. |

## ArtClippingOption

### Scripting Constants — ArtClippingOption

ArtClippingOption controls how artwork is clipped at output time.

| Value | Description |
| --- | --- |
| ArtClippingOption.OUTPUTARTBOUNDS | Uses the artwork bounds for the output size. |
| ArtClippingOption.OUTPUTARTBOARDBOUNDS | Uses the artboard bounds for the output size. |
| ArtClippingOption.OUTPUTCROPRECTBOUNDS | Uses the crop-area bounds for the output size. |

| Value | Description |
| --- | --- |
| AutoCADColors.Max8Colors | Max 8 CColors |
| AutoCADColors.Max16Colors | Max 16 Colors |
| AutoCADColors.Max256Colors | Max 25 6Colors |
| AutoCADColors.TrueColors | True Colors |

| Value | Description |
| --- | --- |
| AutoCADCompatibility.AutoCADRelease13 | Release 13 |
| AutoCADCompatibility.AutoCADRelease18 | Release 18 |
| AutoCADCompatibility.AutoCADRelease14 | Release 14 |
| AutoCADCompatibility.AutoCADRelease21 | Release 21 |
| AutoCADCompatibility.AutoCADRelease15 | Release 15 |
| AutoCADCompatibility.AutoCADRelease24 | Release 24 |

| Value | Description |
| --- | --- |
| AutoCADExportFileFormat.DXF | DXF |
| AutoCADExportFileFormat.DWG | DWG |

| Value | Description |
| --- | --- |
| AutoCADExportOption.PreserveAppearance | Preserve Appearance |
| AutoCADExportOption.MaximizeEditability | Maximize Editability |

| Value | Description |
| --- | --- |
| AutoCADGlobalScaleOption.OriginalSize | Original Size |
| AutoCADGlobalScaleOption.ScaleByValue | Scale by Value |
| AutoCADGlobalScaleOption.FitArtboard | Fit Artboard |

| Value | Description |
| --- | --- |
| AutoCADRasterFormat.PNG | PNG |
| AutoCADRasterFormat.JPEG | JPEG |

| Value | Description |
| --- | --- |
| AutoCADUnit.Points | Points |
| AutoCADUnit.Picas | Picas |
| AutoCADUnit.Inches | Inches |
| AutoCADUnit.Millimeters | Millimeters |
| AutoCADUnit.Centimeters | Centimeters |
| AutoCADUnit.Pixels | Pixels |

## AutoKernType

### Scripting Constants — AutoKernType

AutoKernType selects an automatic kerning mode.

| Value | Description |
| --- | --- |
| AutoKernType.NOAUTOKERN | None |
| AutoKernType.AUTO | Auto |
| AutoKernType.OPTICAL | Optical |
| AutoKernType.METRICSROMANONLY | Metrics |

## AutoLeadingType

### Scripting Constants — AutoLeadingType

AutoLeadingType selects an automatic leading mode.

| Value | Description |
| --- | --- |
| AutoLeadingType.BOTTOMTOBOTTOM | Bottom to Bottom |
| AutoLeadingType.TOPTOTOP | Top to Top |

## BaselineDirectionType

### Scripting Constants — BaselineDirectionType

BaselineDirectionType sets text baseline orientation.

| Value | Description |
| --- | --- |
| BaselineDirectionType.Standard | Standard |
| BaselineDirectionType.VerticalRotated | Vertical Rotated |
| BaselineDirectionType.TateChuYoko | TateChuYoko |

## BlendAnimationType

### Scripting Constants — BlendAnimationType

| Value | Description |
| --- | --- |
| BlendAnimationType.INBUILD | In Build |
| BlendAnimationType.NOBLENDANIMATION | None |
| BlendAnimationType.INSEQUENCE | In Sequence |

## BlendModes

### Scripting Constants — BlendModes

BlendModes chooses how objects are composited.

| Value | Description |
| --- | --- |
| BlendModes.COLORBLEND | Color |
| BlendModes.COLORBURN | Color Burn |
| BlendModes.COLORDODGE | Color Dodge |
| BlendModes.DARKEN | Darken |
| BlendModes.DIFFERENCE | Difference |
| BlendModes.EXCLUSION | Exclusion |
| BlendModes.HARDLIGHT | Hard Light |
| BlendModes.HUE | Hue |
| BlendModes.LIGHTEN | Lighten |
| BlendModes.LUMINOSITY | Luminosity |
| BlendModes.MULTIPLY | Multiply |
| BlendModes.NORMAL | Normal |
| BlendModes.OVERLAY | Overlay |
| BlendModes.SATURATIONBLEND | Saturation |
| BlendModes.SCREEN | Screen |
| BlendModes.SOFTLIGHT | Soft Light |

## BlendsExpandPolicy

### Scripting Constants — BlendsExpandPolicy

BlendsExpandPolicy defines how the FXG file format expands blends.

| Value | Description |
| --- | --- |
| BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS | Automatically convert blends |
| BlendsExpandPolicy.RASTERIZEBLENDS | Rasterize blends |

## BurasagariTypeEnum

### Scripting Constants — BurasagariTypeEnum

BurasagariTypeEnum selects a Burasagari behavior.

| Value | Description |
| --- | --- |
| BurasagariTypeEnum.Forced | Forced |
| BurasagariTypeEnum.None | None |
| BurasagariTypeEnum.Standard | Standard |

## CaseChangeType

### Scripting Constants — CaseChangeType

CaseChangeType selects a capitalization conversion.

| Value | Description |
| --- | --- |
| CaseChangeType.LOWERCASE | Lowercase ("hello world") |
| CaseChangeType.SENTENCECASE | Sentence case ("Hello world") |
| CaseChangeType.TITLECASE | Title case ("Hello World") |
| CaseChangeType.UPPERCASE | Uppercase ("HELLO WORLD") |

## ColorConversion

### Scripting Constants — ColorConversion

Color conversion policy for this constant set.

| Value | Description |
| --- | --- |
| ColorConversion.COLORCONVERSIONREPURPOSE | Color Conversion Repurpose |
| ColorConversion.COLORCONVERSIONTODEST | Color Conversion to Dest |
| ColorConversion.None | None |

## ColorConvertPurpose

### Scripting Constants — ColorConvertPurpose

These values identify why Application.ConvertSampleColor is performing color conversion.

| Value | Description |
| --- | --- |
| ColorConvertPurpose.defaultpurpose | Default |
| ColorConvertPurpose.exportpurpose | Export |
| ColorConvertPurpose.previewpurpose | Preview |
| ColorConvertPurpose.dummypurpose | Dummy |

## ColorDestination

### Scripting Constants — ColorDestination

Color destination target.

| Value | Description |
| --- | --- |
| ColorDestination.COLORDESTINATIONDOCCMYK | Doc CMYK |
| ColorDestination.COLORDESTINATIONDOCRGB | Doc RGB |
| ColorDestination.COLORDESTINATIONPROFILE | Profile |
| ColorDestination.COLORDESTINATIONWORKINGCMYK | Working CMYK |
| ColorDestination.COLORDESTINATIONWORKINGRGB | Working RGB |
| ColorDestination.None | None |

## ColorDitherMethod

### Scripting Constants — ColorDitherMethod

For exported GIF and PNG8 artwork, this enum chooses the color dithering method.

| Value | Description |
| --- | --- |
| ColorDitherMethod.DIFFUSION | Diffusion |
| ColorDitherMethod.NOISE | Noise |
| ColorDitherMethod.NOREDUCTION | No Reduction |
| ColorDitherMethod.PATTERNDITHER | Pattern Dither |

## ColorModel

### Scripting Constants — ColorModel

Color model selection.

| Value | Description |
| --- | --- |
| ColorModel.PROCESS | Process |
| ColorModel.REGISTRATION | Registration |
| ColorModel.SPOT | Spot |

## ColorProfile

### Scripting Constants — ColorProfile

| Value | Description |
| --- | --- |
| ColorProfile.INCLUDEALLPROFILE | Include All Profile |
| ColorProfile.INCLUDEDESTPROFILE | Include Dest Profile |
| ColorProfile.INCLUDERGBPROFILE | Include RGB Profile |
| ColorProfile.LEAVEPROFILEUNCHANGED | Leave Profile Unchanged |
| ColorProfile.None | None |

## ColorReductionMethod

### Scripting Constants — ColorReductionMethod

For exported GIF and PNG8 artwork, this enum chooses how the color count is reduced.

| Value | Description |
| --- | --- |
| ColorReductionMethod.ADAPTIVE | Adaptive |
| ColorReductionMethod.SELECTIVE | Selective |
| ColorReductionMethod.PERCEPTUAL | Perceptual |
| ColorReductionMethod.WEB | Web |

## ColorType

### Scripting Constants — ColorType

Color specification used for one color value.

| Value | Description |
| --- | --- |
| ColorType.CMYK | Cmyk |
| ColorType.GRADIENT | Gradient |
| ColorType.GRAY | Gray |
| ColorType.PATTERN | Pattern |
| ColorType.RGB | Rgb |
| ColorType.SPOT | Spot |
| ColorType.NONE | None |

## Compatibility

### Scripting Constants — Compatibility

EPS or Illustrator saves use these constants to choose the Illustrator file version to write.

| Value | Description |
| --- | --- |
| Compatibility.ILLUSTRATOR8 | Illustrator 8 |
| Compatibility.ILLUSTRATOR9 | Illustrator 9 |
| Compatibility.ILLUSTRATOR10 | Illustrator 10 |
| Compatibility.ILLUSTRATOR11 | Illustrator 11 |
| Compatibility.ILLUSTRATOR12 | Illustrator 12 |
| Compatibility.ILLUSTRATOR13 | Illustrator 13 |
| Compatibility.ILLUSTRATOR14 | Illustrator 14 |
| Compatibility.ILLUSTRATOR15 | Illustrator 15 |
| Compatibility.ILLUSTRATOR16 | Illustrator 16 |
| Compatibility.ILLUSTRATOR17 | Illustrator 17 |
| Compatibility.ILLUSTRATOR19 | Illustrator 19 |
| Compatibility.JAPANESEVERSION3 | Japanese Version 3 |

## CompressionQuality

### Scripting Constants — CompressionQuality

PDF saves use this enum to set bitmap compression quality.

| Value | Description |
| --- | --- |
| CompressionQuality.AUTOMATICJPEG2000HIGH | todo |
| CompressionQuality.AUTOMATICJPEG2000LOSSLESS | todo |
| CompressionQuality.AUTOMATICJPEG2000LOW | todo |
| CompressionQuality.AUTOMATICJPEG2000MAXIMUM | todo |
| CompressionQuality.AUTOMATICJPEG2000MEDIUM | todo |
| CompressionQuality.AUTOMATICJPEG2000MINIMUM | todo |
| CompressionQuality.AUTOMATICJPEGHIGH | todo |
| CompressionQuality.AUTOMATICJPEGLOW | todo |
| CompressionQuality.AUTOMATICJPEGMAXIMUM | todo |
| CompressionQuality.AUTOMATICJPEGMEDIUM | todo |
| CompressionQuality.AUTOMATICJPEGMINIMUM | todo |
| CompressionQuality.JPEG2000HIGH | todo |
| CompressionQuality.JPEG2000LOSSLESS | todo |
| CompressionQuality.JPEG2000LOW | todo |
| CompressionQuality.JPEG2000MAXIMUM | todo |
| CompressionQuality.JPEG2000MEDIUM | todo |
| CompressionQuality.JPEG2000MINIMUM | todo |
| CompressionQuality.JPEGHIGH | todo |
| CompressionQuality.JPEGLOW | todo |
| CompressionQuality.JPEGMAXIMUM | todo |
| CompressionQuality.JPEGMEDIUM | todo |
| CompressionQuality.JPEGMINIMUM | todo |
| CompressionQuality.ZIP4BIT | todo |
| CompressionQuality.ZIP8BIT | todo |
| CompressionQuality.None | todo |

## CoordinateSystem

### Scripting Constants — CoordinateSystem

Illustrator coordinate system selection.

| Value | Description |
| --- | --- |
| CoordinateSystem.ARTBOARDCOORDINATESYSTEM | todo |
| CoordinateSystem.DOCUMENTCOORDINATESYSTEM | todo |

## CropOptions

### Scripting Constants — CropOptions

Cropping-box style for a document.

| Value | Description |
| --- | --- |
| CropOptions.Japanese | Japanese |
| CropOptions.Standard | Standard |

## DocumentArtboardLayout

### Scripting Constants — DocumentArtboardLayout

New-document artboard layout choice.

| Value | Description |
| --- | --- |
| DocumentArtboardLayout.Column | todo |
| DocumentArtboardLayout.GridByCol | todo |
| DocumentArtboardLayout.GridByRow | todo |
| DocumentArtboardLayout.RLGridByCol | todo |
| DocumentArtboardLayout.RLGridByRow | todo |
| DocumentArtboardLayout.RLRow | todo |
| DocumentArtboardLayout.Row | todo |

## DocumentColorSpace

### Scripting Constants — DocumentColorSpace

Document color space.

| Value | Description |
| --- | --- |
| DocumentColorSpace.CMYK | CMYK |
| DocumentColorSpace.RGB | RGB |

## DocumentLayoutStyle

### Scripting Constants — DocumentLayoutStyle

Document layout-style constant group.

| Value | Description |
| --- | --- |
| DocumentLayoutStyle.CASCADE | todo |
| DocumentLayoutStyle.CONSOLIDATEALL | todo |
| DocumentLayoutStyle.FLOATALL | todo |
| DocumentLayoutStyle.HORIZONTALTILE | todo |
| DocumentLayoutStyle.VERTICALTILE | todo |

## DocumentPresetType

### Scripting Constants — DocumentPresetType

New-document preset categories.

| Value | Description |
| --- | --- |
| DocumentPresetType.BasicCMYK | Basic CMYK |
| DocumentPresetType.BasicRGB | Basic RGB |
| DocumentPresetType.Mobile | Mobile |
| DocumentPresetType.Print | Print |
| DocumentPresetType.Video | Video |
| DocumentPresetType.Web | Web |

## DocumentPreviewMode

### Scripting Constants — DocumentPreviewMode

Preview mode for a document.

| Value | Description |
| --- | --- |
| DocumentPreviewMode.DefaultPreview | Default |
| DocumentPreviewMode.OverprintPreview | Overprint |
| DocumentPreviewMode.PixelPreview | Pixel |

## DocumentRasterResolution

### Scripting Constants — DocumentRasterResolution

Preset raster-resolution options for documents.

| Value | Description |
| --- | --- |
| DocumentRasterResolution.ScreenResolution | Screen Resolution |
| DocumentRasterResolution.HighResolution | High Resolution |
| DocumentRasterResolution.MediumResolution | Medium Resolution |

## DocumentTransparencyGrid

### Scripting Constants — DocumentTransparencyGrid

Document transparency-grid color choices.

| Value | Description |
| --- | --- |
| DocumentTransparencyGrid.TransparencyGridBlue | Blue |
| DocumentTransparencyGrid.TransparencyGridDark | Dark |
| DocumentTransparencyGrid.TransparencyGridGreen | Green |
| DocumentTransparencyGrid.TransparencyGridLight | Light |
| DocumentTransparencyGrid.TransparencyGridMedium | Medium |
| DocumentTransparencyGrid.TransparencyGridNone | None |
| DocumentTransparencyGrid.TransparencyGridOrange | Orange |
| DocumentTransparencyGrid.TransparencyGridPurple | Purple |
| DocumentTransparencyGrid.TransparencyGridRed | Red |

## DocumentType

### Scripting Constants — DocumentType

File format used for saving.

| Value | Description |
| --- | --- |
| DocumentType.EPS | EPS |
| DocumentType.FXG | FXG |
| DocumentType.ILLUSTRATOR | Illustrator |
| DocumentType.PDF | PDF |

## DownsampleMethod

### Scripting Constants — DownsampleMethod

| Value | Description |
| --- | --- |
| DownsampleMethod.AVERAGEDOWNSAMPLE | Average Downsample |
| DownsampleMethod.BICUBICDOWNSAMPLE | Bicubic Downsample |
| DownsampleMethod.NODOWNSAMPLE | No Downsample |
| DownsampleMethod.SUBSAMPLE | Subsample |

## ElementPlacement

### Scripting Constants — ElementPlacement

| Value | Description |
| --- | --- |
| ElementPlacement.INSIDE | Inside |
| ElementPlacement.PLACEAFTER | Place After |
| ElementPlacement.PLACEATBEGINNING | Place At Beginning |
| ElementPlacement.PLACEATEND | Place At End |
| ElementPlacement.PLACEBEFORE | Place Before |

## EPSPostScriptLevelEnum

### Scripting Constants — EPSPostScriptLevelEnum

| Value | Description |
| --- | --- |
| EPSPostScriptLevelEnum.LEVEL2 | Level 2 |
| EPSPostScriptLevelEnum.LEVEL3 | Level 3 |

## EPSPreview

### Scripting Constants — EPSPreview

For EPS saves, this constant selects the preview image format.

| Value | Description |
| --- | --- |
| EPSPreview.BWTIFF | todo |
| EPSPreview.COLORTIFF | todo |
| EPSPreview.TRANSPARENTCOLORTIFF | todo |
| EPSPreview.None | todo |

## ExportType

### Scripting Constants — ExportType

This enum chooses which file format an export writes.

| Value | Description |
| --- | --- |
| ExportType.AutoCAD | AutoCAD |
| ExportType.FLASH | FLASH |
| ExportType.GIF | GIF |
| ExportType.JPEG | JPEG |
| ExportType.Photoshop | Photoshop |
| ExportType.PNG24 | PNG24 |
| ExportType.PNG8 | PNG8 |
| ExportType.SVG | SVG |
| ExportType.TIFF | TIFF |

## FigureStyleType

### Scripting Constants — FigureStyleType

| Value | Description |
| --- | --- |
| FigureStyleType.DEFAULTFIGURESTYLE | todo |
| FigureStyleType.PROPORTIONAL | todo |
| FigureStyleType.PROPORTIONALOLDSTYLE | todo |
| FigureStyleType.TABULAR | todo |
| FigureStyleType.TABULAROLDSTYLE | todo |

## FiltersPreservePolicy

### Scripting Constants — FiltersPreservePolicy

For FXG output, this policy controls how filters are preserved.

| Value | Description |
| --- | --- |
| FiltersPreservePolicy.EXPANDFILTERS | todo |
| FiltersPreservePolicy.KEEPFILTERSEDITABLE | todo |
| FiltersPreservePolicy.RASTERIZEFILTERS | todo |

## FlashExportStyle

### Scripting Constants — FlashExportStyle

During export, this setting chooses how Illustrator images are converted.

| Value | Description |
| --- | --- |
| FlashExportStyle.ASFLASHFILE | todo |
| FlashExportStyle.LAYERSASFILES | todo |
| FlashExportStyle.LAYERSASFRAMES | todo |
| FlashExportStyle.LAYERSASSYMBOLS | todo |
| FlashExportStyle.TOFILES | todo |

## FlashExportVersion

### Scripting Constants — FlashExportVersion

This value sets the SWF version for export.

| Value | Description |
| --- | --- |
| FlashExportVersion.FlashVersion1 | Version 1 |
| FlashExportVersion.FlashVersion2 | Version 2 |
| FlashExportVersion.FlashVersion3 | Version 3 |
| FlashExportVersion.FlashVersion4 | Version 4 |
| FlashExportVersion.FlashVersion5 | Version 5 |
| FlashExportVersion.FlashVersion6 | Version 6 |
| FlashExportVersion.FlashVersion7 | Version 7 |
| FlashExportVersion.FlashVersion8 | Version 8 |
| FlashExportVersion.FlashVersion9 | Version 9 |

## FlashImageFormat

### Scripting Constants — FlashImageFormat

Flash image storage uses this selected format.

| Value | Description |
| --- | --- |
| FlashImageFormat.LOSSLESS | Lossless |
| FlashImageFormat.LOSSY | Lossy |

## FlashJPEGMethod

### Scripting Constants — FlashJPEGMethod

This option determines how JPEG images are stored.

| Value | Description |
| --- | --- |
| FlashJPEGMethod.Optimized | Optimized |
| FlashJPEGMethod.Standard | Standard |

## FlashPlaybackSecurity

### Scripting Constants — FlashPlaybackSecurity

| Value | Description |
| --- | --- |
| FlashPlaybackSecurity.PlaybackLocal | Local |
| FlashPlaybackSecurity.PlaybackNetwork | Network |

## FontBaselineOption

### Scripting Constants — FontBaselineOption

| Value | Description |
| --- | --- |
| FontBaselineOption.NORMALBASELINE | todo |
| FontBaselineOption.SUPERSCRIPT | todo |
| FontBaselineOption.SUBSCRIPT | todo |

## FontCapsOption

### Scripting Constants — FontCapsOption

| Value | Description |
| --- | --- |
| FontCapsOption.ALLCAPS | All Caps |
| FontCapsOption.ALLSMALLCAPS | All Smallcaps |
| FontCapsOption.NORMALCAPS | Normal Caps |
| FontCapsOption.SMALLCAPS | Small Caps |

## FontOpenTypePositionOption

### Scripting Constants — FontOpenTypePositionOption

| Value | Description |
| --- | --- |
| FontOpenTypePositionOption.DENOMINATOR | Denominator |
| FontOpenTypePositionOption.NUMERATOR | Numerator |
| FontOpenTypePositionOption.OPENTYPEDEFAULT | Opentype Default |
| FontOpenTypePositionOption.OPENTYPESUBSCRIPT | Opentype Subscript |
| FontOpenTypePositionOption.OPENTYPESUPERSCRIPT | Opentype Superscript |

## FontSubstitutionPolicy

### Scripting Constants — FontSubstitutionPolicy

| Value | Description |
| --- | --- |
| FontSubstitutionPolicy.SUBSTITUTEDEVICE | Device |
| FontSubstitutionPolicy.SUBSTITUTEOBLIQUE | Oblique |
| FontSubstitutionPolicy.SUBSTITUTETINT | Tint |

## FXGVersion

### Scripting Constants — FXGVersion

This identifies which FXG file-format version applies.

| Value | Description |
| --- | --- |
| FXGVersion.VERSION1PT0 | Version 1 PT0 |
| FXGVersion.VERSION2PT0 | Version 2 PT0 |

## GradientsPreservePolicy

### Scripting Constants — GradientsPreservePolicy

For FXG files, this policy defines how gradients are preserved.

| Value | Description |
| --- | --- |
| GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS | Automaticaly Convert Gradients |
| GradientsPreservePolicy.KEEPGRADIENTSEDITABLE | Keep Gradients Editable |

## GradientType

### Scripting Constants — GradientType

This enum specifies the gradient type.

| Value | Description |
| --- | --- |
| GradientType.LINEAR | Linear |
| GradientType.RADIAL | Radial |

## ImageColorSpace

### Scripting Constants — ImageColorSpace

This value reports the color space for a raster item or export.

| Value | Description |
| --- | --- |
| ImageColorSpace.CMYK | CMYK |
| ImageColorSpace.DeviceN | DeviceN |
| ImageColorSpace.Grayscale | Grayscale |
| ImageColorSpace.Indexed | Indexed |
| ImageColorSpace.LAB | LAB |
| ImageColorSpace.RGB | RGB |
| ImageColorSpace.Separation | Separation |

## InkPrintStatus

### Scripting Constants — InkPrintStatus

| Value | Description |
| --- | --- |
| InkPrintStatus.CONVERTINK | Convert Ink |
| InkPrintStatus.ENABLEINK | Enable Ink |
| InkPrintStatus.DISABLEINK | Disable Ink |

## InkType

### Scripting Constants — InkType

| Value | Description |
| --- | --- |
| InkType.BLACKINK | Black Ink |
| InkType.CUSTOMINK | Custom Ink |
| InkType.CYANINK | Cyan Ink |
| InkType.MAGENTAINK | Magenta Ink |
| InkType.YELLOWINK | Yellow Ink |

## JavaScriptExecutionMode

### Scripting Constants — JavaScriptExecutionMode

| Value | Description |
| --- | --- |
| JavaScriptExecutionMode.BeforeRunning | Before Running |
| JavaScriptExecutionMode.OnRuntimeError | On Runtime Error |
| JavaScriptExecutionMode.never | Never |

## Justification

### Scripting Constants — Justification

Sets paragraph text alignment and justification.

| Value | Description |
| --- | --- |
| Justification.CENTER | Center |
| Justification.FULLJUSTIFY | Full Justify |
| Justification.FULLJUSTIFYLASTLINECENTER | Full Justify Last Line Center |
| Justification.FULLJUSTIFYLASTLINELEFT | Full Justify Last Line Left |
| Justification.FULLJUSTIFYLASTLINERIGHT | Full Justify Last Line Right |
| Justification.LEFT | Left |
| Justification.RIGHT | Right |

## KinsokuOrderEnum

### Scripting Constants — KinsokuOrderEnum

| Value | Description |
| --- | --- |
| KinsokuOrderEnum.PUSHIN | todo |
| KinsokuOrderEnum.PUSHOUTFIRST | todo |
| KinsokuOrderEnum.PUSHOUTONLY | todo |

## KnockoutState

### Scripting Constants — KnockoutState

Specifies which knockout mode a page item uses.

| Value | Description |
| --- | --- |
| KnockoutState.DISABLED | Disabled |
| KnockoutState.ENABLED | Enabled |
| KnockoutState.INHERITED | Inherited |
| KnockoutState.Unknown | Unknown |

## LanguageType

### Scripting Constants — LanguageType

| Value | Description |
| --- | --- |
| LanguageType.BOKMALNORWEGIAN | todo |
| LanguageType.BRAZILLIANPORTUGUESE | todo |
| LanguageType.BULGARIAN | todo |
| LanguageType.CANADIANFRENCH | todo |
| LanguageType.CATALAN | todo |
| LanguageType.CHINESE | todo |
| LanguageType.CZECH | todo |
| LanguageType.DANISH | todo |
| LanguageType.DUTCH | todo |
| LanguageType.DUTCH2005REFORM | todo |
| LanguageType.ENGLISH | todo |
| LanguageType.FINNISH | todo |
| LanguageType.GERMAN2006REFORM | todo |
| LanguageType.GREEK | todo |
| LanguageType.HUNGARIAN | todo |
| LanguageType.ICELANDIC | todo |
| LanguageType.ITALIAN | todo |
| LanguageType.JAPANESE | todo |
| LanguageType.NYNORSKNORWEGIAN | todo |
| LanguageType.OLDGERMAN | todo |
| LanguageType.POLISH | todo |
| LanguageType.RUMANIAN | todo |
| LanguageType.RUSSIAN | todo |
| LanguageType.SERBIAN | todo |
| LanguageType.SPANISH | todo |
| LanguageType.STANDARDFRENCH | todo |
| LanguageType.STANDARDGERMAN | todo |
| LanguageType.STANDARDPORTUGUESE | todo |
| LanguageType.SWEDISH | todo |
| LanguageType.SWISSGERMAN | todo |
| LanguageType.SWISSGERMAN2006REFORM | todo |
| LanguageType.TURKISH | todo |
| LanguageType.UKENGLISH | todo |
| LanguageType.UKRANIAN | todo |
