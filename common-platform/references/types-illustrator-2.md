# Illustrator (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- SVG Id type.
  \*/
  declare enum SVGIdType {
  /\*\*
  - Attributes store style information with an entity reference.
    \*/
    SVGIDMINIMAL = 0,

/\*\*

- \*/
  SVGIDREGULAR = 1,

/\*\*

- \*/
  SVGIDUNIQUE = 2,
  }

/\*\*

- Selects the storage location for raster images.
  \*/
  declare enum RasterImageLocation {
  /\*\*
  - Embeds raster images in the svg file.
    \*/
    EMBED = 0,

/\*\*

- \*/
  LINK = 1,

/\*\*

- \*/
  PRESERVE = 2,
  }

/\*\*

- Transparency flattening behavior for pre-AI9 file formats.
  \*/
  declare enum OutputFlattening {
  /\*\*
  - \*/
    PRESERVEAPPEARANCE = 1,

/\*\*

- Transparency is discarded.
  \*/
  PRESERVEPATHS = 0,
  }

/\*\*

- Custom color color model.
  \*/
  declare enum ColorModel {
  /\*\*
  - Process color using mixed ink.
    \*/
    PROCESS = 1,

/\*\*

- Registration color printed in all separations.
  \*/
  REGISTRATION = 0,

/\*\*

- Spot color using separate ink.
  \*/
  SPOT = 2,
  }

/\*\*

- Spot color custom color kind.
  \*/
  declare enum SpotColorKind {
  /\*\*
  - Solid ink using four CMYK values.
    \*/
    SPOTCMYK = 0,

/\*\*

- Lab color. Applies only to spot colors.
  \*/
  SPOTLAB = 2,

/\*\*

- Solid color using three RGB values.
  \*/
  SPOTRGB = 1,
  }

/\*\*

- \*/
  declare enum FlashExportStyle {
  /\*\*

  - Sends Illustrator Artboards to Flash Files.
    \*/
    ARTBOARDSTOFILES = 5,

  /\*\*

  - Sends an Illustrator file to a Flash file.
    \*/
    ASFLASHFILE = 1,

  /\*\*

  - Sends Illustrator layers to Flash files.
    \*/
    LAYERSASFILES = 3,

  /\*\*

  - Sends Illustrator layers to Flash frames.
    \*/
    LAYERSASFRAMES = 2,

  /\*\*

  - Sends Illustrator layers to Flash Symbols.
    \*/
    LAYERSASSYMBOLS = 4,
    }

/\*\*

- Clipping behavior for the art.
  \*/
  declare enum ArtClippingOption {
  /\*\*
  - Output size follows the artboard size.
    \*/
    OUTPUTARTBOARDBOUNDS = 2,

/\*\*

- Output size follows the artwork size.
  \*/
  OUTPUTARTBOUNDS = 1,

/\*\*

- Output size follows the crop area size.
  \*/
  OUTPUTCROPRECTBOUNDS = 3,
  }

/\*\*

- SWF File version used for export.
  \*/
  declare enum FlashExportVersion {
  /\*\*
  - Uses SWF Version 1.
    \*/
    FLASHVERSION1 = 1,

/\*\*

- Uses SWF Version 2.
  \*/
  FLASHVERSION2 = 2,

/\*\*

- Uses SWF Version 3.
  \*/
  FLASHVERSION3 = 3,

/\*\*

- Uses SWF Version 4.
  \*/
  FLASHVERSION4 = 4,

/\*\*

- Uses SWF Version 5.
  \*/
  FLASHVERSION5 = 5,

/\*\*

- Uses SWF Version 6.
  \*/
  FLASHVERSION6 = 6,

/\*\*

- Uses SWF Version 7.
  \*/
  FLASHVERSION7 = 7,

/\*\*

- Uses SWF Version 8.
  \*/
  FLASHVERSION8 = 8,

/\*\*

- Uses SWF Version 9 output.
  \*/
  FLASHVERSION9 = 9,
  }

/\*\*

- \*/
  declare enum FlashImageFormat {
  /\*\*

  - \*/
    LOSSLESS = 1,

  /\*\*

  - \*/
    LOSSY = 2,
    }

/\*\*

