# Illustrator (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/\*\*

- Screen mode values.
  \*/
  declare enum ScreenMode {
  /\*\*
  - Full screen view that retains the menu bar.
    \*/
    DESKTOP = 2,

/\*\*

- Full screen view with no menu bar shown.
  \*/
  FULLSCREEN = 3,

/\*\*

- Several windows are displayed.
  \*/
  MULTIWINDOW = 1,
  }

/\*\*

- Color model choices.
  \*/
  declare enum ColorType {
  /\*\*
  - \*/
    CMYK = 1,

/\*\*

- \*/
  GRADIENT = 4,

/\*\*

- \*/
  GRAY = 0,

/\*\*

- \*/
  None = 6,

/\*\*

- \*/
  PATTERN = 2,

/\*\*

- \*/
  RGB = 5,

/\*\*

- \*/
  SPOT = 3,
  }

/\*\*

- Document color-space options.
  \*/
  declare enum DocumentColorSpace {
  /\*\*
  - Document color space set to CMYK.
    \*/
    CMYK = 2,

/\*\*

- Document color space set to RGB.
  \*/
  RGB = 1,
  }

/\*\*

- Preset categories offered for new documents.
  \*/
  declare enum DocumentPresetType {
  /\*\*
  - Standard CMYK document preset.
    \*/
    BasicCMYK = 5,

/\*\*

- Standard RGB document preset.
  \*/
  BasicRGB = 6,

/\*\*

- Mobile document preset by default.
  \*/
  Mobile = 3,

/\*\*

- Print document preset by default.
  \*/
  Print = 1,

/\*\*

- Video and Film document preset by default.
  \*/
  Video = 4,

/\*\*

- Web document preset by default.
  \*/
  Web = 2,
  }

/\*\*

- Raster resolution choices used while making a new document.
  \*/
  declare enum DocumentRasterResolution {
  /\*\*
  - High raster resolution at 300 PPI.
    \*/
    HighResolution = 3,

/\*\*

- Medium raster resolution at 150 PPI.
  \*/
  MediumResolution = 2,

/\*\*

- Low raster resolution at 72 PPI.
  \*/
  ScreenResolution = 1,
  }

/\*\*

- Transparency grid choices for a new document with video presets.
  \*/
  declare enum DocumentTransparencyGrid {
  /\*\*
  - Grid color is blue.
    \*/
    TransparencyGridBlue = 7,

/\*\*

- Grid colors are dark.
  \*/
  TransparencyGridDark = 3,

/\*\*

- Grid color is green.
  \*/
  TransparencyGridGreen = 6,

/\*\*

- Grid uses light colors.
  \*/
  TransparencyGridLight = 1,

/\*\*

- Grid uses medium colors.
  \*/
  TransparencyGridMedium = 2,

/\*\*

- Grid display is disabled.
  \*/
  TransparencyGridNone = 0,

/\*\*

- Grid color is orange.
  \*/
  TransparencyGridOrange = 5,

/\*\*

- Grid color is purple.
  \*/
  TransparencyGridPurple = 8,

/\*\*

- Grid color is red.
  \*/
  TransparencyGridRed = 4,
  }

/\*\*

- Preview modes selectable for a new document.
  \*/
  declare enum DocumentPreviewMode {
  /\*\*
  - Uses Default Preview mode.
    \*/
    DefaultPreview = 1,

/\*\*

- Uses Overprint Preview Mode.
  \*/
  OverprintPreview = 3,

/\*\*

- Uses Pixel Preview mode.
  \*/
  PixelPreview = 2,
  }

/\*\*

