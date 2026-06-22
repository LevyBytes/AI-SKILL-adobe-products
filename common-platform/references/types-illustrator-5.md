# Illustrator (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Version of the Acrobat file format to create.
  \*/
  static compatibility: PDFCompatibility

/\*\*

- Whether line art and text be compressed.
  \*/
  static compressArt: boolean

/\*\*

- Represents password string to open the document.
  \*/
  static documentPassword: string

/\*\*

- Reference note: enable accessing 128-bit.
  \*/
  static enableAccess: boolean

/\*\*

- Reference note: enable copying of text 128-bit.
  \*/
  static enableCopy: boolean

/\*\*

- Reference note: enable copying and accessing 40-bit.
  \*/
  static enableCopyAccess: boolean

/\*\*

- Enables 128-bit plaintext metadata; Acrobat 6 only.
  \*/
  static enablePlainText: boolean

/\*\*

- Printing flattener options.
  \*/
  static flattenerOptions: PrintFlattenerOptions

/\*\*

- Transparency flattener preset name.
  \*/
  static flattenerPreset: string

/\*\*

- Subsets fonts when usage falls below this character percentage.
  \*/
  static fontSubsetThreshold: number

/\*\*

- Generates thumbnails for the saved document.
  \*/
  static generateThumbnails: boolean

/\*\*

- Compressed behavior for grayscale bitmap images.
  \*/
  static grayscaleCompression: CompressionQuality

/\*\*

- For grayscale images, zero disables downsampling; any other value is the target resolution.
  \*/
  static grayscaleDownsampling: number

/\*\*

- Downsampling begins when image resolution exceeds this value.
  \*/
  static grayscaleDownsamplingImageThreshold: number

/\*\*

- Resampled behavior for grayscale bitmap images.
  \*/
  static grayscaleDownsamplingMethod: DownsampleMethod

/\*\*

- Reference note: tile size when compressing with JPEG2000.
  \*/
  static grayscaleTileSize: number

/\*\*

- Compressed behavior for monochrome bitmap images.
  \*/
  static monochromeCompression: MonochromeCompression

/\*\*

- For images, zero disables downsampling; any other value is the target resolution.
  \*/
  static monochromeDownsampling: number

/\*\*

- Downsampling begins when image resolution exceeds this value.
  \*/
  static monochromeDownsamplingImageThreshold: number

/\*\*

- Resampled behavior for monochrome bitmap images.
  \*/
  static monochromeDownsamplingMethod: DownsampleMethod

/\*\*

- Reference note: custom offset (in points) for using the custom paper.
  \*/
  static offset: number

/\*\*

- Whether the PDF document be optimized for fast web viewing.
  \*/
  static optimization: boolean

/\*\*

- Optional PDF-file comment that, when present, records the intended printing condition.
  \*/
  static outputCondition: string

/\*\*

- When Output Intent Profile Name is selected, this sets the registered printing-condition name.
  \*/
  static outputConditionID: string

/\*\*

- With CMS enabled, the output intent profile matches the profile chosen for Destination in the Color group box.
  \*/
  static outputIntentProfile: string

/\*\*

- Reference note: pDF security printing permission.
  \*/
  static pDFAllowPrinting: PDFPrintAllowedEnum

/\*\*

- Reference note: pDF security changes allowed.
  \*/
  static pDFChangesAllowed: PDFChangesAllowedEnum

/\*\*

- PDF preset name to use; maximum string length is 255 bytes.
  \*/
  static pDFPreset: string

/\*\*

- This control offers None for cases where no PDF standard is being followed.
  \*/
  static pDFXStandard: PDFXStandard

/\*\*

- Reference note: this displays the description from the selected preset.
  \*/
  static pDFXStandardDescription: string

/\*\*

- Draws page information.
  \*/
  static pageInformation: boolean

/\*\*

- Page marks style.
  \*/
  static pageMarksType: PageMarksTypes

/\*\*

- Represents password string to restrict editing security settings.
  \*/
  static permissionPassword: string

/\*\*

- Preserves Illustrator editing capabilities when saving the document.
  \*/
  static preserveEditability: boolean