- \*/
  declare enum LayerOrderType {
  /\*\*

  - \*/
    BOTTOMUP = 1,

  /\*\*

  - \*/
    TOPDOWN = 2,
    }

/\*\*

- \*/
  declare enum BlendAnimationType {
  /\*\*

  - \*/
    INBUILD = 2,

  /\*\*

  - \*/
    INSEQUENCE = 1,

  /\*\*

  - Blend animation is disabled.
    \*/
    NOBLENDANIMATION = 0,
    }

/\*\*

- \*/
  declare enum FlashJPEGMethod {
  /\*\*

  - \*/
    Optimized = 2,

  /\*\*

  - \*/
    Standard = 1,
    }

/\*\*

- \*/
  declare enum FlashPlaybackSecurity {
  /\*\*

  - \*/
    PlaybackLocal = 1,

  /\*\*

  - \*/
    PlaybackNetwork = 2,
    }

/\*\*

- \*/
  declare enum VariableKind {
  /\*\*

  - \*/
    GRAPH = 5,

  /\*\*

  - \*/
    IMAGE = 4,

  /\*\*

  - \*/
    TEXTUAL = 3,

  /\*\*

  - \*/
    Unknown = 1,

  /\*\*

  - \*/
    VISIBILITY = 2,
    }

/\*\*

- \*/
  declare enum AutoCADExportFileFormat {
  /\*\*

  - \*/
    DWG = 1,

  /\*\*

  - \*/
    DXF = 0,
    }

/\*\*

- \*/
  declare enum AutoCADCompatibility {
  /\*\*

  - \*/
    AutoCADRelease13 = 0,

  /\*\*

  - \*/
    AutoCADRelease14 = 1,

  /\*\*

  - \*/
    AutoCADRelease15 = 2,

  /\*\*

  - \*/
    AutoCADRelease18 = 3,

  /\*\*

  - \*/
    AutoCADRelease21 = 4,

  /\*\*

  - \*/
    AutoCADRelease24 = 5,
    }

/\*\*

- \*/
  declare enum AutoCADUnit {
  /\*\*

  - \*/
    Centimeters = 4,

  /\*\*

  - \*/
    Inches = 2,

  /\*\*

  - \*/
    Millimeters = 3,

  /\*\*

  - \*/
    Picas = 1,

  /\*\*

  - \*/
    Pixels = 5,

  /\*\*

  - \*/
    Points = 0,
    }

/\*\*

- \*/
  declare enum AutoCADColors {
  /\*\*

  - \*/
    Max16Colors = 1,

  /\*\*

  - \*/
    Max256Colors = 2,

/\*\*

- \*/
  Max8Colors = 0,

/\*\*

- \*/
  TrueColors = 3,
  }

/\*\*

- \*/
  declare enum AutoCADRasterFormat {
  /\*\*

  - \*/
    JPEG = 1,

  /\*\*

  - \*/
    PNG = 0,
    }

/\*\*

- \*/
  declare enum AutoCADExportOption {
  /\*\*

  - \*/
    MaximumEditability = 1,

  /\*\*

  - \*/
    PreserveAppearance = 0,
    }

/\*\*

- \*/
  declare enum AutoCADGlobalScaleOption {
  /\*\*

  - \*/
    FitArtboard = 1,

  /\*\*

  - \*/
    OriginalSize = 0,

  /\*\*

  - \*/
    ScaleByValue = 2,
    }

/\*\*

- Byte Order value for a TIFF file.
  \*/
  declare enum TIFFByteOrder {
  /\*\*
  - \*/
    IBMPC = 0,

/\*\*

- \*/
  MACINTOSH = 1,
  }

/\*\*

- COM user interaction values.
  \*/
  declare enum UserInteractionLevel {
  /\*\*
  - \*/
    DISPLAYALERTS = 2,

/\*\*

- \*/
  DONTDISPLAYALERTS = -1,
  }

/\*\*

- \*/
  declare enum PolarityValues {
  /\*\*

  - \*/
    NEGATIVE = -1,

  /\*\*

  - \*/
    POSITIVE = 1,
    }

/\*\*