- Artboard layout pattern in a document.
  \*/
  declare enum DocumentArtboardLayout {
  /\*\*
  - Places artboards in one column.
    \*/
    Column = 4,

/\*\*

- Places artboards using a Grid by Column pattern.
  \*/
  GridByCol = 2,

/\*\*

- Places artboards using a Grid by Row pattern.
  \*/
  GridByRow = 1,

/\*\*

- Places artboards using a right-to-left Grid by Column pattern.
  \*/
  RLGridByCol = 6,

/\*\*

- Places artboards using a right-to-left Grid by Row pattern.
  \*/
  RLGridByRow = 5,

/\*\*

- Places artboards in one row from right-to-left.
  \*/
  RLRow = 7,

/\*\*

- Places artboards in one row.
  \*/
  Row = 3,
  }

/\*\*

- Image color-space values.
  \*/
  declare enum ImageColorSpace {
  /\*\*
  - Color space is CMYK.
    \*/
    CMYK = 3,

/\*\*

- Color space is DeviceN.
  \*/
  DeviceN = 6,

/\*\*

- Color space is Gray.
  \*/
  GrayScale = 1,

/\*\*

- Color space is Indexed.
  \*/
  Indexed = 7,

/\*\*

- Color space is LAB.
  \*/
  LAB = 4,

/\*\*

- Color space is RGB.
  \*/
  RGB = 2,

/\*\*

- Color space is Separation.
  \*/
  Separation = 5,
  }

/\*\*

- Stroke cap style.
  \*/
  declare enum StrokeCap {
  /\*\*
  - Cap style is butted.
    \*/
    BUTTENDCAP = 1,

/\*\*

- Cap style is projecting.
  \*/
  PROJECTINGENDCAP = 3,

/\*\*

- Cap style is rounded.
  \*/
  ROUNDENDCAP = 2,
  }

/\*\*

- Stroke join style.
  \*/
  declare enum StrokeJoin {
  /\*\*
  - Joints use a bevel.
    \*/
    BEVELENDJOIN = 3,

/\*\*

- Joints use a miter.
  \*/
  MITERENDJOIN = 1,

/\*\*

- Joints are rounded.
  \*/
  ROUNDENDJOIN = 2,
  }

/\*\*

- Selection state for a path point.
  \*/
  declare enum PathPointSelection {
  /\*\*
  - Anchor point is selected.
    \*/
    ANCHORPOINT = 2,

/\*\*

- Left direction point is selected.
  \*/
  LEFTDIRECTION = 3,

/\*\*

- Left and right direction points are selected.
  \*/
  LEFTRIGHTPOINT = 5,

/\*\*

- Path point has no selection.
  \*/
  NOSELECTION = 1,

/\*\*

- Right direction point is selected.
  \*/
  RIGHTDIRECTION = 4,
  }

/\*\*

- Path point kind, either smooth or corner.
  \*/
  declare enum PointType {
  /\*\*
  - Corner point type.
    \*/
    CORNER = 2,

/\*\*

- Smooth path point type.
  \*/
  SMOOTH = 1,
  }

/\*\*

- Text art category.
  \*/
  declare enum TextType {
  /\*\*
  - Text constrained inside an area.
    \*/
    AREATEXT = 1,

/\*\*

- Text placed along a path.
  \*/
  PATHTEXT = 2,

/\*\*

- Text created from a point.
  \*/
  POINTTEXT = 0,
  }

/\*\*

- Text antialiasing category.
  \*/
  declare enum TextAntialias {
  /\*\*
  - Text placed along a path.
    \*/
    CRISP = 3,

/\*\*

- Text created from a point.
  \*/
  NONE = 1,

/\*\*

- Text constrained inside an area.
  \*/
  SHARP = 2,

/\*\*

- Text placed along a path.
  \*/
  STRONG = 4,
  }

/\*\*

- Gradient category.
  \*/
  declare enum GradientType {
  /\*\*
  - Gradient is linear.
    \*/
    LINEAR = 1,

/\*\*

- \*/
  RADIAL = 2,
  }

/\*\*

- Orientation value.
  \*/
  declare enum TextOrientation {
  /\*\*
  - Orientation is horizontal.
    \*/
    HORIZONTAL = 0,

/\*\*

- Orientation is vertical.
  \*/
  VERTICAL = 1,
  }