/\*\*

- Reference note: flattening printer resolution.
  \*/
  static printerResolution: number

/\*\*

- Draws registration marks.
  \*/
  static registrationMarks: boolean

/\*\*

- URL for the site registering the specified output condition; the URL is not validated.
  \*/
  static registryName: string

/\*\*

- Requires a password to open the document.
  \*/
  static requireDocumentPassword: boolean

/\*\*

- Uses a password to restrict editing security settings.
  \*/
  static requirePermissionPassword: boolean

/\*\*

- Reports whether the document already has manual trapping prepared.
  \*/
  static trapped: boolean

/\*\*

- Reference note: trim mark weight.
  \*/
  static trimMarkWeight: PDFTrimMarkWeight

/\*\*

- Draws trim marks.
  \*/
  static trimMarks: boolean

/\*\*

- Reference note: view PDF after saving.
  \*/
  static viewAfterSaving: boolean
  }

/\*\*

- Configuration accepted when saving a document as an Illustrator file..
  \*/
  declare class IllustratorSaveOptions {
  /\*\*
  - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
    \*/
    static artboardRange: string

/\*\*

- Illustrator file format version to create.
  \*/
  static compatibility: Compatibility

/\*\*

- Controls saved-file compression (version 10 or later).
  \*/
  static compressed: boolean

/\*\*

- Saved file includes the document's ICC profile (version 9 or later).
  \*/
  static embedICCProfile: boolean

/\*\*

- Controls linked-image inclusion in the saved document (versions 7 or later).
  \*/
  static embedLinkedFiles: boolean

/\*\*

- Flattening choice for transparency in older file format versions (pre-version 9).
  \*/
  static flattenOutput: OutputFlattening

/\*\*

- Subsets fonts when usage is below this character percentage (version 9 or later).
  \*/
  static fontSubsetThreshold: number

/\*\*

- Saves with PDF compatibility (version 10 or later).
  \*/
  static pdfCompatible: boolean

/\*\*

- Saves either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean
  }

/\*\*

- \*/
  declare class Matrix {
  /\*\*

  - \*/
    static mValueA: number

  /\*\*

  - \*/
    static mValueB: number

  /\*\*

  - \*/
    static mValueC: number

  /\*\*

  - \*/
    static mValueD: number

  /\*\*

  - \*/
    static mValueTX: number

  /\*\*

  - \*/
    static mValueTY: number
    }

/\*\*

- Configuration accepted when exporting a document as a JPEG file..
  \*/
  declare class ExportOptionsJPEG {
  /\*\*
  - Whether the resulting image be antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- Whether the resulting image be clipped to the artboard.
  \*/
  static artBoardClipping: boolean

/\*\*

- Reference note: blur the resulting image this much.
  \*/
  static blurAmount: number

/\*\*

- Reference note: horizontal scaling factor.
  \*/
  static horizontalScale: number

/\*\*

- Whether the artboard be matted with a color.
  \*/
  static matte: boolean

/\*\*

- Matte color for the artboard (default: white).
  \*/
  static matteColor: RGBColor

/\*\*

- Whether the image be optimized for web viewing.
  \*/
  static optimization: boolean

/\*\*

- Reference note: quality of resulting image.
  \*/
  static qualitySetting: number

/\*\*

- Whether the resulting image be saved as HTML.
  \*/
  static saveAsHTML: boolean

/\*\*

- Reference note: vertical scaling factor.
  \*/
  static verticalScale: number
  }

/\*\*