- Timing for showing a JavaScript debugger.
  \*/
  declare enum JavaScriptExecutionMode {
  /\*\*
  - Opens the JavaScript debugger before the first JavaScript line.
    \*/
    BeforeRunning = 3,

/\*\*

- Opens the JavaScript debugger when a runtime error occurs.
  \*/
  OnRuntimeError = 2,

/\*\*

- Keeps the JavaScript debugger hidden. Runtime errors throw JavaScript exceptions instead.
  \*/
  never = 1,
  }

/\*\*

- Artwork layers or objects selected for printing.
  \*/
  declare enum PrintArtworkDesignation {
  /\*\*
  - Prints every layer.
    \*/
    ALLLAYERS = 2,

/\*\*

- Prints visible layers.
  \*/
  VISIBLELAYERS = 1,

/\*\*

- Prints layers that are both visible and printable.
  \*/
  VISIBLEPRINTABLELAYERS = 0,
  }

/\*\*

- Printing bounds category.
  \*/
  declare enum PrintingBounds {
  /\*\*
  - Uses artboard bounds.
    \*/
    ARTBOARDBOUNDS = 0,

/\*\*

- Uses artwork bounds.
  \*/
  ARTWORKBOUNDS = 1,

/\*\*

- Uses crop bounds.
  \*/
  CROPBOUNDS = 2,
  }

/\*\*

- Color separation mode.
  \*/
  declare enum PrintColorSeparationMode {
  /\*\*
  - Composite mode.
    \*/
    COMPOSITE = 0,

/\*\*

- Host based color separation mode.
  \*/
  HOSTBASEDSEPARATION = 1,

/\*\*

- InRIP color separation mode.
  \*/
  INRIPSEPARATION = 2,
  }

/\*\*

- Printing orientation for artwork.
  \*/
  declare enum PrintOrientation {
  /\*\*
  - Auto Rotate orientation.
    \*/
    AUTOROTATE = 4,

/\*\*

- Landscape orientation.
  \*/
  LANDSCAPE = 1,

/\*\*

- Portrait orientation.
  \*/
  PORTRAIT = 0,

/\*\*

- Reverse landscape orientation.
  \*/
  REVERSELANDSCAPE = 3,

/\*\*

- Reverse portrait orientation.
  \*/
  REVERSEPORTRAIT = 2,
  }

/\*\*

- Artwork print placement on media.
  \*/
  declare enum PrintPosition {
  /\*\*
  - Translates to media bottom center.
    \*/
    TRANSLATEBOTTOM = 8,

/\*\*

- Translates to media bottom left.
  \*/
  TRANSLATEBOTTOMLEFT = 7,

/\*\*

- Translates to media bottom right.
  \*/
  TRANSLATEBOTTOMRIGHT = 9,

/\*\*

- Translates to media center.
  \*/
  TRANSLATECENTER = 5,

/\*\*

- Translates to media left center.
  \*/
  TRANSLATELEFT = 4,

/\*\*

- Translates to media right center.
  \*/
  TRANSLATERIGHT = 6,

/\*\*

- Translates to media top center.
  \*/
  TRANSLATETOP = 2,

/\*\*

- Translates to media top left.
  \*/
  TRANSLATETOPLEFT = 1,

/\*\*

- Translates to media top right.
  \*/
  TRANSLATETOPRIGHT = 3,
  }

/\*\*

- Page tiling category.
  \*/
  declare enum PrintTiling {
  /\*\*
  - Tiles full pages.
    \*/
    TILEFULLPAGES = 1,

/\*\*

- Tiles imageable areas.
  \*/
  TILEIMAGEABLEAREAS = 2,

/\*\*

- Tiles one full page.
  \*/
  TILESINGLEFULLPAGE = 0,
  }

/\*\*

- Page marks style category.
  \*/
  declare enum PageMarksTypes {
  /\*\*
  - Page marks use the Japanese style.
    \*/
    Japanese = 1,

/\*\*

- Page marks use the Roman style.
  \*/
  Roman = 0,
  }

/\*\*

- Printer font download mode.
  \*/
  declare enum PrintFontDownloadMode {
  /\*\*
  - Downloads complete fonts.
    \*/
    DOWNLOADCOMPLETE = 2,

/\*\*

- Downloads no fonts.
  \*/
  DOWNLOADNONE = 0,

/\*\*

- Downloads a subset.
  \*/
  DOWNLOADSUBSET = 1,
  }