/\*\*

- Crop style value.
  \*/
  declare enum CropOptions {
  /\*\*
  - Crop style is Japanese.
    \*/
    Japanese = 2,

/\*\*

- Crop style is Standard.
  \*/
  Standard = 1,
  }

/\*\*

- State of a raster link.
  \*/
  declare enum RasterLinkState {
  /\*\*
  - Image data comes from the linked file.
    \*/
    DATAFROMFILE = 2,

/\*\*

- Image data has changed.
  \*/
  DATAMODIFIED = 3,

/\*\*

- Image data is unset.
  \*/
  NODATA = 1,
  }

/\*\*

- Tab stop alignment.
  \*/
  declare enum TabStopAlignment {
  /\*\*
  - \*/
    Center = 1,

/\*\*

- \*/
  Decimal = 3,

/\*\*

- \*/
  Left = 0,

/\*\*

- \*/
  Right = 2,
  }

/\*\*

- Paragraph alignment value.
  \*/
  declare enum Justification {
  /\*\*
  - \*/
    CENTER = 2,

/\*\*

- \*/
  FULLJUSTIFY = 6,

/\*\*

- \*/
  FULLJUSTIFYLASTLINECENTER = 5,

/\*\*

- \*/
  FULLJUSTIFYLASTLINELEFT = 3,

/\*\*

- \*/
  FULLJUSTIFYLASTLINERIGHT = 4,

/\*\*

- \*/
  LEFT = 0,

/\*\*

- \*/
  RIGHT = 1,
  }

/\*\*

- Transformation reference point.
  \*/
  declare enum Transformation {
  /\*\*
  - Transform from the object's bottom edge.
    \*/
    BOTTOM = 7,

/\*\*

- Transform from the object's bottom left corner.
  \*/
  BOTTOMLEFT = 4,

/\*\*

- Transform from the object's bottom right corner.
  \*/
  BOTTOMRIGHT = 10,

/\*\*

- Transform from the object's center.
  \*/
  CENTER = 6,

/\*\*

- Transform from the illustration's page origin.
  \*/
  DOCUMENTORIGIN = 1,

/\*\*

- Transform from the object's left edge.
  \*/
  LEFT = 3,

/\*\*

- Transform from the object's right edge.
  \*/
  RIGHT = 9,

/\*\*

- Transform from the object's top edge.
  \*/
  TOP = 5,

/\*\*

- Transform from the object's top left corner.
  \*/
  TOPLEFT = 2,

/\*\*

- Transform from the object's top right corner.
  \*/
  TOPRIGHT = 8,
  }

/\*\*

- Library types used by Illustrator.
  \*/
  declare enum LibraryType {
  /\*\*
  - Brushes library for Illustrator.
    \*/
    BRUSHES = 3,

/\*\*

- Graphic styles library for Illustrator.
  \*/
  GRAPHICSTYLES = 4,

/\*\*

- Artwork from Illustrator.
  \*/
  ILLUSTRATORARTWORK = 1,

/\*\*

- Swatches library for Illustrator.
  \*/
  SWATCHES = 2,

/\*\*

- Symbols library for Illustrator.
  \*/
  SYMBOLS = 5,
  }

/\*\*

- Document types that can be saved.
  \*/
  declare enum DocumentType {
  /\*\*
  - File format is EPS.
    \*/
    EPS = 2,

/\*\*

- File format is FXG.
  \*/
  FXG = 4,

/\*\*

- File format is Illustrator.
  \*/
  ILLUSTRATOR = 1,

/\*\*

- File format is Acrobat PDF.
  \*/
  PDF = 3,
  }

/\*\*