- Configuration for 8 bit PNG export from a document.
  \*/
  declare class ExportOptionsPNG8 {
  /\*\*
  - Whether the resulting image be antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- Whether the resulting image be clipped to the artboard.
  \*/
  static artBoardClipping: boolean

/\*\*

- Reference note: number of colors in exported color table.
  \*/
  static colorCount: number

/\*\*

- Reference note: method used to dither colors.
  \*/
  static colorDither: ColorDitherMethod

/\*\*

- Reference note: method used to reduce the number of colors.
  \*/
  static colorReduction: ColorReductionMethod

/\*\*

- Amount the colors are dithered.
  \*/
  static ditherPercent: number

/\*\*

- Reference note: horizontal scaling factor.
  \*/
  static horizontalScale: number

/\*\*

- Whether the resulting image be interlaced.
  \*/
  static interlaced: boolean

/\*\*

- Whether the artboard be matted with a color.
  \*/
  static matte: boolean

/\*\*

- Matte color for the artboard (default: white).
  \*/
  static matteColor: RGBColor

/\*\*

- Whether the resulting image be saved as HTML.
  \*/
  static saveAsHTML: boolean

/\*\*

- Whether the resulting image use transparency.
  \*/
  static transparency: boolean

/\*\*

- Reference note: vertical scaling factor.
  \*/
  static verticalScale: number

/\*\*

- Amount the color table are changed to match the web palette.
  \*/
  static webSnap: number
  }

/\*\*

- Configuration for 24 bit PNG export from a document.
  \*/
  declare class ExportOptionsPNG24 {
  /\*\*
  - Whether the resulting image be antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- Whether the resulting image be clipped to the artboard.
  \*/
  static artBoardClipping: boolean

/\*\*

- Reference note: dimensions in which to contain the resulting raster.
  \*/
  static dimensions: Dimensions

/\*\*

- Reference note: horizontal scaling factor.
  \*/
  static horizontalScale: number

/\*\*

- Whether the artboard be matted with a color.
  \*/
  static matte: boolean

/\*\*

- Matte color for the artboard (default: white).
  \*/
  static matteColor: RGBColor

/\*\*

- Whether the resulting image be saved as HTML.
  \*/
  static saveAsHTML: boolean

/\*\*

- Whether the resulting image use transparency.
  \*/
  static transparency: boolean

/\*\*

- Reference note: vertical scaling factor.
  \*/
  static verticalScale: number
  }

/\*\*

- Configuration accepted when exporting a document as a GIF file..
  \*/
  declare class ExportOptionsGIF {
  /\*\*
  - Whether the resulting image be antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- Whether the resulting image be clipped to the artboard.
  \*/
  static artBoardClipping: boolean

/\*\*

- Reference note: number of colors in exported color table.
  \*/
  static colorCount: number

/\*\*

- Reference note: method used to dither colors.
  \*/
  static colorDither: ColorDitherMethod

/\*\*

- Reference note: method used to reduce the number of colors.
  \*/
  static colorReduction: ColorReductionMethod

/\*\*

- Amount the colors are dithered.
  \*/
  static ditherPercent: number

/\*\*

- Reference note: horizontal scaling factor.
  \*/
  static horizontalScale: number

/\*\*

- Reference note: level of information loss during compression.
  \*/
  static infoLossPercent: number

/\*\*

- Whether the resulting image be interlaced.
  \*/
  static interlaced: boolean

/\*\*

- Whether the artboard be matted with a color.
  \*/
  static matte: boolean

/\*\*

- Matte color for the artboard (default: white).
  \*/
  static matteColor: RGBColor

/\*\*

- Whether the resulting image be saved as HTML.
  \*/
  static saveAsHTML: boolean

/\*\*

- Whether the resulting image use transparency.
  \*/
  static transparency: boolean

/\*\*

- Reference note: vertical scaling factor.
  \*/
  static verticalScale: number

/\*\*

- Amount the color table are changed to match the web pallet.
  \*/
  static webSnap: number
  }

/\*\*

- Configuration accepted when exporting a document as a Photoshop file..
  \*/
  declare class ExportOptionsPhotoshop {
  /\*\*
  - Whether the resulting image be antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
  \*/
  static artboardRange: string

/\*\*

- Exports text objects as editable text layers.
  \*/
  static editableText: boolean

/\*\*

- Embeds an ICC profile when exporting.
  \*/
  static embedICCProfile: boolean

/\*\*

- Color space of the exported file.
  \*/
  static imageColorSpace: ImageColorSpace

/\*\*

- Keeps maximum possible original document structure during export.
  \*/
  static maximumEditability: boolean

/\*\*

- Resolution of the exported file.
  \*/
  static resolution: number

/\*\*

- Exports either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean

/\*\*

- Whether export-setting conflicts show a warning dialog.
  \*/
  static warnings: boolean

/\*\*

- Preserves document layers when exporting.
  \*/
  static writeLayers: boolean
  }