/\*\*

- Font substitution policy.
  \*/
  declare enum FontSubstitutionPolicy {
  /\*\*
  - Substitutes a device font.
    \*/
    SUBSTITUTEDEVICE = 2,

/\*\*

- Substitutes an oblique font.
  \*/
  SUBSTITUTEOBLIQUE = 0,

/\*\*

- Substitutes a tint font.
  \*/
  SUBSTITUTETINT = 1,
  }

/\*\*

- PostScript image compression category.
  \*/
  declare enum PostScriptImageCompressionType {
  /\*\*
  - Image compression is absent.
    \*/
    IMAGECOMPRESSIONNONE = 0,

/\*\*

- Compression uses JPEG.
  \*/
  JPEG = 2,

/\*\*

- Compression uses RLE.
  \*/
  RLE = 1,
  }

/\*\*

- Color profile category.
  \*/
  declare enum PrintColorProfile {
  /\*\*
  - Uses a custom color profile.
    \*/
    CUSTOMPROFILE = 3,

/\*\*

- Uses old style AI color profile.
  \*/
  OLDSTYLEPROFILE = 0,

/\*\*

- Matches the printer color profile.
  \*/
  PRINTERPROFILE = 2,

/\*\*

- Matches the source color profile.
  \*/
  SOURCEPROFILE = 1,
  }

/\*\*

- Color intent category.
  \*/
  declare enum PrintColorIntent {
  /\*\*
  - Intent is absolute colorimetric.
    \*/
    ABSOLUTECOLORIMETRIC = 3,

/\*\*

- Intent is perceptual color.
  \*/
  PERCEPTUALINTENT = 0,

/\*\*

- Intent is relative colorimetric.
  \*/
  RELATIVECOLORIMETRIC = 2,

/\*\*

- Intent is saturation color.
  \*/
  SATURATIONINTENT = 1,
  }

/\*\*

- Printer category.
  \*/
  declare enum PrinterTypeEnum {
  /\*\*
  - Printer is Non PostScript.
    \*/
    NONPOSTSCRIPTPRINTER = 2,

/\*\*

- Printer is PostScript.
  \*/
  POSTSCRIPTPRINTER = 1,

/\*\*

- Printer type is unknown.
  \*/
  Unknown = 0,
  }

/\*\*

- Printer color mode.
  \*/
  declare enum PrinterColorMode {
  /\*\*
  - Printer is black and white.
    \*/
    BLACKANDWHITEPRINTER = 2,

/\*\*

- Printer uses color.
  \*/
  COLORPRINTER = 0,

/\*\*

- Printer uses grayscale.
  \*/
  GRAYSCALEPRINTER = 1,
  }

/\*\*

- Ink print status.
  \*/
  declare enum InkPrintStatus {
  /\*\*
  - Converts to process color while printing.
    \*/
    CONVERTINK = 2,

/\*\*

- Disables the ink while printing.
  \*/
  DISABLEINK = 0,

/\*\*

- Enables the ink while printing.
  \*/
  ENABLEINK = 1,
  }

/\*\*

- Ink category.
  \*/
  declare enum InkType {
  /\*\*
  - Ink color is black.
    \*/
    BLACKINK = 3,

/\*\*

- Ink color is custom.
  \*/
  CUSTOMINK = 4,

/\*\*

- Ink color is cyan.
  \*/
  CYANINK = 0,

/\*\*

- Ink color is magenta.
  \*/
  MAGENTAINK = 1,

/\*\*

- Ink color is yellow.
  \*/
  YELLOWINK = 2,
  }

/\*\*

- Trapping category.
  \*/
  declare enum TrappingType {
  /\*\*
  - Opaque trapping type is ignored.
    \*/
    IGNOREOPAQUE = 3,

/\*\*

- Trapping type is normal.
  \*/
  NORMALTRAPPING = 0,

/\*\*

- Trapping type is opaque.
  \*/
  OPAQUE = 2,

/\*\*

- Trapping type is transparent.
  \*/
  TRANSPARENT = 1,
  }