- File types available for export.
  \*/
  declare enum ExportType {
  /\*\*
  - Export format is AutoCAD.
    \*/
    AUTOCAD = 8,

/\*\*

- Export format is Flash.
  \*/
  FLASH = 7,

/\*\*

- Export format is GIF.
  \*/
  GIF = 6,

/\*\*

- Export format is JPEG.
  \*/
  JPEG = 1,

/\*\*

- Export format is Photoshop.
  \*/
  PHOTOSHOP = 2,

/\*\*

- Export format is PNG 24-bit.
  \*/
  PNG24 = 5,

/\*\*

- Export format is PNG 8-bit.
  \*/
  PNG8 = 4,

/\*\*

- Export format is SVG.
  \*/
  SVG = 3,

/\*\*

- Export format is TIFF.
  \*/
  TIFF = 9,

/\*\*

- Export format is Web Optimized SVG.
  \*/
  WOSVG = 10,
  }

/\*\*

- Color reduction method for PNG8 and GIF exports.
  \*/
  declare enum ColorReductionMethod {
  /\*\*
  - \*/
    ADAPTIVE = 0x41647074,

/\*\*

- \*/
  PERCEPTUAL = 0x50726370,

/\*\*

- \*/
  SELECTIVE = 0x536c7476,

/\*\*

- \*/
  WEB = 0x57656220,
  }

/\*\*

- Color dither method for PNG8 and GIF exports.
  \*/
  declare enum ColorDitherMethod {
  /\*\*
  - \*/
    DIFFUSION = 0x4466736e,

/\*\*

- \*/
  NOISE = 0x424e6f69,

/\*\*

- Dithering is not applied.
  \*/
  NOREDUCTION = 0x4e6f6e65,

/\*\*

- \*/
  PATTERNDITHER = 0x5074726e,
  }

/\*\*

- Compatibility category.
  \*/
  declare enum Compatibility {
  /\*\*
  - \*/
    ILLUSTRATOR10 = 10,

/\*\*

- \*/
  ILLUSTRATOR11 = 11,

/\*\*

- \*/
  ILLUSTRATOR12 = 12,

/\*\*

- \*/
  ILLUSTRATOR13 = 13,

/\*\*

- \*/
  ILLUSTRATOR14 = 14,

/\*\*

- \*/
  ILLUSTRATOR15 = 15,

/\*\*

- \*/
  ILLUSTRATOR16 = 16,

/\*\*

- \*/
  ILLUSTRATOR17 = 17,

/\*\*

- \*/
  ILLUSTRATOR3 = 3,

/\*\*

- \*/
  ILLUSTRATOR8 = 8,

/\*\*

- \*/
  ILLUSTRATOR9 = 9,

/\*\*

- \*/
  JAPANESEVERSION3 = 3,
  }

/\*\*

- Provides matching for PDF document color characteristics.
  \*/
  declare enum PDFXStandard {
  /\*\*
  - Allows a CMYK and spot color workflow only, aimed at one output device.
    \*/
    PDFX1A2001 = 2,

/\*\*

- Allows a CMYK and spot color workflow only, aimed at one output device.
  \*/
  PDFX1A2003 = 3,

/\*\*

- Allows color-managed workflow use with device-independent color plus CMYK and spot colors.
  \*/
  PDFX32001 = 4,

/\*\*

- Allows color-managed workflow use with device-independent color plus CMYK and spot colors.
  \*/
  PDFX32002 = 4,

/\*\*

- Allows color-managed workflow use with device-independent color plus CMYK and spot colors.
  \*/
  PDFX32003 = 5,

/\*\*

- Allows color-managed workflow use with device-independent color plus CMYK and spot colors.
  \*/
  PDFX42007 = 6,

/\*\*

- No PDF standard is being followed by the user.
  \*/
  PDFXNONE = 1,
  }

/\*\*

- PDF compatibility category.
  \*/
  declare enum PDFCompatibility {
  /\*\*
  - Compatible with Acrobat version 4.
    \*/
    ACROBAT4 = 4,

/\*\*

- Compatible with Acrobat version 5.
  \*/
  ACROBAT5 = 5,

/\*\*

- Compatible with Acrobat version 6.
  \*/
  ACROBAT6 = 6,

/\*\*

- Compatible with Acrobat version 7.
  \*/
  ACROBAT7 = 7,

/\*\*

- Compatible with Acrobat version 8.
  \*/
  ACROBAT8 = 8,
  }