/\*\*

- Configuration accepted when exporting a document as an SVG file..
  \*/
  declare class ExportOptionsSVG {
  /\*\*
  - DTD version required for the exported file.
    \*/
    static DTD: SVGDTDVersion

/\*\*

- For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
  \*/
  static artboardRange: string

/\*\*

- Whether the exported file be compressed.
  \*/
  static compressed: boolean

/\*\*

- Reference note: decimal precision for element coordinate values.
  \*/
  static coordinatePrecision: number

/\*\*

- Included in the document behavior for the CSS properties of the document.
  \*/
  static cssProperties: SVGCSSPropertyLocation

/\*\*

- Encoded behavior for the text in the document.
  \*/
  static documentEncoding: SVGDocumentEncoding

/\*\*

- Whether the raster images in the exported file be included.
  \*/
  static embedRasterImages: boolean

/\*\*

- Font glyph set included in the exported file.
  \*/
  static fontSubsetting: SVGFontSubsetting

/\*\*

- Export font-type setting.
  \*/
  static fontType: SVGFontType

/\*\*

- \*/
  static includeFileInfo: boolean

/\*\*

- \*/
  static includeUnusedStyles: boolean

/\*\*

- \*/
  static includeVariablesAndDatasets: boolean

/\*\*

- \*/
  static optimizeForSVGViewer: boolean

/\*\*

- Preserves Illustrator editing capabilities when exporting the document.
  \*/
  static preserveEditability: boolean

/\*\*

- Whether sVG auto kerning allowed.
  \*/
  static sVGAutoKerning: boolean

/\*\*

- Whether sVG text-on-path construct allowed.
  \*/
  static sVGTextOnPath: boolean

/\*\*

- Saves either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean

/\*\*

- Preserves slice data in exported document.
  \*/
  static slices: boolean
  }

/\*\*

- Configuration for Web optimized SVG export from a document.
  \*/
  declare class ExportOptionsWebOptimizedSVG {
  /\*\*
  - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
    \*/
    static artboardRange: string

/\*\*

- Reference note: decimal precision for element coordinate values.
  \*/
  static coordinatePrecision: number

/\*\*

- Included in the document behavior for the CSS properties of the document.
  \*/
  static cssProperties: SVGCSSPropertyLocation

/\*\*

- Export font-type setting.
  \*/
  static fontType: SVGFontType

/\*\*

- Whether the raster images in the exported file be included.
  \*/
  static rasterImageLocation: RasterImageLocation

/\*\*

- Saves either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean

/\*\*

- Controls exported SVG object-name (ID) generation.
  \*/
  static svgId: SVGIdType

/\*\*

- Minifies the svg output.
  \*/
  static svgMinify: boolean

/\*\*

- Enables responsive SVG output.
  \*/
  static svgResponsive: boolean
  }

/\*\*