/\*\*

- Automatic kerning category.
  \*/
  declare enum AutoKernType {
  /\*\*
  - Kerning is automatic.
    \*/
    AUTO = 1,

/\*\*

- Metrics roman only.
  \*/
  METRICSROMANONLY = 3,

/\*\*

- Automatic kerning is disabled.
  \*/
  NOAUTOKERN = 0,

/\*\*

- Optical kerning.
  \*/
  OPTICAL = 2,
  }

/\*\*

- Automatic leading category.
  \*/
  declare enum AutoLeadingType {
  /\*\*
  - Leading type is Roman.
    \*/
    BOTTOMTOBOTTOM = 0,

/\*\*

- Leading type is Japanese.
  \*/
  TOPTOTOP = 1,
  }

/\*\*

- Case change category.
  \*/
  declare enum CaseChangeType {
  /\*\*
  - Changes text to lower case.
    \*/
    LOWERCASE = 1,

/\*\*

- Changes text to sentence case.
  \*/
  SENTENCECASE = 3,

/\*\*

- Changes text to title case.
  \*/
  TITLECASE = 2,

/\*\*

- Changes text to upper case.
  \*/
  UPPERCASE = 0,
  }

/\*\*

- Font capitalization option.
  \*/
  declare enum FontCapsOption {
  /\*\*
  - Capitalization uses all caps.
    \*/
    ALLCAPS = 2,

/\*\*

- Capitalization uses all small caps.
  \*/
  ALLSMALLCAPS = 3,

/\*\*

- Capitalization uses normal caps.
  \*/
  NORMALCAPS = 0,

/\*\*

- Capitalization uses small caps.
  \*/
  SMALLCAPS = 1,
  }

/\*\*

- Font baseline option.
  \*/
  declare enum FontBaselineOption {
  /\*\*
  - Baseline is normal.
    \*/
    NORMALBASELINE = 0,

/\*\*

- Baseline is fauxed subscript.
  \*/
  SUBSCRIPT = 2,

/\*\*

- Baseline is fauxed superscript.
  \*/
  SUPERSCRIPT = 1,
  }

/\*\*

- OpenType font position option.
  \*/
  declare enum FontOpenTypePositionOption {
  /\*\*
  - OpenType position is denominator.
    \*/
    DENOMINATOR = 4,

/\*\*

- OpenType position is numerator.
  \*/
  NUMERATOR = 3,

/\*\*

- Position is default.
  \*/
  OPENTYPEDEFAULT = 0,

/\*\*

- OpenType position is subscript.
  \*/
  OPENTYPESUBSCRIPT = 2,

/\*\*

- OpenType position is superscript.
  \*/
  OPENTYPESUPERSCRIPT = 1,
  }

/\*\*

- Figure style category.
  \*/
  declare enum FigureStyleType {
  /\*\*
  - Figure style is default.
    \*/
    DEFAULTFIGURESTYLE = 0,

/\*\*

- Figure style is proportional lining.
  \*/
  PROPORTIONAL = 3,

/\*\*

- Figure style is proportional oldstyle.
  \*/
  PROPORTIONALOLDSTYLE = 2,

/\*\*

- Figure style is tabular lining.
  \*/
  TABULAR = 1,

/\*\*

- Figure style is tabular oldstyle.
  \*/
  TABULAROLDSTYLE = 4,
  }

/\*\*

- Baseline direction category.
  \*/
  declare enum BaselineDirectionType {
  /\*\*
  - \*/
    Standard = 1,

/\*\*

- \*/
  TateChuYoko = 3,

/\*\*

- \*/
  VerticalRotated = 2,
  }

/\*\*