/\*\*

- Photoshop compatibility category.
  \*/
  declare enum PhotoshopCompatibility {
  /\*\*
  - Compatible with Photoshop version 6.
    \*/
    PHOTOSHOP6 = 2,

/\*\*

- Compatible with Photoshop version 8.
  \*/
  PHOTOSHOP8 = 1,
  }

/\*\*

- Compression category.
  \*/
  declare enum CompressionQuality {
  /\*\*
  - Automatic JPEG2000 compression at high quality.
    \*/
    AUTOMATICJPEG2000HIGH = 18,

/\*\*

- Automatic JPEG2000 compression with lossless output.
  \*/
  AUTOMATICJPEG2000LOSSLESS = 20,

/\*\*

- Automatic JPEG2000 compression at low quality.
  \*/
  AUTOMATICJPEG2000LOW = 16,

/\*\*

- Automatic JPEG2000 compression at maximum quality.
  \*/
  AUTOMATICJPEG2000MAXIMUM = 19,

/\*\*

- Automatic JPEG2000 compression at medium quality.
  \*/
  AUTOMATICJPEG2000MEDIUM = 17,

/\*\*

- Automatic JPEG2000 compression at minimum quality.
  \*/
  AUTOMATICJPEG2000MINIMUM = 15,

/\*\*

- Automatic JPEG compression at high quality.
  \*/
  AUTOMATICJPEGHIGH = 13,

/\*\*

- Automatic JPEG compression at low quality.
  \*/
  AUTOMATICJPEGLOW = 11,

/\*\*

- Automatic JPEG compression at maximum quality.
  \*/
  AUTOMATICJPEGMAXIMUM = 14,

/\*\*

- Automatic JPEG compression at medium quality.
  \*/
  AUTOMATICJPEGMEDIUM = 12,

/\*\*

- Chooses JPEG or ZIP automatically, applying minimum compression from image content.
  \*/
  AUTOMATICJPEGMINIMUM = 10,

/\*\*

- \*/
  JPEG2000HIGH = 24,

/\*\*

- \*/
  JPEG2000LOSSLESS = 26,

/\*\*

- \*/
  JPEG2000LOW = 22,

/\*\*

- \*/
  JPEG2000MAXIMUM = 25,

/\*\*

- \*/
  JPEG2000MEDIUM = 23,

/\*\*

- \*/
  JPEG2000MINIMUM = 21,

/\*\*

- \*/
  JPEGHIGH = 6,

/\*\*

- \*/
  JPEGLOW = 4,

/\*\*

- \*/
  JPEGMAXIMUM = 7,

/\*\*

- \*/
  JPEGMEDIUM = 5,

/\*\*

- \*/
  JPEGMINIMUM = 3,

/\*\*

- Compression is automatic.
  \*/
  None = 1,

/\*\*

- \*/
  ZIP4BIT = 8,

/\*\*

- \*/
  ZIP8BIT = 9,
  }

/\*\*

- PDF color conversion policy.
  \*/
  declare enum ColorConversion {
  /\*\*
  - Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
    \*/
    COLORCONVERSIONREPURPOSE = 2,

/\*\*

- Changes all colors into the profile chosen for Destination.
  \*/
  COLORCONVERSIONTODEST = 1,

/\*\*

- Leaves color data unchanged.
  \*/
  None = 0,
  }

/\*\*