- Configuration accepted when exporting a document as an Flash (.SWF) file..
  \*/
  declare class ExportOptionsFlash {
  /\*\*
  - Clipped during the output behavior for the arts.
    \*/
    static artClipping: ArtClippingOption

/\*\*

- For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
  \*/
  static artboardRange: string

/\*\*

- Background color.
  \*/
  static backgroundColor: RGBColor

/\*\*

- Layer list used as the static background across exported Flash frames.
  \*/
  static backgroundLayers: Layer[]

/\*\*

- Controls animation of blend art objects during export to Flash frames.
  \*/
  static blendAnimation: BlendAnimationType

/\*\*

- Whether the exported file be compressed.
  \*/
  static compressed: boolean

/\*\*

- Whether all text be converted to outlines.
  \*/
  static convertTextToOutlines: boolean

/\*\*

- Reference note: how much curve information should be preserved.
  \*/
  static curveQuality: number

/\*\*

- Whether all palette symbol definitions are exported to the SWF File.
  \*/
  static exportAllSymbols: boolean

/\*\*

- Created behavior for the Flash file.
  \*/
  static exportStyle: FlashExportStyle

/\*\*

- Version of SWF to export.
  \*/
  static exportVersion: FlashExportVersion

/\*\*

- Reference note: when exporting layers to Flash frames.
  \*/
  static frameRate: number

/\*\*

- Whether the kerning information for text objects be ignored.
  \*/
  static ignoreTextKerning: boolean

/\*\*

- Compression behavior for images in the exported Flash file.
  \*/
  static imageFormat: FlashImageFormat

/\*\*

- When true, writes minimal XMP metadata to the exported file.
  \*/
  static includeMetadata: boolean

/\*\*

- Method to use.
  \*/
  static jpegMethod: FlashJPEGMethod

/\*\*

- Reference note: level of compression.
  \*/
  static jpegQuality: number

/\*\*

- Layer order used for Flash-frame export.
  \*/
  static layerOrder: LayerOrderType

/\*\*

- Whether the Flash file be set to loop when run.
  \*/
  static looping: boolean

/\*\*

- SWF-file access mode: local or network access.
  \*/
  static playbackAccess: FlashPlaybackSecurity

/\*\*

- Chooses appearance preservation or editability (default) during export.
  \*/
  static preserveAppearance: boolean

/\*\*

- Prevents the exported file from being imported by other applications.
  \*/
  static readOnly: boolean

/\*\*

- Controls replacement of an existing file with the same name.
  \*/
  static replacing: SaveOptions

/\*\*

- Reference note: pixels per inch.
  \*/
  static resolution: number

/\*\*

- Exports either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean
  }

/\*\*

- Configuration for document export to AutoCAD formats (.dwg or .dxf).
  \*/
  declare class ExportOptionsAutoCAD {
  /\*\*
  - Alters paths for appearance.
    \*/
    static alterPathsForAppearance: boolean

/\*\*

- Reference note: number of colors to export into the AutoCAD file.
  \*/
  static colors: AutoCADColors

/\*\*

- Controls whether to convert text to outlines.
  \*/
  static convertTextToOutlines: boolean

/\*\*

- Format to export the file as.
  \*/
  static exportFileFormat: AutoCADExportFileFormat

/\*\*

- Chooses appearance preservation or editability during export.
  \*/
  static exportOption: AutoCADExportOption

/\*\*

- Exports selected art only.
  \*/
  static exportSelectedArtOnly: boolean

/\*\*

- Reference note: raster format in which to export raster art.
  \*/
  static rasterFormat: AutoCADRasterFormat

/\*\*

- Controls whether lineweights scale by the same amount as the rest of the drawing.
  \*/
  static scaleLineweights: boolean

/\*\*

- Reference note: units from which to map.
  \*/
  static unit: AutoCADUnit

/\*\*

- Reference note: ratio by which to scale the output.
  \*/
  static unitScaleRatio: number

/\*\*

- Reference note: release of AutoCAD to export to.
  \*/
  static version: AutoCADCompatibility
  }

/\*\*

- Configuration accepted when exporting a document as a TIFF file..
  \*/
  declare class ExportOptionsTIFF {
  /\*\*
  - Whether the resulting image be antialiased.
    \*/
    static antiAliasing: AntiAliasingMethod

/\*\*

- For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
  \*/
  static artboardRange: string

/\*\*

- Reference note: mac or PC byte order when exporting.
  \*/
  static byteOrder: TIFFByteOrder

/\*\*

- Embeds an ICC profile when exporting.
  \*/
  static embedICCProfile: boolean

/\*\*

- Color space of the exported file.
  \*/
  static imageColorSpace: ImageColorSpace

/\*\*

- Compresses TIFF file with LZW Compression when exporting.
  \*/
  static lZWCompression: boolean

/\*\*

- Resolution of the exported file.
  \*/
  static resolution: number

/\*\*

- Exports either all artboards or the specified artboard range.
  \*/
  static saveMultipleArtboards: boolean
  }

/\*\*

- Base class for Illustrator color values; consult the individual color classes for details.
  \*/
  declare class Color {}