- Language selector for text content.
  \*/
  declare enum LanguageType {
  /\*\*
  - \*/
    ARABIC = 39,

/\*\*

- \*/
  BENGALIINDIA = 51,

/\*\*

- \*/
  BOKMALNORWEGIAN = 8,

/\*\*

- \*/
  BRAZILLIANPORTUGUESE = 11,

/\*\*

- \*/
  BULGARIAN = 20,

/\*\*

- \*/
  CANADIANFRENCH = 3,

/\*\*

- \*/
  CATALAN = 17,

/\*\*

- \*/
  CHINESE = 29,

/\*\*

- \*/
  CZECH = 22,

/\*\*

- \*/
  DANISH = 16,

/\*\*

- \*/
  DUTCH = 15,

/\*\*

- \*/
  DUTCH2005REFORM = 43,

/\*\*

- \*/
  ENGLISH = 0,

/\*\*

- \*/
  FARSI = 41,

/\*\*

- \*/
  FINNISH = 1,

/\*\*

- \*/
  GERMAN2006REFORM = 42,

/\*\*

- \*/
  GREEK = 25,

/\*\*

- \*/
  GUJARATI = 53,

/\*\*

- \*/
  HINDI = 49,

/\*\*

- \*/
  HUNGARIAN = 28,

/\*\*

- \*/
  ICELANDIC = 27,

/\*\*

- \*/
  ITALIAN = 7,

/\*\*

- \*/
  JAPANESE = 30,

/\*\*

- \*/
  KANNADA = 57,

/\*\*

- \*/
  MALAYALAM = 58,

/\*\*

- \*/
  MARATHI = 50,

/\*\*

- Norwegian Nynorsk.
  \*/
  NYNORSKNORWEGIAN = 9,

/\*\*

- \*/
  OLDGERMAN = 5,

/\*\*

- \*/
  ORIYA = 54,

/\*\*

- \*/
  POLISH = 23,

/\*\*

- \*/
  PUNJABI = 52,

/\*\*

- \*/
  RUMANIAN = 24,

/\*\*

- \*/
  RUSSIAN = 18,

/\*\*

- \*/
  SERBIAN = 21,

/\*\*

- \*/
  SPANISH = 12,

/\*\*

- \*/
  STANDARDFRENCH = 2,

/\*\*

- \*/
  STANDARDGERMAN = 4,

/\*\*

- \*/
  STANDARDPORTUGUESE = 10,

/\*\*

- \*/
  SWEDISH = 13,

/\*\*

- \*/
  SWISSGERMAN = 6,

/\*\*

- \*/
  SWISSGERMAN2006REFORM = 44,

/\*\*

- \*/
  TAMIL = 55,

/\*\*

- \*/
  TELUGU = 56,

/\*\*

- \*/
  TURKISH = 26,

/\*\*

- \*/
  UKENGLISH = 14,

/\*\*

- \*/
  UKRANIAN = 19,
  }

/\*\*

- Alternate-glyph form choices available for text.
  \*/
  declare enum AlternateGlyphsForm {
  /\*\*
  - \*/
    DEFAULTFORM = 0,

/\*\*

- \*/
  EXPERT = 2,

/\*\*

- \*/
  FULLWIDTH = 8,

/\*\*

- \*/
  HALFWIDTH = 5,

/\*\*

- \*/
  JIS04FORM = 11,

/\*\*

- \*/
  JIS78FORM = 3,

/\*\*

- \*/
  JIS83FORM = 4,

/\*\*

- \*/
  JIS90FORM = 10,

/\*\*

- \*/
  PROPORTIONALWIDTH = 9,

/\*\*

- \*/
  QUARTERWIDTH = 7,

/\*\*

- \*/
  THIRDWIDTH = 6,

/\*\*

- \*/
  TRADITIONAL = 1,
  }

/\*\*

- Alignment setting for a style run.
  \*/
  declare enum StyleRunAlignmentType {
  /\*\*
  - \*/
    ROMANBASELINE = 2,

/\*\*

- \*/
  bottom = 0,

/\*\*

- \*/
  center = 3,

/\*\*

- \*/
  icfBottom = 1,

/\*\*

- \*/
  icfTop = 4,

/\*\*

- \*/
  top = 5,
  }

/\*\*

- Alignment choices for Wari-Chu text.
  \*/
  declare enum WariChuJustificationType {
  /\*\*
  - \*/
    Center = 2,

/\*\*

- \*/
  Left = 0,

/\*\*

- \*/
  Right = 1,

/\*\*

- \*/
  WARICHUAUTOJUSTIFY = 7,

/\*\*

- \*/
  WARICHUFULLJUSTIFY = 6,

/\*\*

- \*/
  WARICHUFULLJUSTIFYLASTLINECENTER = 5,

/\*\*

- \*/
  WARICHUFULLJUSTIFYLASTLINELEFT = 3,

/\*\*

- \*/
  WARICHUFULLJUSTIFYLASTLINERIGHT = 4,
  }