- Destination profile for PDF output.
  \*/
  declare enum ColorDestination {
  /\*\*
  - Changes all colors into the profile chosen for Destination.
    \*/
    COLORDESTINATIONDOCCMYK = 1,

/\*\*

- Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
  \*/
  COLORDESTINATIONDOCRGB = 3,

/\*\*

- Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
  \*/
  COLORDESTINATIONPROFILE = 5,

/\*\*

- Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
  \*/
  COLORDESTINATIONWORKINGCMYK = 2,

/\*\*

- Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
  \*/
  COLORDESTINATIONWORKINGRGB = 4,

/\*\*

- N/A.
  \*/
  None = 0,
  }

/\*\*

- Inclusion setting for PDF ICC profiles.
  \*/
  declare enum ColorProfile {
  /\*\*
  - Tags everything (embedProfile == true)
    \*/
    INCLUDEALLPROFILE = 1,

/\*\*

- Tags everything with the destination profile.
  \*/
  INCLUDEDESTPROFILE = 4,

/\*\*

- Tags every RGB item while leaving CMYK unchanged.
  \*/
  INCLUDERGBPROFILE = 3,

/\*\*

- Keeps tagged items tagged and untagged items untagged.
  \*/
  LEAVEPROFILEUNCHANGED = 2,

/\*\*

- Removes all profiles (embedProfile == false)
  \*/
  None = 0,
  }

/\*\*

- Monochrome compression category.
  \*/
  declare enum MonochromeCompression {
  /\*\*
  - Compression uses CCITT Group 3.
    \*/
    CCIT3 = 1,

/\*\*

- Compression uses CCITT Group 4.
  \*/
  CCIT4 = 2,

/\*\*

- Compression uses ZIP.
  \*/
  MONOZIP = 3,

/\*\*

- Compression is automatic.
  \*/
  None = 0,

/\*\*

- Compression uses RLE.
  \*/
  RUNLENGTH = 4,
  }

/\*\*

- Pdf trim mark weight choices.
  \*/
  declare enum PDFTrimMarkWeight {
  /\*\*
  - \*/
    TRIMMARKWEIGHT0125 = 1,

/\*\*

- \*/
  TRIMMARKWEIGHT025 = 2,

/\*\*

- \*/
  TRIMMARKWEIGHT05 = 3,
  }

/\*\*

- Pdf overprint choices.
  \*/
  declare enum PDFOverprint {
  /\*\*
  - Overprint is discarded.
    \*/
    DISCARDPDFOVERPRINT = 2,

/\*\*

- Overprint is preserved.
  \*/
  PRESERVEPDFOVERPRINT = 1,
  }

/\*\*

- Pdf printing permission choices.
  \*/
  declare enum PDFPrintAllowedEnum {
  /\*\*
  - Allows high resolution printing - 128bit.
    \*/
    PRINT128HIGHRESOLUTION = 3,

/\*\*

- Allows printing only at low resolution - 128bit.
  \*/
  PRINT128LOWRESOLUTION = 2,

/\*\*

- Allows no printing - 128bit.
  \*/
  PRINT128NONE = 1,

/\*\*

- Allows high resolution printing - 40bit.
  \*/
  PRINT40HIGHRESOLUTION = 5,

/\*\*

- Allows no printing - 40bit.
  \*/
  PRINT40NONE = 4,
  }

/\*\*

- Choices governing permitted edits in a pdf document.
  \*/
  declare enum PDFChangesAllowedEnum {
  /\*\*
  - Allows any changes except page extraction - 128bit.
    \*/
    CHANGE128ANYCHANGES = 5,

/\*\*

- Allows comments - 128bit.
  \*/
  CHANGE128COMMENTING = 4,

/\*\*

- Allows page editing - 128bit.
  \*/
  CHANGE128EDITPAGE = 2,

/\*\*

- Allows form field filling and signing - 128bit.
  \*/
  CHANGE128FILLFORM = 3,

/\*\*

- Allows no changes - 128bit.
  \*/
  CHANGE128NONE = 1,

/\*\*

- Allows any changes except page extraction - 40bit.
  \*/
  CHANGE40ANYCHANGES = 9,

/\*\*

- Allows comments - 40bit.
  \*/
  CHANGE40COMMENTING = 7,

/\*\*

- Allows no changes - 40bit.
  \*/
  CHANGE40NONE = 6,

/\*\*

- Allows page layout changes - 40bit.
  \*/
  CHANGE40PAGELAYOUT = 8,
  }