/\*\*

- Lab color value specification.
  \*/
  declare class LabColor extends Color {
  /\*\*
  - a component value (between -128.0 and 127.0).
    \*/
    a: number

/\*\*

- b component value (between -128.0 and 127.0).
  \*/
  b: number

/\*\*

- L component value (between 0.0 and 100.0).
  \*/
  l: number
  }

/\*\*

- Reference note: dimensions (height and width)
  \*/
  declare class Dimensions {
  /\*\*
  - Height parameter.
    \*/
    static height: number

/\*\*

- Width parameter.
  \*/
  static width: number
  }

/\*\*

- Represents RGB color specification.
  \*/
  declare class RGBColor extends Color {
  /\*\*
  - blue component value (between 0.0 and 255.0).
    \*/
    blue: number

/\*\*

- green component value (between 0.0 and 255.0).
  \*/
  green: number

/\*\*

- red component value (between 0.0 and 255.0).
  \*/
  red: number
  }

/\*\*

- CMYK color value specification.
  \*/
  declare class CMYKColor extends Color {
  /\*\*
  - black component value (between 0.0 and 100.0).
    \*/
    black: number

/\*\*

- cyan component value (between 0.0 and 100.0).
  \*/
  cyan: number

/\*\*

- magenta component value (between 0.0 and 100.0).
  \*/
  magenta: number

/\*\*

- yellow component value (between 0.0 and 100.0).
  \*/
  yellow: number
  }

/\*\*

- Gray color value specification.
  \*/
  declare class GrayColor extends Color {
  /\*\*
  - Gray channel amount (between 0.0 and 100.0).
    \*/
    gray: number
    }

/\*\*

- NoColor sentinel value.
  \*/
  declare class NoColor extends Color {}

/\*\*

- Spot-color information.
  \*/
  declare class SpotColor extends Color {
  /\*\*
  - \*/
    spot: Spot

/\*\*

- Tint percentage applied to the spot color.
  \*/
  tint: number
  }

/\*\*

- Pattern color value specification.
  \*/
  declare class PatternColor extends Color {
  /\*\*
  - Extra transformation produced by path manipulation.
    \*/
    matrix: Matrix

/\*\*

- \*/
  pattern: Pattern

/\*\*

- Whether the prototype is reflected before filling.
  \*/
  reflect: boolean

/\*\*

- Axis around which to reflect.
  \*/
  reflectAngle: number

/\*\*

- Angle to rotate the before filling.
  \*/
  rotation: number

/\*\*

- Fraction to scale the prototype before filling.
  \*/
  scaleFactor: Point | [number, number]

/\*\*

- Angle to slant the shear by.
  \*/
  shearAngle: number

/\*\*

- Axis to shear with respect to.
  \*/
  shearAxis: number

/\*\*

- Angle to translate the (unscaled) prototype before filling.
  \*/
  shiftAngle: number

/\*\*

- Distance to translate the (unscaled) prototype before filling.
  \*/
  shiftDistance: number
  }

/\*\*

- Gradient color value specification.
  \*/
  declare class GradientColor extends Color {
  /\*\*
  - Gradient vector angle.
    \*/
    angle: number

/\*\*

- Reference note: reference to the object defining the gradient.
  \*/
  gradient: Gradient

/\*\*

- Gradient hilite vector angle.
  \*/
  hiliteAngle: number

/\*\*

- Gradient hilite vector length.
  \*/
  hiliteLength: number

/\*\*

- Gradient vector length.
  \*/
  length: number

/\*\*

- Extra transformation produced by path manipulation.
  \*/
  matrix: Matrix

/\*\*

- Gradient vector origin.
  \*/
  origin: Point | [number, number]
  }

/\*\*

- Tab-stop data returned from paragraph-object tab stops.
  \*/
  declare class TabStopInfo {
  /\*\*
  - Alignment of the tab stop.
    \*/
    static alignment: TabStopAlignment

/\*\*

- Character used for decimal tab stops.
  \*/
  static decimalCharacter: string

/\*\*

- Leader dot.
  \*/
  static leader: string