/\*\*

- Burasagari behavior selector.
  \*/
  declare enum BurasagariTypeEnum {
  /\*\*
  - \*/
    Forced = 2,

/\*\*

- \*/
  None = 0,

/\*\*

- \*/
  Standard = 1,
  }

/\*\*

- Preferred ordering rule for Kinsoku.
  \*/
  declare enum KinsokuOrderEnum {
  /\*\*
  - \*/
    PUSHIN = 0,

/\*\*

- \*/
  PUSHOUTFIRST = 1,

/\*\*

- \*/
  PUSHOUTONLY = 2,
  }

/\*\*

- PDF crop-box selector.
  \*/
  declare enum PDFBoxType {
  /\*\*
  - Crop to ArtBox. ArtBox marks the page creator's intended meaningful content bounds, including possible white space.
    \*/
    PDFARTBOX = 0,

/\*\*

- Crop to BleedBox. BleedBox gives the clipping region for page contents during production output.
  \*/
  PDFBLEEDBOX = 3,

/\*\*

- Crop to Bounding Box. Bounding Box encloses every text, graphic, and image element on the page.
  \*/
  PDFBOUNDINGBOX = 5,

/\*\*

- Crop to CropBox. CropBox identifies the page area used for display and printing.
  \*/
  PDFCROPBOX = 1,

/\*\*

- Crop to MediaBox. MediaBox describes the page's natural size, such as the dimensions of A4 sheet of paper.
  \*/
  PDFMEDIABOX = 4,

/\*\*

- Crop to TrimBox. TrimBox defines how the page content is positioned for imposition.
  \*/
  PDFTRIMBOX = 2,
  }

/\*\*

- Tracing method options for abutting or overlapping output.
  \*/
  declare enum TracingMethodType {
  /\*\*
  - Abutting tracing method.
    \*/
    TRACINGMETHODABUTTING = 0,

/\*\*

- Overlapping tracing method.
  \*/
  TRACINGMETHODOVERLAPPING = 1,
  }

/\*\*

- Tracing modes: color, grayscale, and black and white.
  \*/
  declare enum TracingModeType {
  /\*\*
  - Black and white mode for tracing.
    \*/
    TRACINGMODEBLACKANDWHITE = 2,

/\*\*

- Color mode for tracing.
  \*/
  TRACINGMODECOLOR = 0,

/\*\*

- Grayscale mode for tracing.
  \*/
  TRACINGMODEGRAY = 1,
  }

/\*\*

- Input color type choices: Full Color or Limited colors.
  \*/
  declare enum TracingColorType {
  /\*\*
  - Apply Full colors to Tracing.
    \*/
    TRACINGFULLCOLOR = 1,

/\*\*

- Apply Limited colors to Tracing.
  \*/
  TRACINGLIMITEDCOLOR = 0,
  }

/\*\*

- Chooses the vector-view style.
  \*/
  declare enum ViewType {
  /\*\*
  - Show Source Image.
    \*/
    TRACINGVIEWIMAGE = 4,

/\*\*

- Show only paths.
  \*/
  TRACINGVIEWVECTOROUTLINES = 2,

/\*\*

- Show paths together with transparent fills.
  \*/
  TRACINGVIEWVECTOROUTLINESWITHTRACING = 1,

/\*\*

- Show artwork.
  \*/
  TRACINGVIEWVECTORTRACINGRESULT = 0,

/\*\*

- Show Outlines with Transparent Image.
  \*/
  TRACINGVIEWVECTORWITHTRANSPARENTIMAGE = 3,
  }

/\*\*

- Selects the color model used during rasterization.
  \*/
  declare enum RasterizationColorModel {
  /\*\*
  - Rasterize to a 1-bit bitmap.
    \*/
    BITMAP = 3,

/\*\*

- Rasterize using the document's default color space.
  \*/
  DEFAULTCOLORMODEL = 1,

/\*\*

- Rasterize to a grayscale image.
  \*/
  GRAYSCALE = 2,
  }