/\*\*

- Resampling method.
  \*/
  declare enum DownsampleMethod {
  /\*\*
  - Uses Average Downsampling.
    \*/
    AVERAGEDOWNSAMPLE = 1,

/\*\*

- Uses Bicubic Downsampling.
  \*/
  BICUBICDOWNSAMPLE = 3,

/\*\*

- Uses Downsampling.
  \*/
  NODOWNSAMPLE = 0,

/\*\*

- Uses Subsampling.
  \*/
  SUBSAMPLE = 2,
  }

/\*\*

- Preview category.
  \*/
  declare enum EPSPreview {
  /\*\*
  - Macintosh preview in black and white.
    \*/
    BWMACINTOSH = 2,

/\*\*

- PC preview in black and white.
  \*/
  BWTIFF = 4,

/\*\*

- Macintosh preview in color.
  \*/
  COLORMACINTOSH = 3,

/\*\*

- PC preview in color.
  \*/
  COLORTIFF = 6,

/\*\*

- Preview is absent.
  \*/
  None = 1,

/\*\*

- Transparent color PC preview (8 or later)
  \*/
  TRANSPARENTCOLORTIFF = 5,
  }

/\*\*

- PostScript level choices for EPS saving.
  \*/
  declare enum EPSPostScriptLevelEnum {
  /\*\*
  - Targets PostScript Level 2.
    \*/
    LEVEL2 = 2,

/\*\*

- Targets PostScript Level 3.
  \*/
  LEVEL3 = 3,
  }

/\*\*

- PostScript support levels for printers.
  \*/
  declare enum PrinterPostScriptLevelEnum {
  /\*\*
  - Supports PostScript Level 1.
    \*/
    PSLEVEL1 = 1,

/\*\*

- Supports PostScript Level 2.
  \*/
  PSLEVEL2 = 2,

/\*\*

- Supports PostScript Level 3.
  \*/
  PSLEVEL3 = 3,
  }

/\*\*

- Choices that can be used when saving a file.
  \*/
  declare enum SaveOptions {
  /\*\*
  - Leaves changes unsaved.
    \*/
    DONOTSAVECHANGES = 2,

/\*\*

- Prompts the user about saving.
  \*/
  PROMPTTOSAVECHANGES = 3,

/\*\*

- Saves changes.
  \*/
  SAVECHANGES = 1,
  }

/\*\*

- \*/
  declare enum RulerUnits {
  /\*\*

  - Ruler units use centimeters.
    \*/
    Centimeters = 3,

  /\*\*

  - Ruler unit is unknown.
    \*/
    Inches = 2,

  /\*\*

  - Ruler units use millimeters.
    \*/
    Millimeters = 6,

  /\*\*

  - Ruler units use picas.
    \*/
    Picas = 5,

  /\*\*

  - Ruler units use pixels.
    \*/
    Pixels = 8,

  /\*\*

  - Ruler units use points.
    \*/
    Points = 4,

  /\*\*

  - Ruler units use Qs.
    \*/
    Qs = 7,

  /\*\*

  - Ruler unit is unknown.
    \*/
    Unknown = 1,
    }

/\*\*