/\*\*

- Selects the antialiasing method for rasterization.
  \*/
  declare enum AntiAliasingMethod {
  /\*\*
  - Optimize for the art object.
    \*/
    ARTOPTIMIZED = 1,

/\*\*

- Disallow anti-aliasing.
  \*/
  None = 0,

/\*\*

- Optimize for the type object.
  \*/
  TYPEOPTIMIZED = 2,
  }

/\*\*

- Purpose codes for color conversion through ConvertSmapleColor.
  \*/
  declare enum ColorConvertPurpose {
  /\*\*
  - Standard conversion, with no black preservation.
    \*/
    defaultpurpose = 0,

/\*\*

- Placeholder option.
  \*/
  dummypurpose = 4,

/\*\*

- Options suited to building an image for print or export.
  \*/
  exportpurpose = 2,

/\*\*

- Options suited to building an image for screen display.
  \*/
  previewpurpose = 1,
  }

/\*\*

- FXG file format version selector.
  \*/
  declare enum FXGVersion {
  /\*\*
  - FXG format 1.0.
    \*/
    VERSION1PT0 = 1,

/\*\*

- FXG format 2.0.
  \*/
  VERSION2PT0 = 2,
  }

/\*\*

- Preserve policies for filters in FXG file format.
  \*/
  declare enum FiltersPreservePolicy {
  /\*\*
  - Keep filter appearance by expanding it.
    \*/
    EXPANDFILTERS = 1,

/\*\*

- Keep filters editable.
  \*/
  KEEPFILTERSEDITABLE = 3,

/\*\*

- Keep filter appearance by rasterizing it.
  \*/
  RASTERIZEFILTERS = 2,
  }

/\*\*

- Preserve policies for text in FXG file format.
  \*/
  declare enum TextPreservePolicy {
  /\*\*
  - Convert text automatically.
    \*/
    AUTOMATICALLYCONVERTTEXT = 4,

/\*\*

- Keep text editable.
  \*/
  KEEPTEXTEDITABLE = 3,

/\*\*

- Keep text appearance by outlining it.
  \*/
  OUTLINETEXT = 1,

/\*\*

- Keep text appearance by rasterizing it.
  \*/
  RASTERIZETEXT = 2,
  }

/\*\*

- Preserve policies for gradients in FXG file format.
  \*/
  declare enum GradientsPreservePolicy {
  /\*\*
  - Convert Gradients automatically.
    \*/
    AUTOMATICALLYCONVERTGRADIENTS = 4,

/\*\*

- Keep gradients editable.
  \*/
  KEEPGRADIENTSEDITABLE = 3,
  }

/\*\*

- Blends Expand policies for FXG file format.
  \*/
  declare enum BlendsExpandPolicy {
  /\*\*
  - Convert Blends automatically.
    \*/
    AUTOMATICALLYCONVERTBLENDS = 1,

/\*\*

- Expand Blends through rasterizing.
  \*/
  RASTERIZEBLENDS = 2,
  }

/\*\*

- Illustrator coordinate-system selector.
  \*/
  declare enum CoordinateSystem {
  /\*\*
  - Coordinate system based on the artboard.
    \*/
    ARTBOARDCOORDINATESYSTEM = 1,

/\*\*

- Coordinate system based on the document.
  \*/
  DOCUMENTCOORDINATESYSTEM = 0,
  }

/\*\*

- Symbol registration-point selector.
  \*/
  declare enum SymbolRegistrationPoint {
  /\*\*
  - Bottom-left point on the symbol bounding box.
    \*/
    SYMBOLBOTTOMLEFTPOINT = 7,

/\*\*

- Bottom-middle point on the symbol bounding box.
  \*/
  SYMBOLBOTTOMMIDDLEPOINT = 8,

/\*\*

- Bottom-right point on the symbol bounding box.
  \*/
  SYMBOLBOTTOMRIGHTPOINT = 9,

/\*\*

- Center point of the symbol bounding box.
  \*/
  SYMBOLCENTERPOINT = 5,

/\*\*

- Middle-left point on the symbol bounding box.
  \*/
  SYMBOLMIDDLELEFTPOINT = 4,