- Blend modes for object compositing.
  \*/
  declare enum BlendModes {
  /\*\*
  - \*/
    COLORBLEND = 14,

/\*\*

- \*/
  COLORBURN = 7,

/\*\*

- \*/
  COLORDODGE = 6,

/\*\*

- \*/
  DARKEN = 8,

/\*\*

- \*/
  DIFFERENCE = 10,

/\*\*

- \*/
  EXCLUSION = 11,

/\*\*

- \*/
  HARDLIGHT = 5,

/\*\*

- \*/
  HUE = 12,

/\*\*

- \*/
  LIGHTEN = 9,

/\*\*

- \*/
  LUMINOSITY = 15,

/\*\*

- \*/
  MULTIPLY = 1,

/\*\*

- \*/
  NORMAL = 0,

/\*\*

- \*/
  OVERLAY = 3,

/\*\*

- \*/
  SATURATIONBLEND = 13,

/\*\*

- \*/
  SCREEN = 2,

/\*\*

- \*/
  SOFTLIGHT = 4,
  }

/\*\*

- Knockout state for a page item.
  \*/
  declare enum KnockoutState {
  /\*\*
  - Knockout is off.
    \*/
    DISABLED = 0,

/\*\*

- Knockout is off.
  \*/
  ENABLED = 1,

/\*\*

- Knockout state comes from the group?
  \*/
  INHERITED = 2,

/\*\*

- Knockout state is unknown or uninitialized.
  \*/
  Unknown = -1,
  }

/\*\*

- Method for rearranging the art item.
  \*/
  declare enum ZOrderMethod {
  /\*\*
  - Moves art forward one step in its group or layer.
    \*/
    BRINGFORWARD = 2,

/\*\*

- Moves art to the front of its group or layer.
  \*/
  BRINGTOFRONT = 1,

/\*\*

- Moves art backward one step in its group or layer.
  \*/
  SENDBACKWARD = 3,

/\*\*

- Moves art to the back of its group or layer.
  \*/
  SENDTOBACK = 4,
  }

/\*\*

- SVG DTD version.
  \*/
  declare enum SVGDTDVersion {
  /\*\*
  - DTD is SVG 1.0.
    \*/
    `SVG1_0` = 1,

/\*\*

- DTD is SVG 1.1.
  \*/
  `SVG1_1` = 2,

/\*\*

- DTD is SVG Basic 1.1.
  \*/
  `SVGBASIC1_1` = 5,

/\*\*

- DTD is SVG Tiny 1.1.
  \*/
  `SVGTINY1_1` = 3,

/\*\*

- DTD is SVG Tiny 1.1 Plus.
  \*/
  `SVGTINY1_1PLUS` = 4,

/\*\*

- DTD is SVG Tiny 1.2.
  \*/
  `SVGTINY1_2` = 6,
  }

/\*\*

- Controls the included SVG font type.
  \*/
  declare enum SVGFontType {
  /\*\*
  - \*/
    OUTLINEFONT = 3,

/\*\*

- \*/
  SVGFONT = 2,
  }

/\*\*

- Controls the included SVG font subset.
  \*/
  declare enum SVGFontSubsetting {
  /\*\*
  - \*/
    ALLGLYPHS = 7,

/\*\*

- \*/
  COMMONENGLISH = 3,

/\*\*

- \*/
  COMMONROMAN = 5,

/\*\*

- \*/
  GLYPHSUSED = 2,

/\*\*

- \*/
  GLYPHSUSEDPLUSENGLISH = 4,

/\*\*

- \*/
  GLYPHSUSEDPLUSROMAN = 6,

/\*\*

- System fonts are used.
  \*/
  None = 1,
  }

/\*\*

- \*/
  declare enum SVGDocumentEncoding {
  /\*\*

  - Encoding references the ISO 8859-1 standard.
    \*/
    ASCII = 1,

  /\*\*

  - \*/
    UTF16 = 3,

  /\*\*

  - \*/
    UTF8 = 2,
    }

/\*\*

- \*/
  declare enum SVGCSSPropertyLocation {
  /\*\*

  - Attributes store style information with an entity reference.
    \*/
    ENTITIES = 2,

  /\*\*

  - \*/
    PRESENTATIONATTRIBUTES = 4,

  /\*\*

  - \*/
    STYLEATTRIBUTES = 1,

  /\*\*

  - \*/
    STYLEELEMENTS = 3,
    }
